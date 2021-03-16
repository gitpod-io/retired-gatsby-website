import React, { useCallback, useRef } from 'react'
import styled from '@emotion/styled'
import { data } from './_console-data'

function sleep(duration: number) {
  return new Promise<void>((resolve) => {
    const start = performance.now()

    requestAnimationFrame(tick)

    function tick(now: number) {
      if (now - start >= duration) {
        resolve()
      } else {
        requestAnimationFrame(tick)
      }
    }
  })
}

const scrollPadding = 60

const StyledGitpodConsole = styled.div`
  font-family: 'SF Mono';
  font-size: 18px;
  line-height: 1.89;
  letter-spacing: -0.009em;
  color: rgba(18, 16, 12, 0.7);
  position: relative;
  display: block;
  overflow-x: hidden;
  overflow-y: auto;
  width: 544px;
  height: 560px;
  background: linear-gradient(256.32deg, #fdfdfd 1.45%, #f8f8f8 89.31%);
  box-shadow: 0px 11px 39px #ffca64, 0px 17px 49px rgba(0, 0, 0, 0.1);
  border-radius: 40px;
  padding: 0 ${scrollPadding}px ${scrollPadding}px;
  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
  .buffer {
    display: flex;
    flex-direction: column;
  }
  .titlebar {
    z-index: 1;
    position: sticky;
    top: 0;
    margin-left: -${scrollPadding}px;
    margin-right: -${scrollPadding}px;
    height: 72px;
    background: rgba(249, 249, 249, 0.9);
    backdrop-filter: blur(10px);
  }
  .titlebar::before {
    content: '';
    display: block;
    width: 18px;
    height: 18px;
    position: absolute;
    top: 30px;
    left: 30px;
    border-radius: 50%;
    background: #e7e7e7;
  }
  .orange {
    color: #fc8800;
  }
  .green {
    color: #57c700;
  }
  .line-input-prompt {
    color: #454545;
  }
  @keyframes blinking-cursor {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  .line-input-cursor {
    display: inline-block;
    vertical-align: text-top;
    width: 12px;
    height: 21px;
    background-color: #12100c;
  }
  .line-input-cursor.idle {
    animation-name: blinking-cursor;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }
`

let _prompt_template: HTMLTemplateElement | null
let _shell_template: HTMLTemplateElement | null
let _output_template: HTMLTemplateElement | null

function makePromptLine(user: string, dir: string) {
  if (!_prompt_template) {
    _prompt_template = document.createElement('template')
    _prompt_template.innerHTML = `
        <span><span class="orange" data-js-id="user"></span> <span class="green" data-js-id="dir"></span> <span class="line-input-prompt">$</span> <span data-js-id="command"></span><span class="line-input-cursor" data-js-id="cursor"></span></span>
    `
  }

  const element = _prompt_template.content.cloneNode(true) as HTMLSpanElement

  element.querySelector<HTMLSpanElement>('[data-js-id="user"]')!.innerHTML = user
  element.querySelector<HTMLSpanElement>('[data-js-id="dir"]')!.innerHTML = dir

  const cursorElement = element.querySelector<HTMLSpanElement>('[data-js-id="cursor"]')!
  const commandElement = element.querySelector<HTMLSpanElement>('[data-js-id="command"]')!

  return { element, commandElement, cursorElement }
}

function makeShellLine(dir: string) {
  if (!_shell_template) {
    _shell_template = document.createElement('template')
    _shell_template.innerHTML = `
        <span><span class="green" data-js-id="dir"></span><span>&gt; </span><span class="line-input-cursor idle" data-js-id="cursor"></span></span>
    `
  }

  const element = _shell_template.content.cloneNode(true) as HTMLSpanElement

  element.querySelector<HTMLSpanElement>('[data-js-id="dir"]')!.innerHTML = dir

  const cursor = element.querySelector<HTMLSpanElement>('[data-js-id="cursor"]')!

  return { element, cursor }
}

function makeOutputLine(line: string) {
  if (!_output_template) {
    _output_template = document.createElement('template')
    _output_template.innerHTML = `
        <span data-js-id="line"></span>
    `
  }

  const element = _output_template.content.cloneNode(true) as HTMLSpanElement

  element.querySelector('[data-js-id="line"]')!.innerHTML = line

  return { element }
}

const GitpodConsole: React.FunctionComponent<{ data: string }> = (props) => {
  const wrapperRef = React.useRef<HTMLDivElement>(null)
  const bufferRef = React.useRef<HTMLSpanElement>(null)

  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)

        if (wrapperRef.current) {
          observer.unobserve(wrapperRef.current)
        }
      }
    })

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  const shouldAutoScrollRef = useRef(true)

  const cancelAutoScroll = useCallback(() => {
    shouldAutoScrollRef.current = false
  }, [])

  React.useEffect(() => {
    if (!visible) {
      return
    }

    let unmounted = false

    function autoScroll() {
      if (shouldAutoScrollRef.current) {
        if (wrapperRef.current) {
          wrapperRef.current.scrollTo(0, wrapperRef.current.scrollHeight - wrapperRef.current.clientHeight)
        }
      }
    }

    let currentlyActiveCursor: HTMLSpanElement | null = null

    let lines = props.data.split('\n')
    let line

    function update() {
      if (unmounted || !bufferRef.current) {
        return
      }

      line = lines.shift()

      if (line === undefined) {
        return
      }

      if (currentlyActiveCursor) {
        currentlyActiveCursor.remove()
        currentlyActiveCursor = null
      }

      if (line.indexOf('$') !== -1) {
        const [user_dir, command] = line.split('$')
        const [user, dir] = user_dir.split(/\s+/)

        const { element, commandElement, cursorElement } = makePromptLine(user, dir)

        currentlyActiveCursor = cursorElement
        bufferRef.current.appendChild(element)

        autoScroll()

        let index = 0

        function next() {
          commandElement.textContent = command.slice(0, index++)

          if (index >= command.length) {
            sleep(1).then(() => {
              cursorElement.classList.add('idle')
              update()
            })
          } else {
            sleep(30).then(() => {
              next()
            })
          }
        }

        next()
      } else if (line.indexOf('>') !== -1) {
        const [dir] = line.split('>')
        const { element, cursor } = makeShellLine(dir)

        currentlyActiveCursor = cursor
        bufferRef.current.appendChild(element)

        autoScroll()

        sleep(1).then(() => {
          update()
        })
      } else {
        const { element } = makeOutputLine(
          (line || ' ').replace(/installing|blocking|updating|downloading|downloaded|compiling|/gi, '<span class="orange">$&</span>')
        )

        bufferRef.current.appendChild(element)

        autoScroll()

        sleep(1).then(() => {
          update()
        })
      }
    }

    requestAnimationFrame(update)

    return () => {
      unmounted = true
    }
  }, [visible])

  return (
    <StyledGitpodConsole ref={wrapperRef} onWheel={cancelAutoScroll} onTouchStart={cancelAutoScroll}>
      <div className="titlebar"></div>
      <code>
        <pre>
          <span ref={bufferRef} className="buffer" dangerouslySetInnerHTML={{ __html: '' }} />
        </pre>
      </code>
    </StyledGitpodConsole>
  )
}

const AnimationsPage: React.FunctionComponent<{}> = () => (
  <>
    <GitpodConsole data={data} />
  </>
)

export default AnimationsPage

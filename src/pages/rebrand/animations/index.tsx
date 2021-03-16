import React, { useCallback, useRef } from 'react'
import styled from '@emotion/styled'
import { data } from './_console-data'
import { crelt } from './_crelt'
import { sleep } from './_sleep'
import { useIntersection } from './_use-intersection'

const scrollPadding = 60

const StyledGitpodConsole = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  font-family: 'SF Mono';
  font-size: 16px;
  line-height: 1.8;
  letter-spacing: -0.009em;
  color: rgba(18, 16, 12, 0.7);
  width: 544px;
  height: 560px;
  background: linear-gradient(256.32deg, #fdfdfd 1.45%, #f8f8f8 89.31%);
  box-shadow: 0px 11px 39px #ffca64, 0px 17px 49px rgba(0, 0, 0, 0.1);
  border-radius: 40px;
  .scroll-container {
    box-sizing: border-box;
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
    width: 100%;
    height: 100%;
    padding: 0 ${scrollPadding}px ${scrollPadding}px;
  }
  .scroll-container::-webkit-scrollbar {
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
  .line-input-user,
  .orange {
    color: #fc8800;
  }
  .line-input-dir,
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

const GitpodConsole: React.FunctionComponent<{ data: string }> = (props) => {
  const [wrapperRef, visible] = useIntersection({ rootMargin: '0%' })
  const scrollContainerRef = React.useRef<HTMLDivElement>(null)
  const bufferRef = React.useRef<HTMLSpanElement>(null)

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
        const scrollContainer = scrollContainerRef.current
        if (scrollContainer) {
          scrollContainer.scrollTo(0, scrollContainer.scrollHeight - scrollContainer.clientHeight)
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

        const $command = crelt('span', '')
        const $cursor = crelt('span', { class: 'line-input-cursor' })
        const $line = crelt(
          'span',
          crelt('span', { class: 'orange' }, `${user} `),
          crelt('span', { class: 'green' }, `${dir} `),
          crelt('span', { class: 'line-input-prompt' }, '$'),
          $command,
          $cursor
        )

        currentlyActiveCursor = $cursor
        bufferRef.current.appendChild($line)
        autoScroll()

        let index = 0

        function next() {
          $command.textContent = command.slice(0, index++)

          if (index >= command.length) {
            sleep(10).then(() => {
              $cursor.classList.add('idle')
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

        const $cursor = crelt('span', { class: 'line-input-cursor idle' })
        const $line = crelt('span', crelt('span', { class: 'green' }, `${dir} `), crelt('span', '> '), $cursor)

        currentlyActiveCursor = $cursor
        bufferRef.current.append($line)
        autoScroll()

        sleep(10).then(() => {
          update()
        })
      } else {
        const $line = crelt('span')
        $line.innerHTML = (line || ' ').replace(
          /installing|blocking|updating|downloading|downloaded|compiling|/gi,
          '<span class="orange">$&</span>'
        )

        bufferRef.current.append($line)
        autoScroll()

        sleep(10).then(() => {
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
      <div className="scroll-container" ref={scrollContainerRef}>
        <div className="titlebar"></div>
        <code>
          <pre>
            <span ref={bufferRef} className="buffer" dangerouslySetInnerHTML={{ __html: '' }} />
          </pre>
        </code>
      </div>
    </StyledGitpodConsole>
  )
}

const AnimationsPage: React.FunctionComponent<{}> = () => (
  <>
    <GitpodConsole data={data} />
  </>
)

export default AnimationsPage

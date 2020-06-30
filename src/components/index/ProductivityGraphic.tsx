import React, { useRef, useState, useEffect } from 'react'

import styled from '@emotion/styled'
import ProductivityImage from '../../resources/productivity-bar.png'
import { colors, sizes } from '../../styles/variables'

const StyledProductivityGraphic = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 36rem;
    padding: 0 5rem;
    border-bottom: 3px solid ${colors.offWhite2};

    @media(max-width: 500px) {
        padding: 0 3rem;
    }

    .bar-container {
        position: relative;

        span {
            position: absolute;
            display: block;
            text-align: center;
            width: 100%;
            margin-top: 2.5rem;
            font-size: 1.9rem;
            line-height: 1.1;

            @media(max-width: 500px) {
                font-size: 1.7rem;
            }
        }

        p {
            text-align: center;
            font-size: ${sizes.font.h2};
            color: ${colors.textDark};
            margin-bottom: 2rem;
        }
    }

    .bar {
        position: relative;
        width: 14rem;
        height: 28rem;
        background: ${colors.offWhite2};

        @media(max-width: 500px) {
            width: 12rem;
            height: 26rem;
        }

        @media(max-width: 320px) {
            width: 9rem;
            height: 22rem;
        }

        &--2 {
            height: 36rem;
            border-top-left-radius: 3px;
            border-top-right-radius: 3px;
            overflow: hidden;

            @media(max-width: 500px) {
                height: 34rem;
            }

            @media(max-width: 320px) {
                height: 28rem;
            }

            &::before {
                content: '';
                position: absolute;
                top: 100%;
                display: block;
                height: 100%;
                width: 100%;
                background: url(${ProductivityImage});
                background-size: cover;
                background-position: center;
                transition: all 2s;
            }
        }
    }

    .in-view {
        &::before {
            top: 0;
        }
    }
`

const ProductivityGraphic = () => {
    const barContainerRef = useRef<HTMLDivElement>(null)
    const percentRef = useRef<HTMLElement>(null)
    const [classList, setClassList] = useState<string>('')
    const [stop, setStop] = useState<boolean>(false)

    const isInView = () => {
        if (barContainerRef.current) {
            const rect = barContainerRef.current.getBoundingClientRect()
            return rect.top >= 0 && rect.bottom <= window.innerHeight
        }
        return false
    }

    const addInViewClass = () => {
        if(isInView()) {
            setClassList(`in-view`)
        }
    }

    const changePercent = () => {
        if(isInView()) {
            let percent = 0

            const t = setInterval(() => {
                percent = percent + 1
                if(!stop) {
                    // @ts-ignore
                    percentRef.current.textContent = percent
                }
                if(percent === 24) {
                    setStop(true)
                    clearInterval(t)
                }
            }, 40)
        }
    }

    const scrollHandler = () => {
        addInViewClass()
        changePercent()
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler)
        addInViewClass()
        changePercent()
        return (() => {
            window.removeEventListener('scroll', scrollHandler)
        })
    })

    return (
        <StyledProductivityGraphic>
            <div className="bar-container">
                <div className="bar bar--1">
                </div>
                <span>Local Dev Enviroments</span>
            </div>
            <div className="bar-container" ref={barContainerRef}>
                <p><strong ref={percentRef}>100</strong>%</p>
                <div className={`bar bar--2 ${classList}`}>
                </div>
                <span>Gitpod</span>
            </div>
        </StyledProductivityGraphic>
    )
}

export default ProductivityGraphic

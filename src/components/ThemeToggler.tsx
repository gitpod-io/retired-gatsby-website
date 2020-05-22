import React from 'react'

import styled from '@emotion/styled'
import SunIcon from '../resources/sun-icon.svg'
import MoonIcon from '../resources/moon-icon.svg'
// @ts-ignore
import { ThemeToggler as Toggler } from 'gatsby-plugin-dark-mode'

const StyledThemeToggler = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 3rem;

    label {
        display: flex;
        align-items: centerl
    }

    span {
        position: relative;
        display: inline-block;
        height: 2.8rem;
        width: 5.5rem;
        margin: 0 1rem;
        border: 1px solid var(--textLight);
        border-radius: 5rem;
    }

    span::before {
        content: "";
        position: absolute;
        display: block;
        top: -.1rem;
        left: -.2rem;
        height: 2.8rem;
        width: 2.8rem;
        background: var(--lightBlue);
        border-radius: 50%;
        transition: .3s;
    }

    input:checked + span::before {
        transform: translateX(3rem);
    }
`

const ThemeToggler = ({setTheme}: {setTheme: (theme: string) => void}) => {
    return (
        <Toggler>
            {({ theme, toggleTheme }: { theme: string, toggleTheme: (checked: 'dark' | 'light') => void }) => (
                <StyledThemeToggler>
                    <label>
                        <img src={SunIcon} alt="Sun Icon"/>
                        <input
                            className="visually-hidden theme-toggle"
                            type="checkbox"
                            onChange={e => {
                                const theme = e.target.checked ? 'dark' : 'light'
                                toggleTheme(theme)
                                setTheme(theme)
                            }}
                            checked={theme === 'dark'}
                        />{' '}
                        <span aria-hidden={true}></span>
                        <img src={MoonIcon} alt="Moon Icon" />
                    </label>
                </StyledThemeToggler>
            )}
        </Toggler>
    )
}

export default ThemeToggler

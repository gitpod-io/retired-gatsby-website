import React from 'react'

// @ts-ignore
import  { ThemeToggler as Toggler } from 'gatsby-plugin-dark-mode'

const ThemeToggler = () => {
    return (
      <Toggler>
        {({ theme, toggleTheme }: {theme :string, toggleTheme: (checked: 'dark' | 'light') => void}) => (
          <label>
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            Dark mode
          </label>
        )}
      </Toggler>
    )
}

export default ThemeToggler

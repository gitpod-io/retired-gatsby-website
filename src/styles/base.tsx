import { Global, css } from '@emotion/core'

export const BaseStyles = () => (
    <Global 
        styles={css`
            /* -------------------------------------- */
            /* --- Base Setup --- */
            /* -------------------------------------- */

            :root {
                --font: 'ABCDiatype', sans-serif;
            }

            html {
                font-size: 62.5%;
            }

            body {
                font-family: var(--font);
                color: red;
            }

        `}
    />
)

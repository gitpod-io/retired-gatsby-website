import { sizes, colors } from "./variables";

export default `
    /* ------------------------------------------- */
    /* ----- Basic Setup ----- */
    /* ------------------------------------------- */

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;

    }

    html {
        font-size: 62.5%; // 10 / 16 = 0.625 * 100 = 62.5 = 10px
    }

    body {
        font: 400 ${sizes.font.text}/1.6 'Open Sans', sans-serif;
        color: ${colors.text};
        background: ${colors.white};
        box-sizing: border-box;
    }

    .row {
        max-width: ${sizes.grid.maxWidth};
        margin: 0 auto;
    }

    /* ------------------------------------------- */
    /* ----- Links & Buttons ----- */
    /* ------------------------------------------- */

    a {
        color: ${colors.link};
    }
`

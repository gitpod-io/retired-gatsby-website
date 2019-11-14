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
        width: 100%;
        margin: 0 auto;
    }

    /* ------------------------------------------- */
    /* ----- Links & Buttons ----- */
    /* ------------------------------------------- */

    a {
        color: ${colors.link};
        text-decoration: none;
    }

    .btn {
        display: inline-block;
        padding: 1rem 2.5rem;
        border: 1px solid;
        border-radius: 100px;
        transition: all .2s;

        &--cta {
            color: ${colors.white};
            background: ${colors.link};
            border-color: ${colors.link};
        }

        &:hover,
        &:focus {
            box-shadow: 0 0 1px 6px #0087BE4A;
        }
    }

    /* ------------------------------------------- */
    /* ----- Lists ----- */
    /* ------------------------------------------- */

    ul {
        list-style: none;
    }

    /* ------------------------------------------- */
    /* ----- Images ----- */
    /* ------------------------------------------- */

    img {
        object-fit: contain;
    }
`

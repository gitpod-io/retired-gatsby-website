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
        overflow-x: hidden;
    }

    .row {
        max-width: ${sizes.grid.maxWidth};
        width: 100%;
        margin: 0 auto;
    }

    /* ------------------------------------------- */
    /* ----- Headings ----- */
    /* ------------------------------------------- */

    h1,
    h2,
    h3,
    h4 {
        font-family: 'Montserrat', sans-serif;
        line-height: 1.4;
    }

    h1,
    h2,
    h3 {
        font-weight: 400;
    }

    h4 {
        font-weight: 600;
    }

    h1,
    h3,
    h4 {
        color: ${colors.textDark};
    }

    h2 {
        color: ${colors.textLight};
    }

    h1 {
        font-size: ${sizes.font.h1};
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
        color: ${colors.textDark};
        border: 1px solid;
        border-radius: 100px;
        transition: all .2s;

        &--normal {
            font-size: ${sizes.font.btnNormal};
            padding: 1.2rem 3.5rem;
        }

        &--cta {
            color: ${colors.white};
            background: ${colors.link};
            border-color: ${colors.link};

            &:hover,
            &:focus {
                box-shadow: 0 0 1px 6px #0087BE4A;
            }
        }

        & + & {
            @media(min-width: ${sizes.breakpoints.sm}) {
                margin-left: 3rem;
            }
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

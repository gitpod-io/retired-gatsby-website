import { sizes, colors, shadows } from "./variables";

export default `
    /* ------------------------------------------- */
    /* ----- Basic Setup ----- */
    /* ------------------------------------------- */

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        font-size: 62.5%; // 10 / 16 = 0.625 * 100 = 62.5 = 10px

        @media(max-width: ${sizes.breakpoints.md}) {
            font-size: 56.5%;
        }

        @media(max-width: ${sizes.breakpoints.md}) {
            font-size: 54.5%;
        }
    }

    body {
        font: 400 ${sizes.font.text}/1.6 'Montserrat', sans-serif;
        color: ${colors.text};
        background: ${colors.white};
        box-sizing: border-box;
        overflow-x: hidden;
    }

    section {
        padding: 10rem 0;
    }

    /* ------------------------------------------- */
    /* ----- Reusable Classes ----- */
    /* ------------------------------------------- */

    .row {
        max-width: ${sizes.grid.maxWidth};
        width: 100%;
        margin: 0 auto;

        @media(max-width: ${sizes.breakpoints.lg}) {
            padding: 0 2rem;
        }

        @media(max-width: ${sizes.breakpoints.sm}) {
            width: 95%;
        }
    }

    /* ------------------------------------------- */
    /* ----- Headings & Paragraphs----- */
    /* ------------------------------------------- */

    h1,
    h2,
    h3,
    h4 {
        font-family: 'Montserrat', sans-serif;
        line-height: 1.4;
    }

    h1,
    h2 {
        font-weight: 400;
    }

    h3,
    h4 {
        font-weight: 600;
    }

    h1,
    h2,
    h3,
    h4 {
        color: ${colors.textDark};
    }

    h1 {
        font-size: ${sizes.font.h1};

        @media(max-width: ${sizes.breakpoints.md}) {
            font-size: 3rem;
        }
    }

    h2 {
        font-size: ${sizes.font.h2};
        margin-bottom: 6rem;

        @media(max-width: ${sizes.breakpoints.md}) {
            font-size: 2.6rem;
            margin-bottom: 4rem;
        }
    }

    h3 {
        font-size: ${sizes.font.h3};
        margin-bottom: 2.8rem;

        @media(max-width: ${sizes.breakpoints.md}) {
            font-size: 2rem;
            margin-bottom: 2rem;
        }
    }

    p + p {
        margin-top: 2rem;
    }

    /* ------------------------------------------- */
    /* ----- Links & Buttons ----- */
    /* ------------------------------------------- */

    button {
        font-family: inherit;
    }

    a {
        font-weight: 600;
        color: ${colors.link};
        text-decoration: none;
    }

    .btn {
        display: inline-block;
        padding: .8rem 2.2rem;
        font-weight: 400;
        color: ${colors.textDark};
        border: 1px solid;
        border-radius: 100px;
        transition: all .2s;

        &--normal {
            font-size: ${sizes.font.btnNormal};
            padding: 1rem 3rem;
        }

        &--cta {
            color: ${colors.white};
            background: ${colors.link};
            border-color: ${colors.link};

            &:hover,
            &:focus {
                box-shadow: ${shadows.btnCta};
            }
        }

        & + & {
            @media(min-width: ${sizes.breakpoints.sm}) {
                margin-left: 2.5rem;
            }
        }
    }

    .toggle {
        display: inline-block;
        padding: 1rem 3rem;
        font-weight: 600;
        color: ${colors.white};
        background: ${colors.offWhite2};
        border: none;

        &--active {
            background: ${colors.link};
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

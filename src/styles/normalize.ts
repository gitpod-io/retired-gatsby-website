import { sizes, colors, shadows, borders } from "./variables";

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
            padding: 0 .5rem;
        }
    }

    .grey-container {
        background: ${colors.offWhite};
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

        & + p {
            margin: -3rem 0 5rem;
        }
    }

    h3 {
        font-size: ${sizes.font.h3};
        margin-bottom: 2.8rem;

        @media(max-width: ${sizes.breakpoints.md}) {
            font-size: 2rem;
            margin-bottom: 2rem;
        }

        &.sub {
            font-weight: 400;
            color: ${colors.textLight};
            margin-bottom: 1.5rem;
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
        white-space: nowrap;

        &--normal {
            font-size: ${sizes.font.btnNormal};
            padding: 1rem 3rem;
        }

        &--big {
            padding: 1.5rem 4rem;
            font-size: ${sizes.font.h4};
            font-weight: 600;
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

            @media(max-width: ${sizes.breakpoints.sm}) {
                &:not(:first-child) {
                    margin-top: 2.5rem;
                }
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

        @media(max-width: 500px) {
            font-size: 1.4rem;
            padding: .5rem 1rem;
        }

        &--active {
            background: ${colors.link};
        }
    }

    /* ------------------------------------------- */
    /* ----- Inputs ----- */
    /* ------------------------------------------- */

    input {
        font-family: inherit;
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

    /* ------------------------------------------- */
    /* ----- Tables ----- */
    /* ------------------------------------------- */

    .table-container {
        overflow-x: scroll;
        padding-bottom: 2rem;
    }

    table {
        border: 1px solid ${borders.light};
        border-collapse: collapse;
        letter-spacing: 1px;
        margin: 0 auto;
        font-size: 1.5rem;
        width: 100%;
        min-width: 60rem;
    }

    td, th {
        border: ${borders.light};
        padding: 10px 20px;
    }

    th {
        background: ${colors.offWhite};
        font-weight: 400;
        text-align: left;
    }

    td {
        text-align: center;
    }

`

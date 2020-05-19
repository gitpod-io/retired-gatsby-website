import { sizes, colors, borders } from "./variables";
import DownArrow from '../resources/arrow-down.svg';

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

    *::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: var(--textLight);
        opacity: 1; /* Firefox */
    }

    html {
        font-size: 59.5%; // 10 / 16 = 0.625 * 100 = 62.5 = 10px

        @media(max-width: ${sizes.breakpoints.md}) {
            font-size: 56.5%;
        }

        @media(max-width: ${sizes.breakpoints.md}) {
            font-size: 54.5%;
        }
    }

    body {
        --textDark: #292929;
        --textLight: #8F8F8F;
        --text: #4D4D4D;
        --link: #0087BE;
        --lightBlue: #1AA6E4;
        --white: #FFFFFF;
        --offWhite0: #fcfcfc;
        --offWhite: #F7F7F7;
        --offWhite1: #BCBCBC;
        --offWhite2: #e5e5e5;
        --offWhite3: #dbdbdb;
        --outline: #9ED3FF;
    }

    body.dark {
        --textDark: #f4f4f4;
        --textLight: #ddd;
        --offWhite: #333;
        --offWhite2: #393939;
        --text: #ccc;
        --white: #222;
        --outline: #1AA6E4;
    }

    body {
        font: 400 ${sizes.font.text}/1.6 'Montserrat', sans-serif;
        color: var(--text);
        background: var(--white);
        box-sizing: border-box;
        overflow-x: hidden;
    }

    section {
        padding: 10rem 0;

        @media(max-width: ${sizes.breakpoints.md}) {
            padding: 5rem 0;
        }
    }

    /* ------------------------------------------- */
    /* ----- Reusable Classes ----- */
    /* ------------------------------------------- */

    .row {
        max-width: ${sizes.grid.maxWidth};
        width: 100%;
        margin: 0 auto;

        @media(max-width: ${sizes.breakpoints.lg}) {
            padding: 0 7rem;
        }

        @media(max-width: ${sizes.breakpoints.md}) {
            padding: 0 4rem;
        }

        @media(max-width: ${sizes.breakpoints.sm}) {
            padding: 0 1rem;
        }
    }

    .grey-container {
        background: var(--offWhite);
    }

    .text-with-galaxy-bg {
        color: transparent;
        font-weight: 600;
        background: url('/galaxy.jpg');
        background-position: bottom;
        background-clip: text;
        -webkit-background-clip: text;
    }

    /* ------------------------------------------- */
    /* ----- Headings & Paragraphs----- */
    /* ------------------------------------------- */

    h1,
    h2,
    h3,
    h4 {
        font-family: 'Montserrat', sans-serif;
        line-height: 1.2;
        color: ${colors.textDark};
    }

    h1,
    h2 {
        font-weight: 400;
        line-height: 1.4;
    }

    h3,
    h4 {
        font-weight: 600;
    }

    h1,
    h2,
    h3,
    h4 {
        color: var(--textDark);
    }

    h1 {
        font-size: ${sizes.font.h1};

        @media(max-width: ${sizes.breakpoints.md}) {
            font-size: 3rem;
        }
    }

    h2 {
        font-size: ${sizes.font.h2};
        margin-bottom: 4rem;

        @media(max-width: ${sizes.breakpoints.md}) {
            font-size: 2.6rem;
            margin-bottom: 3rem;
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

        @media(max-width: ${sizes.breakpoints.sm}) {
            font-size: 1.8rem;
        }

        &.sub {
            font-weight: 400;
            color: var(--textLight);
            margin-bottom: 1.5rem;
        }
    }

    p + p {
        margin-top: 2rem;
    }

    /* ------------------------------------------- */
    /* ----- Links & Buttons ----- */
    /* ------------------------------------------- */

    button:focus,
    input:focus,
    select:focus,
    textarea:focus,
    a:focus {
        outline: 2px solid var(--outline);
    }

    body:not(.user-is-tabbing) button:focus,
    body:not(.user-is-tabbing) input:focus,
    body:not(.user-is-tabbing) select:focus,
    body:not(.user-is-tabbing) textarea:focus,
    body:not(.user-is-tabbing) a:focus {
        outline: none;
    }

    button {
        font-family: inherit;
        outline: none;
        font-size: inherit;
        background: none;
        color: var(--text);
    }

    a {
        font-weight: 600;
        color: ${colors.link};
        text-decoration: none;

        &:hover {
            color: ${colors.lightBlue};
        }
    }

    button, a {
        &::-moz-focus-inner {
            border: 0;
        }
    }

    .btn {
        display: inline-block;
        min-width: 14.5rem;
        padding: .8rem 2.2rem;
        font-weight: 600;
        text-align: center;
        color: var(--textDark);
        background: var(--white);
        border: 2px solid var(--text);
        border-radius: 100px;
        transition: all .2s;
        white-space: nowrap;

        &:hover,
        &:focus {
            color: #fff;
            background: ${colors.lightBlue};
            border: 2px solid ${colors.lightBlue};
        }

        &--big {
            padding: 1.5rem 4rem;
            font-size: ${sizes.font.h4};
            font-weight: 600;
        }

        &--cta {
            color: #fff;
            background: ${colors.link};
            border-color: ${colors.link};

            &:hover {
                color: #fff;
                background: ${colors.lightBlue};
                border: 2px solid ${colors.lightBlue};
            }

            &:focus {
                color: var(--white);
            }
        }

        &-wrapper {
            .btn {
                &:first-of-type {
                    margin-right: 2.5rem;

                    @media(max-width: 414px) {
                        margin-right: 0;
                        margin-bottom: 2rem;
                    }
                } 
            }

            br {
                display: none;

                @media(max-width: 414px) {
                    display: block !important;
                }
            }
        }
    }

    .link {
        position: relative;
        color: var(--text);
        padding-bottom: .8rem;
        font-weight: 400;

        &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            right: 100%;
            border-bottom: 2px solid var(--white);
            transition: all .4s cubic-bezier(0,.5,0, 1);
        }

        &:hover {

            svg {
                fill: ${colors.lightBlue};
            }

            &::after {
                right: 0;
                border-color: ${colors.lightBlue};
            }
        }
    }

    .active {
        color: ${colors.lightBlue};

        &::after {
            right: 0;
            border-color: ${colors.lightBlue};
        }
    }

    /* ------------------------------------------- */
    /* ----- Inputs ----- */
    /* ------------------------------------------- */

    input,
    select,
    textarea {
        font-family: inherit;
        font-size: inherit;
    }

    select {
        display: block;
        padding: 1rem 6rem 1rem 2rem;
        background: #fff;
        border: 1px solid #ddd;
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        background-image: url(${DownArrow}),
        linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
        background-repeat: no-repeat, repeat;
        background-position: right 1em top 50%, 0 0;
        background-size: 1.65em auto, 100%;
    }

    body.user-is-tabbing .theme-toggle:focus + span {
        border: 1px solid ${colors.lightBlue};
        animation: pulse 1s infinite;
        animation-direction: alternate;
    }

    @keyframes pulse {
        0% {
            transform: scale(.9);
        }

        100% {
            transform: scale(1.02);
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

    /* ------------------------------------------- */
    /* ----- Tables ----- */
    /* ------------------------------------------- */

    .table-container {
        max-width: 100%;
        padding-bottom: 2rem;

        @media(max-width: 687px) {
            overflow-x: scroll;
        }
    }

    .rows-3 {
        overflow-x: initial;
        
        @media(max-width: 604px) {
            overflow-x: scroll;
        }
    }

    table {
        border: 1px solid ${borders.light};
        border-collapse: collapse;
        letter-spacing: 1px;
        margin: 0 auto;
        font-size: 1.5rem;
        width: 100%;
        min-width: 60rem;

        @media(max-width: ${sizes.breakpoints.md}) {
            font-size: 1.4rem;
        }

        @media(max-width: ${sizes.breakpoints.sm}) {
            font-size: 1.2rem;
        }
    }

    td, th {
        border: ${borders.light};
        padding: 10px 20px;

        @media(max-width: ${sizes.breakpoints.md}) {
            padding: 5px 10px;
        }

        @media(max-width: ${sizes.breakpoints.sm}) {
            padding: 3px 10px;
        }
    }

    th {
        background: var(--offWhite);
        font-weight: 400;
        text-align: left;
    }

    td {
        text-align: center;
    }

    /* ------------------------------------------- */
    /* ----- Others ----- */
    /* ------------------------------------------- */

    .consent {
        @media(max-width: ${sizes.breakpoints.md}) {
            font-size: 95% !important;
        }

        @media(max-width: ${sizes.breakpoints.sm}) {
            font-size: 90% !important;
        }

        br {
            display: none;

            @media(max-width: ${sizes.breakpoints.sm}) {
                display: initial;
            }

        }
    }

    /* --------------------------------------------- */
    /* ----- Utils ----- */
    /* --------------------------------------------- */

    .visually-hidden {
        position: absolute;
        left: -100000rem;
        top: auto;
        width: 1px;
        height: 1px;
        overflow: hidden;
    }

`

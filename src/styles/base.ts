import { sizes, colors, borders } from './variables'
import DownArrow from '../resources/arrow-down.svg'
import Pattern from '../resources/pattern.png'

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
        color: ${colors.textLight};
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
        font: 400 ${sizes.font.text}/1.6 'Montserrat', sans-serif;
        color: ${colors.text};
        background: ${colors.white};
        box-sizing: border-box;
        overflow-x: hidden;
    }

    section {
        padding: 12rem 0;

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
            padding: 0 3rem;
        }

        @media(max-width: ${sizes.breakpoints.sm}) {
            padding: 0 1rem;
        }
    }

    .grey-container {
        background: ${colors.offWhite};
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
    .h1,
    h2,
    .h2,
    h3,
    .h3,
    h4,
    .h4 {
        font-family: 'Montserrat', sans-serif;
        line-height: 1.2;
        color: ${colors.textDark};
    }

    h1,
    .h1,
    h2,
    .h2 {
        font-weight: 400;
        line-height: 1.4;
    }

    h3,
    .h3,
    h4,
    .h4 {
        font-weight: 600;
    }

    h1,
    .h1 {
        font-size: ${sizes.font.h1};

        @media(max-width: ${sizes.breakpoints.md}) {
            font-size: 3.5rem;
        }
    }

    h2,
    .h2 {
        font-size: ${sizes.font.h2};

        @media(max-width: ${sizes.breakpoints.md}) {
            font-size: 3.2rem;
            margin-bottom: 3rem;
        }
    }

    h2 {
        margin-bottom: 4rem;

        & + p {
            margin: -3rem 0 5rem;
        }
    }

    h3,
    .h3 {
        font-size: ${sizes.font.h3};
        margin-bottom: 2.8rem;

        @media(max-width: ${sizes.breakpoints.md}) {
            font-size: 2.3rem;
            margin-bottom: 2rem;
        }

        @media(max-width: ${sizes.breakpoints.sm}) {
            font-size: 2rem;
        }

        &.sub {
            font-weight: 400;
            color: ${colors.textLight};
            margin-bottom: 1.5rem;
        }
    }

    .h4 {
        font-size: 1.6rem;
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
        outline: 2px solid #9ED3FF;
    }

    body:not(.user-is-tabbing) button:focus,
    body:not(.user-is-tabbing) input:focus,
    body:not(.user-is-tabbing) select:focus,
    body:not(.user-is-tabbing) textarea:focus,
    body:not(.user-is-tabbing) a:focus {
        outline: none;
    }

    body.user-is-tabbing .trustedBy:focus {
        border: 2px solid #9ED3FF;
        outline: none;
    }

    button {
        font-family: inherit;
        outline: none;
        font-size: inherit;
        background: none;
        color: ${colors.text};
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
        cursor: pointer;

        &::-moz-focus-inner {
            border: 0;
        }
    }

    .btn {
        display: inline-block;
        min-width: 14.5rem;
        padding: .8rem 2.2rem;
        font-weight: 400;
        text-align: center;
        color: ${colors.textDark};
        background: ${colors.white};
        border: 2px solid ${colors.text};
        border-radius: 100px;
        transition: all .2s;
        white-space: nowrap;

        &:hover,
        &:focus {
            color: ${colors.white};
            background: ${colors.text};
            border: 2px solid ${colors.text};
        }

        &--big {
            padding: 1.5rem 4rem;
            font-size: ${sizes.font.h4};
            font-weight: 600;
        }

        &--small {
            padding: .5rem 2rem;
            font-size: 95%;
            min-width: auto;
        }

        &--cta {
            color: ${colors.white};
            background: ${colors.link};
            border-color: ${colors.link};

            &:hover {
                color: ${colors.white};
                background: ${colors.lightBlue};
                border: 2px solid ${colors.lightBlue};
            }

            &:focus {
                color: ${colors.white};
            }
        }

        &--grey {
            color: ${colors.white};
            background: ${colors.text};

            &:hover,
            &:focus {
                color: ${colors.text};
                background: ${colors.white};
            }
        }

        &-wrapper {
            --gap: 2rem;

            display: flex;
            flex-wrap: wrap;
            margin: calc(-1 * var(--gap)) 0 0 calc(-1 * var(--gap));
            width: calc(100% + var(--gap));

            @media(max-width: ${sizes.breakpoints.sm}) {
                justify-content: center;
            }

            & > * {
                margin: var(--gap) 0 0 var(--gap);
            }
        }

        &--disabled,
        &:disabled {
            color: ${colors.white};
            background: ${colors.offWhite4};
            pointer-events: none;
            border-color: ${colors.offWhite4};
        }
    }

    .link {
        position: relative;
        color: ${colors.text};
        padding-bottom: .8rem;
        font-weight: 400;

        &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            right: 100%;
            border-bottom: 2px solid ${colors.white};
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
        background-size: 1.25em auto, 100%;
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

    .gatsby-image-wrapper {
        width: 100%;
        height: 100%;

        img {
            object-fit: contain !important;
        }
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
        background: ${colors.offWhite};
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

    .footnote {
        font-size: 1.3rem;
        color: ${colors.textLight};

        @media (max-width: 800px) {
            font-size: 1.2rem;
        }

        a {
            font-weight: 400;
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

    .pattern-bg {
        background: url(${Pattern});
        background-position: center;
        background-size: cover;
    }

    .pattern {
        position: relative;

        &::after {
            content: "";
            position: absolute;
            display: block;
            bottom: 0;
            top: -15rem;
            right: 50%;
            width: 100vw;
            height: calc(100% + 15rem);
            z-index: -100;
            background: url(${Pattern});
            background-position: center;
            background-size: cover;
            transform: translateX(50%);

        &--full-vp-height {
            &::after {
                max-height: 100vh;
            }
        }
    }

`

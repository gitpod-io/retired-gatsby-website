import { dimensions, fonts, colors, breakpoints } from './variables'
import { getEmSize } from './mixins'
import arrowDown from '../resources/Arrow_down.svg';

export default `
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    font-size: ${dimensions.fontSize.regular}px !important;
    line-height: ${dimensions.lineHeight.regular} !important;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  body {
    width: 100%;
    overflow-x: hidden;
    font-family: ${fonts.sansSerif};
    color: ${colors.fontColor1};
    background-color: ${colors.background1};
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    padding: 0;
  }

  a {
    color: ${colors.brand};
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
      color: ${colors.brand};
    }
  }
  a.anchor svg {
      fill: ${colors.fontColor1};
  }

  img {
    max-width: 100%;
    object-fit: contain;
    position: relative;
  }

  figure {
    margin: 2rem 0;
  }

  figcaption {
    font-size: 80%;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 1.414rem;
    margin-bottom: 1.5rem;
    color: ${colors.fontColor1};
    font-weight: 400;
    line-height: ${dimensions.lineHeight.heading};
    text-rendering: optimizeLegibility;
  }

  h1 {
    margin-top: 0;
    font-size: ${dimensions.headingSizes.h1}rem;
  }

  h2 {
    font-size: ${dimensions.headingSizes.h2}rem;
    font-weight: 400;
  }

  h3 {
    font-size: ${dimensions.headingSizes.h3}rem;
  }

  h4, h5, h6 {
    font-size: ${dimensions.headingSizes.h4}rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  strong {
    color: #fff;
    font-weight: 600;
  }

  ul,
  ol,
  dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  dt {
    font-weight: bold;
  }

  dd {
    margin-bottom: .5rem;
  }

  hr {
    position: relative;
    margin: 1.5rem 0;
    border: 0;
    border-top: 1px solid ${colors.ui.light};
  }

  button, select {
    margin: 10px 0px;
    padding: 8px 14px;
    border-radius: 2px;
    border: 1px solid ${colors.brand};
    background-color: var(--background1);
    cursor: pointer;
    &.primary {
      border-color: ${colors.brand};
      color: ${colors.brand};
      box-shadow: 0px 0px 1px ${colors.brand};
      &:hover {
        box-shadow: inset 0px 0px 3px ${colors.brand}, 0px 0px 3px ${colors.brand};
      }
    }
    &.secondary {
      border-color: ${colors.fontColor1};
      color: ${colors.fontColor1};
      &:hover {
        box-shadow: inset 0px 0px 3px ${colors.fontColor1}, 0px 0px 3px ${colors.fontColor1};
      }
    }
  }

  select {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    border-radius: 25px;
    width: 100%;
    background: url('${arrowDown}') no-repeat 95% 55%;
    background-size: 20px;
  }



  blockquote {
    margin: .8rem 0;
    padding: .5rem 1rem;
    border-left: .25rem solid ${colors.brand};
    color: ${colors.fontColor1};
    background-color: ${colors.background2};

    p {
      &:last-child {
        margin-bottom: 0;
      }
    }

    @media (min-width: ${getEmSize(breakpoints.md)}em) {
      padding-right: 5rem;
      padding-left: 1.25rem;
    }
  }

  table {
    width: 100%;
    margin-bottom: 1rem;
    border-collapse: collapse;
  }

  td,
  th {
    padding: .25rem .5rem;
  }

  th {
    text-align: left;
  }

  thead {
    font-size: 1.2em;
  }

  tbody {
    tr {
        border-top-style: solid;
        border-top-width: 1px;
        border-top-color: ${colors.background2};
    }
    td {
        padding-left: 20px;
    }
  }

  .glow {
    color: ${colors.brand}
  }

  .button-like:hover {
      filter: drop-shadow( 0 0 1px ${colors.fontColor1});
  }

  @keyframes glow {
    from {
        text-shadow: 0 0 0px ${colors.fontColor1};
    }

    to {
        text-shadow: 0 0px 2px #fff;
    }
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  .gatsby-highlight {
      font-size: 12px;
  }

  .draggable {
      cursor: move;
  }

  .flex {
      display: flex;
  }

  .hidden-md-up {
      @media (min-width: ${getEmSize(breakpoints.md)}em) {
          display: none;
      }
  }

  .hidden-md-down {
      @media (max-width: ${getEmSize(breakpoints.md - 1)}em) {
          display: none;
      }
  }

  ul.tick-list {
      list-style-type: none;
      padding-left: 1.6rem;

      > li {
          position: relative;

          &:before {
              content: '✓';
              position: absolute;
              left: -1.2rem;
          }
      }
  }

  .article {

      @media (min-width: ${getEmSize(breakpoints.sm)}em) {
          max-width: 76%;
          margin-left: 12%;
      }

      font-size: 20px;
      line-height: 1.58;

      h1 {
          font-size: 42px;
      }
      h2, h3, h4, h5, h6 {
        text-transform: none;
        margin-top: 50px;
        margin-bottom: 20px;
      }

      img {
          margin: 20px 0px;
      }

      p {
          margin-bottom: 20px;
      }

      li p {
          margin-bottom: 10px;
      }

      table {
        width: 100%;
        margin-bottom: 1rem;
        border: 1px solid ${colors.fontColor2};
        font-size: 85%;
        border-collapse: collapse;
    }

    td,
    th {
        padding: .25rem .5rem;
    }

    th {
        text-align: left;
    }

    thead {
        border: 1px solid ${colors.fontColor2};
    }

    tbody {
        tr {
        &:nth-of-type(odd) {
            td {
            background-color: ${colors.ui.whisper};
            }
            tr {
            background-color: ${colors.ui.whisper};
            }
        }
        }
    }
  }
`

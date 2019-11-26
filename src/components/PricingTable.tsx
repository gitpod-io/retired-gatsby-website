import React from 'react'

import styled from '@emotion/styled'
import { borders, colors, sizes } from '../styles/variables'

const StyledPricingTable = styled.section`
    padding-bottom: 0;
    margin-bottom: 5rem;

    table {
        border: 1px solid ${borders.light};
        border-collapse: collapse;
        letter-spacing: 1px;
        margin: 0 auto;
        font-size: 1.5rem;
        width: 100%;
        min-width: 60rem;
        overflow-x: scroll;
    }

    @media(max-width: ${sizes.breakpoints.md}) {
        overflow-x: scroll;
    }

    td, th {
      border: ${borders.light};
      padding: 10px 20px;
    }

    th {
        background: ${colors.offWhite};
        font-weight: 400;
        text-align: left;

        span {
            display: block;
        }

        img {
            height: 2rem;
            transform: translateY(5px);
            margin-right: 1rem;
        }
    }

    .header {
        th {
            text-align: center;
            font-weight: 600;
            font-size: 2rem;
            padding: 3rem;

            span {
                font-size: 1.6rem;
                font-weight: 400;

                span {
                    display: inline;
                    color: ${colors.link};
                    font-weight: 600;
                }
            }
        }
    }

    td {
        text-align: center;
    }
`

interface PricingTableProps {
    title: string
    paragraph: JSX.Element | string
}

const PricingTable: React.SFC<PricingTableProps> = ({ title, paragraph, children }) => (
    <div className="row">
        <StyledPricingTable>
            <h2>{title}</h2>
            <p>{paragraph}</p>
            <table>
                {children}
            </table>
        </StyledPricingTable>
    </div>
)

export default PricingTable

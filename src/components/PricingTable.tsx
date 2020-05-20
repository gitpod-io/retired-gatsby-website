import React from 'react'

import styled from '@emotion/styled'
import { colors, sizes } from '../styles/variables'

const StyledPricingTable = styled.section`
    padding-bottom: 0;
    margin-bottom: 5rem;

    th {

        span {
            display: block;
        }

        img {
            height: 2rem;
            transform: translateY(5px);
            margin-right: 1rem;

            @media(max-width: ${sizes.breakpoints.md}) {
                height: 1.7rem;
                transform: translateY(3px);
                margin-right: .5rem;
            }

            @media(max-width: ${sizes.breakpoints.md}) {
                height: 1.5rem;
            }
        }
    }

    .header {
        th {
            text-align: center;
            font-weight: 600;
            font-size: 2rem;
            padding: 3rem;
            width: 25%;

            @media(max-width: ${sizes.breakpoints.md}) {
                padding: 2rem;
            }

            @media(max-width: ${sizes.breakpoints.md}) {
                padding: 1.5rem;
            }

            span {
                font-size: 1.6rem;
                font-weight: 400;

                @media(max-width: ${sizes.breakpoints.md}) {
                    font-size: 1.4rem;
                }

                @media(max-width: ${sizes.breakpoints.md}) {
                    font-size: 1.2rem;
                }

                span {
                    display: inline;
                    color: var(--link);
                    font-weight: 600;
                }
            }
        }
    }

    .buttons {
        th, td {
            background: none;
            border: none;
        }

        .btn {
            margin-top: 2rem;
        }
    }

    .description {
        display: inline-block;
        transform: translateY(-.5rem);

        &__text {
            position: absolute;
            top: 0;
            left: 3rem;
            width: 25rem;
            min-width: 15rem;

            @media(max-width: ${sizes.breakpoints.md}) {
                width: 18rem;
            }
        }
    }

`

interface PricingTableProps {
    title: string
    paragraph: JSX.Element | string
    id?: string
    rows?: number
}

const PricingTable: React.SFC<PricingTableProps> = ({ title, paragraph, children, id, rows }) => (
    <div className="row" id={id}>
        <StyledPricingTable>
            <h2>{title}</h2>
            <p>{paragraph}</p>
            <div className={`table-container ${rows == 3 ? 'rows-3': ''}`}>
                <table>
                    {children}
                </table>
            </div>
        </StyledPricingTable>
    </div>
)

export default PricingTable

import React from 'react'

import styled from '@emotion/styled'
import { colors } from '../styles/variables'

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
            <div className="table-container">
                <table>
                    {children}
                </table>
            </div>
        </StyledPricingTable>
    </div>
)

export default PricingTable

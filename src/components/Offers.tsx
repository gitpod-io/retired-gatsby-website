import React from 'react'

import PricingBox, { PricingBoxProps } from '../components/PricingBox'
import styled from '@emotion/styled'
import { sizes } from '../styles/variables'

const StyledOffers = styled.section`
    /* --------------------------------------- */
    /* ----- Offers ----- */
    /* --------------------------------------- */

    .offers {
        display: flex;
        justify-content: center;
        margin-top: 15rem;

        @media(max-width: ${sizes.breakpoints.md}) {
            flex-direction: column;
            align-items: center;
        }
    }

    .btn-container {
        margin: 5rem 0;
        text-align: center;
    }

    @media(max-width: ${sizes.breakpoints.md}) {
        h2 {
            margin-bottom: 5rem;
        }

        br {
            display: none;
        }
    }

`

interface OffersProps {
    title: string
    offers: PricingBoxProps[],
    para: JSX.Element
}


const Offers: React.SFC<OffersProps> = ({ offers, title, para }) => (
    <StyledOffers>
        <div className="row">
            <div>
                <h2>{title}</h2>
                { para }
            </div>
            <div className="offers">
                {
                    offers.map(
                        (offer, i) => (
                            <PricingBox
                                key={i}
                                title={offer.title}
                                img={offer.img}
                                price={offer.price}
                                duration={offer.duration}
                                feature={offer.feature}
                                features={offer.features}
                                transform={offer.transform}
                                btnText={offer.btnText}
                                link={offer.link}
                                background={offer.background}
                                hideButton={offer.hideButton}
                                btn={offer.btn}
                                text={offer.text}
                                banner={offer.banner}
                                bannerColor={offer.bannerColor}
                            />
                        )
                    )
                }
            </div>
        </div>
    </StyledOffers>
)


export default Offers

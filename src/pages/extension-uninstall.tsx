import React from 'react'
import IndexLayout from '../layouts'


import styled from '@emotion/styled'
import Form from '../components/extension-uninstall/Form'
import Message from '../components/extension-uninstall/Message'

const StyledDeletionPage = styled.div`
    .intro {
        text-align: center;
        padding: 5rem  0;
    }

    .content {
        display: flex;
        justify-content: space-around;
        padding: 6rem 0;

        & > * {
            flex: 0 0 40%;

            @media(max-width: 1000px) {
                max-width: 400px;

                &:first-child {
                    margin-bottom: 5rem;
                }
            }
        }

        @media(max-width: 1000px) {
            flex-direction: column;
            align-items: center;
        }
    }
`

const DeletionPage = () => (
    <IndexLayout isAFlowPage={true} showReInstallExtensionButton={true}>
        <StyledDeletionPage>
            <div className="row pattern">
                <div className="intro">
                    <h1><strong>How Can We Improve?</strong></h1>
                </div>
            </div>
            <div className="row">
                <div className="content">
                    <Message />
                    <Form />
                </div>
            </div>
        </StyledDeletionPage>
    </IndexLayout>
)

export default DeletionPage

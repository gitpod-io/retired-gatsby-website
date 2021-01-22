import React from 'react'

import styled from '@emotion/styled'
import { Link } from 'gatsby'

export interface RelatedDoc {
    title: string; 
    path: string;
}

const StyledRelatedDocs = styled.div`
    margin-bottom: 10rem;
`

const RelatedDocs = ({ relatedDocs }: {relatedDocs: RelatedDoc[]}) => (
    <StyledRelatedDocs>
        Related documentation:&nbsp;
        {
            relatedDocs.map(({path, title}: RelatedDoc, i) => (
                <> 
                <Link to={`/docs${path}`}>{title}</Link>
                {
                    relatedDocs.length > 0 && relatedDocs[i + 1] && !relatedDocs[i + 2] ? ' and ' : relatedDocs.length > 0 && relatedDocs[i + 1] ? ', ' : null
                }
                </>
            ))
        }
    </StyledRelatedDocs>
) 

export default RelatedDocs

import Page from "./Page";
import IndexLayout from "../layouts";
import Container from "./Container";
import Logos from "./Logos";
import styled from '@emotion/styled';
import { colors } from "../styles/variables";

const Wrapper = styled.div`
    margin: 0 10%;
    h1 {
        margin-top: 70px;
    }
    h2 {
        margin-top: 50px;
    }
    h3 {
        margin-top: 30px;
    }
    p {
        font-size: 15px;
        line-height: 1.6;
        margin-bottom: 20px;
    }
    table, td {
        border: 1px solid ${colors.fontColor2};
        p {
            margin-bottom: 15px;
        }
    }
    td {
        font-size: 16px;
        &:first-child {
            text-align: center;
            width: 20%;
        }
        &:last-child {
            padding: 30px;
        }
    }
    ul, ol {
        font-size: 15px;
    }
    li {
        &:not(:last-child) {
            margin-bottom: 6px;
        }
    }
`

export const BoilerPlate = (p: {title: string, maxHeight?: number, children: any, canonical: string}) => <IndexLayout title={p.title} canonical={p.canonical} >
    <Page>
        <Container>
            <Logos logos={[
                [-40, -20, 25],
                [980, -10, 30],
                [930, 150, 60],
                [1080, 230, 120],
                [-120, 460, 30],
                [-40, 820, 25],
                [980, 2010, 30],
                [930, 3150, 60],
                [1080, 2230, 120],
                [-120, 4460, 30],
            ].filter( l => !p.maxHeight || l[1] < p.maxHeight)} />
            <Wrapper>
                {p.children}
            </Wrapper>
        </Container>
    </Page>
</IndexLayout>;

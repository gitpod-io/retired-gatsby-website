import Page from "./Page";
import IndexLayout from "../layouts";
import Container from "./Container";
import Logos from "./Logos";


export const BoilerPlate = (p: {maxHeight?: number, children: any}) => <IndexLayout>
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
            <div style={{ margin: '0 10%' }}>
                {p.children}
            </div>
        </Container>
    </Page>
</IndexLayout>;

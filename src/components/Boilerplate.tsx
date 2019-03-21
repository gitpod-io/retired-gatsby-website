import Page from "./Page";
import IndexLayout from "../layouts";
import Container from "./Container";
import Logos from "./Logos";


export const BoilerPlate = (p: any) => <IndexLayout>
    <Page>
        <Container>
            <Logos logos={[
                [-40, -20, 25],
                [880, -10, 30],
                [730, 150, 60],
                [880, 230, 120],
                [-120, 460, 30],
            ]} />
            <div style={{ margin: '0 10%' }}>
                {p.children}
            </div>
        </Container>
    </Page>
</IndexLayout>;
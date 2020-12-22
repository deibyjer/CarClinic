import React from "react";
import Image, {Grid, Container} from "semantic-ui-react";


class PageFooter extends React.Component {
    render() {
        return (
            <div  className='PageFooter' style={{position: 'fixed', bottom: '10px'}}>
                <Text />
            </div>
        );
    }
}

class Text extends React.Component {
    render() {
        return (
            <div>
                <Grid columns={4}>
                    <Grid.Row stretched>
                        <Grid.Column>
                            <Container textAlign='center'>
                                About Us
                            </Container>
                        </Grid.Column>
                        <Grid.Column>
                            <Container textAlign='center'>
                                The Legal Stuff
                            </Container>
                        </Grid.Column>
                        <Grid.Column>
                            <Container textAlign='center'>
                                Our Story
                            </Container></Grid.Column>
                        <Grid.Column>
                            <Container textAlign='center'>
                                Contact Us
                            </Container>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}


export default PageFooter;
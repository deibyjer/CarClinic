import React from 'react';
import { Avatar, Anchor, Box, Nav, Main, Grommet, Header, Heading, Paragraph, Text, Footer } from 'grommet';

class Home extends React.Component {
    render() {
        return (
            <div>
            <Header background="light-1" pad="small" >
                <Nav direction="row">
                    <Anchor label="Home" href="#" />
                    <Anchor label="Profile" href="#" />
                </Nav>
            </Header>
            <Main pad="large" full>
                <Box
                    direction="column"
                    align="center"
                    pad="medium"
                >
                    <Heading>Car Clinic</Heading>
                    <Paragraph>Here for all your car needs</Paragraph>
                </Box>
                
                <Box>

                </Box>
            </Main>
            <Footer background="brand" pad="medium">
                <Text>Copyright</Text>
                <Anchor label="About" />
            </Footer>
            </div>
        );
    }
}

export default Home;
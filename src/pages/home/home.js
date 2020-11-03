import React from 'react';
import { Avatar, Anchor, Box, Nav, Main, Grommet, Header, Select, TextInput, Text, Footer, Image } from 'grommet';
import logo from './images/logo.png';

class Home extends React.Component {
    render() {
        return (
            <Box>
                <LayoutContainer />
            </Box>
        );
    }
}

class LayoutContainer extends React.Component {
    render() {
        return (
          <Box>
              <PageHeader />
              <PageContent />
              <PageFooter />
          </Box>  
        );
    }
}

class PageHeader extends React.Component {
    render() {
        return (
            <Header>
                <Nav>
                    <Anchor label="Home" href="#" />
                    <Anchor label="Profile" href="#" />
                </Nav>
            </Header>
        );
    }
}

class PageContent extends React.Component {
    render() {
        return (
            <Box>
                <Logo />
            </Box>
        );
    }
    
}

class Logo extends React.Component {
    render() {
        return (
            <Box>
                <Image src={logo} />
                <Text>Here for all your car needs</Text>
            </Box>
        );
    }
}

class UserInput extends React.Component {
    render() {
        const SERVICE_LIST = ["Brake discs and pads replacement", "Brake pads replacement", "Premium brake upgrade (front and rear discs and pads)", "Brakes shoes replacement - rear (all)"];
        return (
            <Box>
                <Text>I am looking for a </Text>
                <Select
                    options={SERVICE_LIST}
                />
                <Text>in</Text>
                <TextInput placeholder="type here" />
            </Box>
        );
    }
}

class PageFooter extends React.Component {
    render() {
        return (
            <Footer>
                Footer
            </Footer>
        );
    }
}
 
export default Home;
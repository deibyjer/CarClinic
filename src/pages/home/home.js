import React from 'react';
import { Avatar, Anchor, Box, Nav, Main, Grommet, Header, Select, TextInput, Text, Footer, Image } from 'grommet';
import logo from './images/logo.png';

class MainContent extends React.Component {
    render() {
        return (
            <Box 
                direction="column"
                align="center"
                pad="27.5vh"
            >
               <Logo />
           </Box> 
        );
    }
}

class Logo extends React.Component {
    render() {
        return (
            <Box align="center">
                <Image src={logo} />
                <Text color="brand" size="24px" margin="5px">Here for all your car needs</Text>
            </Box>
        );
    }
}

class UserInput extends React.Component {
    render() {
        const SERVICE_LIST = ["Brake discs and pads replacement", "Brake pads replacement", "Premium brake upgrade (front and rear discs and pads)", "Brakes shoes replacement - rear (all)"];
        return (
            <Box direction="row" align="center">
                <Text>I am looking for a </Text>
                <Select 
                    size="small"
                    options={SERVICE_LIST}
                />
                <Text>in</Text>
                <TextInput
                    placeholder="type here"
                />
            </Box>
        );
    }
}
 

class Home extends React.Component {
    render() {
        return (
            <Box fill direction="column">
                <Header pad="small" justify="end">
                    <Nav direction="row">
                        <Anchor label="Home" href="#" />
                        <Anchor label="Profile" href="#" />
                    </Nav>
                </Header>
                <Box fill>
                    <MainContent />
                </Box>
                <Footer background="brand" pad="medium">
                    <Text>Copyright</Text>
                    <Anchor label="About" />
                </Footer>
            </Box>
        );
    }
}

export default Home;
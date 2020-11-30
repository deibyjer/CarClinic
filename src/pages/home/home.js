import React from 'react';
import {Button, Icon, Dropdown, Divider,Image, Input, Menu, List, Container, Grid, Segment} from 'semantic-ui-react'
import logo from './images/logo.png'
import mechanicIcon from './images/Icon_mechanic.png'
import bodyworkIcon from './images/Icon_bodywork.png'
import MOTIcon from './images/Icon_MOT.png'
import calloutIcon from './images/Icon_Callout.png'
import MechanicBackground from './images/background.jpg'
import {
    Link
} from 'react-router-dom'


class Home extends React.Component {
    render() {
        return (
            <div className='Home'>
                <LayoutContainer />
            </div>
        );
    }
}

class LayoutContainer extends React.Component {
    render() {
        return (
            <div className='LayoutContainer'>
                <PageHeader />
                <PageContent />
                <ServiceGrid />
                <PageFooter />
            </div>  
        );
    }
}

class PageHeader extends React.Component {
    render() {
        return (
            <div className='PageHeader'>
                <Container>
                    <Menu>
                        <Menu.Item header>Car Clinic</Menu.Item>
                        <Menu.Item>Profile</Menu.Item>
                        <Menu.Item>Login</Menu.Item>
                        <Menu.Item as={Link} to='/register'> Sign Up</Menu.Item>
                    </Menu>
                </Container>
            </div>
        );
    }
}

class PageContent extends React.Component {
    render() {
        return (
            <Segment>
                <Grid columns={2}n relaxed='very'>
                    <Grid.Row>
                        <Grid.Column>
                            <DescriptionGrid />              
                        </Grid.Column>
                        <Grid.Column>
                            <div>
                                <img src ={MechanicBackground} className='ui floated image' opacity='50%'/>

                                <CustomerInput />
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>                  
            </Segment>
        );
    }
}

class ServiceGrid extends React.Component {
    render (){
        return(
            <Segment>
                <Container>
                    <h3 align='center'>Anything your car needs, at your fingertips</h3>
                    <Grid columns={4}>
                        <Grid.Row stretched>
                            <Grid.Column width ={4}>
                                <Container>
                                    Mechanics and Diagnostics
                                    <img src={mechanicIcon} size='medium' centered />
                                </Container>
                            </Grid.Column>
                            <Grid.Column width ={4}>
                                <Container>
                                    Bodywork
                                    <img src={bodyworkIcon} size='medium' centered  />
                                </Container>
                            </Grid.Column>
                            <Grid.Column width ={4}>
                                <Container>
                                    Servicing and MOT
                                    <img src={MOTIcon} size='medium' centered />
                                </Container>
                            </Grid.Column >
                            <Grid.Column width ={4}>
                                <Container>
                                    Emergency Callouts  
                                    <img src ={calloutIcon} size='medium' centered  />
                                </Container>
                            </Grid.Column>
                        </Grid.Row> 
                    </Grid>    
                </Container>
            </Segment>

        )
    }
}


class DescriptionGrid extends React.Component {
    render() {
        return (
            <div className='DescriptionGrid'>
                <div className='ui active center'
                    style={{
                        display: 'flex',
                            position: 'absolute',
                                width: '100%',
                                    height: '100%',
                                        justifyContent: 'center',
                                            zIndex: 1,
                    }}>
                    <Container>
                        <h2>Find your local garage, with trust </h2>
                        <li>Standardised Pricing</li>
                        <li>Friendly Neighbourhood Service</li>
                        <li>Clear Reviews of Mechanics</li>
                    </Container>
                </div>
                <img src={MechanicBackground} className='ui floated image' opacity='50%'/>
            </div>

        )
    }
}





class CustomerInput extends React.Component {
    render() {
        return (
            <div className='CustomerInput'>
                <Container>
                    <div className='ui active center'
                        style={{
                            display: 'flex',
                                position: 'absolute',
                                    width: '100%',
                                        height: '100%',
                                            justifyContent: 'center',
                                                zIndex: 1,
                                                    padding: 15,
                        }}>
                        <Container>
                            <h3>Find a mechanic near you now!</h3>
                            <Divider horizontal></Divider>
                            <Input type="text" placeholder="Vehicle Registration Number"/>
                            <Input type="text" placeholder="Postcode" />
                        </Container>

                    </div>
                </Container>
            </div>
        );
    }
}


class PageFooter extends React.Component {
    render() {
        return (
            <div className='PageFooter'>
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
                            </Container></Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default Home;
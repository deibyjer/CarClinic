import React from 'react';
import {
    Button,
    Icon,
    Dropdown,
    Divider,
    Image,
    Input,
    Modal,
    List,
    Container,
    Grid,
    Segment,
    Menu
} from 'semantic-ui-react'
import logo from './images/logo.png'
import mechanicIcon from './images/Icon_mechanic.png'
import bodyworkIcon from './images/Icon_bodywork.png'
import MOTIcon from './images/Icon_MOT.png'
import calloutIcon from './images/Icon_Callout.png'
import MechanicBackground from './images/background.jpg'
import PageHeader from '../components/PageHeader';
import PageFooter from '../components/PageFooter';
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
                <HomePageHeading />
                <PageContent />
                <ServiceGrid />
                <PageFooter />
            </div>  
        );
    }
}
class HomePageHeading extends React.Component {
    render() {
        return (
            <div align= 'center' style ={{padding: '8em 3em'}}>
                <h1> Find your local garage, with trust</h1>
            </div>
        )
    }



}

class PageContent extends React.Component {
    render() {
        return (
            <div>
                <CustomerInput /> 
                <DescriptionGrid />                
            </div>  
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
                                <Container  as={Link} to='/dashboard'>
                                    Emergency Callouts  
                                    <img src ={calloutIcon} size='medium' centered />
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
            <div className='DescriptionGrid' align ='center'>
                    <Container>
                        <h2>Find your local garage, with trust </h2>
                        <li>Standardised Pricing</li>
                        <li>Friendly Neighbourhood Service</li>
                        <li>Clear Reviews of Mechanics</li>
                    </Container>
            </div>

        )
    }
}





class CustomerInput extends React.Component {
    render() {
        return (
            <div className='CustomerInput'>
                        <div align ='center' 
                        style ={{ 
                            padding: '5em 3em',
                            backgroundcolour: 'powerblue',
                        }} 
                            
                            >
                            <h2>Find a mechanic near you now!</h2>
                            <Input type="text" placeholder="Vehicle Registration Number"/>
                            <Input type="text" placeholder="Postcode" />
                            <Button basic color='blue' as={Link} to='/searchresults'>Go!</Button>
                        </div>

            </div>
        );
    }
}

export default Home;
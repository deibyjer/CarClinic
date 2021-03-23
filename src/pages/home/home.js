import React from 'react';
import {
    Button,
    Input,
    Container,
    Grid,
    Select
} from 'semantic-ui-react'
import logo from './images/logo.jpg'

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
            <div>
                <PageHeader page={"Home"}/>
                <HomePageHeading />
                <PageContent />
                <PageFooter />
            </div>
        );
    }
}

class HomePageHeading extends React.Component {
    render() {
        return (
            <Container style={{
                padding:' 6em 0em'
            }}>
                <img src={logo} class="ui fluid image" />
                <Container textAlign='center'>
                    <h2> The Headquarters for your local </h2>
                </Container>
            </Container>
        );
    }
}

class PageContent extends React.Component {
    render() {
        return (
            <div>
                <CustomerInput />               
            </div>  
        );
    }
}

class CustomerInput extends React.Component {
    render() {
        const options=[
            { key: 'Mechanic', value:'mechanic', text:'Mechanic'},
            { key: 'Bodywork', value:'bodywork', text:'Bodywork'},
            { key: 'Services and MOTs', value:'services', text:'Services and MOTs'},
            { key: 'Emergency Call-outs', value:'emergency', text:'Emergency Call-Outs'},
        ];
        return (
            <Container>
                <Grid stretched stackable columns={4} verticalAlign='middle' style={{padding: "5em 3em"}}>
                    <Grid.Column textAlign='center'>
                        <h3>I am looking for a </h3>
                    </Grid.Column>
                    <Grid.Column>
                        <Select options={options} placeholder='Select Service Provider'/>
                    </Grid.Column>
                    <Grid.Column>
                        <Input type="text" placeholder="Postcode" />
                    </Grid.Column>
                    <Grid.Column>
                        <Button basic color='blue' as={Link} to='/searchresults'>Go!</Button>
                    </Grid.Column>
                </Grid>
            </Container>
        );
    }
}

export default Home;
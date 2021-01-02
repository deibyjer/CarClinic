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
    Menu,
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
                <PageHeader />
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
            </Container>
        )
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
            { key: 'mechanic', value:'mechanic', text:'mechanic'},
            { key: 'bodywork', value:'bodywork', text:'bodywork'},
            { key: 'Services and MOTs', value:'Services and MOTs', text:'services and MOTs'},
            { key: 'Emergency Call-outs', value:'Emergency Call-outs', text:'emergency call-outs'},
        ];
        return (
            <Container>
                <Grid stretched stackable columns={4} style={{padding: "5em 3em"}}>
                    <Grid.Column textAlign='center'>
                    <h3>i am looking for a </h3>
                    </Grid.Column>
                    <Grid.Column>
                    <Select options={options} placeholder='select service provider'
                />
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
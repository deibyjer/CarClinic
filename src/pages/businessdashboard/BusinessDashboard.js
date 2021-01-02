import React from 'react';
import {Container,Grid, Menu, Segment} from "semantic-ui-react";
import PageHeader from '../components/PageHeader';
import PageFooter from '../components/PageFooter';
import { render } from 'react-dom';


class BusinessDashboard extends React.Component {
    render() {
        return (
          <div>
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
              <PageContent />
              <PageFooter />
            </div> 
        );
    }
}

class PageContent extends React.Component{
    render() {
        return (
            <div>
                <MainDashboardMenu />
            </div>
        );
    }
}

class MainDashboardMenu extends React.Component {
    state = { activeItem: 'name'}

    handleItemClick = (e, {name}) => this.setState ({ activeItem: name})
    render() {
        const { activeItem } = this.state
        return (
            <Container>
                <Container textAlign='left'>
                <h1>Business Dashboard</h1>
                </Container>
            <Grid>
                <Grid.Column width={4}>
                    <Menu fluid vertical tabular>
                        <  Menu.Item
                        name='pending confirmations'
                        active={activeItem === 'pending confirmations'}
                        onClick={this.handleItemClick}
                        />
                        <Menu.Item
                        name='your bookings'
                        active={activeItem === 'your bookings'}
                        onClick={this.handleItemClick}
                        />
                        <Menu.Item
                        name='your job history'
                        active={activeItem === 'your job history'}
                        onClick={this.handleItemClick}
                        />
                        <Menu.Item
                        name='edit profile'
                        active={activeItem === 'edit profile'}
                        onClick={this.handleItemClick}
                        />
                    </Menu>
                </Grid.Column>
                <Grid.Column stretched width={12}>
                    <Segment>       
                        <h1> your mum</h1>
                    </Segment>
                </Grid.Column>
            </Grid>
            </Container>
        );
        }
}

export default BusinessDashboard;
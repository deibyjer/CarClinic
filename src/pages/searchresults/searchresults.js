import React from 'react';
import { Segment,
    Container,
    Placeholder,
    Grid,
    Image,
    Menu
} from 'semantic-ui-react'

import PageHeader from '../components/PageHeader';
import PageFooter from '../components/PageFooter';
import garageIcon from './ProfileIcons/NeighbourhoodCustoms.jpg'
import Booking from '../booking/booking';
import {
    Link,
} from 'react-router-dom'


class SearchResults extends React.Component {
    render() {
        return (
            <div className='SearchResults'>
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
                <PageFooter />
            </div>  
        );
    }
}

class PageContent extends React.Component {
    render() {
        return(
            <Container>
                <h1>Service Providers around you</h1>
                <Grid>
                    <Grid.Column width={5}>
                        <ContentMenu />
                    </Grid.Column>
                <Grid.Column width={11}>
                    <Grid>
                    <Grid.Row as={Link} to ='./booking/' >
                   <Grid.Column width={3}>
                    <Image src={garageIcon} fluid/>

                   </Grid.Column>
                   <Grid.Column width={13}>
                    <h2>Neighbourhood Customs</h2>
                    Your One-Stop-Shop for all motor-related, with your next-door-neighbour service
                   </Grid.Column>
                   </Grid.Row>
                   <Grid.Row as={Link} to ='./booking/' >
                   <Grid.Column width={3}>
                    <Image src={garageIcon} fluid/>

                   </Grid.Column>
                   <Grid.Column width={13}>
                    <h2>The Vehicle Surgeons</h2>
                    I will fix your Alfa Romeo proud
                   </Grid.Column>
                   </Grid.Row>
                   <Grid.Row as={Link} to ='./booking/' >
                   <Grid.Column width={3}>
                    <Image src={garageIcon} fluid/>

                   </Grid.Column>
                   <Grid.Column width={13}>
                    <h2>Edi's garage</h2>
                    Alom's best friend, doesnt need more explanation 
                   </Grid.Column>
                   </Grid.Row>
                   </Grid>
                </Grid.Column>
                </Grid>
                </Container>
        )

    }
}

class ContentMenu extends React.Component {
    state = { activeItem: 'closest' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
        const { activeItem} = this.state
        return (
            <Menu text vertical>
            <Menu.Item header>Sort By</Menu.Item>
            <Menu.Item
              name='closest'
              active={activeItem === 'closest'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='mostComments'
              active={activeItem === 'mostComments'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='mostPopular'
              active={activeItem === 'mostPopular'}
              onClick={this.handleItemClick}
            />
          </Menu>
        )
    }
}

export default SearchResults;
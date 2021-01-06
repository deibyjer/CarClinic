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
import NeighbourhoodCustomsLogo from './ProfileIcons/NeighbourhoodCustoms.jpg'
import TheVehicleSurgeonsLogo from './ProfileIcons/TheVehicleSurgeons.png'
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

        var garages = {
            NeighbourhoodCustoms : {
                name: "Neighbourhood Customs",
                description: "Your One-Stop-Shop for all motor-related, with your next-door-neighbour service",
                logo: NeighbourhoodCustomsLogo,
                link: "chwong1996",
            },
            TheVehicleSurgeons :{
                name: "TheVehicleSurgeons",
                description: "Breakdown Specialists, Servicing and Maintenance, Specialist Fault Finders, Batteries, Alternators and Start Motors",
                logo: TheVehicleSurgeonsLogo,
                link: "thevehiclesurgeons",
            
            },
            EdiGarage:{
                name:"Edi's Garage",
                description: "Alom's best friend, no explanation needed",
                logo: NeighbourhoodCustomsLogo,
                link: "chwong1996",
            },


        }

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
                    <Image src={NeighbourhoodCustomsLogo} fluid/>

                   </Grid.Column>
                   <Grid.Column width={13}>
                    <h2>Neighbourhood Customs</h2>
                    Your One-Stop-Shop for all motor-related, with your next-door-neighbour service
                   </Grid.Column>
                   </Grid.Row>
                   <Grid.Row as={Link} to ='./booking/' >
                   <Grid.Column width={3}>
                    <Image src={TheVehicleSurgeonsLogo} fluid/>

                   </Grid.Column>
                   <Grid.Column width={13}>
                    <h2>The Vehicle Surgeons</h2>
                    I will fix your Alfa Romeo proud
                   </Grid.Column>
                   </Grid.Row>
                   <Grid.Row as={Link} to ='./booking/' >
                   <Grid.Column width={3}>
                    <Image src={NeighbourhoodCustomsLogo} fluid/>

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
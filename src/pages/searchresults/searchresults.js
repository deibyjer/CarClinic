import React from 'react';
import { Segment,
    Container,
    Placeholder,
    Grid,
    Menu
} from 'semantic-ui-react'

import PageHeader from '../components/PageHeader';
import PageFooter from '../components/PageFooter';
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
                <Grid.Column width ={8}>
                    <Placeholder stretched>
                    <Placeholder.Header image>
                        <Placeholder.Line />
                        <Placeholder.Line />
                        </Placeholder.Header>
                        <Placeholder.Paragraph>
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                        </Placeholder.Paragraph>
                    </Placeholder>
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
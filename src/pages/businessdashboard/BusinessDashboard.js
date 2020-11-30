import React from 'react';
import {Grid, Segment} from "semantic-ui-react";

class BusinessDashboard extends React.Component {
    render() {
        return (
          <div>
              <LayoutManager />
          </div>  
        );
    }
}

class LayoutManager extends React.Component {
    render() {
        return (
            <Grid columns={3} divided padded>
                <Grid.Row stretched>
                    <Grid.Column>
                        <Segment>1</Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>1</Segment>
                        <Segment>2</Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>1</Segment>
                        <Segment>2</Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default BusinessDashboard;
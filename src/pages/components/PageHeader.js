import React from "react";
import {Container, Menu} from "semantic-ui-react";
import {Link} from "react-router-dom";

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

export default PageHeader;
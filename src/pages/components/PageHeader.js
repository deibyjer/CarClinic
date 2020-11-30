import React from "react";
import {Button, Modal, Container, Menu} from "semantic-ui-react";
import {Link} from "react-router-dom";
import LoginModal from './LoginModal';

class PageHeader extends React.Component {
    render() {
        return (
            <div className='PageHeader'>
                <Container>
                    <Menu>
                        <Menu.Item header as={Link} to='../home/home'>Car Clinic</Menu.Item>
                        <Menu.Item>Profile</Menu.Item>
                        <LoginModal />
                        <Menu.Item as={Link} to='/register'> Sign Up</Menu.Item>
                    </Menu>
                </Container>
            </div>
        );
    }
}

export default PageHeader;
import React from "react";
import {Button, Modal, Container, Menu, Sidebar} from "semantic-ui-react";
import {Link} from "react-router-dom";
import LoginModal from './LoginModal';

class PageHeader extends React.Component {
    render() {
        return (
            <div className='PageHeader'>
                    <Menu size='medium'>
                        <Menu.Item header as={Link} to='../home/home'>Car Clinic</Menu.Item>
                        <Menu.Item position='right'>
                        <LoginModal />
                        <Menu.Item as={Link} to='/register'> Sign Up</Menu.Item>
                        </Menu.Item>
                    </Menu>
            </div>
        );
    }
}

export default PageHeader;
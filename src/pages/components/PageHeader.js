import React from "react";
import {Button, Modal, Container, Menu, Sidebar} from "semantic-ui-react";
import {Link} from "react-router-dom";
import LoginModal from './LoginModal';

class PageHeader extends React.Component {
    render() {
        let onHome = this.props.page === 'Home';
        let homeMenuItem = <Menu.Item header as={Link} to='../'>Car Clinic</Menu.Item>;
        return (
            <div className='PageHeader'>
                    <Menu size='medium' secondary>
                        {!onHome && homeMenuItem}
                        
                    </Menu>
            </div>
        );
    }
}

export default PageHeader;
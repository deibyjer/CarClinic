import React from 'react';
import {Dropdown, Image, Input, Menu} from 'semantic-ui-react'
import logo from './images/logo.png';

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
          <div className='LayoutContainer'>
              <PageHeader />
              <PageContent />
              <PageFooter />
          </div>  
        );
    }
}

class PageHeader extends React.Component {
    render() {
        return (
            <div className='PageHeader'>
                <Menu>
                    <Menu.Item header>Car Clinic</Menu.Item>
                    <Menu.Item>Profile</Menu.Item>
                    <Menu.Item>Login</Menu.Item>
                </Menu>
            </div>
        );
    }
}

class PageContent extends React.Component {
    render() {
        return (
            <div className='PageContent'>
                <Logo />
                <UserInput />
            </div>
        );
    }
    
}

class Logo extends React.Component {
    render() {
        return (
            <div className='Logo'>
                <Image src={logo} />
            </div>
        );
    }
}

class UserInput extends React.Component {
    render() {
        const SERVICE_LIST = ["Brake discs and pads replacement", "Brake pads replacement", "Premium brake upgrade (front and rear discs and pads)", "Brakes shoes replacement - rear (all)"];
        return (
            <div className='UserInput'>
                I am looking for a 
                <Dropdown
                    placeholder='Select Service'
                    selection
                    options={SERVICE_LIST}
                />
                in
                <Input type="text" placeholder="Enter Post Code"/>
            </div>
        );
    }
}

class PageFooter extends React.Component {
    render() {
        return (
            <div className='PageFooter'>
                Footer
            </div>
        );
    }
}
 
export default Home;
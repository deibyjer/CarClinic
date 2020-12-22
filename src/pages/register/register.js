import React from 'react';
import {Button, Form, Grid, Segment} from "semantic-ui-react";
import PageHeader from '../components/PageHeader';
import PageFooter from '../components/PageFooter';
import { Link } from 'react-router-dom';

class Register extends React.Component {
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

class PageContent extends React.Component {
    render() {
        return (
            <div>
                <RegisterForm />
            </div>
        );
    }
}

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isBusiness: null,
        }
    }

    handleBusinessClick = () => {
        this.setState({isBusiness: true})
    }

    handleCustomerClick = () => {
        this.setState({isBusiness: false});
    }

    render() {

        if (this.state.isBusiness === null) {
            return <UserTypeButtons handleCustomerClick={this.handleCustomerClick} handleBusinessClick={this.handleBusinessClick}/>;
        }

        return (
            <div>
                {this.state.isBusiness ? <BusinessRegisterForm /> : <CustomerRegisterForm />}
            </div>
        );
    }
}

class UserTypeButtons extends React.Component {
    render() {
        return (
            <Grid columns={2} stackable textAlign='center'>
                <Grid.Row verticalAlign='middle'>
                    <Grid.Column>
                        <Button onClick={this.props.handleCustomerClick}>
                            Customer
                        </Button>
                    </Grid.Column>
                    <Grid.Column>
                        <Button onClick={this.props.handleBusinessClick}>
                            Service Provider
                        </Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

class BusinessRegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1
        }
    }

    nextStep = () => {
        this.setState({
            step: this.state.step + 1,
        });
    }

    previousStep = () => {
        this.setState({
            step: this.state.step - 1,
        });
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { email, username, password } = this.state;
        alert(`Your registration detail: \n 
            Email: ${email} \n 
            Username: ${username} \n
            Password: ${password}`);
    }
    
    render() {
        const formSteps = {1: <FormStepOne />, 2: <FormStepTwo />, 3: <FormStepThree />, 4: <FormStepFour />}
        return (
            <Segment>
                <Form>
                    {formSteps[this.state.step]}
                </Form>
                <FormNavigation step={this.state.step} next={this.nextStep} previous={this.previousStep}  />
            </Segment>
        );
    }
}

class CustomerRegisterForm extends React.Component {
    render() {
        return(
            <div>
               Your Mom
            </div>
        );
    }
}


class FormStepOne extends React.Component {
    render() {
        return (
            <Form.Group>
                <Form.Input label='Email' type='email' />
                <Form.Input label='Password' type='password' />
                <Form.Input label='Repeat Password' type='password' />
            </Form.Group>  
        );
    }
}

class FormStepTwo extends React.Component {
    render() {
        return (
            <Form.Group>
                <Form.Select label='I am a' placeholder='Select Service' />
                <Form.Select label='Registering as' placeholder='Select Type' />
                <Form.Input label='Company Name/Full Name' type='text' />
            </Form.Group>
        );
    }
}

class FormStepThree extends React.Component {
    render() {
        return (
            <Form.Group>
                <Form.Input label='HMRC Number (if applicable)' type='text' />
                <Form.Input label='Address Line 1' type='text' />
                <Form.Input label='Address Line 2' type='text' />
                <Form.Input label='Post Code' type='text' />
                <Form.Input label='City' type='text' />
                <Form.Input label='Phone Number' type='text' />
            </Form.Group>
        );
    }
}

class FormStepFour extends React.Component {
    render() {
        return (
            <Form.Group>
                <Form.Select label='Primary Services' placeholder='Select Service' />
                <Form.Select label='Secondary Services' placeholder='Select Service' />
                <Form.Select label='Car Collection Services' placeholder='Select Service' />
                <Form.Input label='Brand Specialty' type='text' />
                <Form.Input label='Tell us about your company/self!' type='text' />
            </Form.Group>
        );
    }
}

class FormNavigation extends React.Component {
    render() {
        const finalStep = 4;
        let nav;
        if (this.props.step === 1) {
            nav = (
                <div>
                    <NavigationButton text={"Next"} onClick={this.props.next} />
                </div>
            );    
        } else if (this.props.step < finalStep) {
            nav = (
                <div>
                    <NavigationButton text={"Back"} onClick={this.props.previous} />
                    <NavigationButton text={"Next"} onClick={this.props.next} />
                </div>
            );
        } else {
            nav = (
                <div>
                    <NavigationButton text={"Back"} onClick={this.props.previous} />
                    <Button type='submit' as={Link} to='/searchresults' >Submit</Button>
                </div>
            );
        }
        return nav;
    }
}

class NavigationButton extends React.Component {
    render() {
        return (
          <Button onClick={this.props.onClick}>
              {this.props.text}
          </Button>  
        );
    }
}

export default Register;
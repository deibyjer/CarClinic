import React from 'react';
import {Form} from "semantic-ui-react";

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

class PageHeader extends React.Component {
    render() {
        return (
            <div>
                <Logo />
                <BackButton />
            </div>
        );
    }
}

class Logo extends React.Component {
    render() {
        return (
          <div>
              Logo
          </div>  
        );
    }
}

class BackButton extends React.Component {
    render() {
        return (
            <div>
                Back
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
    render() {
        return (
            <Form>
                <FormStepOne />
                <FormStepTwo />
                <FormStepThree />
                <FormStepFour />
            </Form>
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

class PageFooter extends React.Component {
    render() {
        return (
            <div>
                Footer
            </div>
        );
    }
}

export default Register;
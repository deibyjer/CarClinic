import React from 'react';
import {Anchor, Box, Form, FormField, TextInput, Header, Text, Footer} from 'grommet';

class Register extends React.Component {
    render() {
        return (
            <Box>
                <LayoutContainer />
            </Box>
        );
    }
}

class LayoutContainer extends React.Component {
    render() {
        return (
          <Box>
              <PageHeader />
              <PageContent />
              <PageFooter />
          </Box>  
        );
    }
}

class PageHeader extends React.Component {
    render() {
        return (
            <Header>
                <Logo />
                <BackButton />
            </Header>
        );
    }
}

class Logo extends React.Component {
    render() {
        return (
          <Box>
              Logo
          </Box>  
        );
    }
}

class BackButton extends React.Component {
    render() {
        return (
            <Box>
                Back
            </Box>
        );
    }
}

class PageContent extends React.Component {
    render() {
        return (
          <Box>
              <RegisterForm />
          </Box>  
        );
    }
}

class RegisterForm extends React.Component {
    render() {
        return (
          <Form>
              <Text>
                  Sign Up!
              </Text>
              <FormStepOne />
          </Form>  
        );
    }
}

class FormStepOne extends React.Component {
    render() {
        return (
          <Box>
              <FormField label="email">
                  <TextInput placeholder="type here" />
              </FormField>
          </Box>  
        );
    }
}

class FormStepTwo extends React.Component {
    render() {
        return (
            <Box>
                Step two
            </Box>
        );
    }
}

class FormStepThree extends React.Component {
    render() {
        return (
            <Box>
                Step three
            </Box>
        );
    }
}

class FormStepFour extends React.Component {
    render() {
        return (
            <Box>
                Step four
            </Box>
        );
    }
}

class PageFooter extends React.Component {
    render() {
        return (
            <Footer>
                Footer
            </Footer>
        );
    }
}

export default Register;
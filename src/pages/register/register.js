import React from 'react';

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
          <div>
              <div>
                  Sign Up!
              </div>
              <FormStepOne />
          </div>  
        );
    }
}

class FormStepOne extends React.Component {
    render() {
        return (
          <div>

          </div>  
        );
    }
}

class FormStepTwo extends React.Component {
    render() {
        return (
            <div>
                Step two
            </div>
        );
    }
}

class FormStepThree extends React.Component {
    render() {
        return (
            <div>
                Step three
            </div>
        );
    }
}

class FormStepFour extends React.Component {
    render() {
        return (
            <div>
                Step four
            </div>
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
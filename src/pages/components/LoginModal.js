import React from 'react'
import {Button, Form, Header, Icon, Menu, Modal} from 'semantic-ui-react'

class LoginModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            setOpen: false,
        }
    }

    render() {
        return (
            <Modal
                onClose={() => this.setState({
                    setOpen: false
                    })}
                onOpen={() => this.setState({
                    setOpen: true
                })}
                open={this.state.setOpen}
                size='small'
                trigger={<Menu.Item>Login</Menu.Item>}
            >
                <Header icon>
                    <Icon name='user' />
                    Login
                </Header>
                <Modal.Content>
                    <LoginForm />
                </Modal.Content>
                <Modal.Actions>
                    <Button basic color='red' inverted onClick={() => this.setState({
                        setOpen: false
                        })}>
                        <Icon name='remove' /> No
                    </Button>
                    <Button color='green' inverted onClick={() => this.setState({
                        setOpen: false
                    })}>
                        <Icon name='checkmark' /> Yes
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

class LoginForm extends React.Component {
    render() {
        return (
            <Form>
                <Form.Field>
                    <label>Email</label>
                    <input type="email" />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input type="password" />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form> 
        );
    }
}

export default LoginModal;
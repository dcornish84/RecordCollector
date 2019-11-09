import React, { Component } from "react"
import AuthManager from "../../Modules/AuthManager"
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { withRouter } from "react-router-dom";
import "./Auth.css";


class Login extends Component {

    // Set initial state

    state = {
        email: "",
        password: "",
        id: "",
    }


    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    //
    handleLogin = (e) => {
        e.preventDefault()
        /*
            For now, just store the email and password that
            the customer enters into local storage.
        */
        AuthManager.getUserEmail(this.state.email).then((user) => {
            if (this.state.email === "") {
                window.alert("Please enter email")
            } else if (this.state.password === "") {
                window.alert("Please enter password")
            } else if (user !== null) {
                let credentials = user[0].id
                this.props.setUser(credentials);
                this.props.history.push("/");
            } else {
                window.alert("Credentials do not match")
            }

        })
    }


    render() {
        return (
            <>
                <div >
                    <picture>
                        <img className="loginImage" src={require('../../images/LoginButton.png')} alt="RecordCollector Logo" />
                    </picture>
                </div >
                <div className="logRegForm">
                    <Form>
                        <FormGroup className="loginEmail">
                            <Label htmlFor="inputEmail" className="mr-sm-2">Email</Label>
                            <Input onChange={this.handleFieldChange}
                                required="" autoFocus="" type="email" name="email" id="email" />
                        </FormGroup>
                        <FormGroup className="loginPassword">
                            <Label htmlFor="inputPassword">Password</Label>
                            <Input onChange={this.handleFieldChange}
                                required="" type="password" name="password" id="password" />
                        </FormGroup>
                        <Button outline color="secondary" size="sm" className="loginSubmit" onClick={this.handleLogin}>Submit</Button>
                    </Form>
                </div>

            </>
        );
    }
}
export default withRouter(Login);
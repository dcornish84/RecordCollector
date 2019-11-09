import React, { Component } from "react"
import AuthManager from "../../Modules/AuthManager";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./Auth.css";

class Register extends Component {

    // Set initial state
    state = {
        name: "",
        rEmail: "",
        rPassword: "",
    };

    handleFieldChange = (event) => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }

    handleRegister = (e) => {
        e.preventDefault()
        this.toggle()
        AuthManager.getAll("users").then((users) => {
            let isMatch = users.find(user => user.email.toLowerCase() === this.state.rEmail.toLowerCase())

            if (this.state.name === "") {
                window.alert("Please enter a name")
            } else if (this.state.email === "") {
                window.alert("Please enter an email address")
            } else if (this.state.password === "") {
                window.alert("Please enter a password")
            } else if (isMatch) {
                window.alert("Email address already exists")
            } else {
                let newUser = {
                    name: this.state.name,
                    email: this.state.rEmail,
                    password: this.state.rPassword,
                };
                AuthManager.post("users", newUser)
                    .then((createdUser) => {
                        sessionStorage.setItem("userId", createdUser.id);
                        sessionStorage.setItem("email", this.state.email);
                        sessionStorage.setItem("name", this.state.name);


                        //This determines which page you land on upon registration
                        this.props.history.push("/")
                    }
                    )
            }
        }
        )

    }

    render() {
        return (
            <>
                <div >
                    <picture>
                        <img className="loginImage" src={require('../../images/RegisterButton.png')} alt="RecordCollector Logo" />
                    </picture>
                </div >
                <div className="logRegForm">
                    <Form onSubmit={this.handleRegister} inline>
                        <FormGroup className="registerName">
                            <Label htmlFor="name" className="nameLogText">Name</Label>
                            <Input onChange={this.handleFieldChange} type="name"
                                id="name"
                                placeholder="Name"
                                required="" autoFocus="" />
                        </FormGroup>
                        <FormGroup className="registerEmail">
                            <Label htmlFor="inputEmail" className="emailLogText">Email</Label>
                            <Input onChange={this.handleFieldChange} type="email"
                                id="rEmail"
                                placeholder="Email address"
                                required="" autoFocus="" />
                        </FormGroup>
                        <FormGroup className="registerPassword">
                            <Label htmlFor="inputPassword" className="passwordLogText">Password</Label>
                            <Input onChange={this.handleFieldChange} type="password"
                                id="rPassword"
                                placeholder="Password"
                                required="" />
                        </FormGroup>
                        <Button outline color="secondary" size="md" className="registerSubmit">Submit</Button>
                    </Form>
                </div>
            </>
        )
    }
}
export default Register;
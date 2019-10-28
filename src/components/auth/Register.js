import React, { Component } from "react"
import AuthManager from "../../Modules/AuthManager";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";


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
                <div className="logRegForm">
                    <h3 className="logRegTitle">Register</h3>
                    <Form onSubmit={this.handleRegister} inline>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label htmlFor="name" className="mr-sm-2">Name:</Label>
                            <Input onChange={this.handleFieldChange} type="name"
                                id="name"
                                placeholder="Name"
                                required="" autoFocus="" />
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label htmlFor="inputEmail" className="mr-sm-2">Email:</Label>
                            <Input onChange={this.handleFieldChange} type="email"
                                id="rEmail"
                                placeholder="Email address"
                                required="" autoFocus="" />
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label htmlFor="inputPassword" className="mr-sm-2">Password:</Label>
                            <Input onChange={this.handleFieldChange} type="password"
                                id="rPassword"
                                placeholder="Password"
                                required="" />
                        </FormGroup>
                        <Button className="submit">Submit</Button>
                    </Form>
                </div>
            </>
        )
    }
}
export default Register;


// import React, { Component } from "react"
// import AuthManager from "../../Modules/AuthManager"
// import { Button, Form, FormGroup, Label, Input } from "reactstrap";


// class Register extends Component {

//     // Set initial state
//     state = {
//         name: "",
//         email: "",
//         password: "",
//     };

//     handleFieldChange = (event) => {
//         const stateToChange = {}
//         stateToChange[event.target.id] = event.target.value
//         this.setState(stateToChange)
//     }

//     handleRegister = (e) => {
//         e.preventDefault()
//         AuthManager.getUserData().then((users) => {
//             let validate = users.find(user => user.email.toLowerCase() === this.state.email.toLowerCase())

//             if (this.state.name === "") {
//                 window.alert("Please enter a name")
//             } else if (this.state.email === "") {
//                 window.alert("Please enter an email address")
//             } else if (this.state.password === "") {
//                 window.alert("Please enter a password")
//             } else if (validate) {
//                 window.alert("Email address already exists")
//             } else {
//                 let newUser = {
//                     name: this.state.name,
//                     email: this.state.email,
//                     password: this.state.password
//                 };
//                 AuthManager.createUser(newUser)
//                     .then((createdUser) => {
//                         //This determines which page you land on upon registration
//                         this.props.setUser(createdUser)
//                     }
//                     )
//             }
//         }
//         )
//     }

//     render() {
//         return (
//             <>
//                 <div className="logRegForm">
//                     <h3 className="logRegTitle">Register</h3>
//                     <Form onSubmit={this.handleRegister} inline>
//                         <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
//                             <Label htmlFor="name" className="mr-sm-2">Name:</Label>
//                             <Input onChange={this.handleFieldChange} type="name"
//                                 id="name"
//                                 placeholder="Name"
//                                 required="" autoFocus="" />
//                         </FormGroup>
//                         <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
//                             <Label htmlFor="inputEmail" className="mr-sm-2">Email:</Label>
//                             <Input onChange={this.handleFieldChange} type="email"
//                                 id="email"
//                                 placeholder="Email address"
//                                 required="" autoFocus="" />
//                         </FormGroup>
//                         <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
//                             <Label htmlFor="inputPassword" className="mr-sm-2">Password:</Label>
//                             <Input onChange={this.handleFieldChange} type="password"
//                                 id="password"
//                                 placeholder="Password"
//                                 required="" />
//                         </FormGroup>
//                         <Button className="submit">Submit</Button>
//                     </Form>
//                 </div>
//             </>
//         )
//     }
// }
// export default Register;
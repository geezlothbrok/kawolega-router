import React, { Component } from 'react'
import  Navbar  from '../components/Navbar'
import  Footer  from '../components/Footer'

export default class Login extends Component {
    render() {
        return (
            <div>
                <div className="container" style={{ height: 450, backgroundColor: '#E5E7E9', paddingLeft: 1, paddingRight: 1 }}>

                    <Navbar />
                    <div className="row">
                        <di className="col-md-2"></di>
                        <di className="col-md-8">
                            <h3>Already a Member? Login to add your Startup.</h3>
                            <br></br>
                            <div className="register">
                                <form action="#">
                                    <div className="form-group">
                                        <label for="full name">Email address</label>
                                        <input type="text" className="form-control" name="email" id="emailaddress" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <label for="full name">Password</label>
                                        <input type="password" className="form-control" name="password" id="password" placeholder="Password" />
                                    </div>

                                    <button type="submit" className="btn btn-primary"> Sign up</button>
                                </form>
                            </div>
                        </di>
                        <div className="col-md-2"></div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

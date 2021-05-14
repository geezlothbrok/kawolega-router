import React, { Component } from 'react'
import  Navbar  from '../components/Navbar'
import  Footer  from '../components/Footer'

export default class Register extends Component {
    render() {
        return (
            <div>
                <div className="container" style={{ height: 600, backgroundColor: '#E5E7E9', paddingLeft: 1, paddingRight: 1 }}>
                    <Navbar />

                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <h3>Join KawoLegal. Sign up to get you Startup listed now!</h3>
                            <br></br>
                            <div className="register">
                                <form action="#">
                                    <div className="form-group">
                                        <label for="full name">Full Name</label>
                                        <input type="text" className="form-control" name="name" id="fullname" placeholder="Full Name" />
                                    </div>
                                    <div className="form-group">
                                        <label for="full name">Email address</label>
                                        <input type="text" className="form-control" name="email" id="email" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <label for="full name">Password </label>
                                        <input type="password" className="form-control" name="Password" id="Password" placeholder="Password" />
                                    </div>
                                    <div className="form-group">
                                        <label for="full name">Confirm Password</label>
                                        <input type="password" className="form-control" name="password" id="confirmpassword" placeholder="Confirm Password" />
                                    </div>
                                    <button type="submit" className="btn btn-primary"> Sign up</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HomeNavbar extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <div classNameName='col-md-12'>
                    <nav className="navbar navbar-default navbar-home" style={{backgroundColor: 'transparent', border: 'transparent', borderRadius: 0}}>
                        <div className="container-fluid">

                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <img src={"images/kawo-legal-logo.png"} />
              </div>


                                <div  id="navlinks">
-
                                    <ul className="nav navbar-nav navbar-right">
                                        <li style={{ border: 2, color: '#d81919' }}> <Link to="/">Home</Link></li>
                                        <li><Link to="/startups">Startups</Link></li>
                                        <li><Link to="/register">Register</Link></li>
                                        <li> <Link to="/login">Login</Link></li>
                                    </ul>
                                </div>
                            </div>
        </nav>
                </div>
                </div>
        )
    }
}

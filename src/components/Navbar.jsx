import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class extends Component {
    render() {
        return (
            <div>
                <div className='col-md-12'>
                    <nav class="navbar navbar-default navbar-home" style={{backgroundColor: 'rgba(59, 12, 12)', border: 'transparent', borderRadius: 0}}>
                        <div class="container-fluid">
                            
              <div class="navbar-header">
                                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                    <span class="sr-only">Toggle navigation</span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                                <img src={"images/kawo-legal-logo.png"} />
              </div>

                                
              <div  id="navlinks">

              <ul className="nav navbar-nav navbar-right">
                                        <li><Link to="/">Home</Link></li>
                                        <li className = {this.props.startups} style= {{ border: 2, color: '#d81919' }}> <Link to="/startups">Startups</Link></li>
                                        <li className = {this.props.register}> <Link to="/register">Register</Link></li>
                                        <li className = {this.props.login}> <Link to="/login">Login</Link></li>
                                    </ul>
                                </div>
            </div>
        </nav>
                </div>
                </div>
        )
    }
}

import React, { Component } from 'react'
import  HomeFooter  from '../components/HomeFooter'
import HomeNavbar from '../components/HomeNavbar'

export default class Home extends Component {
    render() {
        return (
            <div>
                 <div className="view" style={{height: 700}}>
                <HomeNavbar />
                    <div className="full-bg-img flex-center">
                    <div className="container container-flex">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <p>

                        </p>
                        <h1 style={{fontSize: 70}}>
                            KAWOLEGAL
                        </h1>
                        <p></p>
                        <p>

                        </p>
                        <h3>                                               A collabrative ecosystem for problem 
                            solvers and support for Startups.</h3>
                        <p></p>
                        <br></br>
                        <p style={{paddingLeft: 40}}>
                            <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false">
                                Register Now!
                            </button>
                        </p>
                    </div>
                </div>
                   
            </div>
            </div><br></br>
            <HomeFooter />
            </div>
        )
    }
}

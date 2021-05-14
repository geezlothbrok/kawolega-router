import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer">
        <div className="row">
            <div className="col-md-6" style= {{textAlign: 'center'}}>
                <span class="text">
                    © 2017 Kawolegal. All Rights Reserved
                </span>
            </div>
            
            <div class="col-md-6 socialmedia" style= {{ paddingLeft: 350 }}>
                <Link to="/" className="fa fa-facebook" style= {{fontSize: 20, fontWeight: 'bold' }}></Link>
                <Link to="/" className="fa fa-twitter" style= {{fontSize: 20, fontWeight: 'bold'}}></Link>
                <Link to="/" className="fa fa-linkedin" style= {{ontSize: 20, fontWeight: 'bold'}}></Link>
                <Link to="/" className="fa fa-instagram" style= {{fontSize: 20, fontWeight: 'bold'}}></Link>
            </div>
        </div>
    </div>

                
            </div>
        )
    }
}

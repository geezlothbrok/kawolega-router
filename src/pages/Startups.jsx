import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import StartupsDetails from '../components/StartupsDetails'
import Footer from '../components/Footer'

export default class  extends Component {
    render() {
        return (
            <div>
                <div class="container" style={{height: 700 ,backgroundColor: '#E5E7E9', paddingLeft: 1, paddingRight: 1}}>
                    <Navbar />
                    <div className = 'row'>
                        <div className = 'col-md-12'>
                            <form>
                                <input type= 'text' placeholder= 'Search startup by name or industry' style={{width: 600, borderRadius:5}}/>
                                <button type= 'search'><i className='fa fa-search'><span>Search</span></i></button>
                            </form>
                            
                        </div>
                    </div>
                    <StartupsDetails img='./images/kawothink.png' title='Think and Zoom' details ='Providing solutions for the visually impared, such as mind-controlled zooming, and wearable controlled zooming.' />
                    <br></br>

                    <StartupsDetails img ='./images/kawotutahub.jpeg' title ='Tutahub' details ='A website for tutorials' />
                    <br></br>

                    <StartupsDetails img ='./images/kawosleek.png' title='Sleekjob Academy' details='Trains world class software developers in Ghana and matches them to employment opportunities' />
                    
                    
                    
                </div>
                <br></br>
                    <Footer />
            </div>
        )
    }
}

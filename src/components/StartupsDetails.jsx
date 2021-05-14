import React, { Component } from 'react'

export default class  extends Component {
    constructor (props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div className = 'sartups'>
                    <div className = 'row'>
                        <div className ='col-md-2 image'>
                            <img src = {this.props.img}/>
                        </div>
                        <div className ='col-md-10 text'>
                            <h3 style ={{textAlign:'left'}}><a href ="#">{this.props.title}</a></h3>
                            <p id= 'details' style ={{textAlign:'left'}}> {this.props.details} </p>
                            <button type= 'button' className= 'btn btn-default' style ={{display:'flex'}}>See full detials</button>
                            <br></br><hr></hr>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react';
import { connect } from "react-redux";
import {createuser} from './actions'
// import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';

class CreateUser extends Component {

        state={
            Email:"",
            Password:"",
            ConfirmPassword:"",
            IP:"192.168.1.1",
            Device:"laptop",
            Location:"pindi",
            errMessage:""
        }

        onchange(e){
            this.setState({[e.target.name]: e.target.value})
        }
        save(){
            let {Email ,Password ,ConfirmPassword ,IP,Device , Location}= this.state;
            if(Email && Password  && ConfirmPassword  && IP && Device && Location){
                this.props.createuser({Email ,Password ,ConfirmPassword ,IP,Device , Location})
            }
            else{
                this.setState({errMessage:"Somefield is missing."})
            }
        }

    render() {
        return (
            <div className="container" id="login">
                <div className="row pop">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-top">


                                <div className="lab-inp">
                                    <label className="mb-0">Email</label>
                                    <input type="email" name="Email" onChange={(e)=>{ this.onchange(e)}} />
                                </div>
                                <div className="lab-inp">
                                    <label className="mb-0">Password</label>
                                    <input type="password"  name="Password" onChange={(e)=>{ this.onchange(e)}}/>
                                </div>
                                <div className="lab-inp">
                                    <label className="mb-0">Confirm Password</label>
                                    <input type="password" name="ConfirmPassword" onChange={(e)=>{ this.onchange(e)}} />
                                </div>
                                    <p style={{color:"red"}} className="text-center mt-2">{this.state.errMessage}</p>

                                <div className="createuser">
                                    <div className="right">
                                        <button onClick={()=>{ this.save()}}>Sign up</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({CreateUser }) => { 
    return {

        batch:CreateUser.batch
    };
};

const mapDispachToProps = dispatch => {
    return {
        dispatch: dispatch
    };
};
export default connect(
    mapStateToProps,
    {createuser}
)(CreateUser);
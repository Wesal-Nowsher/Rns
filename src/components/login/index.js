import React, {Component} from 'react';
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';
import {login} from './actions'

class Login extends Component {
    state={
        Email:"",
        Password:"",
        IP:"192.168.1.1",
        Device:"laptop",
        Location:"pindi",
        errMessage:""
    }

    onchange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    save(){
        let {Email ,Password  ,IP,Device , Location}= this.state;
        if(Email && Password    && IP && Device && Location){
            this.props.login({Email ,Password  ,IP,Device , Location})
        }
        else{
            this.setState({errMessage:"Somefield is missing."})
        }
    }

    render(){
        return(
            <div className="container" id="login">
                <div className="row pop">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-top height">
                                <div className="text-center">

                                </div>
                                <div className="lab-inp">
                                    <label className="mb-0">Email</label>
                                    <input type="text" name="Email" onChange={(e)=>{ this.onchange(e)}}  required/>
                                </div>
                                <div className="lab-inp">
                                    <label className="mb-0">Password</label>
                                    <input type="password" name="Password" onChange={(e)=>{ this.onchange(e)}}  required/>
                                </div>
                            </div>
                            <p style={{color:"red"}} className="text-center mt-2">{this.state.errMessage}</p>
                            <div className="card-bottom">
                                <div className="right">
                                    <input type="checkbox"/>Remember me
                                </div>
                                <div className="right">
                                    <button type="button" onClick={()=>{ this.save()}} >LOGIN</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
const mapStateToProps = ({login}) => {
    return {

        login:login.login
    };
};

const mapDispachToProps = dispatch => {
    return {
        dispatch: dispatch
    };
};

// export default withRouter(connect(
//     mapStateToProps,
//     {}
// )(Login));


export default connect(
    mapStateToProps,
    {login}
)(Login);
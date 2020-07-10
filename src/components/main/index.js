import React, {Component} from 'react'
import {withRouter, Link } from 'react-router-dom';

import { connect } from "react-redux";
class main extends Component{
    render(){
        return (
            <div className="d-flex justify-content-center align-items-center " style={{height:"600px"}}>
                <Link to="/login" className="m-5">Login</Link>
                <Link to="/signup" className="m-5">Sign up</Link>
            </div>
        )
    }
}
const mapStateToProps = ({

                         }) => {
    return {


    };
};

const mapDispachToProps = dispatch => {
    return {
        dispatch: dispatch
    };
};
export default withRouter(connect(
    mapStateToProps,
    {}
)(main));
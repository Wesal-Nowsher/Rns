import React, { Component } from 'react';
import { connect } from "react-redux";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import SideBar from "../sideBar";

import {withRouter} from 'react-router-dom';
import OutsideClickHandler from 'react-outside-click-handler';

class Layout extends Component {
    state = {
        openstate: false,
    }
    open1 = () => {
        this.setState({ openstate: !this.state.openstate });
    }
    goto(name){
        //NON REPEATABLE

    }
    render() {

        return (
            <div style={{height:"500px"}} className="container-fluid d-flex  flex-column justify-content-center align-items-center">
                <h1>Welcome to dashboard</h1>
                <button>Sign out</button>
            </div>
        )
    }
}
const mapStateToProps = ({ }) => {
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
)(Layout));

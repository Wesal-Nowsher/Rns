import { combineReducers } from "redux";
import globalReducer from "./globalState";
import sideBarReducer from '../components/sideBar/reducer'

import LoginReducer from '../components/login/reducer';

import CreateUserReducer from "../components/createUser/reducer";
import LayoutReducer from "../components/layout/reducer";



const rootReducer = combineReducers({
	main: globalReducer,
	sidebar: sideBarReducer,

	login:LoginReducer,
	CreateUser:CreateUserReducer,
    Layout:LayoutReducer



});

export default rootReducer;

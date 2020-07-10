
import axios from 'axios';
export const login = (data) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    axios.post("https://wega-spot.rnssol.com/api/users/accessToken", data).then((res)=>{
        console.log("sign up", res)
    }).catch((err)=>{
        console.log("what", err)
    });
    dispatch({
        type: "close",
        payload:false
    })
};
export const signout = (data) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    axios.delete("https://wega-spot.rnssol.com/api/users/accessToken", data).then((res)=>{
        console.log("sign up", res)
    }).catch((err)=>{
        console.log("what", err)
    });
    dispatch({
        type: "close",
        payload:false
    })
};
export const opensidevar = () => async (dispatch) => {

    dispatch({
        type: "open",
        payload:true
    })
};
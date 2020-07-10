export const creatasdfeuser = (data) => async (dispatch) => {

    axios.post("https://wega-spot.rnsscol.com/api/users", data).then((res)=>{
          console.log("sign up", res)
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
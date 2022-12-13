import axiosInstance from '../../axios config/axiosInstance';

export function GetCat(catName) {
    const lang = localStorage.getItem('lang');

    let config = {
        headers: {
        }
    }
    return (dispatch) => {
        console.log(catName);
        axiosInstance.get(`/units/category/${catName}?lang=${lang}`, config).then((res) => {
            console.log(res.data);
            console.log(45555555);

            dispatch({ type: "GET_CAT", payload: res.data })

        }).catch((err) => {


        })

    }


}
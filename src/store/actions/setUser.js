import { useSelector } from 'react-redux';
import axiosInstance from '../../axios config/axiosInstance';



export function setUser(user) {

    return (dispatch) => {

        axiosInstance.post('/users', user).then((res) => {
            console.log(res.data);
            dispatch({ type: "SET_USER", payload: res.data })
            // if (res.date) {
            localStorage.setItem('token', res.data.token);
            // }
            // return res.data
        }).catch((err) => {
        })

    }
}


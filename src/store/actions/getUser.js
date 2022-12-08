import axiosInstance from '../../axios config/axiosInstance';
import { useDispatch, useSelector } from 'react-redux';
import { useContext, useEffect } from 'react';
import { setUser } from './setElement';
import { authContext } from '../../contexts/auth';


export function GetUser() {
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(setUser())
    // }, []);

    const token = localStorage.getItem('token')

    console.log(token);
    if (token) {
        console.log(token);

        let config = {
            headers: {
                'Authorization': token
            }
        }
        return (dispatch) => {

            axiosInstance.get(`/users`, config).then((res) => {
                console.log(res.data);

                dispatch({ type: "GET_USER", payload: res.data })

            }).catch((err) => {


            })

        }
    }

}
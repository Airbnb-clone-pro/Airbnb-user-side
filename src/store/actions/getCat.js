import axiosInstance from '../../axios config/axiosInstance';
import { useDispatch, useSelector } from 'react-redux';
import { useContext, useEffect } from 'react';
import { authContext } from '../../contexts/auth';


export function GetCat(catName) {
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(setUser())
    // }, []);
    const lang=localStorage.getItem('lang');

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
import React, { useContext } from 'react';
import { Container } from "react-bootstrap";
import SingleCard from './../../components/card/card'
import CatList from '../../components/catList/catList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { GetCat, GetUnits } from '../../store/actions/getUnits';
import { useTranslation } from 'react-i18next';
import axiosInstance from '../../axios config/axiosInstance';


const Home = () => {
    const { t, i18n } = useTranslation();

    const dispatch = useDispatch()
    const Units = useSelector(state => state.getUnits)
    console.log(Units);
    const lang = localStorage.getItem('lang');

    useEffect(() => {
        axiosInstance.get(`/units?lang=${lang}`).then((res) => {
            console.log(res.data);
            console.log();
            dispatch(GetUnits(res.data))

        }).catch((err) => {

        })
    }, [i18n.language]);

    return (
        <div>
            {/* <Navbar /> */}
            <CatList />

            <div className="mx-5 row row-cols-md-3 row-cols-1 row-cols-sm-2 row-cols-lg-4 mt-5">
                {Units.map((card) => (
                    <SingleCard data={card} key={card.id} />
                ))}
            </div>




            {/* 
            <Modal show={showLogin} onHide={handleCloseLogin} className=""
            // size="lg"
            // aria-labelledby="contained-modal-title-vcenter"
            // centered
            >
                <Modal.Body style={{ borderRadius: '2rem' }} className="">
                    <div className="signup-container ">
                        <div className="finish-signup p-0">
                            <h5 className="text-center">Log in </h5>
                        </div>
                        <form onSubmit={(e) => { handleForm(e) }} className=" " method='GET' >

                        </form >
                    </div>
                </Modal.Body >
            </Modal > */}



        </div>
    );
}

export default Home;

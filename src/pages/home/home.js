import React from 'react';
import SingleCard from './../../components/card/card'
import CatList from '../../components/catList/catList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { GetUnits } from '../../store/actions/getUnits';
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
        <div className='px-5'>
            {/* <Navbar /> */}
            <CatList />

            <div className="row row-cols-md-2 row-cols-1 row-cols-lg-4 mt-4">
                {Units.map((card) => (
                    <SingleCard data={card} key={card.id} />
                ))}
            </div>

        </div>
    );
}

export default Home;

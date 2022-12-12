import React, { useContext } from 'react';
import Navbar from '../../components/header/Header';
import { Container } from "react-bootstrap";
import SingleCard from './../../components/card/card'
import CatList from '../../components/catList/catList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { GetCat } from '../../store/actions/getCat';
import { useTranslation } from 'react-i18next';


const Home = () => {
    const { t, i18n } = useTranslation();

    const dispatch = useDispatch()
    const catUnits = useSelector(state => state.cat)
    console.log(catUnits);
    useEffect(() => {
        dispatch(GetCat('Amazing views'))
    }, [i18n.language]);

    return (
        <div>
            {/* <Navbar /> */}
            <CatList />

            <Container>
                <div className="row row-cols-md-3 row-cols-1 row-cols-sm-2 row-cols-lg-4 mt-5">
                    {catUnits.map((card) => (
                        <SingleCard data={card} key={card.id} />
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Home;

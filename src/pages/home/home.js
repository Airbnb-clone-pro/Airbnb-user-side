import React, { useContext } from 'react';
import Navbar from '../../components/header/Header';
import { Container } from "react-bootstrap";
import SingleCard from './../../components/card/card'
import CatList from '../../components/catList/catList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCat } from '../../store/actions/getCat';


const Home = () => {

    const dispatch = useDispatch()
    const catUnits = useSelector(state => state.cat)
    console.log(catUnits);
    useEffect(() => {
        dispatch(getCat('Amazing views'))
    }, []);

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

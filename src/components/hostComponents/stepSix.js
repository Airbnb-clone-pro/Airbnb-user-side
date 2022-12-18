import React, { useEffect, useState } from 'react';
import UnitTypeCard from './cards/unitTypeCard';
import Style from 'style-it';
import { minWidth } from '@mui/system';
import PlaceTypeCard from './cards/placeType';
import CottageIcon from '@mui/icons-material/Cottage';
import countriesAPI from '../../axios config/Api';
import axios from 'axios';

const StepSix = () => {
    const [countries, setCountries] = useState([])
    const [states, setStates] = useState([])
    const [cities, setCities] = useState([])

    console.log(countries, states, cities);


    let config = {
        headers: {
            "Accept": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJzYXJyYXJlZTVAZ21haWwuY29tIiwiYXBpX3Rva2VuIjoiWGN5WDYyYUhwTmtNaDltY1dPbElCTW13Y1VOWGcwMVJuVm90Z056Y2Zrd1p3NnMwLVJQXzdFU05VQVRVUGxTZFp4QSJ9LCJleHAiOjE2NzEyMzQzOTR9.KeRwhuxollMhTOnjIUuVwGTwj2wLGSZCq19Wnml31Fs",
        }
    }


    useEffect(() => {
        countriesAPI.get("/countries/", config).then((res) => {
            // console.log(res.data);
            setCountries(res.data)
        }).catch((err) => {
            console.log(err);
        })

    }, []);

    function getStates(value) {
        countriesAPI.get(`/states/${value}`, config).then((res) => {
            setStates(res.data)
        }).catch((err) => {
            console.log(err);
        })

    }

    function getCities(value) {
        countriesAPI.get(`cities/${value}`, config).then((res) => {
            setCities(res.data)
        }).catch((err) => {
            console.log(err);
        })

    }

    return (
        <div className=' my-4  p3  d-flex justify-content-center '>

            <div className='p-3 ' style={{ maxWidth: '600px', minWidth: '300px' }}>
                <div className="mb-4">
                    <h2 className='' style={{ maxWidth: '550px' }}>Where's your place located?</h2>
                    <p className="text-secondary" style={{ fontSize: '18px' }}>Your address is only shared with guests after they’ve made a reservation.</p>
                </div >

                <div className='row mb-3' >
                    <h5 className="text-secondary" style={{ fontSize: '16px' }}>Country :</h5>

                    <select className='form-control' onChange={(e) => { getStates(e.target.value) }}>
                        {countries.map((c, index) => {
                            return <option key={index}>{c.country_name}</option>
                        })
                        }
                    </select>
                </div >
                <div className='row mb-3' >
                    <h5 className="text-secondary" style={{ fontSize: '16px' }}>State :</h5>

                    <select className='form-control' onChange={(e) => { getCities(e.target.value) }}>
                        {states.map((s, index) => {
                            return <option key={index}>{s.state_name}</option>
                        })
                        }
                    </select>
                </div >
                <div className='row' >
                    <h5 className="text-secondary" style={{ fontSize: '16px' }}>City :</h5>

                    <select className='form-control' onChange={() => { }}>
                        {cities.map((c, index) => {
                            return <option key={index}>{c.city_name}</option>
                        })
                        }
                    </select>
                </div >
            </div>
        </div >



    );
}

export default StepSix;

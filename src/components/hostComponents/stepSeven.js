import React, { useEffect, useState } from 'react';
import UnitTypeCard from './cards/unitTypeCard';
import Style from 'style-it';
import { minWidth } from '@mui/system';
import PlaceTypeCard from './cards/placeType';
import CottageIcon from '@mui/icons-material/Cottage';
import { useDispatch, useSelector } from 'react-redux';
import { unit } from '../../store/actions/unit';

const StepSeven = () => {
    const dispatch = useDispatch()
    let unite = useSelector(state => state.unit)

    const [price, setPrice] = useState(unite.price ? unite.price : 30)
    console.log(price);



    useEffect(() => {


        dispatch(unit({ price: price }))
        console.log(unite);

    }, [price]);

    return (
        <div className=' my-4  p3  d-flex justify-content-center '>
            <div className='p-3 ' style={{ maxWidth: '600px', minWidth: '300px' }}>
                <div className="mb-3">
                    <h2 className='' style={{ maxWidth: '550px' }}>Now, set your price</h2>
                    <p className="text-secondary" style={{ fontSize: '18px' }}>You can change it anytime</p>
                </div >
                <div className='row  rounded-2 d-flex justify-content-center align-content-center mt-4' style={{ backgroundColor: '#f8fafc', width: '95%', height: '265px', border: '2px lightgray solid' }} >
                    <div className='d-flex justify-content-evenly '>
                        <button className='mt-1 rounded-circle border border-secondary ' onClick={() => { setPrice(price - 5) }} style={{ width: "43px", fontSize: '22px', height: "43px", }}>-</button>
                        <input className=' border border-secondary rounded-2 text-center ' readOnly value={'$' + price} min="10" style={{ width: '63%', height: '70px', fontSize: '20px', fontWeight: "bold" }} />
                        <button className='mt-1 rounded-circle border border-secondary p-0 ' onClick={() => { setPrice(price + 5) }} style={{ width: "43px", fontSize: '22px', height: "43px", }}>+</button>
                    </div>
                    <p className='co1-12 text-center pt-2'>per night</p>
                    <p className=' text-center pt-3 font-medium' style={{ width: "58%" }}>Places like yours in your area usually range from $23 to $38s</p>

                </div>
            </div >

        </div>

    );
}

export default StepSeven;

import React, { useEffect, useState } from 'react';
import UnitTypeCard from './cards/unitTypeCard';
import Style from 'style-it';
import { minWidth } from '@mui/system';
import PlaceTypeCard from './cards/placeType';
import CottageIcon from '@mui/icons-material/Cottage';
import { useDispatch, useSelector } from 'react-redux';
import { unit } from '../../store/actions/unit';

const StepOne = () => {


    const [selectedType, setSelectedType] = useState("")

    const dispatch = useDispatch()
    let unite = useSelector(state => state.unit)


    function handleInputChange(title, icon) {
        // console.log(e);
        setSelectedType(title)
        console.log(selectedType);
    }
    useEffect(() => {


        dispatch(unit({ unitType: selectedType }))
        console.log(unite);

    }, [selectedType]);
    return (
        <div className=' my-4  p3  d-flex justify-content-center '>
            <div className=' ' style={{ maxWidth: '700px' }}>


                <div className='mb-5 p-3 '  >
                    <h2 className='mb-5 ' style={{ maxWidth: '550px' }}>Which of these best describes your place?</h2>
                    <div className=' row' id='' >
                        <span className='p-0' style={{ width: "fit-content" }} onClick={() => { handleInputChange('House') }}>
                            <UnitTypeCard id="id" title="House" icon="bi bi-house-door " />
                        </span>

                        <span className='p-0' style={{ width: "fit-content" }} onClick={() => { handleInputChange('Apartment') }}>
                            <UnitTypeCard title="Apartment" icon="bi bi-building" />
                        </span>

                        <span className='p-0' style={{ width: "fit-content" }} onClick={() => { handleInputChange('Barn') }}>
                            <UnitTypeCard title="Barn" icon="bi bi-buildings" />
                        </span>
                    </div >
                </div>


            </div>
        </div>
    );
}

export default StepOne;

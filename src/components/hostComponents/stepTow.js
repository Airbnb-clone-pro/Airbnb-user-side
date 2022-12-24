import React, { useEffect, useState } from 'react';
import UnitTypeCard from './cards/unitTypeCard';
import Style from 'style-it';
import { minWidth } from '@mui/system';
import PlaceTypeCard from './cards/placeType';
import CottageIcon from '@mui/icons-material/Cottage';
import { useDispatch, useSelector } from 'react-redux';
import { unit } from '../../store/actions/unit';

const StepTow = () => {
    const [selectedType, setSelectedType] = useState("")



    const dispatch = useDispatch()
    let unite = useSelector(state => state.unit)


    function handleInputChange(title, icon) {
        // console.log(e);
        setSelectedType(title)
        console.log(selectedType);
    }
    useEffect(() => {


        dispatch(unit({ placeType: selectedType }))
        console.log(unite);

    }, [selectedType]);
    return (
        <div className=' my-4  py  d-flex justify-content-center '>
            <div className='p-3 ' style={{ maxWidth: '700px', minWidth: '300px' }}>
                <h2 className='mb-5 ' style={{ maxWidth: '550px' }}>What type of place will guests have?</h2>
                <div className='row' >
                    <span className='p-0' style={{ width: "" }} onClick={() => { handleInputChange('entire place') }}>

                        <PlaceTypeCard title="An entire place" desc="Guests have the whole place to themselves." icon="bi bi-house-door" />
                    </span>
                    <span className='p-0' style={{ width: "" }} onClick={() => { handleInputChange('private room') }}>

                        <PlaceTypeCard title="A private room" desc="Guests sleep in a private room but some areas may be shared with you or others." icon="bi bi-door-open" />
                    </span>
                    <span className='p-0' style={{ width: "" }} onClick={() => { handleInputChange('shared room') }}>

                        <PlaceTypeCard title="A shared room" desc="Guests sleep in a room or common area that may be shared with you or others." icon="bi bi-people" />
                    </span>
                </div >

            </div>
        </div>
    );
}

export default StepTow;

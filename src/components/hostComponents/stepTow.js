import React, { useState } from 'react';
import UnitTypeCard from './cards/unitTypeCard';
import Style from 'style-it';
import { minWidth } from '@mui/system';
import PlaceTypeCard from './cards/placeType';
import CottageIcon from '@mui/icons-material/Cottage';

const StepTow = () => {
    const [selectedType, setSelectedType] = useState({
        title: null,
        icon: null
    })
    console.log(selectedType);

    function handleInputChange(e) {
        console.log(3333333);
        setSelectedType({ title: e.target.title, icon: e.target.icon })
        console.log(selectedType);
    }
    return (
        <div className=' my-4  py  d-flex justify-content-center '>
            {/* <div className=' ' > */}
            <div className='p-3 ' style={{ maxWidth: '700px', minWidth: '300px' }}>
                <h2 className='mb-5 ' style={{ maxWidth: '550px' }}>What type of place will guests have?</h2>
                <div className='row' >
                    <PlaceTypeCard title="An entire place" desc="Guests have the whole place to themselves." icon="bi bi-house-door" className="fff" onClick={(e) => { handleInputChange(e) }} />
                    <PlaceTypeCard title="A private room" desc="Guests sleep in a private room but some areas may be shared with you or others." icon="bi bi-door-open" className="fff" onClick={(e) => { handleInputChange(e) }} />
                    <PlaceTypeCard title="A shared room" desc="Guests sleep in a room or common area that may be shared with you or others." icon="bi bi-people" className="fff" onClick={(e) => { handleInputChange(e) }} />
                </div >

            </div>
            {/* </div> */}
        </div>
    );
}

export default StepTow;

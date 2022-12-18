import React, { useEffect, useState } from 'react';
import UnitTypeCard from './cards/unitTypeCard';
import Style from 'style-it';
import { minWidth } from '@mui/system';
import PlaceTypeCard from './cards/placeType';
import CottageIcon from '@mui/icons-material/Cottage';

const StepOne = () => {
    const [selectedType, setSelectedType] = useState({})
    console.log(selectedType);

    // useEffect(() => {

    //     document.getElementById('id').onclick = () => {
    //         console.log(3333333);

    //     }

    // }, []);

    function handleInputChange(title, icon) {
        // console.log(e);
        setSelectedType({ title: title, icon: icon })
        console.log(selectedType);
    }
    return (
        <div className=' my-4  p3  d-flex justify-content-center '>
            <div className=' ' style={{ maxWidth: '700px' }}>


                <div className='mb-5 p-3 '  >
                    <h2 className='mb-5 ' style={{ maxWidth: '550px' }}>Which of these best describes your place?</h2>
                    <div className=' row' id='' >
                        <span className='p-0' style={{ width: "fit-content" }} onClick={() => { handleInputChange('House', 'bi bi-house-door') }}>
                            <UnitTypeCard id="id" title="House" name="hose" icon="bi bi-house-door " clickHandler={(e) => { setSelectedType(33); console.log(selectedType); }} />
                        </span>
                        <UnitTypeCard title="Apartment" icon="bi bi-building" className="fff" clickHandler={(title, icon) => { handleInputChange(title, icon) }} />
                        <UnitTypeCard title="Barn" icon="bi bi-buildings" className="fff" clickHandler={(e) => { handleInputChange(e) }} />
                    </div >
                </div>


            </div>
        </div>
    );
}

export default StepOne;

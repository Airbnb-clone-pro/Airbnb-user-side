
import React, { useState } from 'react';
import UnitTypeCard from './cards/unitTypeCard';
import Style from 'style-it';
import { minWidth } from '@mui/system';
import PlaceTypeCard from './cards/placeType';
import CottageIcon from '@mui/icons-material/Cottage';

const StepThree = () => {
    const [selectedType, setSelectedType] = useState({})

    function handleInputChange(e) {
        console.log(e.target);
        console.log(3333333);
        setSelectedType({ title: e.target.title, icon: e.target.icon })
        console.log(selectedType);
    }
    return (
        <div className=' my-4  p3  d-flex justify-content-center '>
            <div className=' ' style={{ maxWidth: '700px' }}>


                <div className='mb-5 p-3 '  >
                    <h2 className='mb-3 ' style={{ maxWidth: '550px' }}>Which of these best describes your place?</h2>
                    <div className=' row' >
                        <UnitTypeCard title="Wifi" icon="bi bi-wifi" onClick={(e) => { handleInputChange(e) }} />
                        <UnitTypeCard title="TV" icon="bi bi-tv" className="fff" onClick={(e) => { handleInputChange(e) }} />
                        <UnitTypeCard title="Kitchen" icon="fa-solid fa-kitchen-set" className="fff" onClick={(e) => { handleInputChange(e) }} />
                        <UnitTypeCard title="Washer" icon="bi bi-train-lightrail-front" className="fff" onClick={(e) => { handleInputChange(e) }} />
                        <UnitTypeCard title="Free parking" icon="bi bi-truck-front" className="fff" onClick={(e) => { handleInputChange(e) }} />
                        <UnitTypeCard title="Paid parking" icon="bi bi-cash-coin" className="fff" onClick={(e) => { handleInputChange(e) }} />
                        <UnitTypeCard title="Air conditioning" icon="bi bi-snow" className="fff" onClick={(e) => { handleInputChange(e) }} />
                        <UnitTypeCard title="Dedicated workspace" icon="bi bi-person-workspace" className="fff" onClick={(e) => { handleInputChange(e) }} />
                    </div >
                </div>


            </div>
        </div>
    );
}

export default StepThree;

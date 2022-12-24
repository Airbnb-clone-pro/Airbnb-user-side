
import React, { useEffect, useState } from 'react';
import UnitTypeCard from './cards/unitTypeCard';
import Style from 'style-it';
import { minWidth } from '@mui/system';
import PlaceTypeCard from './cards/placeType';
import CottageIcon from '@mui/icons-material/Cottage';
import { useDispatch, useSelector } from 'react-redux';
import { unit } from '../../store/actions/unit';

const StepThree = () => {
    const [selectedType, setSelectedType] = useState([])

    const dispatch = useDispatch()
    let unite = useSelector(state => state.unit)


    function handleInputChange(title, icon) {
        // console.log(e);
        var adv = { title: title, icon: icon }
        var bool = selectedType.find(e => e.title === adv.title)
        if (!bool) {
            setSelectedType([...selectedType, adv])
            console.log(selectedType);
        }
    }
    useEffect(() => {


        dispatch(unit({ advantages: selectedType }))
        console.log(unite);

    }, [selectedType]);
    return (
        <div className=' my-4  p3  d-flex justify-content-center '>
            <div className=' ' style={{ maxWidth: '700px' }}>


                <div className='mb-5 p-3 '  >
                    <h2 className='mb-3 ' style={{ maxWidth: '550px' }}>Which of these best describes your place?</h2>
                    <div className=' row' >
                        <span className='p-0' style={{ width: "fit-content" }} onClick={() => { handleInputChange('Wifi', 'bi bi-wifi') }}>
                            <UnitTypeCard title="Wifi" icon="bi bi-wifi" />
                        </span>

                        <span className='p-0' style={{ width: "fit-content" }} onClick={() => { handleInputChange("TV", "bi bi-tv") }}>
                            <UnitTypeCard title="TV" icon="bi bi-tv" />
                        </span>

                        <span className='p-0' style={{ width: "fit-content" }} onClick={() => { handleInputChange("Kitchen", "fa-solid fa-kitchen-set") }}>
                            <UnitTypeCard title="Kitchen" icon="fa-solid fa-kitchen-set" />
                        </span>

                        <span className='p-0' style={{ width: "fit-content" }} onClick={() => { handleInputChange("Washer", "bi bi-train-lightrail-front") }}>
                            <UnitTypeCard title="Washer" icon="bi bi-train-lightrail-front" />
                        </span>

                        <span className='p-0' style={{ width: "fit-content" }} onClick={() => { handleInputChange("Free parking", "bi bi-truck-front") }}>
                            <UnitTypeCard title="Free parking" icon="bi bi-truck-front" />
                        </span>

                        <span className='p-0' style={{ width: "fit-content" }} onClick={() => { handleInputChange("Paid parking", "bi bi-cash-coin") }}>
                            <UnitTypeCard title="Paid parking" icon="bi bi-cash-coin" />
                        </span>

                        <span className='p-0' style={{ width: "fit-content" }} onClick={() => { handleInputChange("Air conditioning", "bi bi-snow") }}>
                            <UnitTypeCard title="Air conditioning" icon="bi bi-snow" />
                        </span>

                        <span className='p-0' style={{ width: "fit-content" }} onClick={() => { handleInputChange('Dedicated workspace', 'bi bi-person-workspace') }}>
                            <UnitTypeCard title="Dedicated workspace" icon="bi bi-person-workspace" />
                        </span>
                    </div >
                </div>


            </div>
        </div>
    );
}

export default StepThree;

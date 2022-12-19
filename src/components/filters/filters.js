import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { filterContext } from '../../contexts/filtersModel';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useTranslation } from "react-i18next";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import './filters.css'
import { Checkbox, Divider, FormControlLabel , FormGroup, TextField } from '@mui/material';
// import { useDispatch, useSelector } from 'react-redux';


const Filters = () => {
    function valuetext(value) {
        return `${value}£`;
    }

    const minDistance = 1;

    const [value, setValue] = React.useState([8, 840]);

    const handleChange = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
        } else {
            setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
        }
    };

    // const catUnits = useSelector(state => state.cat)

    // const [filtered, setFiltered] = useState(catUnits);


    const [placeTypes, setPlaceTypes] = useState([])
    const [essentials, setEssentials] = useState([])

    // const placeTypeFilteration = (arr)=>{
    //     let newFiltered = catUnits.filter((place)=> arr.includes(place.placeType)? place: null)
    //     setFiltered(newFiltered);
    // }

    // const handlePlaceTypeChange = (event) => {
    //     if(event.target.checked){
    //         setPlaceTypes([...placeTypes, event.target.value])
    //         placeTypeFilteration(placeTypes)
    //     }else{
    //         setPlaceTypes(placeTypes.filter((place)=>place !== event.target.value))
    //         placeTypeFilteration(placeTypes)
    //     } 
    // }
    const handlePlaceTypeChange = (event) => {event.target.checked ?  setPlaceTypes([...placeTypes, event.target.value]): setPlaceTypes(placeTypes.filter((place)=>place !== event.target.value))}
    const handleEssentialsChange = (event) => {event.target.checked ?  setEssentials([...essentials, event.target.value]): setEssentials(essentials.filter((place)=>place !== event.target.value))}
    const handleHostLangChange = (event) => event.target.checked ? console.log(event.target.value) : console.log('it wokes')


    // useEffect(() => {
    //     console.log(filtered)
    // }, [filtered]);
    // const dispatch = useDispatch()


    const { t, i18n } = useTranslation()

    const { showFilters, setShowFilters } = useContext(filterContext)
    const handleCloseFilters = () => setShowFilters(false)

    const handleRooms = (event) => console.log(event.target.name, event.target.value)

    return (
        <Modal show={showFilters} onHide={handleCloseFilters}
            size="lg"
            centered
            scrollable
        >
            <Modal.Header closeButton elementType="div" style={(i18n.language === 'en' ? { 'direction': 'ltr' } : { 'direction': 'rtl' })}>
                <h5>{t("Filter")}</h5>
            </Modal.Header>
            <Modal.Body style={(i18n.language === 'en' ? { 'direction': 'ltr' } : { 'direction': 'rtl' })}>
                <Box sx={{ width: "95%" }}>
                    <h4>{t("Price range")}</h4>
                    <span className='opacity-60 my-5'>{t("The average nightly price is £59")}</span>
                    <Slider
                        getAriaLabel={() => 'Minimum distance'}
                        value={value}
                        onChange={handleChange}
                        getAriaValueText={valuetext}
                        disableSwap
                        isRtl={i18n.language === 'en' ? false : true}
                        sx={{color:"#111827", width:"85%", mx:"5%", my:"5vh"}}
                    />
                    <div className='flex justify-around' dir='ltr'>
                        <TextField
                            id="outlined-helperText"
                            label={t("Min price")}
                            value={valuetext(value[0] * 8)}
                            sx={{ width: '40%' }}
                        />
                        <span>-</span>
                        <TextField
                            id="outlined-helperText"
                            label={t("Max price")}
                            value={valuetext(value[1] * 8)}
                            sx={{ width: '40%' }}
                        />
                    </div>
                </Box>
                <Divider sx={{ my: 5 }} />
                <Box>
                    <h4>{t("Type of Place")}</h4>
                    <FormGroup>
                        <FormControlLabel componentsProps={{typography:{fontSize:20}}} control={<Checkbox />} label="Entire place" value={"Entire place"} onChange={handlePlaceTypeChange} />
                        <span className='opacity-60'>A place all to yourself</span>
                        <FormControlLabel componentsProps={{typography:{fontSize:20}}} control={<Checkbox />} label="Private room" value={"Private room"} onChange={handlePlaceTypeChange} />
                        <span className='opacity-60'>Your own room in a home or a hotel, plus some shared common spaces</span>
                        <FormControlLabel componentsProps={{typography:{fontSize:20}}} control={<Checkbox />} label="Shared room" value={"Shared room"} onChange={handlePlaceTypeChange} />
                        <span className='opacity-60'>A sleeping space and common areas that may be shared with others</span>
                        <button type=""onClick={()=>{console.log(placeTypes)}}>show place types</button>
                    </FormGroup>
                </Box>
                <Divider sx={{ my: 5 }} />
                <Box>
                    <h4>Rooms and beds</h4>
                    <h6 className='m-4 opacity-70'>Rooms</h6>
                    <ul class="flex justify-between w-5/6">
                        <li>
                            <input onClick={handleRooms} defaultChecked type="radio" id="rooms-any" name="rooms" value="rooms-any" class="hidden peer" />
                            <label for="rooms-any" class="w-full text-gray-500 rounded-lg border border-gray-200 px-4 py-2 cursor-pointer peer-checked:bg-gray-900 peer-checked:text-white hover:text-gray-600 hover:bg-grey-600">
                                any
                            </label>
                        </li>
                        <li>
                            <input onClick={handleRooms} type="radio" id="rooms-1" name="rooms" value="rooms-1" class="hidden peer" />
                            <label for="rooms-1" class="text-gray-500 rounded-lg border border-gray-200 px-4 py-2 cursor-pointer peer-checked:bg-gray-900 peer-checked:text-white hover:text-gray-600 hover:bg-grey-600">
                                1
                            </label>
                        </li>
                        <li>
                            <input onClick={handleRooms} type="radio" id="rooms-2" name="rooms" value="rooms-2" class="hidden peer" />
                            <label for="rooms-2" class="text-gray-500 rounded-lg border border-gray-200 px-4 py-2 cursor-pointer peer-checked:bg-gray-900 peer-checked:text-white hover:text-gray-600 hover:bg-grey-600">
                                2
                            </label>
                        </li>
                        <li>
                            <input onClick={handleRooms} type="radio" id="rooms-3" name="rooms" value="rooms-3" class="hidden peer" />
                            <label for="rooms-3" class="text-gray-500 rounded-lg border border-gray-200 px-4 py-2 cursor-pointer peer-checked:bg-gray-900 peer-checked:text-white hover:text-gray-600 hover:bg-grey-600">
                                3
                            </label>
                        </li>
                        <li>
                            <input onClick={handleRooms} type="radio" id="rooms-4" name="rooms" value="rooms-4" class="hidden peer" />
                            <label for="rooms-4" class="text-gray-500 rounded-lg border border-gray-200 px-4 py-2 cursor-pointer peer-checked:bg-gray-900 peer-checked:text-white hover:text-gray-600 hover:bg-grey-600">
                                4
                            </label>
                        </li>
                        <li>
                            <input onClick={handleRooms} type="radio" id="rooms-5" name="rooms" value="rooms-5" class="hidden peer" />
                            <label for="rooms-5" class="text-gray-500 rounded-lg border border-gray-200 px-4 py-2 cursor-pointer peer-checked:bg-gray-900 peer-checked:text-white hover:text-gray-600 hover:bg-grey-600">
                                5
                            </label>
                        </li>
                        <li>
                            <input onClick={handleRooms} type="radio" id="rooms-6" name="rooms" value="rooms-6" class="hidden peer" />
                            <label for="rooms-6" class="text-gray-500 rounded-lg border border-gray-200 px-4 py-2 cursor-pointer peer-checked:bg-gray-900 peer-checked:text-white hover:text-gray-600 hover:bg-grey-600">
                                6
                            </label>
                        </li>
                        <li>
                            <input onClick={handleRooms} type="radio" id="rooms-7" name="rooms" value="rooms-7" class="hidden peer" />
                            <label for="rooms-7" class="text-gray-500 rounded-lg border border-gray-200 px-4 py-2 cursor-pointer peer-checked:bg-gray-900 peer-checked:text-white hover:text-gray-600 hover:bg-grey-600">
                                7
                            </label>
                        </li>
                        <li>
                            <input onClick={handleRooms} type="radio" id="rooms-8" name="rooms" value="rooms-8" class="hidden peer" />
                            <label for="rooms-8" class="text-gray-500 rounded-lg border border-gray-200 px-4 py-2 cursor-pointer peer-checked:bg-gray-900 peer-checked:text-white hover:text-gray-600 hover:bg-grey-600">
                                +8
                            </label>
                        </li>
                    </ul>
                    <h6 className='m-4 opacity-70'>Beds</h6>
                    <ul class="flex justify-between w-5/6">
                        <li>
                            <input onClick={handleRooms} defaultChecked type="radio" id="beds-any" name="beds" value="beds-any" class="hidden peer" />
                            <label for="beds-any" class="w-full text-gray-500 rounded-lg border border-gray-200 px-4 py-2 cursor-pointer peer-checked:bg-gray-900 peer-checked:text-white hover:text-gray-600 hover:bg-grey-600">
                                any
                            </label>
                        </li>
                        <li>
                            <input onClick={handleRooms} type="radio" id="beds-1" name="beds" value="beds-1" class="hidden peer" />
                            <label for="beds-1" class="text-gray-500 rounded-lg border border-gray-200 px-4 py-2 cursor-pointer peer-checked:bg-gray-900 peer-checked:text-white hover:text-gray-600 hover:bg-grey-600">
                                1
                            </label>
                        </li>
                        <li>
                            <input onClick={handleRooms} type="radio" id="beds-2" name="beds" value="beds-2" class="hidden peer" />
                            <label for="beds-2" class="text-gray-500 rounded-lg border border-gray-200 px-4 py-2 cursor-pointer peer-checked:bg-gray-900 peer-checked:text-white hover:text-gray-600 hover:bg-grey-600">
                                2
                            </label>
                        </li>
                        <li>
                            <input onClick={handleRooms} type="radio" id="beds-3" name="beds" value="beds-3" class="hidden peer" />
                            <label for="beds-3" class="text-gray-500 rounded-lg border border-gray-200 px-4 py-2 cursor-pointer peer-checked:bg-gray-900 peer-checked:text-white hover:text-gray-600 hover:bg-grey-600">
                                3
                            </label>
                        </li>
                        <li>
                            <input onClick={handleRooms} type="radio" id="beds-4" name="beds" value="beds-4" class="hidden peer" />
                            <label for="beds-4" class="text-gray-500 rounded-lg border border-gray-200 px-4 py-2 cursor-pointer peer-checked:bg-gray-900 peer-checked:text-white hover:text-gray-600 hover:bg-grey-600">
                                4
                            </label>
                        </li>
                        <li>
                            <input onClick={handleRooms} type="radio" id="beds-5" name="beds" value="beds-5" class="hidden peer" />
                            <label for="beds-5" class="text-gray-500 rounded-lg border border-gray-200 px-4 py-2 cursor-pointer peer-checked:bg-gray-900 peer-checked:text-white hover:text-gray-600 hover:bg-grey-600">
                                5
                            </label>
                        </li>
                        <li>
                            <input onClick={handleRooms} type="radio" id="beds-6" name="beds" value="beds-6" class="hidden peer" />
                            <label for="beds-6" class="text-gray-500 rounded-lg border border-gray-200 px-4 py-2 cursor-pointer peer-checked:bg-gray-900 peer-checked:text-white hover:text-gray-600 hover:bg-grey-600">
                                6
                            </label>
                        </li>
                        <li>
                            <input onClick={handleRooms} type="radio" id="beds-7" name="beds" value="beds-7" class="hidden peer" />
                            <label for="beds-7" class="text-gray-500 rounded-lg border border-gray-200 px-4 py-2 cursor-pointer peer-checked:bg-gray-900 peer-checked:text-white hover:text-gray-600 hover:bg-grey-600">
                                7
                            </label>
                        </li>
                        <li>
                            <input onClick={handleRooms} type="radio" id="beds-8" name="beds" value="beds-8" class="hidden peer" />
                            <label for="beds-8" class="text-gray-500 rounded-lg border border-gray-200 px-4 py-2 cursor-pointer peer-checked:bg-gray-900 peer-checked:text-white hover:text-gray-600 hover:bg-grey-600">
                                +8
                            </label>
                        </li>
                    </ul>
                    <h6 className='m-4 opacity-70'>Bathrooms</h6>
                    <ul class="flex justify-between w-5/6">
                        <li>
                            <input onClick={handleRooms} defaultChecked type="radio" id="baths-any" name="baths" value="baths-any" class="hidden peer" />
                            <label for="baths-any" class="w-full text-gray-500 rounded-lg border border-gray-200 px-4 py-2 cursor-pointer peer-checked:bg-gray-900 peer-checked:text-white hover:text-gray-600 hover:bg-grey-600">
                                any
                            </label>
                        </li>
                        <li>
                            <input onClick={handleRooms} type="radio" id="baths-1" name="baths" value="baths-1" class="hidden peer" />
                            <label for="baths-1" class="text-gray-500 rounded-lg border border-gray-200 px-4 py-2 cursor-pointer peer-checked:bg-gray-900 peer-checked:text-white hover:text-gray-600 hover:bg-grey-600">
                                1
                            </label>
                        </li>
                        <li>
                            <input onClick={handleRooms} type="radio" id="baths-2" name="baths" value="baths-2" class="hidden peer" />
                            <label for="baths-2" class="text-gray-500 rounded-lg border border-gray-200 px-4 py-2 cursor-pointer peer-checked:bg-gray-900 peer-checked:text-white hover:text-gray-600 hover:bg-grey-600">
                                2
                            </label>
                        </li>
                        <li>
                            <input onClick={handleRooms} type="radio" id="baths-3" name="baths" value="baths-3" class="hidden peer" />
                            <label for="baths-3" class="text-gray-500 rounded-lg border border-gray-200 px-4 py-2 cursor-pointer peer-checked:bg-gray-900 peer-checked:text-white hover:text-gray-600 hover:bg-grey-600">
                                3
                            </label>
                        </li>
                        <li>
                            <input onClick={handleRooms} type="radio" id="baths-4" name="baths" value="baths-4" class="hidden peer" />
                            <label for="baths-4" class="text-gray-500 rounded-lg border border-gray-200 px-4 py-2 cursor-pointer peer-checked:bg-gray-900 peer-checked:text-white hover:text-gray-600 hover:bg-grey-600">
                                4
                            </label>
                        </li>
                        <li>
                            <input onClick={handleRooms} type="radio" id="baths-5" name="baths" value="baths-5" class="hidden peer" />
                            <label for="baths-5" class="text-gray-500 rounded-lg border border-gray-200 px-4 py-2 cursor-pointer peer-checked:bg-gray-900 peer-checked:text-white hover:text-gray-600 hover:bg-grey-600">
                                5
                            </label>
                        </li>
                        <li>
                            <input onClick={handleRooms} type="radio" id="baths-6" name="baths" value="baths-6" class="hidden peer" />
                            <label for="baths-6" class="text-gray-500 rounded-lg border border-gray-200 px-4 py-2 cursor-pointer peer-checked:bg-gray-900 peer-checked:text-white hover:text-gray-600 hover:bg-grey-600">
                                6
                            </label>
                        </li>
                        <li>
                            <input onClick={handleRooms} type="radio" id="baths-7" name="baths" value="baths-7" class="hidden peer" />
                            <label for="baths-7" class="text-gray-500 rounded-lg border border-gray-200 px-4 py-2 cursor-pointer peer-checked:bg-gray-900 peer-checked:text-white hover:text-gray-600 hover:bg-grey-600">
                                7
                            </label>
                        </li>
                        <li>
                            <input onClick={handleRooms} type="radio" id="baths-8" name="baths" value="baths-8" class="hidden peer" />
                            <label for="baths-8" class="text-gray-500 rounded-lg border border-gray-200 px-4 py-2 cursor-pointer peer-checked:bg-gray-900 peer-checked:text-white hover:text-gray-600 hover:bg-grey-600">
                                +8
                            </label>
                        </li>
                    </ul>
                </Box>
                <Divider sx={{ my: 5 }} />
                <Box>
                    <h4>{t("ُEssentials")}</h4>
                    <FormGroup className='flex-row'>
                        <Box className='flex flex-col w-2/5'>
                            <FormControlLabel componentsProps={{typography:{fontSize:20}}} control={<Checkbox />} label="Wifi" value={"Wifi"} onChange={handleEssentialsChange} />
                            <FormControlLabel componentsProps={{typography:{fontSize:20}}} control={<Checkbox />} label="Kitchen" value={"Kitchen"} onChange={handleEssentialsChange} />
                            <FormControlLabel componentsProps={{typography:{fontSize:20}}} control={<Checkbox />} label="Washer" value={"Washer"} onChange={handleEssentialsChange} />
                            <FormControlLabel componentsProps={{typography:{fontSize:20}}} control={<Checkbox />} label="Dryer" value={"Dryer"} onChange={handleEssentialsChange} />
                            <FormControlLabel componentsProps={{typography:{fontSize:20}}} control={<Checkbox />} label="Air conditioning" value={"Air conditioning"} onChange={handleEssentialsChange} />
                        </Box>
                        <Box className='flex flex-col w-2/5'>
                            <FormControlLabel componentsProps={{typography:{fontSize:20}}} control={<Checkbox />} label="Heating" value={"Heating"} onChange={handleEssentialsChange} />
                            <FormControlLabel componentsProps={{typography:{fontSize:20}}} control={<Checkbox />} label="Dedicated workspace" value={"Dedicated workspace"} onChange={handleEssentialsChange} />
                            <FormControlLabel componentsProps={{typography:{fontSize:20}}} control={<Checkbox />} label="TV" value={"TV"} onChange={handleEssentialsChange} />
                            <FormControlLabel componentsProps={{typography:{fontSize:20}}} control={<Checkbox />} label="Hair dryer" value={"Hair dryer"} onChange={handleEssentialsChange} />
                            <FormControlLabel componentsProps={{typography:{fontSize:20}}} control={<Checkbox />} label="Iron" value={"Iron"} onChange={handleEssentialsChange} />
                            <button type=""onClick={()=>{console.log(essentials)}}>show essentials</button>
                        </Box>
                    </FormGroup>
                </Box>
                <Divider sx={{ my: 5 }} />
                <Box>
                    <h4>{t("Host language")}</h4>
                    <FormGroup className='flex-row'>
                        <Box className='flex flex-col w-2/5'>
                            <FormControlLabel componentsProps={{typography:{fontSize:20}}} color='black' control={<Checkbox />} label="English" value={"English"} onChange={handleHostLangChange} />
                            <FormControlLabel componentsProps={{typography:{fontSize:20}}} control={<Checkbox />} label="Arabic" value={"Arabic"} onChange={handleHostLangChange} />
                        </Box>
                        <Box className='flex flex-col w-2/5'>
                            <FormControlLabel componentsProps={{typography:{fontSize:20}}} control={<Checkbox />} label="Spanish" value={"Spanish"} onChange={handleHostLangChange} />
                            <FormControlLabel componentsProps={{typography:{fontSize:20}}} control={<Checkbox />} label="Frensh" value={"Frensh"} onChange={handleHostLangChange} />
                        </Box>
                    </FormGroup>
                </Box>

            </Modal.Body>
            <Modal.Footer className='justify-content-between'>
                <Button className='btn-light text-decoration-underline'>clear all</Button>
                <Button className='btn-dark'>Show 250 Homes</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Filters;

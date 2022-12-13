import * as React from 'react';
import { useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MenuItem from '@mui/material/MenuItem';
import { FiSearch } from "react-icons/fi";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../header/header.css'
import { authContext } from '../../contexts/auth';
import { useTranslation } from "react-i18next";



const Search = () => {


    const { t, i18n } = useTranslation();
    const handleLang = () => {
        i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
        console.log(i18n.language);
    };

    const dispatch = useDispatch()
    const { isAuth, setAuth } = useContext(authContext);




    const [group, setGroup] = React.useState('');

    const handleGroupChange = (event) => {
        setGroup(event.target.value);
    };
    const [place, setPlace] = React.useState('');

    const handlePlaceChange = (event) => {
        setPlace(event.target.value);
    };
    const [date, setDate] = React.useState('');

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const [searchedFor, setSearch] = React.useState('')

    const search = () => {
        setSearch(`date is ${date} && group is ${group} && place is ${place}`)
    }

    return (
        <div className="sticky top-0 z-50 bg-white/[95%]  ">
            {/* Middle */}
            <div className="searchDiv hidden lg:flex justify-between items-center relative shadow-sm shadow-gray-400 border rounded-full">
                <div id='input-div' className="flex justify-between absolute w-full pr-16 pl-6 font-semibold text-gray-600">
                    <div>
                        <Box sx={{ minWidth: 80 }}>
                            <FormControl variant="standard" sx={{ minWidth: 80 }}>
                                <InputLabel id="demo-simple-select-label">Place</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={place}
                                    label="Place"
                                    onChange={handlePlaceChange}
                                >
                                    <MenuItem value={1}>Europe</MenuItem>
                                    <MenuItem value={2}>USA</MenuItem>
                                    <MenuItem value={3}>Africa</MenuItem>
                                    <MenuItem value={4}>Asturalia</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <div>
                        <Box sx={{ minWidth: 80 }}>
                            <FormControl variant="standard" sx={{ minWidth: 80 }}>
                                <InputLabel id="demo-simple-select-label">Date</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={date}
                                    label="Date"
                                    onChange={handleDateChange}
                                >
                                    <MenuItem value={1}>One day</MenuItem>
                                    <MenuItem value={2}>Four days</MenuItem>
                                    <MenuItem value={3}>One week</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <div>
                        <Box sx={{ minWidth: 80 }}>
                            <FormControl variant="standard" sx={{ minWidth: 80 }} >
                                <InputLabel id="demo-simple-select-label">Group</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={group}
                                    label="Group"
                                    onChange={handleGroupChange}
                                >
                                    <MenuItem value={1}>Single</MenuItem>
                                    <MenuItem value={2}>Couple</MenuItem>
                                    <MenuItem value={'3-10'}>Family</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <button type='submit' className="ico bg-[#ff5a60] me-0 rounded-full"
                        onClick={search}>
                        <FiSearch className="text-white" />
                    </button>
                </div>
            </div>

            <div>
                {searchedFor}
            </div>

        </div>
    );
};

export default Search;
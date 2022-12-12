import * as React from 'react';
import { useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import logo from '../../assets/logo2.png';
import { BiWorld } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FeedIcon from '@mui/icons-material/Feed';
import FilterHdrIcon from '@mui/icons-material/FilterHdr';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import AccessibleIcon from '@mui/icons-material/Accessible';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';
import TempleBuddhistIcon from '@mui/icons-material/TempleBuddhist';
import AirlineSeatIndividualSuiteIcon from '@mui/icons-material/AirlineSeatIndividualSuite';
import LandslideIcon from '@mui/icons-material/Landslide';
import LightIcon from '@mui/icons-material/Light';
import PoolIcon from '@mui/icons-material/Pool';
import HouseIcon from '@mui/icons-material/House';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Signup from '../sign-up/signup';
import '../header/header.css'
import { loginContext } from '../../contexts/loginModel';
import { signupContext } from '../../contexts/singupModel';
import { authContext } from '../../contexts/auth';
import { GetUser } from '../../store/actions/getUser';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";



const Search = () => {


    const { t, i18n } = useTranslation();
    const handleLang = () => {
        i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
        console.log(i18n.language);
    };

    const dispatch = useDispatch()
    const { isAuth, setAuth } = useContext(authContext);




    // const [anchorEl, setAnchorEl] = React.useState(null);
    // const open = Boolean(anchorEl);
    // const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };
    // const handleClose = () => {
    //     setAnchorEl(null);
    // };
    // const [value, setValue] = React.useState(0);

    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };

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
            {/* Right */}

            <div>
                {searchedFor}
            </div>

        </div>
    );
};

export default Search;
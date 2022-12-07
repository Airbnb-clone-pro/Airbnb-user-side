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
import './header.css'
import { loginContext } from '../../contexts/loginModel';
import { signupContext } from '../../contexts/singupModel';
import { authContext } from '../../contexts/auth';
import { GetUser } from '../../store/actions/getUser';


const Navbar = (props) => {

    const dispatch = useDispatch()
    const { isAuth, setAuth } = useContext(authContext);


    const { showsignup, setShowsignup } = useContext(signupContext)


    const handleShowSignup = () => setShowsignup(true)

    const { showLogin, setShowLogin } = useContext(loginContext)
    const handleShowLogin = () => setShowLogin(true)

    function logout() {
        localStorage.removeItem("token")
        // dispatch(GetUser())
        setAuth(false)
    }


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
        <div className="border-b sticky top-0 z-50 bg-white/[95%]  ">
            <div className="flex justify-between items-center sm:mx-6 md:mx-10 lg:mx-12">
                {/* Left */}
                <div className="block w-auto flex">
                    <img alt="" src={logo} className="object-cover my-10 h-0 md:h-8 lg:h-12" />
                </div>
                {/* Middle */}
                <div className="searchDiv hidden lg:flex justify-between items-center relative shadow-sm shadow-gray-400 border rounded-full">
                    <div id='input-div' className="flex justify-between absolute w-full pr-16 pl-6 font-semibold text-gray-600">
                        <div>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl variant="standard" sx={{ minWidth: 120 }}>
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
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl variant="standard" sx={{ minWidth: 120 }}>
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
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl variant="standard" sx={{ minWidth: 120 }} >
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
                <div className="hidden md:flex items-center pr-3 font-semibold text-gray-600">

                    {!isAuth ?
                        <p className="text-[17px] pt-3">Airbnb your home</p> :
                        <p className="text-[17px] pt-3">Switch to hosting</p>
                    }
                    <div className="flex items-center mx-8 gap-1">
                        <BiWorld className="" />
                        <div className="">EN</div>
                    </div>
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <div className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                            <svg className="absolute -left-1 w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                        </div>
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        className="gy-0"
                    >
                        {!isAuth &&
                            <MenuItem onClick={handleShowLogin} >
                                Log in
                            </MenuItem>

                        }
                        {!isAuth &&
                            <MenuItem onClick={handleShowSignup} className='py-0'>

                                Sign Up
                            </MenuItem>
                        }
                        {!isAuth &&
                            <hr />
                        }
                        {isAuth &&
                            <MenuItem>
                                Messages
                            </MenuItem>
                        }
                        {isAuth &&
                            <MenuItem>
                                Notifications
                            </MenuItem>
                        }
                        {isAuth &&
                            <MenuItem>
                                Trips
                            </MenuItem>
                        }
                        {isAuth &&
                            <MenuItem>
                                Whitelists
                            </MenuItem>
                        }
                        {/* <Divider /> */}

                        {isAuth &&
                            <MenuItem className=''>
                                Manage listing
                            </MenuItem>
                        }
                        {!isAuth &&
                            <MenuItem className=''>
                                Airbnb your home
                            </MenuItem>
                        }
                        <MenuItem className=''>
                            Host your expierence
                        </MenuItem>
                        {isAuth &&
                            <MenuItem className=''>
                                Account
                            </MenuItem>
                        }

                        <MenuItem className='pb-0'>
                            Help
                        </MenuItem>
                        {isAuth &&
                            <MenuItem onClick={() => { logout() }} className='py-0'>
                                Logout
                            </MenuItem>
                        }
                    </Menu>
                </div>
            </div>
            <hr />
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                className='flex items-center justify-around sm:mx-6 md:mx-10 lg:mx-20'
            >
                <Tab icon={<FeedIcon />} label="New" className='' />
                <Tab icon={<FilterHdrIcon />} label="Top of the world" />
                <Tab icon={<WhatshotIcon />} label="Trending" />
                <Tab icon={<AccessibleIcon />} label="Adapted" />
                <Tab icon={<SportsHandballIcon />} label="Playing" />
                <Tab icon={<TempleBuddhistIcon />} label="Hankoks" />
                <Tab icon={<AirlineSeatIndividualSuiteIcon />} label="Private rooms" />
                <Tab icon={<LandslideIcon />} label="Amazing views" />
                <Tab icon={<LightIcon />} label="OMG!" />
                <Tab icon={<PoolIcon />} label="Amazing pools" />
                <Tab icon={<HouseIcon />} label="Tiny home" />
                <Tab icon={<LandslideIcon />} label="Amazing views" />
                <Tab icon={<LightIcon />} label="OMG!" />
                <Tab icon={<PoolIcon />} label="Amazing pools" />
                <Tab icon={<LandslideIcon />} label="Amazing views" />
                <Tab icon={<LightIcon />} label="OMG!" />
                <Tab icon={<PoolIcon />} label="Amazing pools" />
                <Tab icon={<HouseIcon />} label="Tiny home" />
                <Tab icon={<LandslideIcon />} label="Amazing views" />
                <Tab icon={<LightIcon />} label="OMG!" />
                <Tab icon={<PoolIcon />} label="Amazing pools" />
                <Tab icon={<PoolIcon />} label="Amazing pools" />
                <Tab icon={<LandslideIcon />} label="Amazing views" />
                <Tab icon={<LightIcon />} label="OMG!" />
                <Tab icon={<PoolIcon />} label="Amazing pools" />
                <Tab icon={<HouseIcon />} label="Tiny home" />
                <Tab icon={<LandslideIcon />} label="Amazing views" />
                <Tab icon={<LightIcon />} label="OMG!" />
                <Tab icon={<PoolIcon />} label="Amazing pools" />
                <Tab icon={<PoolIcon />} label="Amazing pools" />
                <Tab icon={<LandslideIcon />} label="Amazing views" />
                <Tab icon={<LightIcon />} label="OMG!" />
                <Tab icon={<PoolIcon />} label="Amazing pools" />
                <Tab icon={<HouseIcon />} label="Tiny home" />
                <Tab icon={<LandslideIcon />} label="Amazing views" />
                <Tab icon={<LightIcon />} label="OMG!" />
                <Tab icon={<PoolIcon />} label="Amazing pools" />
            </Tabs>

            <div>
                {searchedFor}
            </div>

        </div>
    );
};

export default Navbar;
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
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Search from '../search/search';

const Navbar = (props) => {

    const location = useLocation();
    console.log(location);
    const { t, i18n } = useTranslation();
    const handleLang = () => {
        i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
    };

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


    return (
        <>
            <div className='h-12 bg-light flex items-center justify-center'>
                <h5 >{t("Introducing our 2022 Winter Release")}</h5>
            </div>
            <div className="sticky top-0 z-50 bg-white/[95%] mx-10 my-2" dir={`${i18n.language === 'en' ? 'ltr' : 'rtl'}`}>
                <div className="head flex justify-between items-center sm:mx-6 md:mx-10 lg:mx-12">
                    {/* Left */}
                    <div className="block w-auto flex">
                        <img alt="" src={logo} className="object-cover my-10 h-0 md:h-5 lg:h-8" />
                    </div>
                    {/* Middle */}
                    {location.pathname === '/' && <Search />}

                    {/* Right */}
                    <div className="hidden md:flex items-center pr-3 font-semibold text-gray-600">

                        {!isAuth ?
                            <p className="text-[17px] pt-3">{t("Airbnb your home")}</p> :
                            <p className="text-[17px] pt-3">Switch to hosting</p>
                        }
                        <button className="flex items-center mx-8 gap-1" onClick={handleLang}>
                            <BiWorld className="" />
                            <div className="">{`${i18n.language === 'en' ? 'AR' : 'EN'}`}</div>
                        </button>
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
                                        transform: `${i18n.language === "en" ? 'translateY(-50%)' : 'translateY(50%)'} rotate(45deg)`,
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
                                    {t("Log in")}
                                </MenuItem>

                            }
                            {!isAuth &&
                                <MenuItem onClick={handleShowSignup} className='py-0'>

                                    {t("Sign Up")}
                                </MenuItem>
                            }
                            {!isAuth &&
                                <hr />
                            }
                            {isAuth &&
                                <MenuItem>
                                    {t("Messages")}
                                </MenuItem>
                            }
                            {isAuth &&
                                <MenuItem>
                                    Notifications
                                </MenuItem>
                            }
                            {isAuth &&
                                <MenuItem>
                                    {t("Trips")}
                                </MenuItem>
                            }
                            {isAuth &&
                                <MenuItem>
                                    {t("Whitelists")}
                                </MenuItem>
                            }
                            {/* <Divider /> */}

                            {isAuth &&
                                <MenuItem className=''>
                                    Manage listing
                                </MenuItem>
                            }
                            {!isAuth &&
                                <MenuItem className='' >
                                    {t("Airbnb your home")}
                                </MenuItem>
                            }
                            <MenuItem className='' dir={`${i18n.language === 'en' ? 'ltr' : 'rtl'}`}>
                                {t("Host your expierence")}
                            </MenuItem>
                            {isAuth &&
                                <Link
                                    to="/account-settings"
                                    className="text-decoration-none text-dark"
                                >
                                    <MenuItem className="">
                                        {t("Account")}
                                    </MenuItem>
                                </Link>
                            }

                            <MenuItem className='pb-0'>
                                {t("Help")}
                            </MenuItem>
                            {isAuth &&
                                <MenuItem onClick={() => { logout() }} className='py-0'>
                                    {t("Logout")}
                                </MenuItem>
                            }
                        </Menu>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Navbar;
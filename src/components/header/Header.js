import * as React from 'react';
import { useContext } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import logo from '../../assets/logo2.png';
import { BiWorld } from "react-icons/bi";
import './header.css'
import { loginContext } from '../../contexts/loginModel';
import { signupContext } from '../../contexts/singupModel';
import { authContext } from '../../contexts/auth';
import { Link, useHistory, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import Search from '../search/search';
import { searchContext } from '../../contexts/searchModal';
import { addDays, format } from 'date-fns';
import { DateRange, DateRangePicker } from 'react-date-range';
import { FiUsers } from 'react-icons/fi';
import axiosInstance from '../../axios config/axiosInstance';
import { useDispatch } from 'react-redux';
import { GetUnits } from '../../store/actions/getUnits';


const Navbar = (props) => {

    const history = useHistory()
    const location = useLocation();
    console.log(location);
    const { t, i18n } = useTranslation();
    const handleLang = () => {
        const lang = localStorage.getItem('lang')

        i18n.changeLanguage(lang === "en" ? "ar" : "en");
        localStorage.setItem('lang', lang === "en" ? "ar" : "en");
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
    const { showSearch, setShowSearch } = React.useContext(searchContext);
    const [startDate, setStartDate] = React.useState(new Date())
    const [endDate, setEndDate] = React.useState(addDays(new Date(), 7))
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    const handleSearchChange = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
        console.log(startDate, endDate)
    }

    const showSearchAndLogValues = () => {
        setShowSearch(true)
        console.log(window.matchMedia("(max-width: 480px)").matches)
    }
    const [numberOfGuests, setNumberOfGuests] = React.useState(1)
    const [queryStr, setQueryStr] = React.useState('')
    const dispatch = useDispatch()
    React.useEffect(() => {
        setQueryStr(
            `date.start=${format(startDate, "MM/dd/yyyy")}&date.end=${format(endDate, "MM/dd/yyyy")}&guestsNumber=${numberOfGuests}`
        )
    }, [setQueryStr, startDate, endDate, numberOfGuests])
    
    const handleSearchSubmit = () => {
        axiosInstance.get(`/units/search/query?${queryStr}&lang=en`).then((res) => {
            console.log(res.data);
            console.log(queryStr)
            dispatch(GetUnits(res.data))
        }).catch((err) => {
            console.log(err.message)
        })
        setShowSearch(false)
    }

    const [isScreenSmall, setISScreenSmall] = React.useState(false)
    React.useEffect(() => {
        function handleResize() {
            console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
            if (window.innerWidth <= 720) {
                setISScreenSmall(true)
            } else {
                setISScreenSmall(false)
            }
        }
        window.addEventListener('resize', handleResize)
    })
    return (
        <>
            {/* <div className='h-12 bg-light flex items-center justify-center'>
                <h5 >{t("Introducing our 2022 Winter Release")}</h5>
            </div> */}
            <div className="sticky top-0 z-50 bg-white h-20 lg:px-5" dir={`${i18n.language === 'en' ? 'ltr' : 'rtl'}`}>
                <div className="head block md:flex md:justify-between justify-center items-center sm:mx-6 md:mx-10 lg:mx-12">
                    {/* Left */}
                    <div className="hidden md:block w-auto flex" onClick={() => { history.push('/') }}>
                        <img alt="" src={logo} className="object-cover my-10 h-5 lg:h-8" />
                    </div>
                    {/* Middle */}
                    {location.pathname === '/' && !showSearch && <div onClick={() => { showSearchAndLogValues() }}><Search isScreenSmall={window.screen.width < 500 ? true : false} /></div>}

                    {/* Right */}
                    <div className="hidden md:flex items-center pr-3 font-semibold text-gray-600">

                        {!isAuth ?
                            <p className="text-[17px] pt-3">{t("Airbnb your home")}</p> :
                            <p className="text-[17px] pt-3" onClick={() => { history.push('/host') }}>Switch to hosting</p>
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
                                <MenuItem onClick={handleShowLogin} dir={`${i18n.language === 'en' ? 'ltr' : 'rtl'}`}>
                                    {t("Log in")}
                                </MenuItem>
                            }
                            {!isAuth &&
                                <MenuItem onClick={handleShowSignup} className='py-0' dir={`${i18n.language === 'en' ? 'ltr' : 'rtl'}`}>
                                    {t("Sign Up")}
                                </MenuItem>
                            }
                            {!isAuth &&
                                <hr />
                            }
                            {isAuth &&
                                <MenuItem dir={`${i18n.language === 'en' ? 'ltr' : 'rtl'}`}>
                                    {t("Messages")}
                                </MenuItem>
                            }
                            {isAuth &&
                                <MenuItem>
                                    Notifications
                                </MenuItem>
                            }
                            {isAuth &&
                                <MenuItem dir={`${i18n.language === 'en' ? 'ltr' : 'rtl'}`}>
                                    {t("Trips")}
                                </MenuItem>
                            }
                            {isAuth &&
                                <MenuItem dir={`${i18n.language === 'en' ? 'ltr' : 'rtl'}`}>
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
                                <MenuItem className='' dir={`${i18n.language === 'en' ? 'ltr' : 'rtl'}`}>
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
                                    <MenuItem className="" dir={`${i18n.language === 'en' ? 'ltr' : 'rtl'}`}>
                                        {t("Account")}
                                    </MenuItem>
                                </Link>
                            }
                            <MenuItem className='pb-0' dir={`${i18n.language === 'en' ? 'ltr' : 'rtl'}`}>
                                {t("Help")}
                            </MenuItem>
                            {isAuth &&
                                <MenuItem onClick={() => { logout() }} className='py-0' dir={`${i18n.language === 'en' ? 'ltr' : 'rtl'}`}>
                                    {t("Logout")}
                                </MenuItem>
                            }
                        </Menu>
                    </div>
                </div>
                {showSearch &&
                    <div className='flex flex-col mx-auto bg-white' >
                        <div className='mx-auto w-75 mb-10'>
                        </div>
                        <div className='row mx-auto flex'>
                            {!isScreenSmall && window.innerWidth >= 720 ? (
                                <DateRangePicker
                                    onChange={handleSearchChange}
                                    showSelectionPreview={true}
                                    moveRangeOnFirstSelection={false}
                                    months={2}
                                    ranges={[selectionRange]}
                                    direction='horizontal'
                                    minDate={new Date()}
                                    rangeColors={["#FD5B61"]}
                                />) : (<DateRange
                                    onChange={handleSearchChange}
                                    showSelectionPreview={true}
                                    moveRangeOnFirstSelection={false}
                                    months={2}
                                    ranges={[selectionRange]}
                                    direction='vertical'
                                    minDate={new Date()}
                                    rangeColors={["#FD5B61"]}
                                />)}
                            <div className='flex items-center flex-start bg-white mb-4 mx-auto'>
                                <h2 className='grow'>Number of Guests</h2>
                                <div className='flex grow '>
                                    <FiUsers className='h-12 text-lg' />
                                    <input type="number"
                                        className="w-14 pl-2 text-lg border-none outline-none text-red-400"
                                        value={numberOfGuests}
                                        onChange={(e) => { setNumberOfGuests(e.target.value) }}
                                        min={1}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='flex w-75 mb-4'>
                            <button className='flex-grow' onClick={() => { setShowSearch(false) }}>Close</button>
                            <button className='flex-grow text-pink-400' onClick={handleSearchSubmit}>Search</button>
                        </div>
                    </div>
                }
            </div>
        </>
    );
};

export default Navbar;
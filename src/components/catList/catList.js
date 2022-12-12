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



const CatList = (props) => {


    const { t, i18n } = useTranslation();


    const dispatch = useDispatch()
    const { isAuth, setAuth } = useContext(authContext);


    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div
            className=""
            dir={`${i18n.language === "en" ? "ltr" : "rtl"}`}
        >
            <hr />
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                className='flex items-center justify-around sm:mx-6 md:mx-10 lg:mx-20'
            >
                <Tab icon={<FeedIcon />} label={t('New')} className='' />
                <Tab icon={<FilterHdrIcon />} label={t("Top of the world")} />
                <Tab icon={<WhatshotIcon />} label={t("Trending")} />
                <Tab icon={<AccessibleIcon />} label={t("Adapted")} />
                <Tab icon={<SportsHandballIcon />} label={t("Playing")} />
                <Tab icon={<TempleBuddhistIcon />} label={t("Hankoks")} />
                <Tab icon={<AirlineSeatIndividualSuiteIcon />} label={t("Private rooms")} />
                <Tab icon={<LandslideIcon />} label={t("Amazing views")} />
                <Tab icon={<LightIcon />} label={t("OMG!")} />
                <Tab icon={<PoolIcon />} label={t("Amazing pools")} />
                <Tab icon={<HouseIcon />} label={t("Tiny home")} />
                <Tab icon={<LandslideIcon />} label={t("Amazing views")} />
                <Tab icon={<LightIcon />} label={t("OMG!")} />
                <Tab icon={<PoolIcon />} label={t("Amazing pools")} />
                <Tab icon={<LandslideIcon />} label={t("Amazing views")} />
                <Tab icon={<LightIcon />} label={t("OMG!")} />
                <Tab icon={<PoolIcon />} label={t("Amazing pools")} />
                <Tab icon={<HouseIcon />} label={t("Tiny home")} />
                <Tab icon={<LandslideIcon />} label={t("Amazing views")} />
                <Tab icon={<LightIcon />} label={t("OMG!")} />
                <Tab icon={<PoolIcon />} label={t("Amazing pools")} />
                <Tab icon={<PoolIcon />} label={t("Amazing pools")} />
                <Tab icon={<LandslideIcon />} label={t("Amazing views")} />
                <Tab icon={<LightIcon />} label={t("OMG!")} />
                <Tab icon={<PoolIcon />} label={t("Amazing pools")} />
                <Tab icon={<HouseIcon />} label={t("Tiny home")} />
                <Tab icon={<LandslideIcon />} label={t("Amazing views")} />
                <Tab icon={<LightIcon />} label={t("OMG!")} />
                <Tab icon={<PoolIcon />} label={t("Amazing pools")} />
                <Tab icon={<PoolIcon />} label={t("Amazing pools")} />
                <Tab icon={<LandslideIcon />} label={t("Amazing views")} />
                <Tab icon={<LightIcon />} label={t("OMG!")} />
                <Tab icon={<PoolIcon />} label={t("Amazing pools")} />
                <Tab icon={<HouseIcon />} label={t("Tiny home")} />
                <Tab icon={<LandslideIcon />} label={t("Amazing views")} />
                <Tab icon={<LightIcon />} label={t("OMG!")} />
                <Tab icon={<PoolIcon />} label={t("Amazing pools")} />
            </Tabs>
        </div>
    );
};

export default CatList;
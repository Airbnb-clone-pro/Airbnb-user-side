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
import './catList.css'


const CatList = (props) => {


    const { t, i18n } = useTranslation();


    const dispatch = useDispatch()
    const { isAuth, setAuth } = useContext(authContext);


    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(value)
    };

    // i18n.language==="en"?document.querySelector(".bi-sliders2-vertical").classList.add("me-1"):document.querySelector(".bi-sliders2-vertical").classList.add("ms-1")


    return (
        <div className='container-fluid'>
            <div
                className="row flex items-center"
                dir={`${i18n.language === "en" ? "ltr" : "rtl"}`}
            >
                <hr />
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                    className='sm:mx-2 md:mx-5 lg:mx-10 col-10'
                >
                    <Tab icon={<FeedIcon />} label={t('New')} value="12" />
                    <Tab icon={<FilterHdrIcon />} label={t("Top of the world")} value="15" />
                    <Tab icon={<WhatshotIcon />} label={t("Trending")} value="13" />
                    <Tab icon={<AccessibleIcon />} label={t("Adapted")} value="10" />
                    <Tab icon={<SportsHandballIcon />} label={t("Playing")} value="25" />
                    <Tab icon={<TempleBuddhistIcon />} label={t("Hankoks")} value="38" />
                    <Tab icon={<AirlineSeatIndividualSuiteIcon />} label={t("Private rooms")} value="19" />
                    <Tab icon={<LandslideIcon />} label={t("Amazing views")} value="161" />
                    <Tab icon={<LightIcon />} label={t("OMG!")} value="182" />
                    <Tab icon={<PoolIcon />} label={t("Amazing pools")} value="17" />
                    <Tab icon={<HouseIcon />} label={t("Tiny home")} value="87" />
                    <Tab icon={<LandslideIcon />} label={t("Amazing views")} value="52" />
                    <Tab icon={<LightIcon />} label={t("OMG!")} value="63" />
                    <Tab icon={<PoolIcon />} label={t("Amazing pools")} value="71" />
                    <Tab icon={<LandslideIcon />} label={t("Amazing views")} value="281" />
                    <Tab icon={<LightIcon />} label={t("OMG!")} value="141" />
                    <Tab icon={<PoolIcon />} label={t("Amazing pools")} value="589" />
                    <Tab icon={<HouseIcon />} label={t("Tiny home")} value="980" />
                    <Tab icon={<LandslideIcon />} label={t("Amazing views")} value="1200" />
                    <Tab icon={<LightIcon />} label={t("OMG!")} value="530" />
                    <Tab icon={<PoolIcon />} label={t("Amazing pools")} value="892" />
                    <Tab icon={<PoolIcon />} label={t("Amazing pools")} value="156" />
                    <Tab icon={<LandslideIcon />} label={t("Amazing views")} value="879" />
                    <Tab icon={<LightIcon />} label={t("OMG!")} value="564" />
                    <Tab icon={<PoolIcon />} label={t("Amazing pools")} value="796" />
                    <Tab icon={<HouseIcon />} label={t("Tiny home")} value="256" />
                    <Tab icon={<LandslideIcon />} label={t("Amazing views")} value="436" />
                    <Tab icon={<LightIcon />} label={t("OMG!")} value="452" />
                    <Tab icon={<PoolIcon />} label={t("Amazing pools")} value="784" />
                    <Tab icon={<PoolIcon />} label={t("Amazing pools")} value="256" />
                    <Tab icon={<LandslideIcon />} label={t("Amazing views")} value="203" />
                    <Tab icon={<LightIcon />} label={t("OMG!")} value="201" />
                    <Tab icon={<PoolIcon />} label={t("Amazing pools")} value="208" />
                    <Tab icon={<HouseIcon />} label={t("Tiny home")} value="210" />
                    <Tab icon={<LandslideIcon />} label={t("Amazing views")} value="202" />
                    <Tab icon={<LightIcon />} label={t("OMG!")} value="220" />
                    <Tab icon={<PoolIcon />} label={t("Amazing pools")} value="221" />
                </Tabs>
                <div className='col-1'>
                <button className="btn btn-white lg:me-2 me-1 border">
                    <div className='flex justify-around'>
                        <i class="bi bi-sliders2-vertical"></i>
                        <h6>{t("Filter")}</h6>
                    </div>
                </button>
                </div>
            </div>
        </div>
    );
};

export default CatList;
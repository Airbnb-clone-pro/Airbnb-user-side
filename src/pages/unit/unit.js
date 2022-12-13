import { Divider } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useTranslation } from "react-i18next";
import DatePicker from "react-datepicker";
import "./datePicker-style/datepicker.scss"
import CircularProgress from '@mui/material/CircularProgress';
import { grey } from '@mui/material/colors';
// import "react-datepicker/dist/react-datepicker.css";
// import "react-datepicker/src/stylesheets/datepicker.scss"
import { useEffect, useState, useLayoutEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../axios config/axiosInstance";
const Unit = () => {
  const { t, i18n } = useTranslation();
  const params = useParams();
  const [unit, setUnit] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [reservetionPosition, setReservetionPosition] = useState(0);
  const ref = useRef("");
  const [width, setWidth] = useState(0);
  // console.log(params)
  const [startDate, setStartDate] = useState(new Date());
  const color = grey["A700"];
  // useEffect(() => {
  //   // console.log("sssssssssssssssssssss")
  //   axiosInstance
  //     .get(`/units/${params.unitId}?lang=${i18n.language}`)
  //     .then((res) => {
  //       // console.log(res.data);
  //       setUnit(res.data);
  //       setLoading(false)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  useEffect(() => {
    axiosInstance
      .get(`/units/${params.unitId}?lang=${i18n.language}`)
      .then((res) => {
        // console.log(res.data);
        setUnit(res.data);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [i18n.language])

  useEffect(() => {
    setWidth(ref.current.offsetWidth);
    console.log(width);
  }, [isLoading]);
  window.addEventListener("scroll", function (event) {
    console.log(this.scrollY)
    if (this.scrollY < 460) {
      setReservetionPosition(1);
    } else if (this.scrollY >= 460) {
      setReservetionPosition(2);
    }
    else {
      setReservetionPosition(0)
    }
  });
  // useLayoutEffect(() => {
  //   setWidth(ref.current.offsetWidth);
  // }, []);
  const placeOffer = [
    { icon: "bi bi-wifi", title: "wifi" },
    { icon: "bi bi-wifi", title: "wifi" },
    { icon: "bi bi-wifi", title: "wifi" },
    { icon: "bi bi-wifi", title: "wifi" },
    { icon: "bi bi-wifi", title: "wifi" },
    { icon: "bi bi-wifi", title: "wifi" },
    { icon: "bi bi-wifi", title: "wifi" },
    { icon: "bi bi-wifi", title: "wifi" },
    { icon: "bi bi-wifi", title: "wifi" },
    { icon: "bi bi-wifi", title: "wifi" },
  ];
  return (
    <>
      {isLoading ? <div className="container p-5 m-5 d-flex justify-content-center"><CircularProgress style={{ color: "#ff5b60" }} /></div> :
        <div
          className="container pt-3"
          dir={`${i18n.language === "en" ? "ltr" : "rtl"}`}
        >
          {/* ------ title   &  gallery ------------------- */}
          <div className="d-flex flex-column">
            {/* -------- Unit title & rate & reviews & location */}
            <div>
              <h3 className="fw-bold">{unit.title}</h3>
              <div className="d-flex flex-row justify-content-between">
                <div className="d-flex flex-row">
                  <i className="bi bi-star-fill"></i>
                  <h6 className="mt-1 mx-2 fw-bold"> {unit.rate} . </h6>
                  <a
                    className="text-dark fw-semibold"
                    href="/"
                    style={{ fontSize: "15px" }}
                  >
                    {`${unit.numberOfRates} ${t("reviews")}`}
                  </a>
                  <span className="mx-2 fw-bold">.</span>
                  <a
                    className="text-dark fw-semibold"
                    href="/"
                    style={{ fontSize: "15px" }}
                  >
                    {`${unit["location"].city} , ${unit["location"].country} `}
                  </a>
                </div>
                <div className="d-none d-sm-flex flex-row ">
                  <button
                    type="button"
                    className="btn btn-light"
                    style={{ backgroundColor: "white" }}
                  >
                    <i className="bi bi-upload mx-2"></i> {t("Share")}
                  </button>

                  <button
                    type="button"
                    className="btn btn-light"
                    style={{ backgroundColor: "white" }}
                  >
                    <i className="bi bi-heart mx-2"></i> {t("Save")}
                  </button>
                </div>
              </div>
            </div>
            {/* ------------------------------------------------ */}
            {/* ---------------- images gallery----------------- */}
            <div className="unit-gallery">
              {unit.images.map((image, index) => <img alt="" src={image} className="" key={index} />
              )}
            </div>
            {/* ------------------------------------------------ */}
          </div>
          {/* ---------------------------------------------- */}
          {/* ------ details & reservation component  ----- */}
          <div className="row mx-0 px-0 my-4">
            {/* -------------Unit detail ------------------- */}
            <div
              className={`col-12 col-lg-8 ${i18n.language === "en" ? "pe-4" : "ps-4"
                }`}
            >
              {/* ------------unit type & hoster */}
              <div className="d-flex justify-content-between">
                <div className="">
                  <h4 className="fw-bold">
                    {" "}
                    {`${unit.unitType} ${t("hosted by")} ${"unit.host?.firstName?"} ${"unit.host?.lastName?"}`}
                  </h4>
                  <p>
                    {" "}
                    {`${unit.guestsNumber} ${t("guests")} . `}
                  </p>
                </div>
                <div>
                  <Avatar alt="" src="" sx={{ width: 56, height: 56 }}>
                    {""}
                  </Avatar>
                </div>
              </div>
              <Divider style={{ background: "#757575" }} className="my-3" />
              {/* --------------Accessibility features---------- */}
              {unit.about.map((elem, index) => <div className="d-flex justify-content-start mb-4 pt-3" key={index}>
                <i
                  className={`bi ${elem.icon} fs-2`}
                ></i>
                <div className="pt-1 mx-3">
                  <p className="fw-bold p-0 m-0">{elem.head}</p>
                  <p className="text-secondary p-0 m-0">
                    {elem.subHead}                  </p>
                </div>
              </div>)}




              <Divider style={{ background: "#757575" }} className="my-3" />
              {/* ------------ AirCover --------------------- */}
              <div className="d-flex flex-column py-3">
                <img
                  src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg"
                  alt="aircover"
                  style={{ width: "25%" }}
                />
                <p className="mt-3">
                  {t(
                    "Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in."
                  )}
                </p>
                <p className="fw-bold text-decoration-underline">
                  {" "}
                  {t("Learn more")}
                </p>
              </div>
              <Divider style={{ background: "#757575" }} className="my-3" />
              {/* ------------ unit description ------------ */}
              <div className="py-3">
                <p className="unit-description">
                  {unit.description}
                </p>
                <p className="fw-bold text-decoration-underline">
                  {" "}
                  {t("Show more")}
                </p>
              </div>
              <Divider style={{ background: "#757575" }} className="my-3" />
              {/* -----------What this place offers--------- */}
              <div className="py-3">
                <h4 className="fw-bold">{t("What this place offers")}</h4>
                <div className="row row-cols-1 row-cols-md-2 my-3">
                  {placeOffer.map((offer, index) =>
                    <div className="col d-flex flex-row align-content-center">
                      <i className="bi bi-wifi fs-3 m-0 p-0"></i>
                      <p className="mx-3 pt-2">{"Wifi"}</p>
                    </div>)}
                </div>
                <button type="button" class="btn btn-outline-dark px-4 py-3">{t("Show all amenities")}</button>
              </div>
              <Divider style={{ background: "#757575" }} className="my-3" />
              {/* ---------- travel date ------------------ */}
              <div className="py-3">
                <h4 className="fw-bold pt-2">{t("Select checkout date")}</h4>
                <p className="text-secondary">{t("Add your travel dates for exact pricing")}</p>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} monthsShown={2} inline />
              </div>
            </div>
            {/* ------------------------------------------------- */}
            {/* -------------Unit reservation ------------------- */}
            <div className={`d-none col-lg-4 d-lg-flex flex-column ${reservetionPosition === 1 ? "justify-content-start" : ""}  my-4 py-3`} ref={ref}>
              <div className={` p-3 border  shadow-lg rounded-3 ${reservetionPosition === 2 ? "reservation-box" : ""}`} style={{ width: width }}>
                <div className="d-flex flex-row justify-content-between">
                  <div className="d-flex flex-row">
                    <h5 className="fw-bold">{`$ ${unit.pricePerNight}  `}</h5>
                    <p className="mx-1">{t("night")}</p>
                  </div>
                  <div className="d-flex flex-row" >
                    <i className="bi bi-star-fill" style={{ fontSize: "13px" }} ></i>
                    <h6 className="mt-1 mx-2 fw-bold" style={{ fontSize: "13px" }}> {unit.rate} . </h6>
                    <a
                      className="text-dark fw-semibold text-secondary"
                      href="/"
                      style={{ fontSize: "13px" }}
                    >
                      {`${unit.numberOfRates} ${t("reviews")}`}
                    </a>
                  </div>
                </div>
                {/* <div className="justify-content-center">
                  <ButtonGroup size="large" aria-label="large button group" fullWidth className="reservation-button-group">
                    <Button key="one">One</Button>
                    <Button key="two">Two</Button>
                  </ButtonGroup>
                </div> */}
                <div className="btn-group-vertical w-100 mt-2 mb-3" role="group" aria-label="Vertical button group">
                  <div className="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" className="btn reservation-button-group reservation-button-group-up">
                      <p className="fw-bold p-0 m-0" style={{ fontSize: "14px" }}>{t("CHECK-IN")}</p>
                      <p className="p-0 m-0" style={{ fontSize: "15px" }}>{unit.date?.start}</p>
                    </button>
                    <button type="button" className="btn reservation-button-group reservation-button-group-up">
                      <p className="fw-bold p-0 m-0" style={{ fontSize: "14px" }}>{t("CHECK-OUT")}</p>
                      <p className="p-0 m-0" style={{ fontSize: "15px" }}>{unit.date?.end}</p>
                    </button>
                  </div>
                  <button type="button" className="btn reservation-button-group reservation-button-group-down">
                    <p className="fw-bold p-0 m-0" style={{ fontSize: "14px" }}>{t("guests")}</p>
                    <p className="p-0 m-0" style={{ fontSize: "15px" }}>{unit.guestsNumber}</p></button>
                </div>
                <button className="reserve-btn-grad">{t("Reserve")}</button>

              </div>
            </div>
          </div>
          <Divider style={{ background: "#757575" }} className="mb-3" />
        </div>
      }
    </>
  );
};

export default Unit;
import { Divider } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useTranslation } from "react-i18next";
import DatePicker from "react-datepicker";
import "./datePicker-style/datepicker.scss"
// import "react-datepicker/dist/react-datepicker.css";
// import "react-datepicker/src/stylesheets/datepicker.scss"
import { useState } from "react";
const Unit = () => {
  const { t, i18n } = useTranslation();
  const [startDate, setStartDate] = useState(new Date());
  const images = [
    "https://a0.muscache.com/im/pictures/prohost-api/Hosting-48509375/original/0862735b-4abc-4d87-a8d1-f2fb6053adc8.jpeg?im_w=960",
    "https://a0.muscache.com/im/pictures/prohost-api/Hosting-48509375/original/24a05e1f-1b03-43bc-a2d5-c757e8dbdea1.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/prohost-api/Hosting-48509375/original/cc657caf-7960-4bf9-95e6-3954560ad56e.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/prohost-api/Hosting-48509375/original/cc4f1bc9-d24f-4e2e-93fb-5441988ba3a0.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/prohost-api/Hosting-48509375/original/b1726498-95c5-47dd-829a-f23e8aacd93a.jpeg?im_w=720",
  ];
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
      <div
        className="container pt-3"
        dir={`${i18n.language === "en" ? "ltr" : "rtl"}`}
      >
        {/* ------ title   &  gallery ------------------- */}
        <div className="d-flex flex-column">
          {/* -------- Unit title & rate & reviews & location */}
          <div>
            <h3 className="fw-bold">{"Dunlap Hollow A-Frame "}</h3>
            <div className="d-flex flex-row justify-content-between">
              <div className="d-flex flex-row">
                <i className="bi bi-star-fill"></i>
                <h6 className="mt-1 mx-2 fw-bold"> 4.87 . </h6>
                <a
                  className="text-dark fw-semibold"
                  href="/"
                  style={{ fontSize: "15px" }}
                >
                  76 {t("reviews")}
                </a>
                <span className="mx-2 fw-bold">.</span>
                <a
                  className="text-dark fw-semibold"
                  href="/"
                  style={{ fontSize: "15px" }}
                >
                  cairo , Egypt{" "}
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
            <img alt="" src={images[0]} className="" />
            <img alt="" src={images[1]} className="" />
            <img alt="" src={images[2]} className="" />
            <img alt="" src={images[3]} className="" />
            <img alt="" src={images[4]} className="" />
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
                  {`Entire cabin ${t("hosted by")} Amy And Bryant`}
                </h4>
                <p>
                  {" "}
                  {`10 ${t("guests")} . 3 ${t("bedrooms")} . 6 ${t(
                    "beds"
                  )}  . 2 ${t("baths")}`}
                </p>
              </div>
              <div>
                <Avatar alt="" src="" sx={{ width: 56, height: 56 }}>
                  A
                </Avatar>
              </div>
            </div>
            <Divider style={{ background: "#757575" }} className="my-3" />
            {/* --------------Accessibility features---------- */}
            <div className="d-flex justify-content-start mb-4 pt-3">
              <i
                className={`bi bi-archive fs-2`}
              ></i>
              <div className="pt-1 mx-3">
                <p className="fw-bold p-0 m-0">Self check-in</p>
                <p className="text-secondary p-0 m-0">
                  Check yourself in with the lockbox.
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-start mb-4 pt-3">
              <i
                className={`bi bi-archive fs-2`}
              ></i>
              <div className="pt-1 mx-3">
                <p className="fw-bold p-0 m-0">Self check-in</p>
                <p className="text-secondary p-0 m-0">
                  Check yourself in with the lockbox.
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-start mb-4 pt-3">
              <i
                className={`bi bi-archive fs-2`}
              ></i>
              <div className="pt-1 mx-3">
                <p className="fw-bold p-0 m-0">Self check-in</p>
                <p className="text-secondary p-0 m-0">
                  Check yourself in with the lockbox.
                </p>
              </div>
            </div>
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
                {
                  "The Dunlap Hollow A-Frame is a custom luxury A-Frame completed in 2021. The A-Frame sleeps up to 10 guests with 3 bedrooms and a picturesque loft filled with windows that sleeps 4. Here is a list of the beds in each room:  Bedroom 1: King  The Dunlap Hollow A-Frame is a custom luxury A-Frame completed in 2021. The A-Frame sleeps up to 10 guests with 3 bedrooms and a picturesque loft filled with windows that sleeps 4. Here is a list of the beds in each room: "
                }
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
          <div className="d-none col-lg-4 d-lg-flex">reservesion div</div>
        </div>
        <Divider style={{ background: "#757575" }} className="mb-3" />
      </div>
    </>
  );
};

export default Unit;
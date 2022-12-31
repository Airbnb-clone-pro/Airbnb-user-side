import { Divider } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import axiosInstance from "../../axios config/axiosInstance";

const TripCart = (props) => {
    const { t, i18n } = useTranslation();
    let { trip } = props;
    const history = useHistory();
    const Difference_In_Time = new Date(trip?.date?.start).getTime() - new Date().getTime();
    const numberOfDays = Difference_In_Time / (1000 * 3600 * 24)
    // console.log(trip);
    const [accessToken,setAccessToken]=useState("")
    const token = localStorage.getItem("token");
    console.log("token", token);
    let config = {
        headers: {
            "Authorization": token,
        },
    };
    useEffect(()=>{
        if(accessToken){
            axios
            .post(
                `https://api.sandbox.paypal.com/v2/payments/captures/${trip.captureId}/refund`,
                {
                    amount: {
                        value: (trip.totalPrice * 70 / 100),
                        // value: ("5.00"),
                        currency_code: "USD",
                    },
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization:accessToken,

                        // Authorization:
                        //     "Bearer A21AAI-yQM2sY0V-BIYOvb97iGgMZ6Ms9lkUyA4Ldsj-n2yxlA2HTFNG918Va_M3EgW5XPJQO2wCFRbtzbAPwPI26qBdpKQCA",

                        // 'PayPal-Request-Id': '123e4567-e89b-12d3-a456-426655440020'
                    },
                }
            )
            .then((res2) => {
                console.log("response2", res2);
                axiosInstance
                .delete(
                    `/reservations/${trip._id}`,
                    config
                )
                .then((res) => {
                    // console.log(res);
                    history.push(
                        `/Trip-Cancelled`
                    );
                })
                .catch((err) => {
                    console.log(err);
                });
            })
            .catch((err) => {
                console.log("error", err);
            });
        }
    },[accessToken]);
    const goToUnitPage = () => {
        history.push(`/unit-details/${trip.unit._id}`);
    };

    const handleCancel = () => {
        axios
            .post(
                "https://api-m.sandbox.paypal.com/v1/oauth2/token",
                new URLSearchParams({
                    grant_type: "client_credentials",
                }),
                {
                    auth: {
                        username: process.env.REACT_APP_PAYPAL_CLIENT_ID,
                        password: process.env.REACT_APP_PAYPAL_PASSWORD,
                    },
                }
            )
            .then((res) => {
                console.log("resToken", res.data);
                setAccessToken(`Bearer ${res.data.access_token}`);

            })
            .catch((err) => {
                console.log("err", err);
            });
        
    };

    return (
        <div>
            {" "}
            <div className="col-12 row">
                <div className="col-4">
                    <img
                        alt="image1"
                        src={trip?.unit?.images[0]}
                        className="w-100"
                        style={{ objectFit: "cover", height: "70px" }}
                    />
                </div>
                <div className="col-8 d-flex flex-column justify-content-between px-2">
                    <div className="m-0 p-0">
                        <p className="text-secondary m-0 p-0" style={{ fontSize: "14px" }}>
                            {trip?.unit?.placeType}
                        </p>
                        <p className="m-0 p-0 trip-card-header" style={{ fontSize: "14px" }}>
                            {`${trip?.unit?.title} - ${trip?.unit?.location?.state},${trip?.unit?.location?.country}`}
                        </p>
                    </div>
                    <div className="d-flex flex-row m-0 p-0">
                        <i
                            className="bi bi-star-fill m-0 p-0"
                            style={{ fontSize: "14px" }}
                        ></i>
                        <p className="mx-2 fw-bold" style={{ fontSize: "14px" }}>
                            {" "}
                            {trip?.unit?.rate || t("New")} .{" "}
                        </p>
                        <p className="text-secondary" style={{ fontSize: "14px" }}>
                            {trip?.unit?.numberOfRates
                                ? `${trip?.unit?.numberOfRates} ${t("reviews . ")}`
                                : ""}{" "}
                        </p>
                    </div>
                </div>
            </div>
            <Divider style={{ background: "#757575" }} className="my-3" />
            <div className="d-flex justify-content-between">
                <h5 className="fw-bold">{t("Check in")}</h5>
                <h5 className="fw-bold">{t("Check out")}</h5>
            </div>
            <div className="d-flex justify-content-between">
                <p className="m-0 p-0">
                    {new Date(trip?.date?.start).toLocaleDateString("en-US")}
                </p>
                <p className="m-0 p-0">
                    {new Date(trip?.date?.end).toLocaleDateString("en-US")}
                </p>
            </div>
            <Divider style={{ background: "#757575" }} className="my-3" />
            <h5 className="fw-bold">{t("Price details")}</h5>
            <div className="d-flex flex-row justify-content-between m-0 p-0">
                <p className="m-0 p-0">{`$${trip.pricePerNight} x ${trip.numberOfDays
                    } ${t("nights")}`}</p>
                <p className="m-0 p-0">{`$${trip.totalPrice}`}</p>
            </div>
            <Divider style={{ background: "#757575" }} className="my-3" />
            <div className="d-flex flex-row justify-content-between m-0 p-0">
                <p className="m-0 p-0 fw-bold fs-6">{`${t("Total")} (USD)`}</p>
                <p className="m-0 p-0 fw-bold fs-6">{`$${trip.totalPrice}`}</p>
            </div>
            <Divider style={{ background: "#757575" }} className="my-3" />
            <div className="d-flex flex-row justify-content-between">
                {numberOfDays >= 2 ? <button
                    type="button"
                    class="btn btn-outline-dark px-3 py-2 my-2"
                    onClick={handleCancel}
                >
                    {t("Cancel Trip")}
                </button> : <></>}

                <button
                    type="button"
                    class="btn btn-outline-dark px-3 py-2 my-2"
                    onClick={goToUnitPage}
                >
                    {t("show place")}
                </button>
            </div>
        </div>
    );
};

export default TripCart;

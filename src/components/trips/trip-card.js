import { Divider } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

const TripCart = (props) => {
    const { t, i18n } = useTranslation();
    let { trip } = props;
    const history = useHistory();

    const goToUnitPage = () => {
        history.push(
            `/unit-details/${trip.unit._id}`
        );

    }


    return (
        <div>
            {" "}
            <div className="col-12 row">
                <div className="col-4">
                    <img alt="image1" src={trip?.unit?.images[0]} className="w-100" style={{ objectFit: "cover", height: "70px" }} />
                </div>
                <div className="col-8 d-flex flex-column justify-content-between px-2">
                    <div className="m-0 p-0">
                        <p className="text-secondary m-0 p-0" style={{ fontSize: "14px" }}>
                            {trip?.unit?.placeType}
                        </p>
                        <p className="m-0 p-0" style={{ fontSize: "14px" }}>
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
                                : ""}                        </p>
                    </div>
                </div>
            </div>
            <Divider style={{ background: "#757575" }} className="my-3" />
            <div className="d-flex justify-content-between">
                <h5 className="fw-bold">{t("Check in")}</h5>
                <h5 className="fw-bold">{t("Check out")}</h5>
            </div>
            <div className="d-flex justify-content-between">
                <p className="m-0 p-0">{new Date(trip?.date?.start).toLocaleDateString("en-US")}</p>
                <p className="m-0 p-0">{new Date(trip?.date?.end).toLocaleDateString("en-US")}</p>

            </div>

            <Divider style={{ background: "#757575" }} className="my-3" />
            <h5 className="fw-bold">{t("Price details")}</h5>
            <div className="d-flex flex-row justify-content-between m-0 p-0">
                <p className="m-0 p-0">{`$${trip.pricePerNight} x ${trip.numberOfDays} ${t("nights")}`}</p>
                <p className="m-0 p-0">{`$${trip.totalPrice}`}</p>
            </div>
            <Divider style={{ background: "#757575" }} className="my-3" />
            <div className="d-flex flex-row justify-content-between m-0 p-0">
                <p className="m-0 p-0 fw-bold fs-6">{`${t("Total")} (USD)`}</p>
                <p className="m-0 p-0 fw-bold fs-6">{`$${"80"}`}</p>
            </div>
            <Divider style={{ background: "#757575" }} className="my-3" />
            <div className="d-flex flex-row justify-content-between">
                {/* <button type="button" class="btn btn-outline-dark px-3 py-2 my-2">{t("Cancel Trip")}</button> */}
                <button type="button" class="btn btn-outline-dark px-3 py-2 my-2" onClick={goToUnitPage}>{t("show place")}</button>
            </div>
        </div>
    );
};

export default TripCart;

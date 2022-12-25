import { Divider } from "@mui/material";
import { useTranslation } from "react-i18next";

const TripCart = (props) => {
    const { t, i18n } = useTranslation();
    let { Trip } = props;
    return (
        <div>
            {" "}
            <div className="col-12 row">
                <div className="col-4">
                    <img alt="image1" src={"https://a0.muscache.com/im/pictures/miso/Hosting-618133020295708288/original/3ef583d2-16d9-4640-a939-246324320442.jpeg?im_w=960"} />
                </div>
                <div className="col-8 d-flex flex-column justify-content-between px-2">
                    <div className="m-0 p-0">
                        <p className="text-secondary m-0 p-0" style={{ fontSize: "14px" }}>
                            {"private room"}
                        </p>
                        <p className="m-0 p-0" style={{ fontSize: "14px" }}>
                            {`${"beoutiful room in hotel"} - ${"cairo"},${"Egypt"}`}
                        </p>
                    </div>
                    <div className="d-flex flex-row m-0 p-0">
                        <i
                            className="bi bi-star-fill m-0 p-0"
                            style={{ fontSize: "14px" }}
                        ></i>
                        <p className="mx-2 fw-bold" style={{ fontSize: "14px" }}>
                            {" "}
                            {"4.5"} .{" "}
                        </p>
                        <p className="text-secondary" style={{ fontSize: "14px" }}>
                            {`( ${"73"} ${t("reviews")} )`}
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
                <p className="m-0 p-0">{`12-9-2022`}</p>
                <p className="m-0 p-0">{`17-9-2022`}</p>

            </div>

            <Divider style={{ background: "#757575" }} className="my-3" />
            <h5 className="fw-bold">{t("Price details")}</h5>
            <div className="d-flex flex-row justify-content-between m-0 p-0">
                <p className="m-0 p-0">{`$${"20"} x ${"4"} ${t("nights")}`}</p>
                <p className="m-0 p-0">{`$${"80"}`}</p>
            </div>
            <Divider style={{ background: "#757575" }} className="my-3" />
            <div className="d-flex flex-row justify-content-between m-0 p-0">
                <p className="m-0 p-0 fw-bold fs-6">{`${t("Total")} (USD)`}</p>
                <p className="m-0 p-0 fw-bold fs-6">{`$${"80"}`}</p>
            </div>
            <Divider style={{ background: "#757575" }} className="my-3" />
            <button type="button" class="btn btn-outline-dark px-3 py-2 my-2">{t("Cancel Trip")}</button>

        </div>
    );
};

export default TripCart;

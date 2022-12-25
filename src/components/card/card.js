import Card from "react-bootstrap/Card";
import { Navigation, Scrollbar, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "./card.css";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import logo from '../../assets/02.webp';
import { useHistory } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const SingleCard = ({ data }) => {
  const { title, location, pricePerNight
    , date, images, id } = data;
  const { t, i18n } = useTranslation()
  const history = useHistory();
  const ref = useRef("");
  const [width1, setWidth] = useState(0);

  useEffect(() => {
    setWidth(ref.current.offsetWidth);
    function handleResize() {
      setWidth(ref.current.offsetWidth);
    }
    window.addEventListener('resize', handleResize)

  }, []);
  const goToUnitPage = () => {
    console.log(data);
    history.push(`/unit-details/${id}`)
  }
  return (
    <div dir={`${i18n.language === 'en' ? 'ltr' : 'rtl'}`} className="mb-4">
      <Card className="rounded-4 p-0 border-0 " style={{}} ref={ref}
      >
        <Swiper
          navigation={true}
          className="rounded-4 w-100"
          style={{ height: width1 }}
          modules={[Navigation, Scrollbar, Pagination]}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
        >
          {images.map((imgSrc, index) => {
            return (
              <SwiperSlide key={index}>
                <img
                  alt={`img-${index}`}
                  src={imgSrc}
                  className="rounded-0"
                  height="100%"
                  onClick={() => { goToUnitPage() }}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <Card.Body onClick={() => { goToUnitPage() }} className="px-0">
          <Card.Title className="d-flex justify-content-between mb-0" style={{ fontSize: "18px" }}>{location?.state}, {location?.country}   <p className="mt-1 mx-2 fw-bold" style={{ fontSize: "14px" }}><i className="bi bi-star-fill"></i>

            {" "}
            {t("New")}{" "}
          </p>
          </Card.Title>
          <Card.Subtitle className="mb-1 text-muted">{title}  </Card.Subtitle>

          <Card.Text className="mb-1 text-muted">{date?.start}</Card.Text>

          <Card.Text>
            <b className=" me-1">${pricePerNight}</b>night
          </Card.Text>
        </Card.Body>
      </Card>
    </div >
  );
};

export default SingleCard;

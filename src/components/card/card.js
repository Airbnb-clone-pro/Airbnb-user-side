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

const SingleCard = ({ data }) => {
  const { title, location, pricePerNight
    , date } = data;
  const { t, i18n } = useTranslation()

  const images = [
    logo,
    logo,
    logo,
    logo,
    logo,
  ]

  return (
    <div dir={`${i18n.language === 'en' ? 'ltr' : 'rtl'}`}>
      <Card className="rounded-0 p-0 border-0">
        <Swiper
          navigation={true}
          className="w-100"
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
                  width="100%"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <Card.Body>
          <Card.Title>{location?.city}, {location?.country}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{title}</Card.Subtitle>

          <Card.Text className="mb-1">{date?.start}</Card.Text>

          <Card.Text>
            <b className="text-black-50 me-1">${pricePerNight}</b>night
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleCard;

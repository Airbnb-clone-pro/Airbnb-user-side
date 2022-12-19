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

const SingleCard = ({ data }) => {
  const { title, location, pricePerNight
    , date, images, id } = data;
  const { t, i18n } = useTranslation()
  const history = useHistory();

  const goToUnitPage = () => {
    console.log(data);
    history.push(`/unit-details/${id}`)
  }
  return (
    <div dir={`${i18n.language === 'en' ? 'ltr' : 'rtl'}`}>
      <Card className="rounded-3 p-0 border-0" >
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
                  onClick={() => { goToUnitPage() }}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <Card.Body onClick={() => { goToUnitPage() }}>
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

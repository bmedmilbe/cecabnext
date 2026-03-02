"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { Pathener } from "../actions/pathner";
interface Props {
  pathners: Pathener[];
}
const Partners = ({ pathners }: Props) => {
  return (
    <section className="partner-area bg-f8f8f8">
      <div className="container">
        <div className="partner-title">
          <h2>Nossos Parceiros</h2>
        </div>

        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            576: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 5,
            },
            1200: {
              slidesPerView: 7,
            },
          }}
          autoplay={{
            delay: 6000,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay]}
          className="partner-slides"
          // className="text-cente"
        >
          {pathners?.map((pathener) => (
            <SwiperSlide>
              <div className="single-partner-item">
                <a href="#" target="_blank">
                  <img src={pathener.picture} alt={pathener.title} />
                </a>
                <h1>{pathener.title}</h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Partners;

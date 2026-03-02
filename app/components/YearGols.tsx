"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import Link from "next/link";
import { YearGol } from "../actions/gols";

interface Props {
  goals: YearGol[];
}
const YearGols = ({ goals }: Props) => {
  return (
    <>
      <section className="services-area ptb-100 bg-f8f8f8">
        <div className="container">
          <div className="section-title">
            <h2>Nosso crescimento</h2>
            <p>
              A nossa história de produção e crescimento iniciou-se em 2004, com
              foco na excelência do cacau biológico e no desenvolvimento da
              cooperativa.
            </p>
          </div>

          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            autoplay={{
              delay: 6000,
              pauseOnMouseEnter: true,
            }}
            modules={[Pagination, Autoplay]}
            className="main-services-slides"
          >
            {goals?.map((slid) => (
              <SwiperSlide>
                <div className="services-box">
                  {/* <img src="/images/gallery/gallery1.jpg" alt="image" /> */}

                  <div className="services-content">
                    <h3>
                      <Link href="/service-details">
                        <span>{slid.year}</span>
                      </Link>
                    </h3>
                    <ul>
                      <li>
                        Associações:{" "}
                        <span className="fw-bold">{slid.associations}</span>
                      </li>
                      <li>
                        Agricultores:{" "}
                        <span className="fw-bold">{slid.agricultors}</span>
                      </li>
                      <li>
                        Produção:{" "}
                        <span className="fw-bold">
                          {slid.products} Toneladas
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default YearGols;

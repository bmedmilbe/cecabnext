"use client";
import FsLightbox from "fslightbox-react";
import { useState } from "react";
// For Swiper 8
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper"; // This is correct for v8

// Import CSS (standard for v8)
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

import { PostType } from "../../lib/services/posts";
interface Props {
  slides: PostType[];
}
const Banner = ({ slides }: Props) => {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=kqahRuuS6lM"]}
      />

      <Swiper
        navigation={true}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
        }}
        modules={[Navigation, Autoplay]}
        className="home-area  home-slides"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="main-banner"
              style={{
                backgroundImage: `url(${slide.image || slide.picture})`,
              }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="main-banner-content">
                      <span className="sub-title">{slide.info}</span>
                      <h1>{slide.title}</h1>
                      {slide.beginnig && (
                        <span className="sub-title">{slide.beginnig}</span>
                      )}

                      <div className="btn-box">
                        {!slide.picture && (
                          <>
                            <Link href="associations">
                              <span className="default-btn">
                                Associações <span></span>
                              </span>
                            </Link>
                            <div
                              className="optional-btn"
                              onClick={() => setToggler(!toggler)}
                            >
                              <i className="flaticon-play-button"></i> Bem-vindo
                            </div>
                          </>
                        )}

                        {slide.picture && (
                          <Link href={`/blogs/${slide.slug}`}>
                            <span className="default-btn">
                              Ver mais <span></span>
                            </span>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Banner;

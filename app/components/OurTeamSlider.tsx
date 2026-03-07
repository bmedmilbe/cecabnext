"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { TeamType } from "../../lib/services/teams";
// Import CSS (standard for v8)
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
interface Props {
  teams: TeamType[];
}
const OurTeamSlider = ({ teams }: Props) => {
  return (
    <>
      <section className="team-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Nossa Equipa</span>
            <h2>Quem Nos Dirige</h2>
            <p>
              Descubra a equipa de gestão que, eleita pelas associações,
              impulsiona as operações da CECAB STP e representa os interesses
              dos agricultores.
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
            className="team-slides"
          >
            {teams?.map((member) => (
              <SwiperSlide>
                <div className="single-team-box">
                  <div className="image">
                    <img
                      src={member.picture}
                      alt={`${member.name} ${member.role.title} cecab`}
                    />
                  </div>

                  <div className="content">
                    <h3>{member.name}</h3>
                    <span>{member.role.title}</span>
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

export default OurTeamSlider;

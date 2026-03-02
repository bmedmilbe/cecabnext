import Link from "next/link";
import { YearGol } from "../actions/gols";

interface Props {
  year: YearGol;
}
const YearGoalCard = ({ year }: Props) => {
  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-6" style={{ cursor: "pointer" }}>
        <div className="single-services-box">
          <div className="services-content">
            <h3>
              <Link href="/service-details">
                <span>{year.year}</span>
              </Link>
            </h3>
            <ul>
              <li>
                Associações:{" "}
                <span className="fw-bold">{year.associations}</span>
              </li>
              <li>
                Agricultores:{" "}
                <span className="fw-bold">{year.agricultors}</span>
              </li>
              <li>
                Produção:{" "}
                <span className="fw-bold">{year.products} Toneladas</span>
              </li>
            </ul>
          </div>
          <div className="box-shape">
            <img src="/images/box-shape1.png" alt="image" />
            <img src="/images/box-shape2.png" alt="image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default YearGoalCard;

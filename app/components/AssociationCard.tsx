"use client";
import Link from "next/link";
import { Association } from "../../lib/services/associations";
import { getDay, getMonth, getYear } from "../data/dates";

interface Props {
  association: Association;
}

const AssociationCard = ({ association }: Props) => {
  return (
    <>
      <div
        className="col-xl-6 col-md-6 col-sm-12 single-event-box"
        style={{ padding: "2rem" }}
      >
        <div className="border rounded row">
          <div className="event-image text-center ">
            <img
              src={association.picture}
              alt={association.name}
              className="img-fluid"
            />
          </div>

          <div className="event-content">
            <div className="content text-center">
              <h3>
                <Link href="#">{association.name}</Link>
              </h3>
              <p>
                {association.address} - {association.district_name}
              </p>

              <div
                className="d-flex align-items-center mx-auto"
                style={{ maxWidth: "15rem" }}
              >
                <div className="date_new d-flex align-items-center m-1">
                  <span className="m-1">{getDay(association.registered)}</span>
                  <div className="d-flex flex-column">
                    <span className="text-center  sup">
                      {getMonth(association.registered)}
                    </span>
                    <span className="text-center sub">
                      {getYear(association.registered)}
                    </span>
                  </div>
                </div>

                <span className="fw-bold m-1 text-center">
                  <span
                    className="fs-3 primary-color"
                    style={{ lineHeight: 0 }}
                  >
                    {association.number_of_associated}
                  </span>{" "}
                  <br />
                  membros
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssociationCard;

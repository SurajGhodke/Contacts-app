import React from "react";
import { Link } from "react-router-dom";
import data from "./contacts.json";

console.log(data);
const Contacts = () => {
  return (
    <>
      <div className="row">
        {data &&
          data.map((value, i) => (
            <div
              key={i}
              className="col-lg-4  card m-3"
              style={{ width: "18rem" }}
            >
              <div className="card-body">
                <h5 className="card-title text-center">
                  {value.firstName} {value.lastName}
                </h5>
                <div className="text-center">
                  <Link
                    to={"/contact-details/" + value.id}
                    // to={{
                    //   pathname: "/contact-details/" + value.id,
                    //   state: {
                    //     data: value,
                    //   },

                    // }}
                    state={{ data: value }}
                    className="btn btn-primary "
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Contacts;

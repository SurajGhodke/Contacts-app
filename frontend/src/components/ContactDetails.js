import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { sendOTP } from "../api";
import axios from "axios";

const ContactDetails = () => {
  const [items, setItems] = useState({});
  const [otp, setOtp] = useState();

  const location = useLocation();
  const { data } = location.state;

  useEffect(() => {
    if (data !== null) {
      setItems(data);
    }
  }, [data]);

  useEffect(() => {
    var val = Math.floor(100000 + Math.random() * 900000);
    const otpString = `Hi. Your OTP is: ${val}`;
    setOtp(otpString);
  }, []);

  const handleClick = (e) => {
    let postData = {
      number: items.number,
      text: otp,
    };

    axios
      .post(sendOTP, postData)
      .then((res) => {
        alert(res.data.Message);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <div className="card text-center">
        <div className="card-header">Contact Details</div>
        <div className="card-body">
          <h5 className="card-title">
            {items.firstName} {}
            {items.lastName}
          </h5>
          <p className="card-text">{items.number}</p>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Send Message
          </button>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <input
                    className="form-control"
                    placeholder="Write your review"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="desc"
                    value={otp}
                    // onChange={handleDesc}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                onClick={handleClick}
                className="btn btn-primary"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;

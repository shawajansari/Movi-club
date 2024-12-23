import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Community from "./Community";
import { BUTTONS, CREW, LIST_OF_MOVIES } from "../Components/common.const";
import GenericPopUp from "../Components/GenericPopUp";

const Homepage = () => {
  const [show, setShow] = useState(false);
  const handleButtonclick = (text) => {
    console.log(text);
    if (text === "Crew") {
      setShow(true);
    }
  };
  return (
    <>
      <Header loginPerson={"admin"} />
      <div className="py-4">
        <div className="row gx-0 justify-content-center mb-5 px-5 sm:px-0">
          <div className="border rounded col-12 col-md-10 col-lg-8 py-4 px-5">
            <h1 className="text-center pb-4 mb-3">Admin Panel</h1>

            <div className="row justify-content-center">
              <div
                className="text-center mb-5 border border-primary col-md-10 col-lg-8 col-xl-6 rounded p-4"
                style={{ background: "#E9F2FE" }}
              >
                <div className="row gx-1 gy-1">
                  {BUTTONS.map((buttonText) => (
                    <div className="col-12 col-sm-3">
                      <button
                        className=" btn btn-primary w-100 rounded-1"
                        onClick={() => handleButtonclick(buttonText)}
                      >
                        {buttonText}
                      </button>
                    </div>
                  ))}
                </div>
                <h6 className="my-3">Movie Title</h6>
                <input
                  type="text"
                  name=""
                  id=""
                  className="my-movie-search w-100 border p-1 mb-3 rounded-1"
                />
                <div>
                  <div
                    className="btn text-white px-5 rounded-1"
                    style={{ background: "green" }}
                  >
                    Search Movie
                  </div>
                </div>
                <div className="mt-2">
                  <div
                    className="btn text-white px-5 rounded-1"
                    style={{ background: "green" }}
                  >
                    Create Movie
                  </div>
                </div>
              </div>
            </div>
            <div className="row gy-3 gx-3 pb-5 justify-content-center">
              {LIST_OF_MOVIES.map((val) => (
                <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                  <div className="border">
                    <div>
                      <img
                        src={val.movie_poster}
                        alt=""
                        className="w-100 "
                        style={{ backgroundSize: "cover", height: "300px" }}
                      />
                    </div>
                    <h1 className=" border-bottom fs-5 text-center  py-3">
                      {val.movie_title}
                    </h1>
                    <div className="border-bottom text-center">
                      {val.buttons.map((button) => (
                        <div>
                          <div
                            className="btn mb-2 px-4"
                            style={{
                              background: `${button.bg}`,
                              color: `${button.color}`,
                            }}
                          >
                            {button.title}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {
        <GenericPopUp
          show={show}
          showHeading="Crews"
          showFooter={false}
          handleClose={() => setShow(false)}
          children={
            <>
              <div className="row gy-2">
                {CREW.map((val) => (
                  <div className="col-12 ">
                    <div
                      className="d-flex justify-content-between align-items-center rouded-1 w-100 py-2 px-3"
                      style={{ background: "#E9F2FE" }}
                    >
                      <div className="col-11">
                        <span className="btn btn-primary fw-bold">
                          {val.btnTitle}
                        </span>
                        <span className="ms-4">{val.title}</span>
                      </div>
                      <div className="col-1">
                        <img src={val.Image} alt="" className="w-75" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>{" "}
            </>
          }
        />
      }
    </>
  );
};

export default Homepage;

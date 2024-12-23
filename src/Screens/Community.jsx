import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { LIST_OF_ROOMS, NAV_LINKS } from "../Components/common.const";

const Community = () => {
  return (
    <>
      <Header navLinkJson={NAV_LINKS} loginPerson={"member"} />
      <div className="py-4">
        <div className="row gx-0 justify-content-center px-lg-0 px-5">
          <div className="border rounded col-12 col-lg-8 py-4 px-5">
            <h1 className="text-center border-bottom pb-4 mb-4">Community</h1>
            <div className="row border-bottom pb-5 justify-content-center">
              <h3 className="text-center mb-3">My Rooms</h3>
              <div className="text-center mb-4">
                <div
                  className="btn text-white px-5 rounded-1"
                  style={{ background: "green" }}
                >
                  Create Room
                </div>
              </div>

              {LIST_OF_ROOMS.map((val) => (
                <div className="col-md-4 col-lg-3 col-sm-6 col-12">
                  <div className="border">
                    <h1 className=" border-bottom fs-5 text-center  py-3">
                      {val.room_name}
                    </h1>
                    <p className="border-bottom p-2 px-3">
                      <span className="text-dark fw-semibold">Created on:</span>
                      {val.created_date}
                    </p>
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
            <h3 className="text-center my-4">Other Rooms</h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Community;

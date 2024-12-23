import React, { useState } from "react";
import { FORM_FIELDS, NAV_LINKS, UpdatePassword } from "./common.const";
import GenericPopUp from "./GenericPopUp";

const Header = (props) => {
  const { navLinkJson, loginPerson } = props;
  const [show, setShow] = useState(false);
  const handleButtonclick = (text) => {
    console.log(text);
    if (text === "Profile") {
      setShow(true);
    }
  };
  return (
    <>
      <div
        className={`row align-items-center ${
          navLinkJson ? "py-2" : "py-3"
        } px-4 text-white gx-0`}
        style={{ background: "green" }}
      >
        <div className="col-1 ">
          <h1 className="text-white fs-6 d-flex align-items-center">
            Movie Club
          </h1>
        </div>
        <div className="col-3">
          <ul className="list-unstyled d-flex justify-content-between align-items-center">
            {navLinkJson?.length ? (
              navLinkJson?.map((linkName) => (
                <li
                  className="pt-2  " 
                  style={{cursor:"pointer"}}
                  onClick={() => handleButtonclick(linkName.linkText)}
                >
                  {" "}
                  {linkName.linkText}
                </li>
              ))
            ) : (
              <></>
            )}
          </ul>
        </div>
        <div className="col-4 ms-auto">
          <div className="d-flex justify-content-end">
            <span>
              Logged in as a <b>{loginPerson}</b>
            </span>
            <span className="ms-4">Logout </span>
          </div>
        </div>
      </div>
      {
        <GenericPopUp
          show={show}
          showHeading="Update User Profile"
          showFooter={false}
          handleClose={() => setShow(false)}
          children={
            <>
              <div className="px-4 pb-5 ">
                <div className="row gy-2 border-bottom pb-4 ">
                  {FORM_FIELDS.map((val) => (
                    <div className="col-12 mt-4 ">
                      <label htmlFor={val.field} className="d-block fw-bold">
                        {val.label}{" "}
                      </label>
                      <input
                        className="w-100 mt-2 px-3 py-1 border rounded"
                        type={val.type}
                        name={val.field}
                        id={val.field}
                        disabled={val.isDisabled}
                      />
                    </div>
                  ))}
                  <div className="d-flex justify-content-center mt-4">
                    <button
                      className="btn text-white px-5 rounded-1"
                      style={{ background: "green" }}
                    >
                      Update Member
                    </button>
                  </div>
                </div>{" "}
                <div className=" pt-4 ">
                  <h3 className="text-center  ">Update Password</h3>
                  {UpdatePassword.map((val) => (
                    <div className="col-12 mt-4 ">
                      <label htmlFor={val.field} className="d-block fw-bold">
                        {val.label}{" "}
                      </label>
                      <input
                        className="w-100 mt-2 px-3 py-1 border rounded"
                        type={val.type}
                        name={val.field}
                        id={val.field}
                        disabled={val.isDisabled}
                      />
                    </div>
                  ))}
                </div>
                <div className="d-flex justify-content-center mt-4">
                    <button
                      className="btn text-white px-5 rounded-1"
                      style={{ background: "green" }}
                    >
                      Update Password
                    </button>
                  </div>
              </div>
            </>
          }
        />
      }
    </>
  );
};

export default Header;

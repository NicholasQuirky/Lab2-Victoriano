import React from "react";
import "./App.css";

export default function Nav() {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="navbar-header">
            <button
              className="navbar-toggle collapsed"
              type="button"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="https://www.pancakehouse.com.ph/">
              <img
                className="imgpancake"
                alt="Pancake House Logo"
                src="https://www.pancakehouse.com.ph/assets/images/pancake-logo.png"
              />
            </a>
          </div>
          <div
            id="bs-example-navbar-collapse-1"
            className="collapse navbar-collapse"
          >
            <ul
              className="nav navbar-nav main-navigation-header"
              style={{
                boxSizing: "border-box",
                listStyle: "none",
                margin: "-0.5px -15px",
                marginTop: "-0.5px",
                marginBottom: "-0.5px",
                background: "rgb(243, 239, 228)",
                fontFamily: "museo-normal",
                fontWeight: "bold",
                height: "100px",
                paddingTop: "30px",
                paddingLeft: "75px",
                cssFloat: "left",
                display: "inline-block",
              }}
            >
              <li
                className="parent dropdown active"
                style={{
                  boxSizing: "border-box",
                  position: "relative",
                  display: "block",
                  cssFloat: "left",
                  paddingRight: "5px",
                  color: "rgb(242, 101, 34)",
                  transition: "all 0.2s ease-in-out 0s",
                  transform: "scale(1.2)",
                  fontFamily: "museo-semibold",
                }}
              >
                <a
                  href="https://www.pancakehouse.com.ph/home"
                  style={{
                    boxSizing: "border-box",
                    backgroundColor: "transparent",
                    textDecoration: "none",
                    padding: "10px 15px",
                    position: "relative",
                    display: "block",
                    lineHeight: "20px",
                    paddingTop: "15px",
                    paddingBottom: "15px",
                    transition: "all 0.2s ease-in-out 0s",
                    color: "rgb(242, 101, 34)",
                    fontWeight: "bolder",
                  }}
                >
                  {"HOME"}
                </a>
              </li>
              <li
                className="parent dropdown"
                style={{
                  boxSizing: "border-box",
                  position: "relative",
                  display: "block",
                  cssFloat: "left",
                  paddingRight: "5px",
                  color: "rgb(242, 101, 34)",
                  transition: "all 0.2s ease-in-out 0s",
                }}
              >
                <a
                  href="https://www.pancakehouse.com.ph/MENU1"
                  style={{
                    boxSizing: "border-box",
                    backgroundColor: "transparent",
                    textDecoration: "none",
                    padding: "10px 15px",
                    position: "relative",
                    display: "block",
                    lineHeight: "20px",
                    paddingTop: "15px",
                    paddingBottom: "15px",
                    transition: "all 0.2s ease-in-out 0s",
                    color: "rgb(242, 101, 34)",
                  }}
                >
                  {"MENU"}
                </a>
              </li>
              <li
                className="parent dropdown"
                style={{
                  boxSizing: "border-box",
                  position: "relative",
                  display: "block",
                  cssFloat: "left",
                  paddingRight: "5px",
                  color: "rgb(242, 101, 34)",
                  transition: "all 0.2s ease-in-out 0s",
                }}
              >
                <a
                  href="https://www.pancakehouse.com.ph/news"
                  style={{
                    boxSizing: "border-box",
                    backgroundColor: "transparent",
                    textDecoration: "none",
                    padding: "10px 15px",
                    position: "relative",
                    display: "block",
                    lineHeight: "20px",
                    paddingTop: "15px",
                    paddingBottom: "15px",
                    transition: "all 0.2s ease-in-out 0s",
                    color: "rgb(242, 101, 34)",
                  }}
                >
                  {"REWARDS & PROMOS"}
                </a>
              </li>
              <li
                className="parent dropdown"
                style={{
                  boxSizing: "border-box",
                  position: "relative",
                  display: "block",
                  cssFloat: "left",
                  paddingRight: "5px",
                  color: "rgb(242, 101, 34)",
                  transition: "all 0.2s ease-in-out 0s",
                }}
              >
                <a
                  href="https://www.pancakehouse.com.ph/catering"
                  style={{
                    boxSizing: "border-box",
                    backgroundColor: "transparent",
                    textDecoration: "none",
                    padding: "10px 15px",
                    position: "relative",
                    display: "block",
                    lineHeight: "20px",
                    paddingTop: "15px",
                    paddingBottom: "15px",
                    transition: "all 0.2s ease-in-out 0s",
                    color: "rgb(242, 101, 34)",
                  }}
                >
                  {"CATERING"}
                </a>
              </li>
              <li
                className="parent dropdown"
                style={{
                  boxSizing: "border-box",
                  position: "relative",
                  display: "block",
                  cssFloat: "left",
                  paddingRight: "5px",
                  color: "rgb(242, 101, 34)",
                  transition: "all 0.2s ease-in-out 0s",
                }}
              >
                <a
                  href="https://www.pancakehouse.com.ph/about"
                  style={{
                    boxSizing: "border-box",
                    backgroundColor: "transparent",
                    textDecoration: "none",
                    padding: "10px 15px",
                    position: "relative",
                    display: "block",
                    lineHeight: "20px",
                    paddingTop: "15px",
                    paddingBottom: "15px",
                    transition: "all 0.2s ease-in-out 0s",
                    color: "rgb(242, 101, 34)",
                  }}
                >
                  {"ABOUT"}
                </a>
              </li>
              <li
                className="parent dropdown"
                style={{
                  boxSizing: "border-box",
                  position: "relative",
                  display: "block",
                  cssFloat: "left",
                  paddingRight: "5px",
                  color: "rgb(242, 101, 34)",
                  transition: "all 0.2s ease-in-out 0s",
                }}
              >
                <a
                  className="dropdown-toggle"
                  href="https://www.pancakehouse.com.ph/corporate"
                  style={{
                    boxSizing: "border-box",
                    backgroundColor: "transparent",
                    textDecoration: "none",
                    padding: "10px 15px",
                    position: "relative",
                    display: "block",
                    lineHeight: "20px",
                    paddingTop: "15px",
                    paddingBottom: "15px",
                    transition: "all 0.2s ease-in-out 0s",
                    color: "rgb(242, 101, 34)",
                  }}
                >
                  {"CORPORATE"}
                  <span
                    className="caret"
                    style={{
                      boxSizing: "border-box",
                      borderTop: "4px dashed",
                      borderRight: "4px solid transparent",
                      borderLeft: "4px solid transparent",
                      display: "inline-block",
                      width: "0px",
                      height: "0px",
                      marginLeft: "2px",
                      verticalAlign: "middle",
                    }}
                  />
                </a>
                <ul
                  className="dropdown-menu"
                  style={{
                    boxSizing: "border-box",
                    padding: "5px 0px",
                    margin: "2px 0px 0px",
                    listStyle: "none",
                    border: "1px solid rgba(0, 0, 0, 0.15)",
                    top: "100%",
                    left: "0px",
                    zIndex: 1000,
                    display: "none",
                    cssFloat: "left",
                    minWidth: "160px",
                    marginBottom: "0px",
                    fontSize: "14px",
                    textAlign: "left",
                    boxShadow: "rgba(0, 0, 0, 0.176) 0px 6px 12px",
                    backgroundClip: "padding-box",
                    backgroundColor: "rgb(243, 239, 228)",
                    position: "absolute",
                    marginTop: "0px",
                    borderRadius: "6px",
                    borderTopLeftRadius: "6px",
                    borderTopRightRadius: "6px",
                  }}
                >
                  <li style={{ boxSizing: "border-box" }}>
                    <a
                      href="https://www.maxsgroupinc.com/franchise/local"
                      style={{
                        boxSizing: "border-box",
                        backgroundColor: "transparent",
                        textDecoration: "none",
                        transition: "all 0.2s ease-in-out 0s",
                        padding: "3px 20px",
                        whiteSpace: "nowrap",
                        display: "block",
                        clear: "both",
                        fontWeight: "normal",
                        lineHeight: 1.42857,
                        color: "rgb(242, 101, 34)",
                      }}
                    >
                      FRANCHISE
                    </a>
                  </li>
                  <li style={{ boxSizing: "border-box" }}>
                    <a
                      href="http://investor.maxsgroupinc.com/"
                      style={{
                        boxSizing: "border-box",
                        backgroundColor: "transparent",
                        textDecoration: "none",
                        transition: "all 0.2s ease-in-out 0s",
                        padding: "3px 20px",
                        whiteSpace: "nowrap",
                        display: "block",
                        clear: "both",
                        fontWeight: "normal",
                        lineHeight: 1.42857,
                        color: "rgb(242, 101, 34)",
                      }}
                    >
                      INVESTOR RELATIONS
                    </a>
                  </li>
                </ul>
                <span
                  id="corporate-links"
                  style={{
                    boxSizing: "border-box",
                    paddingLeft: "20px",
                    position: "absolute",
                    top: "37px",
                    color: "rgb(242, 101, 34)",
                    fontFamily: "museo-semibold",
                  }}
                />
              </li>
            </ul>
          </div>
        </div>{" "}
      </div>
    </>
  );
}

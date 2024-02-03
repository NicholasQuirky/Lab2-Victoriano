import React from "react";
import "./App.css";

export default function Carousel() {
  return (
    <>
      <div className="page" style={{ boxSizing: "border-box" }}>
        <div className="wrapper" style={{ boxSizing: "border-box" }}>
          <header
            className="page_header"
            style={{ boxSizing: "border-box", display: "block" }}
          >
            <div
              className="nav-wrapper"
              style={{
                boxSizing: "border-box",
                minHeight: "120px",
                marginBottom: "-20px",
              }}
            >
              <nav className="navbar nav_background affix">
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
                      <a
                        className="navbar-brand"
                        href="https://www.pancakehouse.com.ph/"
                      >
                        <img
                          className="imglogo"
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
                            className="navtext"
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
                            className="navtext"
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
                            className="navtext"
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
                            className="navtext"
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
                            className="navtext"
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
              </nav>
            </div>
          </header>
          <div
            className="home-banner-main-wrapper container"
            style={{
              boxSizing: "border-box",
              marginRight: "auto",
              marginLeft: "auto",
              width: "1170px",
              padding: "0px",
              paddingRight: "0px",
              paddingLeft: "0px",
            }}
          >
            <div
              id="home-banner-main-container"
              className="owl-carousel owl-theme owl-loaded"
              style={{
                boxSizing: "border-box",
                width: "100%",
                WebkitTapHighlightColor: "transparent",
                position: "relative",
                zIndex: 1,
                height: "98.5%",
                padding: "0px",
                display: "block",
              }}
            >
              <div
                className="owl-stage-outer"
                style={{
                  boxSizing: "border-box",
                  height: "98.5%",
                  width: "100%",
                  zIndex: 1,
                  overflow: "hidden",
                  position: "relative",
                  transform: "translate3d(0px, 0px, 0px)",
                }}
              >
                <div
                  className="owl-stage"
                  style={{
                    boxSizing: "border-box",
                    height: "98.5%",
                    position: "relative",
                    transition: "all 0s ease 0s",
                    transform: "translate3d(0px, 0px, 0px)",
                    width: "4680px",
                  }}
                >
                  <div
                    className="owl-item active"
                    style={{
                      boxSizing: "border-box",
                      height: "98.5%",
                      position: "relative",
                      minHeight: "1px",
                      cssFloat: "left",
                      backfaceVisibility: "hidden",
                      WebkitTapHighlightColor: "transparent",
                      userSelect: "none",
                      width: "1170px",
                      marginRight: "0px",
                    }}
                  >
                    <div
                      className="owl-slide container"
                      style={{
                        boxSizing: "border-box",
                        marginRight: "auto",
                        marginLeft: "auto",
                        width: "1170px",
                        height: "98.5%",
                        padding: "0px",
                        paddingRight: "0px",
                        paddingLeft: "0px",
                      }}
                    >
                      <img
                        className="img-responsive"
                        src="https://www.pancakehouse.com.ph/assets/images/banners/home1_1170_x_5301.jpg"
                        style={{
                          boxSizing: "border-box",
                          border: "0px",
                          verticalAlign: "middle",
                          transition: "all 0.3s ease-in-out 0s",
                          maxWidth: "100%",
                          height: "auto",
                          display: "block",
                          width: "100%",
                          transformStyle: "preserve-3d",
                        }}
                      />
                      <div
                        className="banner-content-wrapper"
                        style={{
                          boxSizing: "border-box",
                          textAlign: "left",
                          position: "absolute",
                          top: "80%",
                          transform: "translateY(-50%)",
                          marginLeft: "6.1%",
                          marginRight: "35px",
                        }}
                      >
                        <div
                          className="banner-title-wrapper hide"
                          style={{
                            boxSizing: "border-box",
                            height: "71px",
                            marginTop: "20px",
                            marginBottom: "10px",
                            display: "none",
                          }}
                        >
                          <h1
                            className="banner-title museo-bold"
                            style={{
                              boxSizing: "border-box",
                              margin: "0.67em 0px",
                              fontWeight: 500,
                              lineHeight: 1.1,
                              color: "inherit",
                              marginTop: "20px",
                              marginBottom: "10px",
                              fontFamily: "museo-bold",
                              fontSize: "6.5rem",
                              display: "block",
                            }}
                          >
                            Classic Pancake
                          </h1>
                        </div>
                        <h3
                          className="banner-description museo-normal hidden-xs hide"
                          style={{
                            boxSizing: "border-box",
                            fontWeight: 500,
                            lineHeight: 1.1,
                            color: "inherit",
                            marginTop: "20px",
                            marginBottom: "10px",
                            fontSize: "24px",
                            fontFamily: "museo-normal",
                            display: "none",
                          }}
                        >
                          <p
                            style={{
                              boxSizing: "border-box",
                              margin: "0px 0px 10px",
                            }}
                          >
                            The homey goodness of plain golder pancakes served
                            with whipped butter
                          </p>
                        </h3>
                        <a
                          className="pch-btn-large btn-banner-action"
                          href="http://delivery.pancakehouse.com.ph/"
                          target="_blank"
                          style={{
                            boxSizing: "border-box",
                            backgroundColor: "transparent",
                            textDecoration: "none",
                            color: "rgb(51, 122, 183)",
                            transition: "all 0.2s ease-in-out 0s",
                          }}
                        >
                          <img
                            className="banner-action-img"
                            src="https://www.pancakehouse.com.ph/assets/images/btn-order2.png"
                            style={{
                              boxSizing: "border-box",
                              border: "0px",
                              verticalAlign: "middle",
                              transition: "all 0.3s ease-in-out 0s",
                              marginTop: "15px",
                              display: "block",
                              width: "100%",
                              transformStyle: "preserve-3d",
                            }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item"
                    style={{
                      boxSizing: "border-box",
                      height: "98.5%",
                      position: "relative",
                      minHeight: "1px",
                      cssFloat: "left",
                      backfaceVisibility: "hidden",
                      WebkitTapHighlightColor: "transparent",
                      userSelect: "none",
                      width: "1170px",
                      marginRight: "0px",
                    }}
                  >
                    <div
                      className="owl-slide container"
                      style={{
                        boxSizing: "border-box",
                        marginRight: "auto",
                        marginLeft: "auto",
                        width: "1170px",
                        height: "98.5%",
                        padding: "0px",
                        paddingRight: "0px",
                        paddingLeft: "0px",
                      }}
                    >
                      <img
                        className="img-responsive"
                        src="https://www.pancakehouse.com.ph/assets/images/banners/home3_1170_x_5301.jpg"
                        style={{
                          boxSizing: "border-box",
                          border: "0px",
                          verticalAlign: "middle",
                          transition: "all 0.3s ease-in-out 0s",
                          maxWidth: "100%",
                          height: "auto",
                          display: "block",
                          width: "100%",
                          transformStyle: "preserve-3d",
                        }}
                      />
                      <div
                        className="banner-content-wrapper"
                        style={{
                          boxSizing: "border-box",
                          textAlign: "left",
                          position: "absolute",
                          top: "80%",
                          transform: "translateY(-50%)",
                          marginLeft: "6.1%",
                          marginRight: "35px",
                        }}
                      >
                        <div
                          className="banner-title-wrapper hide"
                          style={{
                            boxSizing: "border-box",
                            height: "71px",
                            marginTop: "20px",
                            marginBottom: "10px",
                            display: "none",
                          }}
                        >
                          <h1
                            className="banner-title museo-bold"
                            style={{
                              boxSizing: "border-box",
                              margin: "0.67em 0px",
                              fontWeight: 500,
                              lineHeight: 1.1,
                              color: "inherit",
                              marginTop: "20px",
                              marginBottom: "10px",
                              fontFamily: "museo-bold",
                              fontSize: "6.5rem",
                              display: "block",
                            }}
                          >
                            Classic Pan Chicken
                          </h1>
                        </div>
                        <h3
                          className="banner-description museo-normal hidden-xs hide"
                          style={{
                            boxSizing: "border-box",
                            fontWeight: 500,
                            lineHeight: 1.1,
                            color: "inherit",
                            marginTop: "20px",
                            marginBottom: "10px",
                            fontSize: "24px",
                            fontFamily: "museo-normal",
                            display: "none",
                          }}
                        />
                        <a
                          className="pch-btn-large btn-banner-action"
                          href="http://delivery.pancakehouse.com.ph/"
                          target="_blank"
                          style={{
                            boxSizing: "border-box",
                            backgroundColor: "transparent",
                            textDecoration: "none",
                            color: "rgb(51, 122, 183)",
                            transition: "all 0.2s ease-in-out 0s",
                          }}
                        >
                          <img
                            className="banner-action-img"
                            src="https://www.pancakehouse.com.ph/assets/images/btn-order-hover1.png"
                            style={{
                              boxSizing: "border-box",
                              border: "0px",
                              verticalAlign: "middle",
                              transition: "all 0.3s ease-in-out 0s",
                              marginTop: "15px",
                              display: "block",
                              width: "100%",
                              transformStyle: "preserve-3d",
                            }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item"
                    style={{
                      boxSizing: "border-box",
                      height: "98.5%",
                      position: "relative",
                      minHeight: "1px",
                      cssFloat: "left",
                      backfaceVisibility: "hidden",
                      WebkitTapHighlightColor: "transparent",
                      userSelect: "none",
                      width: "1170px",
                      marginRight: "0px",
                    }}
                  >
                    <div
                      className="owl-slide container"
                      style={{
                        boxSizing: "border-box",
                        marginRight: "auto",
                        marginLeft: "auto",
                        width: "1170px",
                        height: "98.5%",
                        padding: "0px",
                        paddingRight: "0px",
                        paddingLeft: "0px",
                      }}
                    >
                      <img
                        className="img-responsive"
                        src="https://www.pancakehouse.com.ph/assets/images/banners/home2_1170_x_530.jpg"
                        style={{
                          boxSizing: "border-box",
                          border: "0px",
                          verticalAlign: "middle",
                          transition: "all 0.3s ease-in-out 0s",
                          maxWidth: "100%",
                          height: "auto",
                          display: "block",
                          width: "100%",
                          transformStyle: "preserve-3d",
                        }}
                      />
                      <div
                        className="banner-content-wrapper"
                        style={{
                          boxSizing: "border-box",
                          textAlign: "left",
                          position: "absolute",
                          top: "80%",
                          transform: "translateY(-50%)",
                          marginLeft: "6.1%",
                          marginRight: "35px",
                        }}
                      >
                        <div
                          className="banner-title-wrapper hide"
                          style={{
                            boxSizing: "border-box",
                            height: "71px",
                            marginTop: "20px",
                            marginBottom: "10px",
                            display: "none",
                          }}
                        >
                          <h1
                            className="banner-title museo-bold"
                            style={{
                              boxSizing: "border-box",
                              margin: "0.67em 0px",
                              fontWeight: 500,
                              lineHeight: 1.1,
                              color: "inherit",
                              marginTop: "20px",
                              marginBottom: "10px",
                              fontFamily: "museo-bold",
                              fontSize: "6.5rem",
                              display: "block",
                            }}
                          >
                            Pan Grilled Pork Belly
                          </h1>
                        </div>
                        <h3
                          className="banner-description museo-normal hidden-xs hide"
                          style={{
                            boxSizing: "border-box",
                            fontWeight: 500,
                            lineHeight: 1.1,
                            color: "inherit",
                            marginTop: "20px",
                            marginBottom: "10px",
                            fontSize: "24px",
                            fontFamily: "museo-normal",
                            display: "none",
                          }}
                        />
                        <a
                          className="pch-btn-large btn-banner-action"
                          href="http://delivery.pancakehouse.com.ph/"
                          target="_blank"
                          style={{
                            boxSizing: "border-box",
                            backgroundColor: "transparent",
                            textDecoration: "none",
                            color: "rgb(51, 122, 183)",
                            transition: "all 0.2s ease-in-out 0s",
                          }}
                        >
                          <img
                            className="banner-action-img"
                            src="https://www.pancakehouse.com.ph/assets/images/btn-order2.png"
                            style={{
                              boxSizing: "border-box",
                              border: "0px",
                              verticalAlign: "middle",
                              transition: "all 0.3s ease-in-out 0s",
                              marginTop: "15px",
                              display: "block",
                              width: "100%",
                              transformStyle: "preserve-3d",
                            }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="owl-item"
                    style={{
                      boxSizing: "border-box",
                      height: "98.5%",
                      position: "relative",
                      minHeight: "1px",
                      cssFloat: "left",
                      backfaceVisibility: "hidden",
                      WebkitTapHighlightColor: "transparent",
                      userSelect: "none",
                      width: "1170px",
                      marginRight: "0px",
                    }}
                  >
                    <div
                      className="owl-slide container"
                      style={{
                        boxSizing: "border-box",
                        marginRight: "auto",
                        marginLeft: "auto",
                        width: "1170px",
                        height: "98.5%",
                        padding: "0px",
                        paddingRight: "0px",
                        paddingLeft: "0px",
                      }}
                    >
                      <img
                        className="img-responsive"
                        src="https://www.pancakehouse.com.ph/assets/images/banners/PH-x-Shopee-16-9-Website-Banner-B.jpg"
                        style={{
                          boxSizing: "border-box",
                          border: "0px",
                          verticalAlign: "middle",
                          transition: "all 0.3s ease-in-out 0s",
                          maxWidth: "100%",
                          height: "auto",
                          display: "block",
                          width: "100%",
                          transformStyle: "preserve-3d",
                        }}
                      />
                      <div
                        className="banner-content-wrapper"
                        style={{
                          boxSizing: "border-box",
                          textAlign: "left",
                          position: "absolute",
                          top: "80%",
                          transform: "translateY(-50%)",
                          marginLeft: "6.1%",
                          marginRight: "35px",
                        }}
                      >
                        <div
                          className="banner-title-wrapper hide"
                          style={{
                            boxSizing: "border-box",
                            height: "71px",
                            marginTop: "20px",
                            marginBottom: "10px",
                            display: "none",
                          }}
                        >
                          <h1
                            className="banner-title museo-bold"
                            style={{
                              boxSizing: "border-box",
                              margin: "0.67em 0px",
                              fontWeight: 500,
                              lineHeight: 1.1,
                              color: "inherit",
                              marginTop: "20px",
                              marginBottom: "10px",
                              fontFamily: "museo-bold",
                              fontSize: "6.5rem",
                              display: "block",
                            }}
                          >
                            PH x Shopee Banner
                          </h1>
                        </div>
                        <h3
                          className="banner-description museo-normal hidden-xs hide"
                          style={{
                            boxSizing: "border-box",
                            fontWeight: 500,
                            lineHeight: 1.1,
                            color: "inherit",
                            marginTop: "20px",
                            marginBottom: "10px",
                            fontSize: "24px",
                            fontFamily: "museo-normal",
                            display: "none",
                          }}
                        >
                          <p
                            style={{
                              boxSizing: "border-box",
                              margin: "0px 0px 10px",
                            }}
                          >
                            <img
                              src="https://www.pancakehouse.com.ph/assets/images/PH_Shopee.jpg"
                              style={{
                                boxSizing: "border-box",
                                border: "0px",
                                verticalAlign: "middle",
                                transition: "all 0.3s ease-in-out 0s",
                                display: "block",
                                width: "100%",
                                transformStyle: "preserve-3d",
                              }}
                            />
                          </p>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-controls" style={{ boxSizing: "border-box" }}>
                <div className="owl-nav" style={{ boxSizing: "border-box" }}>
                  <div
                    className="owl-prev"
                    style={{
                      boxSizing: "border-box",
                      cursor: "pointer",
                      userSelect: "none",
                      display: "none",
                    }}
                  >
                    ‹
                  </div>
                  <div
                    className="owl-next"
                    style={{
                      boxSizing: "border-box",
                      cursor: "pointer",
                      userSelect: "none",
                      display: "none",
                    }}
                  >
                    ›
                  </div>
                </div>
                <div
                  className="owl-dots"
                  style={{
                    boxSizing: "border-box",
                    position: "absolute",
                    bottom: "30px",
                    textAlign: "center",
                    width: "100%",
                    backfaceVisibility: "hidden",
                    zIndex: 1,
                  }}
                >
                  <div
                    className="owl-dot active"
                    style={{
                      boxSizing: "border-box",
                      borderRadius: "50px",
                      display: "inline-block",
                      marginLeft: "5px",
                      marginRight: "5px",
                      background: "transparent",
                      border: "2px solid rgb(255, 255, 255)",
                      height: "21px",
                      width: "21px",
                      position: "relative",
                      top: "5px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    <span style={{ boxSizing: "border-box" }} />
                  </div>
                  <div
                    className="owl-dot"
                    style={{
                      boxSizing: "border-box",
                      borderRadius: "50px",
                      background: "rgb(255, 255, 255)",
                      height: "11px",
                      width: "11px",
                      display: "inline-block",
                      marginLeft: "5px",
                      marginRight: "5px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    <span style={{ boxSizing: "border-box" }} />
                  </div>
                  <div
                    className="owl-dot"
                    style={{
                      boxSizing: "border-box",
                      borderRadius: "50px",
                      background: "rgb(255, 255, 255)",
                      height: "11px",
                      width: "11px",
                      display: "inline-block",
                      marginLeft: "5px",
                      marginRight: "5px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    <span style={{ boxSizing: "border-box" }} />
                  </div>
                  <div
                    className="owl-dot"
                    style={{
                      boxSizing: "border-box",
                      borderRadius: "50px",
                      background: "rgb(255, 255, 255)",
                      height: "11px",
                      width: "11px",
                      display: "inline-block",
                      marginLeft: "5px",
                      marginRight: "5px",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    <span style={{ boxSizing: "border-box" }} />
                  </div>
                </div>
              </div>
            </div>
            <div
              id="home-ads-main-wrapper"
              style={{
                boxSizing: "border-box",
                overflow: "hidden",
                paddingBottom: "57px",
                backgroundColor: "rgb(255, 242, 226)",
                paddingTop: "35px",
              }}
            >
              <div
                className="col-md-4 col-sm-4 col-xs-12 center home-featured"
                style={{
                  boxSizing: "border-box",
                  position: "relative",
                  minHeight: "1px",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  cssFloat: "left",
                  width: "33.3333%",
                  textAlign: "center",
                }}
              >
                <div
                  className="home-ads-img-wrapper"
                  style={{ boxSizing: "border-box", minHeight: "230px" }}
                >
                  <img
                    className="home-ads-img img-responsive"
                    src="https://www.pancakehouse.com.ph/assets/images/franchising_320_x_230.png"
                    style={{
                      boxSizing: "border-box",
                      border: "0px",
                      verticalAlign: "middle",
                      transition: "all 0.3s ease-in-out 0s",
                      display: "block",
                      maxWidth: "100%",
                      height: "auto",
                      margin: "0px auto",
                    }}
                  />
                </div>
                <div className="clearfix" style={{ boxSizing: "border-box" }} />
                <button className="home-ads-button">
                  LEARN ABOUT FRANCHISING
                </button>
              </div>
              <div
                className="col-md-4 col-sm-4 col-xs-12 center home-featured"
                style={{
                  boxSizing: "border-box",
                  position: "relative",
                  minHeight: "1px",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  cssFloat: "left",
                  width: "33.3333%",
                  textAlign: "center",
                }}
              >
                <div
                  className="home-ads-img-wrapper"
                  style={{ boxSizing: "border-box", minHeight: "230px" }}
                >
                  <img
                    className="home-ads-img img-responsive"
                    src="https://www.pancakehouse.com.ph/assets/images/promo_320_x_230.png"
                    style={{
                      boxSizing: "border-box",
                      border: "0px",
                      verticalAlign: "middle",
                      transition: "all 0.3s ease-in-out 0s",
                      display: "block",
                      maxWidth: "100%",
                      height: "auto",
                      margin: "0px auto",
                    }}
                  />
                </div>
                <div className="clearfix" style={{ boxSizing: "border-box" }} />
                <button className="home-ads-button">CHECK THIS OUT</button>
              </div>
              <div
                className="col-md-4 col-sm-4 col-xs-12 center home-featured"
                style={{
                  boxSizing: "border-box",
                  position: "relative",
                  minHeight: "1px",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  cssFloat: "left",
                  width: "33.3333%",
                  textAlign: "center",
                }}
              >
                <div
                  className="home-ads-img-wrapper"
                  style={{ boxSizing: "border-box", minHeight: "230px" }}
                >
                  <img
                    className="home-ads-img img-responsive"
                    src="https://www.pancakehouse.com.ph/assets/images/eGift_320_x_230.png"
                    style={{
                      boxSizing: "border-box",
                      border: "0px",
                      verticalAlign: "middle",
                      transition: "all 0.3s ease-in-out 0s",
                      display: "block",
                      maxWidth: "100%",
                      height: "auto",
                      margin: "0px auto",
                    }}
                  />
                </div>
                <div className="clearfix" style={{ boxSizing: "border-box" }} />
                <button className="home-ads-button">SEND AN eGIFT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

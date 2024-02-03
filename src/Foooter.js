import React from "react";
import "./App.css";

export default function Footer({
  facebookLink,
  twitterLink,
  instagramLink,
  snapchatLink,
  copyrightText,
  privacyPolicyLink,
  subscribeLink,
}) {
  return (
    <>
      <footer className="containersp">
        <center style={{ boxSizing: "border-box" }}>
          <div
            className="footer-main-wrapper"
            style={{ boxSizing: "border-box" }}
          >
            <h4>{"Follow us through our social media accounts."}</h4>
            <ul className="social-media">
              <li style={{ boxSizing: "border-box", display: "inline" }}>
                <a href={facebookLink} target="_blank" className="socmed">
                  <img
                    src="https://www.pancakehouse.com.ph//assets/images/footer-fb-icon.png"
                    className="imgsocmed"
                    alt="Facebook Icon"
                  />
                </a>
              </li>
              <li style={{ boxSizing: "border-box", display: "inline" }}>
                <a href={twitterLink} target="_blank" className="socmed">
                  <img
                    src="https://www.pancakehouse.com.ph//assets/images/footer-twitter-icon2.png"
                    className="imgsocmed"
                    alt="Twitter Icon"
                  />
                </a>
              </li>
              <li style={{ boxSizing: "border-box", display: "inline" }}>
                <a href={instagramLink} target="_blank" className="socmed">
                  <img
                    src="https://www.pancakehouse.com.ph//assets/images/footer-ig-icon2.png"
                    className="imgsocmed"
                    alt="Instagram Icon"
                  />
                </a>
              </li>
              <li style={{ boxSizing: "border-box", display: "inline" }}>
                <a href={snapchatLink} target="_blank" className="socmed">
                  <img
                    src="https://www.pancakehouse.com.ph//assets/images/footer-snapchat-icon.png"
                    className="imgsocmed"
                    alt="Snapchat Icon"
                  />
                </a>
              </li>
            </ul>
            <div
              className="copy"
              style={{
                boxSizing: "border-box",
                marginTop: "30px",
                color: "rgb(184, 184, 184)",
              }}
            >
              <a>{copyrightText}</a>
              <a
                href={privacyPolicyLink}
                style={{
                  boxSizing: "border-box",
                  backgroundColor: "transparent",
                  textDecoration: "none",
                  color: "rgb(51, 122, 183)",
                  transition: "all 0.2s ease-in-out 0s",
                }}
              >
                Privacy Policy{" "}
              </a>{" "}
              |{" "}
              <a
                href={subscribeLink}
                target="_blank"
                style={{
                  boxSizing: "border-box",
                  backgroundColor: "transparent",
                  textDecoration: "none",
                  color: "rgb(51, 122, 183)",
                  transition: "all 0.2s ease-in-out 0s",
                }}
              >
                Subscribe
              </a>
            </div>
          </div>
        </center>
      </footer>
    </>
  );
}

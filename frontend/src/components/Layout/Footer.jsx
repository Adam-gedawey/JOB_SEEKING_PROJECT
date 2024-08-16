import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By AdamJeddawi.</div>
      <div>
        <Link to={"https://www.facebook.com/profile.php?id=100095083680058"} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={"https://www.linkedin.com/in/adam-gedawey-%F0%9F%87%B5%F0%9F%87%B8-b3b354215/"} target="_blank">
          <FaLinkedin />
        </Link>

      </div>
    </footer>
  );
};

export default Footer;

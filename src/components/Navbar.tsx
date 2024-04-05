import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isHovered1, setIsHovered1] = useState(false);
  const handleHover1 = () => setIsHovered1(!isHovered1);
  const [isHovered2, setIsHovered2] = useState(false);
  const handleHover2 = () => setIsHovered2(!isHovered2);
  const [isHovered3, setIsHovered3] = useState(false);
  const handleHover3 = () => setIsHovered3(!isHovered3);

  const handleClick = () => setIsCollapsed(!isCollapsed);

  return (
    <div
      className={isCollapsed ? "sidebar" : "sidebar open"}
      onMouseEnter={handleClick}
      onMouseLeave={handleClick}
    >
      <ul className="nav-list">
        <li>
          {" "}
          <img
            src="../../street suite logo-04.png"
            alt=""
            width={200}
            height={200}
          />
        </li>
        <li>
          <a href="#">
            <i className="fa fa-bell"></i>
            <span className="link_name poppins-bold">Alerts</span>
          </a>
          <span className="tooltip">Alerts</span>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-graduation-cap"></i>
            <span className="link_name poppins-bold">Training</span>
          </a>
          <span className="tooltip">Training</span>
        </li>

        <li
          onMouseEnter={handleHover1}
          onMouseLeave={handleHover1}
          className="disabled"
        >
          <a href="#">
            <i
              className="fa fa-cogs "
              style={isHovered1 ? { display: "none" } : { color: " #ffffff3a" }}
            ></i>
            {isHovered1 ? (
              <span
                className="link_name poppins-bold "
                style={{ color: " #ffffff", paddingLeft: "40px" }}
              >
                Coming Soon
              </span>
            ) : (
              <span
                className="link_name poppins-bold "
                style={{ color: " #ffffff3a" }}
              >
                Automation
              </span>
            )}
          </a>
          <span className="tooltip " style={{ color: " #ffffff3a" }}>
            Automation
          </span>
        </li>

        <li
          onMouseEnter={handleHover2}
          onMouseLeave={handleHover2}
          className="disabled"
        >
          <a href="#">
            <i
              className="fa fa-folder-open"
              style={isHovered2 ? { display: "none" } : { color: " #ffffff3a" }}
            ></i>
            {isHovered2 ? (
              <span
                className="link_name poppins-bold "
                style={{ color: " #ffffff", paddingLeft: "40px" }}
              >
                Coming Soon
              </span>
            ) : (
              <span
                className="link_name poppins-bold "
                style={{ color: " #ffffff3a" }}
              >
                Portfolio
              </span>
            )}{" "}
          </a>
          <span className="tooltip" style={{ color: " #ffffff3a" }}>
            Portfolio
          </span>
        </li>
        <li
          onMouseEnter={handleHover3}
          onMouseLeave={handleHover3}
          className="disabled"
        >
          <a href="#">
            <i
              className="fa fa-line-chart"
              aria-hidden="true"
              style={isHovered3 ? { display: "none" } : { color: " #ffffff3a" }}
            ></i>
            {isHovered3 ? (
              <span
                className="link_name poppins-bold "
                style={{ color: " #ffffff", paddingLeft: "40px" }}
              >
                Coming Soon
              </span>
            ) : (
              <span
                className="link_name poppins-bold "
                style={{ color: " #ffffff3a" }}
              >
                Trading
              </span>
            )}{" "}
          </a>
          <span className="tooltip">Trading</span>
        </li>
        <li className="profile">
          <div className="profile_details">
            <img
              className="profileImg"
              src="../../profileimg.png"
              alt="profile image"
            />
            <div className="profile_content">
              <div
                className="name poppins-bold"
                style={{ display: isCollapsed ? "none" : "" }}
              >
                Moni Roy
              </div>
              <div
                className="name poppins-bold shaded"
                style={{ display: isCollapsed ? "none" : "" }}
              >
                Beginner
              </div>
            </div>
          </div>
          <div
            className="version name poppins-bold"
            style={{ display: isCollapsed ? "none" : "" }}
          >
            Street Suite. 2.0
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

import React from "react";
import "../App.css";
import { SidebarData } from "./SidebarData";

const SideBar = () => {
  return (
    <div className="Sidebar">
      <h2>Admin</h2>
      {SidebarData.map((item, index) => (
        <>
          <li key={index}>
            <div style={{ fontSize: "1.4em", margin: "10px", color: "white" }}>
              <span>
                <img
                  src={item.img}
                  alt=""
                  style={{ color: "black", width: "20px", height: "20px" }}
                />
              </span>
              {item.title}
            </div>
          </li>
        </>
      ))}
    </div>
  );
};

export default SideBar;

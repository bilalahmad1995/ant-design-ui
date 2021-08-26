import React from "react";
import { Menu } from "antd";

const AppHeader = () => {
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="" logo>
          <i className="fas fa-bolt">Tech</i>
        </div>
        <Menu mode="horizontal" defaultSelectedKeys={["home"]}>
          <Menu.Item key="home">Home</Menu.Item>
          <Menu.Item key="about">About</Menu.Item>
          <Menu.Item key="blog">Blog</Menu.Item>
          <Menu.Item key="resume">Resume</Menu.Item>
        </Menu>
      </div>
    </div>
  );
};

export default AppHeader;

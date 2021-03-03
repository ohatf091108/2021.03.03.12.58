import React, { useState } from "react";
import "./index.css";
import "antd/dist/antd.css";
import { Carousel, Button, Space } from "antd";
import { HomeFilled } from "@ant-design/icons";
import { Link, Route, withRouter } from "react-router-dom";
import { Row, Col } from "antd";
import { Switch } from "@material-ui/core";
import HomePage from "../HomePage";

//使用 map() function 接收 images array
const images = [
  {
    path: require("../../assets/images/front01.jpg")
  },
  {
    path: require("../../assets/images/front02.jpg")
  },
  {
    path: require("../../assets/images/front03.jpg")
  },
  {
    path: require("../../assets/images/front04.jpg")
  },
  {
    path: require("../../assets/images/front05.jpg")
  }
];

const FontCover = () => {
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [buttonIsHover, setButtonIsHover] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      {/* autoplaySpeed是輪播間隔時長，speed是圖片切換速度 */}
      <Carousel autoplay autoplaySpeed={3000} speed={500} dots={false}>
        {images.map((item, index) => (
          <div
            key={index}
            onMouseOver={() => {
              setHoverIndex(index);
            }}
            onMouseOut={() => {
              setHoverIndex(-1);
            }}
          >
            <img
              // className={"content"}
              className={[
                "content",
                index === hoverIndex || buttonIsHover
                  ? "hover-content"
                  : "un-hover-content"
              ]
                .join(" ")
                .trim()}
              src={item["path"]}
              alt={index}
            />
          </div>
        ))}
      </Carousel>
      {/* <div
        style={{
          width: "100px",
          height: "100px",
          background: "red",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          margin: "auto",
          zIndex: 100
        }}
      > */}
      <div className={"Homebutton"}>
        <Link to="/">
          <Button
            type="button"
            size="large"
            shape="round"
            icon={<HomeFilled />}
            className={[
              "button-style",
              hoverIndex !== -1 || buttonIsHover
                ? "hover-button"
                : "un-hover-button"
            ]
              .join(" ")
              .trim()}
            onMouseOver={() => {
              setButtonIsHover(true);
            }}
            onMouseOut={() => {
              setButtonIsHover(false);
            }}
          >
            HOME
          </Button>
        </Link>

        <Route exact path="/">
          <HomePage />
        </Route>
      </div>
      {/* </div> */}
      {/* <div align="center">
        <Link to="/Home">
          <Button
            style={buttonStyle}
            type="button"
            size="large"
            shape="round"
            icon={<HomeFilled />}
          >
            HOME
          </Button>
        </Link>
      </div> */}
    </div>
  );
};

export default FontCover;

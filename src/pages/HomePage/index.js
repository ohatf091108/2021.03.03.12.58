import React, { Component } from "react";
import styles from "./home.module.scss";
import WorkLists from "../../components/WorkLists";
import worksData from "../works.json";
import { Carousel, Row, Col } from "antd";
import "antd/dist/antd.css";

export default () => {
  const contentStyle = {
    width: "100%",
    height: "27vmax",
    objectFit: "cover",
    objectPosition: "50% 50%",
    marginTop: "10px"
  };

  return (
    <div className={styles.wrap}>
      {/* autoplaySpeed是輪播間隔時長，speed是圖片切換速度 */}
      <Carousel autoplay autoplaySpeed={3000} speed={700}>
        <div>
          <img
            style={contentStyle}
            src={require("../../assets/images/nav01.jpg")}
          />
        </div>
        <div>
          <img
            style={contentStyle}
            src={require("../../assets/images/nav02.jpg")}
          />
        </div>
        <div>
          <img
            style={contentStyle}
            src={require("../../assets/images/nav03.jpg")}
          />
        </div>
        <div>
          <img
            style={contentStyle}
            src={require("../../assets/images/nav04.jpg")}
          />
        </div>
      </Carousel>

      {/* 个人简介 */}
      <section className={styles.brief}>
        <img src={require("../../assets/images/avatar.jpg")} />
        {/* <h2>我們•溫暖你生活的每一天</h2> */}
        <h2>We•warm every day of your life</h2>
        <ul>
          <li>American coffee</li>
          <li>Hand shake beverages</li>
          <li>Birthday cake</li>
        </ul>
        {/* <p>
          從原產地的一株咖啡樹，最終成為您手中的一杯咖啡；我們堅持採購並且烘焙最高品質的咖啡，這是我們一直努力的基本原則；最初的十英呎到最後十英呎的珍貴體驗，為咖啡的故事做了最佳的註解，同時也塑造出咖啡家族的獨特風味及口感特性，閱讀咖啡的故事，可以讓您更瞭解咖啡，豐富您的咖啡體驗。
        </p> */}
        <p>
          From a coffee tree in the place of origin to a cup of coffee in your
          hands; we insist on purchasing and roasting the highest quality
          coffee, which is the basic principle of our efforts; the precious
          experience from the first ten feet to the last ten feet, Made the best
          annotation for the story of coffee, and also shaped the unique flavor
          and taste characteristics of the coffee family. Reading the story of
          coffee can let you know more about coffee and enrich your coffee
          experience.
        </p>
        <p>The relentless pursuit of perfection,take time to indulge!</p>
        <p>Contact me at loremipsum@gmail.com</p>
      </section>

      {/* 作品列表 */}
      <section className={styles.work}>
        <div className={styles.title}>
          <h3>Menu Template</h3>
          {/* <p>1/27~2/28慶祝Lorem Ipsum開幕咖啡半價</p> */}
          <p>1/27~2/28 celebrate the opening with half price coffee</p>
        </div>
        <WorkLists dataSource={worksData.data} />
      </section>
    </div>
  );
};

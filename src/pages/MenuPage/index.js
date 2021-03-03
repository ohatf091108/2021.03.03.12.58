import React, { Component } from "react";
import styles from "./works.module.scss";
import WorkLists from "../../components/WorkLists";
import datas from "../works.json";

export default () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.title}>
        <h3>Menu Template</h3>
        <p>1/27~2/28 celebrate the opening with half price coffee</p>
      </div>
      <WorkLists dataSource={datas.data} />
    </div>
  );
};

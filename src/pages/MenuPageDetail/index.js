import React, { Component, useState } from "react";
import styles from "./detail.module.scss";

const CoffeeObject = [
  {
    id: Math.random(),
    source: require("../../assets/images/coffee_item1.png"),
    description: "coffee"
  },
  {
    id: Math.random(),
    source: require("../../assets/images/coffee_item2.jpg"),
    description: "juice"
  },
  {
    id: Math.random(),
    source: require("../../assets/images/coffee_item3.jpg"),
    description: "tea"
  },
  {
    id: Math.random(),
    source: require("../../assets/images/coffee_item4.jpg"),
    description: "milk"
  }
];

function MenuPageDetail() {
  const [_index, setIndex] = useState(0.5);
  const [_2index, setLeaveIndex] = useState(0.5);

  const contentStyle = {
    width: "20%",
    height: "5%",
    marginTop: "10px",
    display: "flex",
    textalign: "center"
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.box}>
        <div className={styles.title}>
          <h1>StaffTraveler</h1>
          <p>Sep 2020 to Aug 202012345645678</p>
        </div>
        <section className={styles.content}>
          {CoffeeObject.map((item, index) => (
            <div
              onMouseOver={() => {
                setIndex(index);
              }}
              onMouseLeave={() => {
                setLeaveIndex(index);
              }}
              key={item.id}
              style={{ backgroundColor: "#055" }}
            >
              <article>
                <a>
                  <img
                    style={{
                      width: "30%",
                      height: "5%",
                      marginTop: "10px",
                      display: "flex",
                      textalign: "center",
                      opacity: index == _index ? 0.5 : 1,
                      border: "1px solid black",
                      borderColor: index == _index ? "red" : "yellow",
                      backgroundColor: "black"
                    }}
                    src={item.source}
                  />
                </a>
              </article>
              <div>
                <a>
                  <h5>{item.description}</h5>
                </a>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default MenuPageDetail;

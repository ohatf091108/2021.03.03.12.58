import React, { Component, useState, useEffect } from "react";
import styles from "./work.module.scss";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";

export default ({ dataSource }) => {
  return (
    <>
      <div className={styles.worklist}>
        <ul>
          <Row>
            {dataSource &&
              dataSource.map((item) => (
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <li key={item.id}>
                    <Link to={`/menu/${item.id}`}>
                      <div className={styles.cover}>
                        <img src={item.cover} />
                      </div>
                      <div className={styles.workbrief}>
                        <h3>{item.title}</h3>
                        <p>{item.brief}</p>
                        <div className={styles.tag}>
                          {item.tags &&
                            item.tags.map((i) => <span key={i}>{i}</span>)}
                        </div>
                      </div>
                    </Link>
                  </li>
                </Col>
              ))}
          </Row>
        </ul>
      </div>
    </>
  );
};

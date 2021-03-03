import React, { Component } from "react";
import styles from "./AppHome.module.scss";
import { Link, Route, withRouter } from "react-router-dom";
import HomePage from "./HomePage";
import MenuPage from "./MenuPage";
import FrontPage from "./FrontCover";
import MenuPageDetail from "./MenuPageDetail";
import { Row, Col } from "antd";
import "antd/dist/antd.css";

class AppHome extends Component {
  render() {
    const { location } = this.props;
    return (
      <div className={styles.App}>
        {/* 头部导航 */}
        <header className={styles.header}>
          <Row justify="center">
            <Col xs={24} sm={17} md={17} lg={17} xl={17}>
              <div className={styles.box}>
                <Link to="/">
                  <div className={styles.boxleft}>LOREM IPSUM</div>
                </Link>

                <div className={styles.boxright}>
                  <Link to="/">
                    <p
                      className={
                        location.pathname === "/" ? styles.selected : null
                      }
                    >
                      HOME
                    </p>
                  </Link>
                  <Link to="/menu">
                    <p
                      className={
                        location.pathname === "/menu" ? styles.selected : null
                      }
                    >
                      MENU
                    </p>
                  </Link>
                  <Link to="/front">
                    <p
                      className={
                        location.pathname === "/front" ? styles.selected : null
                      }
                    >
                      Front
                    </p>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </header>
        {/* 内容区 */}
        <section className={styles.content}>
          <Route path="/" exact component={HomePage} />
          <Route path="/menu" exact component={MenuPage} />
          <Route path="/menu/:id" exact component={MenuPageDetail} />
          <Route path="/front" exact component={FrontPage} />
        </section>

        {/* 底部 */}

        <footer className={styles.footer}>
          <Row justify="center">
            <Col xs={24} sm={20} md={20} lg={20} xl={20}>
              <div className={styles.box}>
                <div className={styles.boxleft}>
                  <p>
                    No. 233-1, Zhongzheng Rd., <br />
                    Tamsui Dist., New Taipei City 251
                  </p>
                </div>

                <div className={styles.boxmid}>
                  <p>
                    © <b>2021 LOREM IPSUM</b>
                  </p>
                  <p>Handmade with</p>
                </div>

                <div className={styles.boxright}>
                  <Row>
                    <Col span={6}>
                      <a href="https://www.facebook.com/" target="_blank">
                        <img src={require("../assets/images/facebook.png")} />
                      </a>
                    </Col>
                    <Col span={6}>
                      <a href="https://www.www.messenger.com/" target="_blank">
                        <img src={require("../assets/images/message.png")} />
                      </a>
                    </Col>
                    <Col span={6}>
                      <a href="https://www.instagram.com/" target="_blank">
                        <img src={require("../assets/images/ig.png")} />
                      </a>
                    </Col>
                    <Col span={6}>
                      <a href="https://www.youtube.com/" target="_blank">
                        <img src={require("../assets/images/youtube.png")} />
                      </a>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </footer>
      </div>
    );
  }
}

export default withRouter(AppHome);

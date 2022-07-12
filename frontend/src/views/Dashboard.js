/*!

=========================================================
* Black Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// react plugin for creating vector maps
import { VectorMap } from "react-jvectormap";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  chartExample1,
} from "variables/charts.js";

import "views/api/api.js";
import { stpTemp, strTemp, TempFlowAq, updateRelay} from "./api/api";

const Dashboard = () => {
  const [runStat, setrunStat] = React.useState(false);
  const [Thin, setThin] = React.useState(0);
  const [Thout, setThout] = React.useState(0);
  const [Tcin, setTcin] = React.useState(0);
  const [Tcout, setTcout] = React.useState(0);
  const [fetchTimer, setFetchTimer] = React.useState(null);

  const acTemp = async () => {
    const data = await TempFlowAq();
    let nThin = 0, nThout = 0, nTcin = 0, nTcout = 0;
    [nThin, nThout, nTcin, nTcout] = [
      data['T1'],
      data['T2'],
      data['T3'],
      data['T4'],
    ]
    setThin(nThin);
    setThout(nThout);
    setTcin(nTcin);
    setTcout(nTcout);
    console.log([Thin, Thout, Tcin, Tcout]);
  };

  const getTempInf = async (cond, ftt) => {
    console.log(cond);
    console.log(ftt);
    if(cond && ftt === null){
      await strTemp();
      setFetchTimer(setInterval(acTemp, 2000));
    }
    else if(!cond && ftt!==null) {
      console.log("bruh");
      await stpTemp();
      clearInterval(ftt);
      setFetchTimer(null);
    }
  };

  useEffect(() => {
    getTempInf(runStat, fetchTimer);
  });

  return (
    <>
      <div className="content">
        <Row>
          <Col xs="6">
            <Row>
              <Col xs="6">
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <Col xs="5">
                        <div className="info-icon text-center icon-success">
                          <i className="tim-icons icon-alert-circle-exc" />
                        </div>
                      </Col>
                      <Col xs="7">
                        <div className="numbers">
                          {/* <p className="card-category">T<sub>hot</sub> inlet</p> */}
                          <CardTitle tag="h6">T<sub>1</sub></CardTitle>
                          <CardTitle tag="h3">{Thin.toFixed(4)} <sup>O</sup>C</CardTitle>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                  {/* <CardFooter>
                    <hr />
                    <div className="stats">
                      <i className="tim-icons icon-refresh-01" /> Update Now
                    </div>
                  </CardFooter> */}
                </Card>
              </Col>
              <Col xs="6">
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <Col xs="5">
                        <div className="info-icon text-center icon-success">
                          <i className="tim-icons icon-alert-circle-exc" />
                        </div>
                      </Col>
                      <Col xs="7">
                        <div className="numbers">
                        {/* <p className="card-category">T<sub>hot</sub> outlet</p> */}
                          <CardTitle tag="h6">T<sub>2</sub></CardTitle>
                          <CardTitle tag="h3">{Thout.toFixed(4)} <sup>O</sup>C</CardTitle>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                  {/* <CardFooter>
                    <hr />
                    <div className="stats">
                      <i className="tim-icons icon-sound-wave" /> Last Research
                    </div>
                  </CardFooter> */}
                </Card>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col xs="6">
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <Col xs="5">
                        <div className="info-icon text-center icon-success">
                          <i className="tim-icons icon-alert-circle-exc" />
                        </div>
                      </Col>
                      <Col xs="7">
                        <div className="numbers">
                          {/* <p className="card-category">T<sub>cold</sub> inlet</p> */}
                          <CardTitle tag="h6">T<sub>3</sub></CardTitle>
                          <CardTitle tag="h3">{Tcin.toFixed(4)} <sup>O</sup>C</CardTitle>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                  {/* <CardFooter>
                    <hr />
                    <div className="stats">
                      <i className="tim-icons icon-trophy" /> Customers feedback
                    </div>
                  </CardFooter> */}
                </Card>
              </Col>
              <Col xs="6">
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <Col xs="5">
                        <div className="info-icon text-center icon-success">
                          <i className="tim-icons icon-alert-circle-exc" />
                        </div>
                      </Col>
                      <Col xs="7">
                        <div className="numbers">
                          {/* <p className="card-category">T<sub>cold</sub> outlet</p> */}
                          <CardTitle tag="h6">T<sub>4</sub></CardTitle>
                          <CardTitle tag="h3">{Tcout.toFixed(4)} <sup>O</sup>C</CardTitle>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                  {/* <CardFooter>
                    <hr />
                    <div className="stats">
                      <i className="tim-icons icon-watch-time" /> In the last hours
                    </div>
                  </CardFooter> */}
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col xs="5">
                    <div className="info-icon text-center icon-success">
                      <i className="tim-icons icon-triangle-right-17" />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <Button
                      color="info"
                      id="0"
                      size="lg"
                      tag="label"
                      onClick={() => {
                        setrunStat(true);
                      }}
                      >
                      <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                        Start
                      </span>
                      {/* <span className="d-block d-sm-none">
                        <i className="tim-icons icon-single-02" />
                      </span> */}
                      </Button>
                      {/* <CardTitle tag="h3">46.3</CardTitle> */}
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="tim-icons icon-watch-time" /> Start Temperature Logging
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col>
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col xs="5">
                    <div className="info-icon text-center icon-danger">
                      <i className="tim-icons icon-button-pause" />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <Button
                      color="info"
                      id="0"
                      size="lg"
                      tag="label"
                      onClick={() => {
                        setrunStat(false);
                      }}
                      >
                      <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                        Stop
                      </span>
                      {/* <span className="d-block d-sm-none">
                        <i className="tim-icons icon-single-02" />
                      </span> */}
                      </Button>
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="tim-icons icon-watch-time" /> Stop Temperature Logging
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="3"></Col>
          <Col>
            <div className="pt-5 mt-5">
              <ul className="nav">
                <li className="nav-item">
                  <h1>
                    Jeet Bindra Unit Operations & Innovation Lab
                  </h1>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Dashboard;

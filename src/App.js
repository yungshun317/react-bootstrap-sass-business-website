import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import "@google/model-viewer";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import aboutImg from "../public/assets/asset-3.svg";
import aboutSmallImg from "../public/assets/asset-5.svg";
import professionalImg from "../public/assets/asset-2.svg";
import professionalSmallImg from "../public/assets/asset-4.svg";
import progressiveImg from "../public/assets/asset-1.svg";
import dataDrivenImg from "../public/assets/wordcloud.png";
import teamImg from "../public/assets/Team.png";
import typographicSystemImg from "../public/assets/TypographicSystem.png";
import colorSystemImg from "../public/assets/ColorSystem.png";
import dashboardImg from "../public/assets/GrafanaDashboard.png";
import wireframeImg from "../public/assets/Wireframe&Sitemap.png";
import model from "../public/assets/Model.glb";
import logo from "../public/assets/logo-3.svg";
import addressIcon from "../public/assets/asset-122.svg";
import emailIcon from "../public/assets/asset-111.svg";
import phoneIcon from "../public/assets/asset-112.svg";
import phoneNavIcon from "../public/assets/asset-138.svg";
import workerIcon from "../public/assets/asset-117.svg";
import projectIcon from "../public/assets/asset-114.svg";
import awardIcon from "../public/assets/asset-115.svg";
import supportHourIcon from "../public/assets/asset-110.svg";
import androidLogo from "../public/assets/Android_robot.svg";
import awsLogo from "../public/assets/aws.svg";
import bikeLogo from "../public/assets/bike.svg";
import dockerLogo from "../public/assets/docker.svg";
import financeLogo from "../public/assets/finance.svg";
import gearOilLogo from "../public/assets/gear-and-oil.svg";
import kubernetesLogo from "../public/assets/kubernetes.svg";
import lotusLogo from "../public/assets/lotus.svg";
import photographerLogo from "../public/assets/photographer.svg";
import pytorchLogo from "../public/assets/PyTorch_logo_icon.svg";
import reactLogo from "../public/assets/React-icon.svg";
import realEstateLogo from "../public/assets/real-estate.svg";
import scienceLogo from "../public/assets/science.svg";
import googleLogo from "../public/assets/search.svg";
import springLogo from "../public/assets/spring-logo-vector.svg";
import wingLogo from "../public/assets/wing.svg";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

function Home() {
    const rowStyle = {
        marginTop: "40px",
        marginBottom: "20px"
    };

    const fontStyle = {
        marginBlockStart: "16px",
        marginBlockEnd: "16px"
    };

    const hrStyle = {
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "#FBFBFD",
        marginBlockStart: "16px",
        marginBlockEnd: "16px"
    };

    const imgStyle = {
        width: "100%"
    };

    const iconStyle = {
        height: "64px",
        marginBlockStart: "16px",
        marginBlockEnd: "16px"
    };

    const logoStyle = {
        height: "64px",
        maxWidth: "64px"
    }

    const brandingImages = [
        {
            original: typographicSystemImg,
            thumbnail: typographicSystemImg
        },
        {
            original: colorSystemImg,
            thumbnail: colorSystemImg
        }
    ];

    const uxImages = [
        {
            original: wireframeImg,
            thumbnail: wireframeImg
        },
        {
            original: dashboardImg,
            thumbnail: dashboardImg
        }
    ];

    return (
        <>
            <Navbar collapseOnSelect sticky="top" expand="md" variant="dark" style={{backgroundColor:"rgba(112,112,112,0.05)",zIndex:"100"}}>
                <Navbar.Brand href="#home"><img src={logo} style={{width:"32px"}}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home" style={{color:"#00C6D6"}}><h5>??????</h5></Nav.Link>
                        <Nav.Link href="#services" style={{color:"#00C6D6"}}><h5>????????????</h5></Nav.Link>
                        <Nav.Link href="#team" style={{color:"#00C6D6"}}><h5>??????</h5></Nav.Link>
                        <Nav.Link href="#contact" style={{color:"#00C6D6"}}><h5>????????????</h5></Nav.Link>
                        <Nav.Link href="#" style={{color:"#00C6D6"}}>
                            <img src={phoneNavIcon} style={{display:"inline-block",height:"16px",paddingRight:"8px",marginTop:"-6px"}} />
                            <p style={{display:"inline-block"}}>0900 615 379</p>
                        </Nav.Link>
                        {/*
                        <NavDropdown title="Dropdown" id="basic-navbar-dropdown">
                            <NavDropdown.Item href="#action/3.1"><h6 style={{color:"#FBFBFD"}}>Action</h6></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2"><h6 style={{color:"#FBFBFD"}}>Another action</h6></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3"><h6 style={{color:"#FBFBFD"}}>Something</h6></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4"><h6 style={{color:"#FBFBFD"}}>Separated link</h6></NavDropdown.Item>
                        </NavDropdown>
                        */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            {/* [1] Hero Video */}
            <div className="bg-light" id="home" style={{position:"relative",height:"0",overflow:"hidden",paddingBottom:"56.25%"}}>
                <iframe style={{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}}
                        src="https://www.youtube.com/embed/rTtSwHkpRC8?version=3&autoplay=1&mute=1&rel=0&controls=0&modestbranding"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
            </div>
            {/* [2] About */}

            <Container id="services">
                <Row style={rowStyle}>
                    <Col lg={12}>
                        <div className="text-center">
                            <h6 style={{color:"#00C6D6",marginBlockStart:"16px",marginBlockEnd:"16px"}}>??????(About)</h6>
                            <h4 style={fontStyle}>??????????????????<span style={{color:"#00C6D6"}}>??????????????????????????????????????????</span><span style={{color:"#00C6D6"}}>???????????????????????????</span>????????????</h4>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <div>
                            <img src={aboutImg} className="pie-chart-large" style={imgStyle} />
                            <img src={aboutSmallImg} className="pie-chart-small" style={{imgStyle}} />
                        </div>
                    </Col>
                </Row>
                <Row className="mobile-text">
                    <Col className="mobile-text" xs={12} style={{marginTop:"20px",marginBottom:"20px"}}>
                        <h5 className="mobile-text" style={fontStyle}><span style={{color:"#00C6D6"}}>?????????????????????????????????(Web Application)</span></h5>
                        <p className="mobile-text" style={fontStyle}>??????????????????????????????????????????Apps?????????????????????????????????????????????????????????????????????????????????</p>
                        <h5 className="mobile-text" style={fontStyle}><span style={{color:"#00C6D6"}}>????????????(Cloud Computing)</span></h5>
                        <p className="mobile-text" style={fontStyle}>????????????????????????????????????????????????????????????</p>
                        <h5 className="mobile-text" style={fontStyle}><span style={{color:"#00C6D6"}}>????????????(Artificial Intelligence)</span></h5>
                        <p className="mobile-text" style={fontStyle}>?????????AI???????????????????????????????????????(State-of-the-Art)??????????????????????????????????????????????????????????????????????????????</p>
                        <h5 className="mobile-text" style={fontStyle}><span style={{color:"#00C6D6"}}>????????????(Cyber Security)</span></h5>
                        <p className="mobile-text" style={fontStyle}>???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p>
                        <h5 className="mobile-text" style={fontStyle}><span style={{color:"#00C6D6"}}>?????????(Big Data)</span></h5>
                        <p className="mobile-text" style={fontStyle}>???????????????????????????(High-Volume Batch Processing)??????????????????(Real-Time Stream Processing)?????????????????????????????????????????????</p>
                    </Col>
                </Row>
            </Container>

            {/* [3] Service - Development Section 1 */}
            <Container>
                <Row style={rowStyle}>
                    <Col lg={12}>
                        <div className="text-center">
                            <h6 style={{color:"#00C6D6",marginBlockStart:"16px",marginBlockEnd:"16px"}}>??????(Professional)</h6>
                            <h4 style={fontStyle}>????????????<span style={{color:"#00C6D6"}}>????????????</span>??????????????????????????????</h4>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <div>
                            <img src={professionalImg} className="volume-chart-large" style={imgStyle} />
                            <img src={professionalSmallImg} className="volume-chart-small" style={imgStyle} />
                        </div>
                    </Col>
                </Row>
                <Row className="mobile-text">
                    <Col className="mobile-text" xs={12} style={{marginTop:"20px",marginBottom:"20px"}}>
                        <h5 className="mobile-text" style={fontStyle} className="mobile-text" style={fontStyle}>?????????????????????</h5>
                        <h6 className="mobile-text" style={fontStyle}>????????? <span style={{color:"#00C6D6"}}>????????????</span></h6>
                        <h6 className="mobile-text" style={fontStyle}>???????????? <span style={{color:"#00C6D6"}}>UI/UX??????</span></h6>
                        <h6 className="mobile-text" style={fontStyle}>??????????????? <span style={{color:"#00C6D6"}}>????????????</span></h6>
                        <h6 className="mobile-text" style={fontStyle}>????????? <span style={{color:"#00C6D6"}}>????????????</span></h6>
                        <p className="mobile-text" style={fontStyle}>
                            ?????????????????????????????????????????????????????????????????????Web??????????????????????????????????????????????????????(Branding Design)???????????????(Digital Marketing)????????????????????????
                        </p>
                    </Col>
                </Row>
            </Container>
            {/* [4] Service - Development Section 2 */}
            <Container>
                <Row style={rowStyle}>
                    <Col lg={12}>
                        <div className="text-center">
                            <h6 style={{color:"#00C6D6",marginBlockStart:"16px",marginBlockEnd:"16px"}}>??????(Progressive)</h6>
                            <h4 style={fontStyle}>?????????????????????????????????????????????????????????????????????????????????????????????????????????</h4>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <div>
                            <img src={progressiveImg} style={imgStyle} />
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* [5] Service - Development Section 3 */}
            <Container>
                <Row style={rowStyle}>
                    <Col lg={12}>
                        <div className="text-center">
                            <h6 style={{color:"#00C6D6",marginBlockStart:"16px",marginBlockEnd:"16px"}}>????????????(Data-Driven)</h6>
                            <h4 style={fontStyle}>?????????????????????????????????<span style={{color:"#00C6D6"}}>?????????</span>3V(???????????????????????????????????????)?????????????????????</h4>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={6} className="d-flex align-items-center">
                        <div>
                            <h5>??????????????????(Reliability)???????????????(Scalability)???????????????(Maintainability)???????????????</h5>
                            <p>
                                ?????????????????????????????????????????????????????????????????????????????????????????????????????????DevOps?????????????????????(Auto Scaling)???????????????(Self Healing)?????????(Resilience)???????????????(Fault Tolerance)??????????????????(Distributed Tracing)???
                                ????????????????????????(Centralized Metrics & Logging)???????????????(Load Balancing)???????????????(Configuration Management)?????????????????????????????????(Continuous Integration & Delivery & Deployment)...?????????????????????
                            </p>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div>
                            <img src={dataDrivenImg} style={imgStyle} />
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* [6] Service - Design Section 1 */}
            <Container>
                <Row style={rowStyle}>
                    <Col lg={12}>
                        <div className="text-center">
                            <h6 style={{color:"#00C6D6",marginBlockStart:"16px",marginBlockEnd:"16px"}}>??????(Innovation)</h6>
                            <h4 style={fontStyle}>?????????????????????(Fortune Favors the Brave)</h4>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={6}>
                        <div>
                            <model-viewer src={model}
                                          alt="A 3D model of an astronaut"
                                          ar
                                          ar-modes="webxr scene-viewer quick-look"
                                          environment-image="neutral"
                                          auto-rotate
                                          camera-controls
                                          orientation="0 0 -45deg"
                                          style={{width:"100%",height:"820px"}}>
                            </model-viewer>
                        </div>
                    </Col>
                    <Col sm={12} md={6} className="d-flex align-items-center">
                        <div>
                            <h5>????????????</h5>
                            <p>
                                ???????????????????????????(Creativity is intelligence having fun)????????????????????????????????????(Geeks)????????????????????????????????????
                                ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                                ??????????????????????????????????????????
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* [7] Service - Design Section 2 */}
            <Container>
                <Row style={rowStyle}>
                    <Col lg={12}>
                        <div className="text-center">
                            <h6 style={{color:"#00C6D6",marginBlockStart:"16px",marginBlockEnd:"16px"}}>??????(Creative)</h6>
                            <h4 style={fontStyle}>
                                ??????????????????????????????????????????????????????????????????<span style={{color:"#00C6D6"}}>????????????</span>?????????????????????????????????
                            </h4>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <div>
                            <ImageGallery items={brandingImages} autoplay={true} showBullets={true} />
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* [8] Service - Design Section 3 */}
            <Container>
                <Row style={rowStyle}>
                    <Col lg={12}>
                        <div className="text-center">
                            <h6 style={{color:"#00C6D6",marginBlockStart:"16px",marginBlockEnd:"16px"}}>??????(Proactive)</h6>
                            <h4 style={fontStyle}><span style={{color:"#00C6D6"}}>???????????????(UX)</span>?????????????????????????????????????????????????????????????????????????????????</h4>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <div>
                            <ImageGallery items={uxImages} autoplay={true} showBullets={true} />
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* [9] Team */}
            <Container id="team">
                <Row style={rowStyle}>
                    <Col lg={12}>
                        <div className="text-center">
                            <h6 style={{color:"#00C6D6",marginBlockStart:"16px",marginBlockEnd:"16px"}}>??????(Team)</h6>
                            <h4 style={fontStyle}>??????<span style={{color:"#00C6D6"}}>????????????</span>???<span style={{color:"#00C6D6"}}>???????????????????????????????????????????????????</span></h4>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <div>
                            <img src={teamImg} style={imgStyle} />
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* [10] Statistics */}
            <Container>
                <Row style={rowStyle}>
                    <Col xs={{span:6, offset:0}} md={{span:2, offset:2}}>
                        <div className="text-center">
                            <img src={workerIcon} style={logoStyle} />
                            <h4 style={fontStyle}>11</h4>
                            <h6 style={fontStyle}>??????</h6>
                        </div>
                    </Col>
                    <Col xs={6} md={2}>
                        <div className="text-center">
                            <img src={projectIcon} style={logoStyle} />
                            <h4 style={fontStyle}>342</h4>
                            <h6 style={fontStyle}>??????</h6>
                        </div>
                    </Col>
                    <Col xs={6} md={2}>
                        <div className="text-center">
                            <img src={awardIcon} style={logoStyle} />
                            <h4 style={fontStyle}>46</h4>
                            <h6 style={fontStyle}>??????</h6>
                        </div>
                    </Col>
                    <Col xs={6} md={2}>
                        <div className="text-center">
                            <img src={supportHourIcon} style={logoStyle} />
                            <h4 style={fontStyle}>24</h4>
                            <h6 style={fontStyle}>??????</h6>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* [11] Clients & Partners */}
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col xs={3} md={1}>
                        <div style={fontStyle}>
                            <img src={googleLogo} style={logoStyle} />
                        </div>
                    </Col>
                    <Col xs={3} md={1}>
                        <div style={fontStyle}>
                            <img src={awsLogo} style={logoStyle} />
                        </div>
                    </Col>
                    <Col xs={3} md={1}>
                        <div style={fontStyle}>
                            <img src={androidLogo} style={logoStyle} />
                        </div>
                    </Col>
                    <Col xs={3} md={1}>
                        <div style={fontStyle}>
                            <img src={kubernetesLogo} style={logoStyle} />
                        </div>
                    </Col>
                    <Col xs={3} md={1}>
                        <div style={fontStyle}>
                            <img src={reactLogo} style={logoStyle} />
                        </div>
                    </Col>
                    <Col xs={3} md={1}>
                        <div style={fontStyle}>
                            <img src={dockerLogo} style={logoStyle} />
                        </div>
                    </Col>
                    <Col xs={3} md={1}>
                        <div style={fontStyle}>
                            <img src={springLogo} style={logoStyle} />
                        </div>
                    </Col>
                    <Col xs={3} md={1}>
                        <div style={fontStyle}>
                            <img src={pytorchLogo} style={logoStyle} />
                        </div>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center">
                    <Col xs={3} md={1}>
                        <div style={fontStyle}>
                            <img src={bikeLogo} style={logoStyle} />
                        </div>
                    </Col>
                    <Col xs={3} md={1}>
                        <div style={fontStyle}>
                            <img src={gearOilLogo} style={logoStyle} />
                        </div>
                    </Col>
                    <Col xs={3} md={1}>
                        <div style={fontStyle}>
                            <img src={realEstateLogo} style={logoStyle} />
                        </div>
                    </Col>
                    <Col xs={3} md={1}>
                        <div style={fontStyle}>
                            <img src={scienceLogo} style={logoStyle} />
                        </div>
                    </Col>
                    <Col xs={3} md={1}>
                        <div style={fontStyle}>
                            <img src={photographerLogo} style={logoStyle} />
                        </div>
                    </Col>
                    <Col xs={3} md={1}>
                        <div style={fontStyle}>
                            <img src={financeLogo} style={logoStyle} />
                        </div>
                    </Col>
                    <Col xs={3} md={1}>
                        <div style={fontStyle}>
                            <img src={lotusLogo} style={logoStyle} />
                        </div>
                    </Col>
                    <Col xs={3} md={1}>
                        <div style={fontStyle}>
                            <img src={wingLogo} style={logoStyle} />
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* [12] Pricing Table */}
            <Container>
                <Row style={rowStyle}>
                    <Col lg={12}>
                        <div className="text-center">
                            <h6 style={{color:"#00C6D6",marginBlockStart:"16px",marginBlockEnd:"16px"}}>??????(Services)</h6>
                            <h4 style={fontStyle}><span style={{color:"#00C6D6"}}>????????????????????????</span>??????????????????????????????????????????</h4>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={4} className="d-flex" style={{marginBottom:"20px"}}>
                        <div className="text-center flex-fill" style={{borderStyle:"solid",borderWidth:"1px",borderColor:"#FBFBFD",borderRadius:"6px"}}>
                            <h4 style={fontStyle}>?????????</h4>
                            <h5 style={{color:"#00C6D6",marginBlockStart:"16px",marginBlockEnd:"16px"}}>????????????(Business Website)</h5>
                            <p style={{marginBlockStart:"16px",marginBlockEnd:"16px",marginLeft:"12px",marginRight:"12px"}}>
                                ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                            </p>
                            <hr style={hrStyle} />
                            <h6 style={fontStyle}>????????????</h6>
                            <h6 style={fontStyle}>UI/UX??????</h6>
                            <h6 style={fontStyle}>????????????</h6>
                            <h6 style={fontStyle}>????????????</h6>
                            <h6 style={fontStyle}>???????????????</h6>
                            <hr style={hrStyle} />
                            <Row>
                                <Col md={{span:8, offset:2}}>
                                    <div>
                                        <a href="#contact" className="btn" style={{marginBottom:"16px",backgroundColor:"#00C6D6",width:"80%"}}><h5 style={{marginBottom:"0"}}>??????</h5></a>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col sm={12} md={4} className="d-flex" style={{marginBottom:"20px"}}>
                        <div className="text-center flex-fill" style={{borderStyle:"solid",borderWidth:"1px",borderColor:"#FBFBFD",borderRadius:"6px"}}>
                            <h4 style={fontStyle}>?????????</h4>
                            <h5 style={{color:"#FF0099",marginBlockStart:"16px",marginBlockEnd:"16px"}}>????????????????????????????????????(Modern Web Application)</h5>
                            <p style={{marginBlockStart:"16px",marginBlockEnd:"16px",marginLeft:"12px",marginRight:"12px"}}>
                                ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                                ????????????????????????
                            </p>
                            <hr style={hrStyle} />
                            <h6 style={fontStyle}><span style={{color:"#FF0099"}}>???????????????????????????</span></h6>
                            <h6 style={fontStyle}>??????????????????</h6>
                            <h6 style={fontStyle}>?????????????????????</h6>
                            <hr style={hrStyle} />
                            <Row>
                                <Col md={{span:8, offset:2}}>
                                    <div>
                                        <a href="#contact" className="btn" style={{marginBottom:"16px",backgroundColor:"#FF0099",width:"80%"}}><h5 style={{marginBottom:"0"}}>??????</h5></a>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col sm={12} md={4} className="d-flex" style={{marginBottom:"20px"}}>
                        <div className="text-center flex-fill" style={{borderStyle:"solid",borderWidth:"1px",borderColor:"#FBFBFD",borderRadius:"6px"}}>
                            <h4 style={fontStyle}>?????????</h4>
                            <h5 style={{color:"#00C6D6",marginBlockStart:"16px",marginBlockEnd:"16px"}}>???????????????????????????(Data-Intensive System)</h5>
                            <p style={{marginBlockStart:"16px",marginBlockEnd:"16px",marginLeft:"12px",marginRight:"12px"}}>
                                ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                            </p>
                            <hr style={hrStyle} />
                            <h6 style={fontStyle}><span style={{color:"#00C6D6"}}>???????????????????????????</span></h6>
                            <h6 style={fontStyle}>?????????????????????(SRE)</h6>
                            <h6 style={fontStyle}>????????????</h6>
                            <h6 style={fontStyle}>????????????</h6>
                            <h6 style={fontStyle}>?????????????????????????????????????????????</h6>
                            <hr style={hrStyle} />
                            <Row>
                                <Col md={{span:8, offset:2}}>
                                    <div>
                                        <a href="#contact" className="btn" style={{marginBottom:"16px",backgroundColor:"#00C6D6",width:"80%"}}><h5 style={{marginBottom:"0"}}>??????</h5></a>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* [13] Form */}
            <Container id="contact">
                <Row style={rowStyle}>
                    <Col lg={12}>
                        <div className="text-center">
                            <h6 style={{color:"#00C6D6",marginBlockStart:"16px",marginBlockEnd:"16px"}}>??????(Contact)</h6>
                            <h4 style={fontStyle}>???????????????????????????????????????</h4>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={6} d-flex align-items-center>
                        <div className="text-center">
                            <img src={addressIcon} style={iconStyle} />
                            <h5>??????</h5>
                            <p>10041 ????????????????????????????????????72???2F</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={3} d-flex align-items-center>
                        <div className="text-center">
                            <img src={emailIcon} style={iconStyle} />
                            <h5>Email</h5>
                            <p>seraph317@gmail.com</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={3} d-flex align-items-center>
                        <div className="text-center">
                            <img src={phoneIcon} style={iconStyle} />
                            <h5>??????</h5>
                            <p>0900 615 379</p>
                        </div>
                    </Col>
                </Row>
                <Row style={{marginTop:"20px"}}>
                    <Col sm={12} md={6}>
                        <div className="bg-danger" style={{height:"410px"}}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.6233994319273!2d121.51182041483307!3d25.046851543930458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a90d3282310d%3A0xc2b9c3de555ad07f!2sNo.%2072%2C%20Section%201%2C%20Zhongxiao%20W%20Rd%2C%20Zhongzheng%20District%2C%20Taipei%20City%2C%20100!5e0!3m2!1sen!2stw!4v1629616436613!5m2!1sen!2stw"
                                width="100%" height="100%" style={{border:"0"}} allowFullScreen="" loading="lazy"></iframe>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div>
                            <form>
                                <Row>
                                    <Col sm={12} md={6}>
                                        <div>
                                            <label style={fontStyle}>??????</label>
                                            <input type="text" className="form-control" placeholder="Enter Your Name" />
                                        </div>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <div>
                                            <label style={fontStyle}>??????</label>
                                            <input type="text" className="form-control" placeholder="Enter Your Phone Number" />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <div>
                                            <label style={fontStyle}>EMAIL</label>
                                            <input type="email" className="form-control" placeholder="Enter Your Mail" />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <div>
                                            <label style={fontStyle}>??????</label>
                                            <textarea name="comment" style={{width:"100%",height:"120px",marginBlockEnd:"16px",padding:"12px",borderRadius:"6px"}}>Enter Content Here</textarea>
                                        </div>
                                    </Col>
                                </Row>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* [14] Footer */}
            <div style={{backgroundColor:"rgba(112,112,112,0.05)"}}>
                <Container>
                    <Row style={{marginTop:"60px",paddingTop:"40px",paddingBottom:"40px"}}>
                        <Col sm={12} md={4}>
                            <div>
                                <h4 style={{color:"#00C6D6",marginBlockStart:"16px",marginBlockEnd:"16px"}}>????????????????????????</h4>
                                <p style={fontStyle}>10041 ????????????????????????????????????72???2F</p>
                                <p style={fontStyle}>0900 615 379</p>
                                <p style={fontStyle}><a href="mailto: seraph317@gmail.com">seraph317@gmail.com</a></p>
                            </div>
                        </Col>
                        <Col sm={12} md={4}>
                            <div>
                                <h5 style={{color:"#00C6D6",marginBlockStart:"16px",marginBlockEnd:"16px"}}>????????????</h5>
                                <p style={fontStyle}>?????????????????????????????????</p>
                                <p style={fontStyle}>?????????</p>
                                <p style={fontStyle}>????????????</p>
                                <p style={fontStyle}>????????????</p>
                            </div>
                        </Col>
                        <Col sm={12} md={4} className="d-flex align-items-end">
                            <div>
                                <p>??Copyright <b style={{color:"#00C6D6"}}>ChouQin Info Co.</b> All Rights Reserved</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
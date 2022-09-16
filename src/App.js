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
                        <Nav.Link href="#home" style={{color:"#00C6D6"}}><h5>首頁</h5></Nav.Link>
                        <Nav.Link href="#services" style={{color:"#00C6D6"}}><h5>服務內容</h5></Nav.Link>
                        <Nav.Link href="#team" style={{color:"#00C6D6"}}><h5>團隊</h5></Nav.Link>
                        <Nav.Link href="#contact" style={{color:"#00C6D6"}}><h5>聯繫我們</h5></Nav.Link>
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
                            <h6 style={{color:"#00C6D6",marginBlockStart:"16px",marginBlockEnd:"16px"}}>關於(About)</h6>
                            <h4 style={fontStyle}>酬勤資訊提供<span style={{color:"#00C6D6"}}>客製化網站平台、應用系統開發</span><span style={{color:"#00C6D6"}}>，大數據、人工智慧</span>解決方案</h4>
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
                        <h5 className="mobile-text" style={fontStyle}><span style={{color:"#00C6D6"}}>網站平台、應用系統開發(Web Application)</span></h5>
                        <p className="mobile-text" style={fontStyle}>從企業網站、電子商務，到手機Apps，我們提供最具可依靠性、可擴充性、可維護性的系統方案。</p>
                        <h5 className="mobile-text" style={fontStyle}><span style={{color:"#00C6D6"}}>雲端運算(Cloud Computing)</span></h5>
                        <p className="mobile-text" style={fontStyle}>利用雲端微服務架構，重新定義成本最佳化。</p>
                        <h5 className="mobile-text" style={fontStyle}><span style={{color:"#00C6D6"}}>人工智慧(Artificial Intelligence)</span></h5>
                        <p className="mobile-text" style={fontStyle}>科技部AI競賽獲獎團隊，利用當下最佳(State-of-the-Art)的機器學習模型，幫助你的公司業務增長、改善財務狀況。</p>
                        <h5 className="mobile-text" style={fontStyle}><span style={{color:"#00C6D6"}}>資訊安全(Cyber Security)</span></h5>
                        <p className="mobile-text" style={fontStyle}>來自跨國金融機構的資訊安全專家，幫你嚴格把控你的系統安全、隔絕所有線上威脅、保護你珍貴的數據不被駭客偷取。</p>
                        <h5 className="mobile-text" style={fontStyle}><span style={{color:"#00C6D6"}}>大數據(Big Data)</span></h5>
                        <p className="mobile-text" style={fontStyle}>採用高容量批次處理(High-Volume Batch Processing)或實時流處理(Real-Time Stream Processing)技術，設計數據密集型應用系統。</p>
                    </Col>
                </Row>
            </Container>

            {/* [3] Service - Development Section 1 */}
            <Container>
                <Row style={rowStyle}>
                    <Col lg={12}>
                        <div className="text-center">
                            <h6 style={{color:"#00C6D6",marginBlockStart:"16px",marginBlockEnd:"16px"}}>專業(Professional)</h6>
                            <h4 style={fontStyle}>我們堅持<span style={{color:"#00C6D6"}}>最高品質</span>的軟體設計與開發流程</h4>
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
                        <h5 className="mobile-text" style={fontStyle} className="mobile-text" style={fontStyle}>專案成功四步驟</h5>
                        <h6 className="mobile-text" style={fontStyle}>計畫： <span style={{color:"#00C6D6"}}>品牌設計</span></h6>
                        <h6 className="mobile-text" style={fontStyle}>里程碑： <span style={{color:"#00C6D6"}}>UI/UX設計</span></h6>
                        <h6 className="mobile-text" style={fontStyle}>提前勝利： <span style={{color:"#00C6D6"}}>精實開發</span></h6>
                        <h6 className="mobile-text" style={fontStyle}>演化： <span style={{color:"#00C6D6"}}>上線交付</span></h6>
                        <p className="mobile-text" style={fontStyle}>
                            作為我們的客戶，你將享受到時下業界最精實的現代Web開發工作流程，並且獲得提煉自品牌設計(Branding Design)和數位行銷(Digital Marketing)的業績提升秘方。
                        </p>
                    </Col>
                </Row>
            </Container>
            {/* [4] Service - Development Section 2 */}
            <Container>
                <Row style={rowStyle}>
                    <Col lg={12}>
                        <div className="text-center">
                            <h6 style={{color:"#00C6D6",marginBlockStart:"16px",marginBlockEnd:"16px"}}>進步(Progressive)</h6>
                            <h4 style={fontStyle}>你知道大部分軟體代工公司，還在使用落後十年以上的網站模板和開發框架嗎？</h4>
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
                            <h6 style={{color:"#00C6D6",marginBlockStart:"16px",marginBlockEnd:"16px"}}>數據驅動(Data-Driven)</h6>
                            <h4 style={fontStyle}>數據問題的專家幫你解決<span style={{color:"#00C6D6"}}>大數據</span>3V(資料量、傳輸速度、資料類型)的各種疑難雜症</h4>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={6} className="d-flex align-items-center">
                        <div>
                            <h5>擁有可信頼性(Reliability)、可擴充性(Scalability)、可維護性(Maintainability)的應用系統</h5>
                            <p>
                                作為我們的客戶，你可以充分享受到來自世界上第一流軟體公司的技術，包括：DevOps經驗、彈性運算(Auto Scaling)、自我修復(Self Healing)、韌性(Resilience)、故障容許(Fault Tolerance)、分散式追蹤(Distributed Tracing)、
                                中心化監控、日誌(Centralized Metrics & Logging)、負載均衡(Load Balancing)、配置管理(Configuration Management)、持續整合、交付、部屬(Continuous Integration & Delivery & Deployment)...等，還有更多！
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
                            <h6 style={{color:"#00C6D6",marginBlockStart:"16px",marginBlockEnd:"16px"}}>創新(Innovation)</h6>
                            <h4 style={fontStyle}>幸運屬於勇敢者(Fortune Favors the Brave)</h4>
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
                            <h5>擁抱創新</h5>
                            <p>
                                創新是智慧在找樂子(Creativity is intelligence having fun)。我們是快速適應者、極客(Geeks)，更是現實的理想主義者。
                                我們著迷於十種創新：獲利模式、網路、結構、流程、產品性能、產品系統、服務、通路、品牌、客戶投入，樂於和客戶一同成長。
                                我們追尋創新與需求間的平衡。
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
                            <h6 style={{color:"#00C6D6",marginBlockStart:"16px",marginBlockEnd:"16px"}}>創意(Creative)</h6>
                            <h4 style={fontStyle}>
                                為什麼你的網站看起來沒設計感？我們是第一間將<span style={{color:"#00C6D6"}}>品牌設計</span>原理融入網頁設計的公司
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
                            <h6 style={{color:"#00C6D6",marginBlockStart:"16px",marginBlockEnd:"16px"}}>主動(Proactive)</h6>
                            <h4 style={fontStyle}><span style={{color:"#00C6D6"}}>使用者經驗(UX)</span>不是把常識拿出來講講而已，而是有一系列專業的流程和產出</h4>
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
                            <h6 style={{color:"#00C6D6",marginBlockStart:"16px",marginBlockEnd:"16px"}}>團隊(Team)</h6>
                            <h4 style={fontStyle}>來自<span style={{color:"#00C6D6"}}>矽谷灣區</span>、<span style={{color:"#00C6D6"}}>國內外大型企業與研究機構的專業團隊</span></h4>
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
                            <h6 style={fontStyle}>夥伴</h6>
                        </div>
                    </Col>
                    <Col xs={6} md={2}>
                        <div className="text-center">
                            <img src={projectIcon} style={logoStyle} />
                            <h4 style={fontStyle}>342</h4>
                            <h6 style={fontStyle}>專案</h6>
                        </div>
                    </Col>
                    <Col xs={6} md={2}>
                        <div className="text-center">
                            <img src={awardIcon} style={logoStyle} />
                            <h4 style={fontStyle}>46</h4>
                            <h6 style={fontStyle}>獎項</h6>
                        </div>
                    </Col>
                    <Col xs={6} md={2}>
                        <div className="text-center">
                            <img src={supportHourIcon} style={logoStyle} />
                            <h4 style={fontStyle}>24</h4>
                            <h6 style={fontStyle}>客服</h6>
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
                            <h6 style={{color:"#00C6D6",marginBlockStart:"16px",marginBlockEnd:"16px"}}>服務(Services)</h6>
                            <h4 style={fontStyle}><span style={{color:"#00C6D6"}}>最優惠價格保證：</span>竭盡所能為您提供業界最低價格</h4>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={4} className="d-flex" style={{marginBottom:"20px"}}>
                        <div className="text-center flex-fill" style={{borderStyle:"solid",borderWidth:"1px",borderColor:"#FBFBFD",borderRadius:"6px"}}>
                            <h4 style={fontStyle}>基礎級</h4>
                            <h5 style={{color:"#00C6D6",marginBlockStart:"16px",marginBlockEnd:"16px"}}>商業網站(Business Website)</h5>
                            <p style={{marginBlockStart:"16px",marginBlockEnd:"16px",marginLeft:"12px",marginRight:"12px"}}>
                                一個好的門戶網站提升你的營業額，我們提供客製化或模板網站，最高品質、低廉價格。
                            </p>
                            <hr style={hrStyle} />
                            <h6 style={fontStyle}>品牌設計</h6>
                            <h6 style={fontStyle}>UI/UX設計</h6>
                            <h6 style={fontStyle}>網站開發</h6>
                            <h6 style={fontStyle}>效能優化</h6>
                            <h6 style={fontStyle}>伺服器代管</h6>
                            <hr style={hrStyle} />
                            <Row>
                                <Col md={{span:8, offset:2}}>
                                    <div>
                                        <a href="#contact" className="btn" style={{marginBottom:"16px",backgroundColor:"#00C6D6",width:"80%"}}><h5 style={{marginBottom:"0"}}>開始</h5></a>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col sm={12} md={4} className="d-flex" style={{marginBottom:"20px"}}>
                        <div className="text-center flex-fill" style={{borderStyle:"solid",borderWidth:"1px",borderColor:"#FBFBFD",borderRadius:"6px"}}>
                            <h4 style={fontStyle}>標準級</h4>
                            <h5 style={{color:"#FF0099",marginBlockStart:"16px",marginBlockEnd:"16px"}}>現代化網站平台、應用系統(Modern Web Application)</h5>
                            <p style={{marginBlockStart:"16px",marginBlockEnd:"16px",marginLeft:"12px",marginRight:"12px"}}>
                                從電子商務、網路服務、內容管理系統、手機應用，到線上預約系統，數位轉型幫助你節省開支、突破地域限制、改善客戶服務、行銷手機用戶、
                                最佳化運營效率。
                            </p>
                            <hr style={hrStyle} />
                            <h6 style={fontStyle}><span style={{color:"#FF0099"}}>基礎級方案全部服務</span></h6>
                            <h6 style={fontStyle}>內容管理後台</h6>
                            <h6 style={fontStyle}>數據分析儀表板</h6>
                            <hr style={hrStyle} />
                            <Row>
                                <Col md={{span:8, offset:2}}>
                                    <div>
                                        <a href="#contact" className="btn" style={{marginBottom:"16px",backgroundColor:"#FF0099",width:"80%"}}><h5 style={{marginBottom:"0"}}>開始</h5></a>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col sm={12} md={4} className="d-flex" style={{marginBottom:"20px"}}>
                        <div className="text-center flex-fill" style={{borderStyle:"solid",borderWidth:"1px",borderColor:"#FBFBFD",borderRadius:"6px"}}>
                            <h4 style={fontStyle}>企業級</h4>
                            <h5 style={{color:"#00C6D6",marginBlockStart:"16px",marginBlockEnd:"16px"}}>數據密集型應用系統(Data-Intensive System)</h5>
                            <p style={{marginBlockStart:"16px",marginBlockEnd:"16px",marginLeft:"12px",marginRight:"12px"}}>
                                大數據、人工智慧團隊以尖端技術提升你的業務增長，並且滿足你法遵、稽核、資安的需求。
                            </p>
                            <hr style={hrStyle} />
                            <h6 style={fontStyle}><span style={{color:"#00C6D6"}}>標準級方案全部服務</span></h6>
                            <h6 style={fontStyle}>網站可靠性工程(SRE)</h6>
                            <h6 style={fontStyle}>資訊安全</h6>
                            <h6 style={fontStyle}>數位行銷</h6>
                            <h6 style={fontStyle}>依客戶需求、客製化各種特殊功能</h6>
                            <hr style={hrStyle} />
                            <Row>
                                <Col md={{span:8, offset:2}}>
                                    <div>
                                        <a href="#contact" className="btn" style={{marginBottom:"16px",backgroundColor:"#00C6D6",width:"80%"}}><h5 style={{marginBottom:"0"}}>開始</h5></a>
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
                            <h6 style={{color:"#00C6D6",marginBlockStart:"16px",marginBlockEnd:"16px"}}>聯絡(Contact)</h6>
                            <h4 style={fontStyle}>有任何問題請隨時和我們聯繫</h4>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={6} d-flex align-items-center>
                        <div className="text-center">
                            <img src={addressIcon} style={iconStyle} />
                            <h5>地址</h5>
                            <p>10041 台北市中正區忠孝西路一段72號2F</p>
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
                            <h5>電話</h5>
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
                                            <label style={fontStyle}>名字</label>
                                            <input type="text" className="form-control" placeholder="Enter Your Name" />
                                        </div>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <div>
                                            <label style={fontStyle}>電話</label>
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
                                            <label style={fontStyle}>內容</label>
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
                                <h4 style={{color:"#00C6D6",marginBlockStart:"16px",marginBlockEnd:"16px"}}>酬勤資訊有限公司</h4>
                                <p style={fontStyle}>10041 台北市中正區忠孝西路一段72號2F</p>
                                <p style={fontStyle}>0900 615 379</p>
                                <p style={fontStyle}><a href="mailto: seraph317@gmail.com">seraph317@gmail.com</a></p>
                            </div>
                        </Col>
                        <Col sm={12} md={4}>
                            <div>
                                <h5 style={{color:"#00C6D6",marginBlockStart:"16px",marginBlockEnd:"16px"}}>服務內容</h5>
                                <p style={fontStyle}>網站平台、應用系統開發</p>
                                <p style={fontStyle}>大數據</p>
                                <p style={fontStyle}>雲端運算</p>
                                <p style={fontStyle}>人工智慧</p>
                            </div>
                        </Col>
                        <Col sm={12} md={4} className="d-flex align-items-end">
                            <div>
                                <p>©Copyright <b style={{color:"#00C6D6"}}>ChouQin Info Co.</b> All Rights Reserved</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
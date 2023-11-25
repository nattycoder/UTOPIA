// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Button, Col, Container, Form, Row } from "react-bootstrap";
// import { useParams } from "react-router-dom";
// import ImageIcon from "@mui/icons-material/Image";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import EngineeringIcon from "@mui/icons-material/Engineering";
// import UploadIcon from "@mui/icons-material/Upload";
// import DownloadIcon from "@mui/icons-material/Download";
// // import Detailcomments from "./Detailcomments";
// // import DetailMain from "./DetailMain";
// import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
// import LogoutIcon from "@mui/icons-material/Logout";
// import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
// import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// export default function Detail() {
//   const [download, setDownload] = useState(true);
//   return (
//     <div className="detail">
//       <div className="banner">
//         <span className="jk">
//           <ArrowBackIcon
//             onClick={() => {
//               window.location = "http://localhost:3000/employe";
//             }}
//             className="loggg"
//           />
//           <AccountCircleRoundedIcon
//             className="icon-img profile-icon"
//             sx={{ fontSize: 45 }}
//           />{" "}
//           <b style={{ color: "#e76e1b" }}> Ayoub Chaari</b>
//           <LogoutIcon
//             //   onClick={handleClick}
//             className="logout-icon"
//           />
//         </span>
//       </div>
//       <Container className="detail-main" fluid>
//         <Row style={{ backgroundColor: "#e76e1b", height: "93.6vh" }}>
//           <Col className="navigation1">
//             <span className="detticket">Details of article :</span>
//             <br />

//             <Form.Group className="tick">
//               <Form.Label className=" label-sujet label-color">
//                 Title:
//               </Form.Label>
//               <Form.Control
//                 className=" affsujet input-color border border-dark"
//                 readonly="readonly"
//                 value="Digital Marketing strategies"
//               />
//             </Form.Group>
//             <br />
//             <Form.Group className="tick">
//               <Form.Label className=" label-type label-color">
//                 Subject:
//               </Form.Label>
//               <Form.Control
//                 className=" afftype input-color border border-dark"
//                 readonly="readonly"
//                 value="Digital Marketing"
//               />
//             </Form.Group>
//             <br />
//             <Form.Group className="tick">
//               <Form.Label className=" label-priorite label-color">
//                 Type:
//               </Form.Label>
//               <Form.Control
//                 className=" affpriorite input-color border border-dark"
//                 readonly="readonly"
//                 value="Article"
//               />
//             </Form.Group>
//             <br />
//             <Form.Group className="tick">
//               <Form.Label className=" label-date label-color">
//                 Keywords:
//               </Form.Label>
//               <Form.Control
//                 className=" affdateCli input-color border border-dark"
//                 readonly="readonly"
//                 value="Digital/Digital Marketing/Marketing"
//               />
//             </Form.Group>
//             <br />
//             <Form.Group className="tick">
//               <Form.Label className=" description-type label-color">
//                 Description:
//               </Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 className=" description affdescription input-color border border-dark"
//                 readonly="readonly"
//                 value="A document where I talk about the different strategies that one can apply in digital marketing."
//               />
//             </Form.Group>
//             <div className=" aa label-type label-color">
//               <p style={{ marginTop: "10px" }}>Attachement :</p>
//               <strong
//                 //     onClick={handleImgCap}
//                 className="aa1"
//               >
//                 "DigMarkStrategies.pdf"
//               </strong>{" "}
//               <DownloadIcon
//                 hidden={false}
//                 className="aa2"
//                 // onClick={() => {
//                 //   fileDownload(Buffer.from(imgCap, "base64"), nomCap);
//                 // }}
//               />{" "}
//               <UploadIcon
//                 hidden={false}
//                 className="aa2"
//                 // onClick={() => {
//                 //   fileDownload(Buffer.from(imgCap, "base64"), nomCap);
//                 // }}
//               />
//             </div>
//             <Form.Group className="tick">
//               <Form.Label className="label-affecte label-color">
//                 Author:
//               </Form.Label>
//               <Form.Control
//                 className=" affclienttech input-color border border-dark"
//                 readonly="readonly"
//                 Value="Ayoub Chaari"
//               />
//             </Form.Group>

//             <br />

//             <Form.Group className="tick">
//               <Form.Label className=" label-status label-color">
//                 Date:
//               </Form.Label>
//               <Form.Control
//                 className=" affclientstatusCli input-color border border-dark"
//                 readonly="readonly"
//                 Value="10/09/2023"
//               />
//             </Form.Group>
//             <Button
//               className="cole"
//               type="submit"
//               style={{ backgroundColor: "#e76e1b", marginTop: "10px" }}
//             >
//               Save changes
//             </Button>
//             <br />
//           </Col>
//           <Col className="list1">
//             <div className="discussion">
//               <div className="comments">
//                 <span className="notifCli">NOTIFICATIONS AND COMMENTS </span>
//                 <br />

//                 <div className="jj">
//                   <div className="comment">
//                     <div className="info">
//                       <span>Alaa Ayedi</span> <span>11/09/2023</span>
//                     </div>
//                     <div className="contenu">Hello Ayoub, I liked the document you worked on :D</div>
//                   </div>
//                   <PersonOutlineIcon className="user-imggg" />
//                   <ThumbDownAltIcon className="ala2" />
//                   <ThumbUpAltIcon className="ala" />
//                 </div>

//                 <div className="jj">
//                   <div className="comment">
//                     <div className="info">
//                       <span>Ranim Hassine</span> <span>12/09/2023</span>
//                     </div>
//                     <div className="contenu">Hey Ayoub, I appreciate your work, can you provide more documents like this?</div>
//                   </div>
//                   <PersonOutlineIcon className="user-imggg" />
//                   <ThumbDownAltIcon className="ala2" />
//                   <ThumbUpAltIcon className="ala" />
//                 </div>
//                 <div className="pp">
//                   <div className="comment">
//                     <div className="info">
//                       <span>Ayoub Chaari (Me)</span> <span>12/09/2023</span>
//                     </div>
//                     <div className="contenu">Thank you guys! and yes Ranim I will.</div>
//                   </div>
//                   <EngineeringIcon className="user-imggg" />
//                 </div>
//                 <div className="jj">
//                   <div className="comment">
//                     <div className="info">
//                       <span>Wissem Karous</span> <span>13/09/2023</span>
//                     </div>
//                     <div className="contenu">Ayoub can you provide me with the webography of this document?</div>
//                   </div>
//                   <PersonOutlineIcon className="user-imggg" />
//                   <ThumbDownAltIcon className="ala2" />
//                   <ThumbUpAltIcon className="ala" />
//                 </div>
                

//                 {/* {listecommentaire.map((com, index) => {
//                   const y = JSON.parse(com);
//                   if (y.expediteur === raisonSociale)
//                     return (
//                       <div className="jj">
//                         <div className="comment" key={`${com}-${index}`}>
//                           <div className="info">
//                             <span>{y.expediteur} :</span>{" "}
//                             <span>{y.dateRep}</span>
//                           </div>
//                           <div className="contenu">{y.commentaire}</div>
//                         </div>
//                         <PersonOutlineIcon className="user-imggg" />
//                       </div>
//                     );
//                   else
//                     return (
//                       <div className="pp">
//                         <div className="comment" key={`${com}-${index}`}>
//                           <div className="info">
//                             <span>{y.expediteur} :</span>{" "}
//                             <span>{y.dateRep}</span>
//                           </div>
//                           <div className="contenu">{y.commentaire}</div>
//                         </div>
//                         <EngineeringIcon className="user-imggg" />
//                       </div>
//                     );
//                 })} */}
//               </div>
//               <hr hidden={false} color="black" />
//               <Form.Group hidden={false} className="arr">
//                 <Form
//                 //</Form.Group>  onSubmit={handleCommentaire}
//                 >
//                   <Form.Control
//                     onKeyUp={(e) => {
//                       var regex = /;/g;
//                       e.target.value = e.target.value.replace(regex, "");
//                     }}
//                     //   onChange={handleChangeCommentaire}
//                     type="text"
//                     name="commentaire"
//                     placeholder="Type comment..."
//                     className="com input-color border border-dark"
//                   />
//                   <Button
//                     className="co"
//                     type="submit"
//                     style={{ backgroundColor: "#e76e1b" }}
//                   >
//                     Send
//                   </Button>
//                 </Form>
//               </Form.Group>
//             </div>{" "}
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

import { Alert, Button, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <img
                width="100%"
                src={require("../assets/aa.png")}
                alt="logo"
                style={{ borderRadius: "10px", marginTop: "-30px" }}
              />
              <h3
                className="text-white"
                style={{ textAlign: "center", marginTop: "-20px" }}
              >
                Tanit VR Courses{" "}
              </h3>
            </div>
            <div className="col-3" style={{ paddingLeft: "5%" }}>
              <h4 className="mb-2 titreFooter"> Company</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">About us</Link>
                <Link className="text-white py-2 mb-1">Services</Link>
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Terms & condition</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className=" mb-2 titreFooter">Contacts</h4>
              <div className="footer-link d-flex flex-column">
                <div className="d-flex gap-15 align-items-center">
                  {/* <BiPhoneCall color="white" className="fs-5  mb-1" /> */}
                  <Link className="text-white py-2 mb-1">
                    (+216) 21241414
                  </Link>{" "}
                </div>
                <div className="d-flex gap-15 align-items-center">
                  {/* <BiPhoneCall color="white" className="fs-5  mb-1" /> */}
                  <Link className="text-white py-2 mb-1">
                    (+216) 74 050 333
                  </Link>
                </div>
                <div className="d-flex gap-15 align-items-center">
                  {/* <AiOutlineMail color="white" className="fs-5  mb-1" /> */}
                  <Link className="text-white py-2 mb-1">tanit@utopia.com</Link>
                </div>
                <div className="social_icons d-flex align-items-center gap-30 mt-2">
                  <a className="text-white" href="">
                    {/* <BsLinkedin className="fs-4" /> */}
                  </a>
                  <a className="text-white" href="">
                    {/* <BsInstagram className="fs-4" /> */}
                  </a>
                  <a className="text-white" href="">
                    {/* <BsGithub className="fs-4" /> */}
                  </a>
                  <a className="text-white" href="">
                    {/* <BsYoutube className="fs-4" /> */}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3 mt-4">
              <p className="text-white">Entrer your email to subscribe :</p>
              <InputGroup className="mb-3">
                <Form.Control
                  //      onChange={(e) => setPassword(e.target.value)}
                  aria-describedby="basic-addon2"
                  name="password"
                  className=" input-color  "
                  size="lg"
                  type="text"
                  placeholder="Email"
                  required
                />
                <Button
                  size="lg"
                  className="   "
                  variant="outline-secondary"
                  style={{ backgroundColor: "#c56e95" }}
                >
                  {" "}
                  {/* <MdSend color="white" className="fs-5  mb-1" /> */}
                </Button>
              </InputGroup>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">&copy; Tanit Team</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

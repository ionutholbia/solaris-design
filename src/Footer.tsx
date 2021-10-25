import "./Main.css";
import logo_solarisdesign2 from "./img/logo_solarisdesign2.svg";
import {
  BsPhoneFill,
  BsTelephoneFill,
  BsFacebook,
  BsEnvelopeFill,
} from "react-icons/bs";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <p>
              <img
                src={logo_solarisdesign2}
                alt=""
                className="img-fluid footer__logo"
              />
            </p>
            <p>
              S.C. Solaris Design S.R.L. RO16340653
              <br /> Cap. social 200 lei <br /> Aparate aer conditionat Iasi,
              Centrale termice Iasi
            </p>
          </div>
          <div className="col-md-7 offset-md-1">
            <h5>Contacteaza-ne:</h5>
            <div className="footer__contact">
              <div className="footer__contact-items">
                <p>
                  <a href="tel:0749088823">
                    <i>
                      <BsPhoneFill />
                    </i>{" "}
                    <strong>0749 088 823</strong>
                  </a>
                </p>
              </div>
              <div className="footer__contact-items">
                <p>
                  <i>
                    <BsTelephoneFill />
                  </i>{" "}
                  <strong>0232 814 832</strong>
                </p>
              </div>
              <div className="footer__contact-items">
                <p>
                  <a href="mailto:office@solaris-design.ro">
                    <i>
                      <BsEnvelopeFill />
                    </i>{" "}
                    <strong>office@solaris-design.ro</strong>
                  </a>
                </p>
              </div>
              <div className="footer__contact-items">
                <p>
                  <a
                    href="https://www.facebook.com/Solaris-Design-Iasi-602610773087194/"
                    target="_blank"
                  >
                    <i>
                      <BsFacebook />
                    </i>{" "}
                    <strong>solaris design iasi</strong>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__copyright">
          <p>© Copyright 2021 - Solaris Design</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

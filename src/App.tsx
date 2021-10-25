import "./Main.css";
import mk_plus24_1 from "./img/centrale/pachet_1/mk_plus24_1.png";
import mk_dens25 from "./img/centrale/pachet_2/mk_dens25.png";
import ariston_alteas_one_main from "./img/centrale/pachet_3/ariston_alteas_one_main.png";
import trustLogo from "./img/parteneri/trust.png";
import total_gaz from "./img/parteneri/total-gaz.png";
import motanLogo from "./img/parteneri/motan.png"
import solaris_design_iasi_2 from "./img/portofoliu/all season/solaris_design_iasi_2.jpg"
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <body>
      <Header />
      <section className="section hero">
        <div className="container hero__content">
          <div className="row">
            <div className="col-md-9">
              <h1>
                Proiectare și mententanță instalații termice și de climatizare
                pentru comfortul casei tale!
              </h1>
              <h6>
                Domeniile de activitate ale firmei sunt proiectarea tehnică
                pentru instalaţii termice şi de climatizare, instalaţii
                sanitare, instalaţii electrice şi proiectarea de reţele de
                alimentare cu apă şi gaze.
              </h6>
              <p>
                <a role="button" className="btn-primary" href="tel:0749088823">
                  <i className="fas fa-phone"></i>Suna 0749 088 823
                </a>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="pachete pachete__centrala">
                <h2>Pachet revizii centrale termice</h2>
                <ul>
                  <li>-- verificare circuit hidraulic</li>
                  <li>-- verificare arzător</li>
                  <li>-- verificare vas de expansiune</li>
                  <li>-- verificare senzori</li>
                  <li>-- eliberare certificat verificare valabil 2 ani</li>
                </ul>
                <p>
                  <a
                    href="revizie_centrala_termica.php"
                    className="btn-secondary"
                  >
                    {" "}
                    Vezi detalii
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pachete pachete__aerconditionat">
                <h2>Pachet revizii aer conditionat</h2>
                <ul>
                  <li>-- curățare unitate exterioară</li>
                  <li>-- curățare unitate interioară cu spumă activă</li>
                  <li>-- curățare cu spray</li>
                  <li>-- verificare senzori</li>
                  <li>-- verificare și completare nivel freon</li>
                </ul>
                <p>
                  <a
                    href="revizie_aer_conditionat.php"
                    className="btn-secondary"
                  >
                    {" "}
                    Vezi detalii
                  </a>
                </p>
              </div>
            </div>
            <div className="col">
              <div className="pachete pachete__inlocuire">
                <h2>
                  Înlocuire centrală termică MOTAN
                  <br />
                  <strong>
                    24<sup>kw</sup>
                  </strong>
                </h2>
                <div className="modele">
                  <div className="modele__item">
                    <a href="inlocuire_centrala.php#pachet-basic">
                      <p>
                        01.{" "}
                        <img
                          src={mk_plus24_1}
                          alt="Centrala Model Basic"
                          className="img-fluid"
                        />
                      </p>
                      <h5>Pachet Basic</h5>
                    </a>
                  </div>
                  <div className="modele__item">
                    <a href="inlocuire_centrala.php#pachet-medium">
                      <p>
                        02.{" "}
                        <img
                          src={mk_dens25}
                          alt="Centrala Model Medium"
                          className="img-fluid"
                        />
                      </p>
                      <h5>Pachet Mediu</h5>
                    </a>
                  </div>
                  <div className="modele__item">
                    <a href="inlocuire_centrala.php#pachet-premium">
                      <p>
                        03.{" "}
                        <img
                          src={ariston_alteas_one_main}
                          alt="Centrala model Premium"
                          className="img-fluid"
                        />
                      </p>
                      <h5>Pachet Premium</h5>
                    </a>
                  </div>
                </div>
                <ul>
                  <li>
                    -- înlocuire centrală termică veche cu una nouă (trei modele
                    disponibile)
                  </li>
                </ul>
                <p>
                  <a href="inlocuire_centrala.php" className="btn-secondary">
                    {" "}
                    Vezi detalii
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h2>Despre Solaris Design</h2>
              <p>
                Proiectare și mententanță instalații termice și de climatizare
                pentru comfortul casei tale!
              </p>
              <p>
                S.C. SOLARIS DESIGN S.R.L. este o firmă cu capital integral
                privat, ce iniţial a avut ca pricipal obiect de activitate
                comerţul cu echipamente pentru instalaţii. Datorită calificării
                personalului şi a calităţii ridicate a serviciilor, firma s-a
                dezvoltat, şi a acoperit şi latura de proiectare a instalaţiilor
                pentru care furniza echipamente.
              </p>
              <p>
                Principalele domenii de activitate ale firmei sunt proiectarea
                tehnică pentru instalaţii termice şi de climatizare, instalaţii
                sanitare, instalaţii electrice şi proiectarea de reţele de
                alimentare cu apă şi gaze.
              </p>
              <p>
                <a href="portofoliu.php" className="btn-secondary">
                  Vezi portofoliu lucrari
                </a>
              </p>
            </div>
            <div className="col-md-6">
              <p>
                <a href="portofoliu.php">
                  <img
                    src={solaris_design_iasi_2}
                    alt="Solaris Design Iasi - Portofoliu"
                    className="img-fluid"
                  />
                </a>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col parteneri">
              <h2>Parteneri:</h2>
              <div className="parteneri__logos">
                <p>
                  <img src={total_gaz} alt="TotalGaz" className="img-fluid" />
                </p>
                <p>
                  <img src={trustLogo} alt="Trust" className="img-fluid" />
                </p>
                <p>
                  <img
                    src={motanLogo}
                    alt="Motan"
                    className="img-fluid"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </body>
  );
}

export default App;

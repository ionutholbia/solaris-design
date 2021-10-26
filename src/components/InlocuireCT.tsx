import "./Main.css";
import mk_plus24 from "./img/centrale/pachet_1/mk_plus24.png";
import mk_dens25_2 from "./img/centrale/pachet_2/mk_dens25_2.png";
import ariston_alteas_one from "./img/centrale/pachet_3/ariston_alteas_one.png";
import {
  BsTelephoneFill,
  BsCartFill
} from "react-icons/bs";

function InlocuireCT() {
  return (
    <section className="section">
      <div className="container">
        <div className="row" id="pachet-basic">
          <div className="col-md-6">
            <h2 className="js-title-1">
              Centrala termica MOTAN K PLUS 24 KW Clasica{" "}
              <sup>Pachet Basic</sup>
            </h2>
            <p>
              Hidrobloc bronz (partea hidraulica interioara a centralei este din
              bronz si nu din compozit). Placa electronica adaptata la
              conditiile electrice din Romania, care rezista la tensiuni de pana
              la 280V.
            </p>
            <p>Preparare apa calda cu schimbator in placi din inox</p>
            <div className="pachete2">
              <h4 className="text-left">Pachetul cuprinde</h4>
              <ul>
                <strong>
                  <li>-- Central termica</li>
                  <li>-- Robinetii de izolare de sub centrala</li>
                  <li>-- Demontarea centralei vechi</li>
                  <li>
                    -- Montarea noii central folosind gaura pentru evacuarea
                    gazelor existent
                  </li>
                </strong>
              </ul>
            </div>
            <a href="tel:0749088823" className="btn-primary btn-primary--full">
              <h4>
                <i><BsTelephoneFill /></i> Comandă telefonic
              </h4>
            </a>
            <a
              className="btn-secondary--full js-email-order"
              data-toggle="modal"
              data-target="#formularComanda"
              data-type="1"
              data-ol-has-click-handler=""
            >
              <h4>
                <i><BsCartFill /></i> Comanda email
              </h4>
            </a>
            <div className="js-message-1"></div>
            <p>
              <strong>Nota:</strong> Modificarile incluse sunt doar la nivelul
              racordurilor centralei la apa rece , agent termic si gaz. Orice
              alte modificari la nstalatia de incalzire au apa calda se
              tarifeaza separate
            </p>
            <p>
              <strong>
                Toate materialele inclusiv centrala sunt aduse de catre noi la
                domiciliul dumneavoastra.
              </strong>
            </p>
          </div>
          <div className="col-md-6 text-right">
            <p>
              <img
                src={mk_plus24}
                alt="Centrala termica Ariston Alteas One"
                className="img-fluid"
              />
            </p>
          </div>
        </div>
        <hr />
        <div className="row" id="pachet-medium">
          <div className="col-md-6">
            <h2 className="js-title-2">
              Centrala termica in condensare 24 kw Motan MK dens 25{" "}
              <sup>Pachet Medium</sup>
            </h2>
            <p>
              Modelul de top din cadrul gamei de centrale termice MOTAN, cu un
              enviroment friendly care in timpul functionarii emite cantitati
              reduse semnificativ de Nox, Co si CO2 - Clasa Nox5 5.
            </p>
            <p>
              Proiectata si construita pentru eficienta si economie maxima
              conform ultimelor cerinte legislative europene (pompa low energy),
              centrala dispune si de un senzor de presiune evaluat, care asigura
              protectia inteligenta la suprapresiuni sau presiuni joase si
              posibilitatea de conectare a unui crono-termostat, panou cu
              comanda de la distanta si/sau sonda externa de temperatura.
            </p>
            <p>
              Eficienta maxima este data de faptul ca centrala functioneaza in
              regim de condensare – CLASA DE EFICIENTA 4 stele **** (dir.
              92/42/CEE)
            </p>
            <p>
              Regasim si caracteristici precum un schimbator principal de
              caldura din OTEL INOXIDABIL, sau un schimbator secundar de caldura
              supradimensionat cu 26 placi – clasificat 3 stele *** (EN 13203)
              ce asigura un confort sporit pe regimul de apa calda menajera.
            </p>
            <p>
              Centrala are pe langa panoul de comanda cu display LCD, care
              asigura o interfata grafica evoluata si taste switch, si functia
              de aerisire instalatie, ceea ce inseamna ca pompa de circulatie
              functioneaza la cerere, in afara ciclului de ardere, in vederea
              aerisirii facile a instalatiei;
            </p>
            <div className="pachete2">
              <h4 className="text-left">Pachetul cuprinde</h4>
              <ul>
                <strong>
                  <li>-- Centrala termica</li>
                  <li>-- Robinetii de izolare de sub centrala</li>
                  <li>-- Demontarea centralei vechi</li>
                  <li>
                    -- Montarea noii central folosind gaura pentru evacuarea
                    gazelor existent
                  </li>
                </strong>
              </ul>
            </div>
            <a href="tel:0749088823" className="btn-primary btn-primary--full">
              <h4>
                <i><BsTelephoneFill /></i> Comandă telefonic
              </h4>
            </a>
            <a
              className="btn-secondary--full js-email-order"
              data-toggle="modal"
              data-target="#formularComanda"
              data-type="2"
              data-ol-has-click-handler=""
            >
              <h4>
                <i><BsCartFill /></i> Comanda email
              </h4>
            </a>
            <div className="js-message-2"></div>
            <p>
              <strong>Nota:</strong> Modificarile incluse sunt doar la nivelul
              racordurilor centralei la apa rece , agent termic si gaz. Orice
              alte modificari la nstalatia de incalzire au apa calda se
              tarifeaza separate
            </p>
            <p>
              <strong>
                Toate materialele inclusiv centrala sunt aduse de catre noi la
                domiciliul dumneavoastra.
              </strong>
            </p>
          </div>
          <div className="col-md-6 text-right">
            <p>
              <img
                src={mk_dens25_2}
                alt="Centrala termica Ariston Alteas One"
                className="img-fluid"
              />
            </p>
          </div>
        </div>
        <hr />
        <div className="row" id="pachet-premium">
          <div className="col-md-6">
            <h2 className="js-title-3">
              Ariston Alteas One <sup>Pachet Premium</sup>
            </h2>
            <p>
              Alteas reprezintă combinația perfectă între performanțe excelente
              și design intuitiv. Panoul frontal de sticlă, dispay-ul Hi-Tech și
              conexiunea inteligentă fac din aceasta centrală termică produsul
              ideal pentru încălzirea locuinței.
            </p>
            <p>
              Eficiența centralei si avantajele serviciului Ariston Net te ajută
              să controlezi centrala termicaă de la distanță și să ții sub
              control consumul. Toate acestea vin împreună cu aplicația gratuită
              Ariston Net.
            </p>
            <p>
              Alteas ONE este disponibilă pentru sisteme de încălzire și
              producere de apă caldă menajeră în trei game de putere: 24 KW, 30
              KW și 35 KW.
            </p>
            <div className="pachete2">
              <h4 className="text-left">Pachetul cuprinde</h4>
              <ul>
                <strong>
                  <li>-- Centrala termica 24 kw Alteas One Net 24</li>
                  <li>-- Robinetii de izolare de sub centrala</li>
                  <li>-- Demontarea centralei vechi</li>
                  <li>
                    -- Montarea noii central folosind gaura pentru evacuarea
                    gazelor existent
                  </li>
                </strong>
              </ul>
            </div>
            <a href="tel:0749088823" className="btn-primary btn-primary--full">
              <h4>
                <i><BsTelephoneFill /></i> Comandă telefonic
              </h4>
            </a>
            <a
              className="btn-secondary--full js-email-order"
              data-toggle="modal"
              data-target="#formularComanda"
              data-type="3"
              data-ol-has-click-handler=""
            >
              <h4>
                <i><BsCartFill /></i> Comanda email
              </h4>
            </a>
            <div className="js-message-3"></div>
            <p>
              <strong>Nota:</strong> Modificarile incluse sunt doar la nivelul
              racordurilor centralei la apa rece , agent termic si gaz. Orice
              alte modificari la nstalatia de incalzire au apa calda se
              tarifeaza separate
            </p>
            <p>
              <strong>
                Toate materialele inclusiv centrala sunt aduse de catre noi la
                domiciliul dumneavoastra.
              </strong>
            </p>
          </div>
          <div className="col-md-6 text-right">
            <p>
              <img
                src={ariston_alteas_one}
                alt="Centrala termica Ariston Alteas One"
                className="img-fluid"
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InlocuireCT;

import solaris_design_iasi_1 from "./img/portofoliu/all season/solaris_design_iasi_1.jpg";
import solaris_design_iasi_2 from "./img/portofoliu/all season/solaris_design_iasi_2.jpg";
import solaris_design_iasi_4 from "./img/portofoliu/all season/solaris_design_iasi_4.jpg";
import solaris_design_iasi_3 from "./img/portofoliu/all season/solaris_design_iasi_3.jpg";
import solaris_design_iasi_6 from "./img/portofoliu/all season/solaris_design_iasi_6.jpg";
import solaris_design_iasi from "./img/portofoliu/cazane_ferroli/solaris_design_iasi.jpg";
import solaris_design_iasi_4_ferolli from "./img/portofoliu/cazane_ferroli/solaris_design_iasi_4.jpg";
import solaris_design_iasi_1_ferolli from "./img/portofoliu/cazane_ferroli/solaris_design_iasi_1.jpg";
import pardoseala_0 from "./img/portofoliu/incalzire_pardoseala/solaris_design_iasi.jpg";
import pardoseala_1 from "./img/portofoliu/incalzire_pardoseala/solaris_design_iasi_1.jpg";
import pardoseala_2 from "./img/portofoliu/incalzire_pardoseala/solaris_design_iasi_2.jpg";
import pardoseala_3 from "./img/portofoliu/incalzire_pardoseala/solaris_design_iasi_3.jpg";

function Portofoliu() {
  return (
    <section className="section">
      <div className="container">
        <h2>Portofoliu</h2>
        <p>
          Domeniile de activitate ale firmei sunt proiectarea tehnică pentru
          instalaţii termice şi de climatizare, instalaţii sanitare, instalaţii
          electrice şi proiectarea de reţele de alimentare cu apă şi gaze.
        </p>
        <div className="row">
          <div className="col">
            <h4>All Season</h4>
            <div className="gallery">
              <figure className="gallery__item">
                {" "}
                <img src={solaris_design_iasi_1} alt="" className="img-fluid" />
              </figure>
              <figure className="gallery__item">
                {" "}
                <img src={solaris_design_iasi_2} alt="" className="img-fluid" />
              </figure>
              <figure className="gallery__item">
                {" "}
                <img src={solaris_design_iasi_4} alt="" className="img-fluid" />
              </figure>
              <figure className="gallery__item">
                {" "}
                <img src={solaris_design_iasi_3} alt="" className="img-fluid" />
              </figure>
              <figure className="gallery__item">
                {" "}
                <img src={solaris_design_iasi_6} alt="" className="img-fluid" />
              </figure>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h4>Cazane Ferroli</h4>
            <div className="gallery">
              <figure className="gallery__item">
                <img src={solaris_design_iasi} alt="" className="img-fluid" />
              </figure>
              <figure className="gallery__item">
                <img
                  src={solaris_design_iasi_4_ferolli}
                  alt=""
                  className="img-fluid/"
                />
              </figure>
              <figure className="gallery__item">
                <img
                  src={solaris_design_iasi_1_ferolli}
                  alt=""
                  className="img-fluid"
                />
              </figure>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h4>Pardoseala casa</h4>
            <div className="gallery">
              <figure className="gallery__item">
                <img src={pardoseala_0} alt="" className="img-fluid" />
              </figure>
              <figure className="gallery__item">
                <img src={pardoseala_1} alt="" className="img-fluid/" />
              </figure>
              <figure className="gallery__item">
                <img src={pardoseala_2} alt="" className="img-fluid" />
              </figure>
              <figure className="gallery__item">
                <img src={pardoseala_3} alt="" className="img-fluid" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portofoliu;

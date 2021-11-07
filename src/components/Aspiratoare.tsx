import './Main.css'
import './Aspiratoare.css'
import logo_Puma from './img/aspiratoare/logo_Puma.png'
import puma_aspirator from './img/aspiratoare/puma_aspirator.jpeg'

function Aspiratoare() {
    return (
        <div>
            <div className="section aspiratoare">
                <div className=" aspiratoare__content">
                    <div className="row">
                        <div className="col-md-9">
                            <h1>
                                Aspiratoare centralizate GV-INDUSTRIES
                            </h1>
                            <h5>
                                Suntem producător și distribuitor exclusiv al mărcii GV, înregistrată la GLOBOVAC în Marea Britanie și partenerii noștri din Portugalia - ASPIGLOBO, cu propria noastră marcă de produse, aceasta ne permite să avem o calitate excelentă la cel mai bun preț.
                            </h5>
                            <p>
                                <a role="button" className="btn-primary" href="tel:0749088823">
                                    <i className="fas fa-phone"></i>Suna 0749 088 823
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="aspiratoare__content middle_content">
                <div className="row">
                    <div className="col-md-6">
                        <img src={puma_aspirator} className="aspiratoare__content__img" alt="" />
                    </div>
                    <div className="col-md-6">
                        <div className="row aspiratoare__content__img">
                            <img src={logo_Puma} className="aspiratoare__content__img" alt="" />
                        </div>
                        <div className="row aspiratoare__banner">
                            <h3 className="aspiratoare__banner__text">Gama Puma</h3>
                        </div>
                        <div className="row">
                            <h5>Aceste aspiratoare centrale sunt destinate numai uzului casnic. Sunt concepute exclusiv pentru aspirare praf și particule mici de resturi. Nu poate fi folosit pentru a aspira lichide, particule de cenușă, țesături sau orice altceva altfel care poate cauza blocaje sau deteriorarea conductei și/sau a unității centrale de vid. Alte exemple dintre produsele care nu pot fi aspirate sunt apa, ipsos, ciment, pietriș etc. </h5>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="row aspiratoare__banner">
                        <h3 className="aspiratoare__banner__text">Specificatii tehnice</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aspiratoare;

import './App.css';
import logo_solarisdesign from './img/logo_solarisdesign.svg'

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <a href="index.php"><img src={logo_solarisdesign} alt="Solaris Design" /></a>
                </div>
                <div className="main-menu-trigger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="main-menu">
                    <nav>
                        <a href="index.php">Acasa</a>
                        <a href="revizie_centrala_termica.php">Revizie CT</a>
                        <a href="revizie_aer_conditionat.php">Revizie AC</a>
                        <a href="inlocuire_centrala.php">Inlocuire centrala</a>
                        <a href="portofoliu.php">Portofoliu</a>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
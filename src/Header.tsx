/* eslint-disable jsx-a11y/anchor-is-valid */
import './Main.css';
import logo_solarisdesign from './img/logo_solarisdesign.svg'
import { AppComponentsNames } from "./Types";

export type HeaderProps = Readonly<{ onPageSwitched: (componentName: AppComponentsNames) => void }>

function Header(props: HeaderProps) {
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
                        <a href="#" onClick={()=> props.onPageSwitched(AppComponentsNames.AcasaPage)}>Acasa</a>
                        <a href="#" onClick={()=> props.onPageSwitched(AppComponentsNames.RevizieCT)}>Revizie CT</a>
                        <a href="#" onClick={()=> props.onPageSwitched(AppComponentsNames.RevizieAC)}>Revizie AC</a>
                        <a href="#" onClick={()=> props.onPageSwitched(AppComponentsNames.InlocuireCT)}>Inlocuire centrala</a>
                        <a href="#" onClick={()=> props.onPageSwitched(AppComponentsNames.PortofoliuPage)}>Portofoliu</a>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
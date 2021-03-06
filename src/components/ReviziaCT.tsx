import "./Main.css";
import pachet__centrala from "./img/icons/pachet__centrala.svg";
import {BsTelephoneFill, BsCartFill} from "react-icons/bs";
import {Component} from "react";
import FormularContact from "../sharedComponents/FormularContact";

interface IRevizieCTContactProps {}

interface IRevizieCTContactState {
    showModal: boolean
}

class RevizieCT extends Component < IRevizieCTContactProps,
IRevizieCTContactState > {
    constructor(props : IRevizieCTContactProps) {
        super(props);
        this.state = {
            showModal: false
        }
        this.showModal = this.showModal.bind(this)
        this.hideModal = this.hideModal.bind(this)
    }

    showModal() {
        this.setState({showModal: true})
    }

    hideModal() {
        this.setState({showModal: false})
    }


    render() {
        return (<main>
            <FormularContact showModal={
                    this.state.showModal
                }
                onClose={
                   () => this.hideModal
                }/>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="js-message-1"></div>
                            <h2 className="js-title-1">Pachet revizii centrale termice</h2>
                            <h4>Pachetul cuprinde</h4>
                            <ul>
                                <strong>
                                    <li>-- verificare circuit hidraulic</li>
                                    <li>-- verificare arzător</li>
                                    <li>-- verificare vas de expansiune</li>
                                    <li>-- verificare senzori</li>
                                    <li>-- eliberare certificat verificare valabil 2 ani</li>
                                </strong>
                            </ul>
                            <hr/>
                            <a href="tel:0749088823" className="btn-primary btn-primary--full">
                                <h4>
                                    <i>
                                        <BsTelephoneFill/></i>
                                    Comandă telefonic
                                </h4>
                            </a>
                            <a className="btn-secondary--full js-email-order" data-toggle="modal" data-target="#formularComanda" data-whatever="" data-type="1" data-ol-has-click-handler=""
                                onClick={
                                    this.showModal
                            }>
                                <h4>
                                    <i>
                                        <BsCartFill/></i>
                                    Comanda email
                                </h4>
                            </a>
                        </div>
                        <div className="col-md-6 text-right">
                            <p>
                                <img src={pachet__centrala}
                                    alt=""
                                    className="img-fluid"/>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>);
    }
}

export default RevizieCT;

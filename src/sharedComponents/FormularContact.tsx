import {Component} from 'react';
import '../components/Main.css'
import './FormularContact.css'
interface IFormularContactProps {
    showModal: boolean,
    onClose: () => {}
}

interface IFormularContactState {}

class FormularContact extends Component < IFormularContactProps,
IFormularContactState > {
    constructor(props : IFormularContactProps) {
        super(props);
    }

    render() {
        return (<div className={
            this.props.showModal ? "modal display-block" : "modal display-none"
        }>
            <section className="modal-main">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Formular comanda</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <input type="text" className="form-control js-name" name="name" placeholder="Nume complet"/>
                                <div className="text-danger js-name-error"></div>
                            </div>
                            <div className="form-group">
                                <input type="tel" className="form-control js-phone" name="phone" placeholder="Nr. telefon"/>
                                <div className="text-danger js-phone-error"></div>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control js-email" name="email" placeholder="Adresa de email"/>
                                <div className="text-danger js-email-error"></div>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control js-year" name="year" placeholder="Anul instalarii"/>
                                <div className="text-danger js-year-error"></div>
                            </div>
                            <input type="text" className="form-control js-address" name="address" placeholder="Adresa livrarii"/>
                            <div className="text-danger js-address-error"></div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn-secondary" data-dismiss="modal"
                                onClick={
                                    this.props.onClose
                            }>Inchide</button>
                            <button type="button" className="btn-primary js-send-order">Trimite comanda</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>)
    }
}

export default FormularContact

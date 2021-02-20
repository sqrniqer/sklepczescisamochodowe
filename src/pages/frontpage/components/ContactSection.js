function ContactSection(props)
{
    return(
        <div className="contactWrapper">
            <div className="contact-phoneContactWrapper">
                <div className="contact-phoneText">
                    <p className="phoneText">Telefon</p>
                </div>
                <div className="contact-phoneNumber">
                    <p className="phoneNumber">{props.phoneNumber}</p>
                </div>
            </div>
            <div className="contact-emailContactWrapper">
                <div className="contact-emailText">
                    <p className="emailText">E-mail</p>
                </div>
                <div className="contact-emailAdress">
                    <p className="emailAdress">{props.emailAdress}</p>
                </div>
            </div>
        </div>
    )
}
export default ContactSection;
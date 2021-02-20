
import {Link} from 'react-router-dom'
function Header (props)
{
    return(
        <div className="Header">
            <div className="block1">
                <div className="adressWrapper">
                    <div className="adress-gpsiconWrapper">
                        <i class="fas fa-map-marker-alt" id="gps-icon"/>
                    </div>
                    <div className="adress-textWrapper">
                        <p className="adress-text">{props.address}</p>
                    </div>
                    <div className="adress-arrowiconWrapper">
                        <i class="fas fa-caret-down" id="adress-arrow-icon"/>
                    </div>
                </div>
            </div>
            <div className="block2">
                <div className="optionsWrapper">
                    <div className="options-contactWrapper">
                        <Link to="/contact" className="options-contact">Kontakt</Link>
                    </div>
                    <div className="options-aboutusWrapper">
                        <Link to="/aboutus" className="options-aboutus">O nas</Link>
                    </div>
                    <div className="options-helpcenterWrapper">
                        <Link to="/helpcenter" className="options-helpcenter">Centrum pomocy</Link>
                    </div>
                </div>
            </div>
            <div className="block3">
                <div className="usernameWrapper">
                    <div className="flagWrapper">
                        <div className="flag"/>
                    </div>
                    <i class="fas fa-caret-down" id="flag-arrow-icon"/>
                    <div className="Username-wrapper">
                        <p className="Username-text">{props.username}</p>
                    </div>
                    <i class="fas fa-caret-down" id="username-arrow-icon"/>
                </div>
            </div>
        </div>
    )
}

export default Header;
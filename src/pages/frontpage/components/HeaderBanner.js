// Importowanie potrzebnych modułów
import enginePhoto from '../../../photos/engine.png'
function HeaderBanner(props)
{
    return(
        <div className="HeaderBanner">
            <div className="block1-HeaderBanner">
                <div className="shopTextWrapper-HeaderBanner">
                    <p className="shopText-HeaderBanner">{props.shopText}</p>
                </div>
                <div className="catalogButtonWrapper-HeaderBanner">
                    <button className="catalogButton-HeaderBanner">
                        <p className="catalogButtonText-HeaderBanner">Katalog</p>
                    </button>
                </div>
            </div>
            <div className="block2-HeaderBanner">
                <div className="picture-HeaderBanner">
                    <img className="enginephoto" src={enginePhoto} alt="enginePhoto" style={{
                        backgroundImage: ('../photos/engine.png'),
                        width: 525,
                        height: 503,
                        paddingTop: 90,
                    }}/>
                </div>
            </div>
        </div>
    )
}
export default HeaderBanner;
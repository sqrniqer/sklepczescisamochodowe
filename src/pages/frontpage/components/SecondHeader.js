// Importowanie potrzebnych modułów
import CategoriesButton from './CategoriesButton'
import SearchInput from './SearchInput'
import ContactSection from './ContactSection'
import Shoppingcart from './Shoppingcart'

function SecondHeader(props)
{
    return(
        <div className="SecondHeader">
            <CategoriesButton/>
            <SearchInput/>
            <ContactSection emailAdress={props.emailAdress} phoneNumber={props.phoneNumber}/>
            <Shoppingcart/>
        </div>
    )
}
export default SecondHeader;
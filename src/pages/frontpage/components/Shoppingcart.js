function Shoppingcart(props)
{
    return(
        <div className="ShoppingcartWrapper">
            <button className="Shoppingcart">
                <i class="fas fa-shopping-basket" id="shoppingcart-basketicon"/>
                <p className="shoppingcart-text">5 Częsci</p>
                <p className="shoppingcart-price">(200.00zł)</p>
                <i class="fas fa-caret-down" id="shoppingcart-arrowicon"/>
            </button>
        </div>
    )
}
export default Shoppingcart;
function CategoriesHeaderComponent(props)
{
    return(
        <div className="CategoriesHeader_Component" 
        style={{
            height: "100%",
            width: "125px"
        }}>
            <div className={props.categoryName + "-CategoriesHeader_Component"}>
                <div className={props.categoryName + "-pictureWrapper"}>
                    <img className={props.categoryName + "-picture"} 
                    src={props.categoryPictureName} 
                    alt={props.categoryName + "-alt"}
                    style={{
                        width: "178px",
                        height: "125px"
                    }}/>
                </div>
                <div className={props.categoryName + "-textWrapper"}>
                    <p className={props.categoryName + "-text"}>{props.categoryName}</p>
                </div>
            </div>
        </div>
    )
}
export default CategoriesHeaderComponent;
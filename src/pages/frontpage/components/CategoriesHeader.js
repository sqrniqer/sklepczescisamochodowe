// Importowanie potrzebnych modułów
import CategoriesHeaderComponent from './CategoriesHeaderComponent'

function CategoriesHeader(props) // on front page(props)
{
    const categories = [
        { id:1, src: props.srcCategory1, title: props.titleCategory1},
        { id:2, src: props.srcCategory2, title: props.titleCategory2},
        { id:3, src: props.srcCategory3, title: props.titleCategory3},
        { id:4, src: props.srcCategory4, title: props.titleCategory4},
        { id:5, src: props.srcCategory5, title: props.titleCategory5},
        { id:6, src: props.srcCategory6, title: props.titleCategory6},
        { id:7, src: props.srcCategory7, title: props.titleCategory7}

    ]
    return(
        <div className="CategoriesHeader">
            <div className="categoriesWrapper-CategoriesHeader" style={{
                display: "flex"
            }}>
                {
                    categories.map(({id, src, title})=> {
                    return(
                        <CategoriesHeaderComponent categoryName={title} categoryPictureName={src} key={id}/>
            )
        })
                }
            </div>
        </div>
    )
}
export default CategoriesHeader
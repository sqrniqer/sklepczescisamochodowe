import './Frontpage.css';
// Importowanie modułów
import Header from './components/Header'
import SecondHeader from './components/SecondHeader'
import HeaderBanner from './components/HeaderBanner'
import CategoriesHeader from './components/CategoriesHeader'
import ProductShowcaseNewProducts from './components/ProductShowcaseNewProducts'




function Frontpage (){
    const dataState = {
        adress: "Tysiąclecia 43 Dąbrowa górnicza",
        username: "Karol Klimas",
        emailAdress: "blautauto@gmail.com",
        phoneNumber: "+48 669 061 781",
        shopText: "Internetowy sklep Auto Części",

        // src category zamienic na routy np '../photos/categoriesPictures/danyobrazek'
        titleCategory1: "Części zamienne",  srcCategory1: "1",
        titleCategory2: "Koła i opony",     srcCategory2: "2",
        titleCategory3: "Silnik",           srcCategory3: "3",
        titleCategory4: "Akcesoria",        srcCategory4: "4",
        titleCategory5: "Akumulatory",      srcCategory5: "5",
        titleCategory6: "Wycieraczki",      srcCategory6: "6",
        titleCategory7: "Oleje",            srcCategory7: "7",

        toptext: "Nowe produkty"
    }

    return(
        <div className="Frontpage">
            <Header address={dataState.adress} username={dataState.username} />
            <SecondHeader emailAdress={dataState.emailAdress} phoneNumber={dataState.phoneNumber}/>
            <HeaderBanner shopText={dataState.shopText}/>
            <CategoriesHeader
                titleCategory1={dataState.titleCategory1}   srcCategory1={dataState.srcCategory1}
                titleCategory2={dataState.titleCategory2}   srcCategory2={dataState.srcCategory2}
                titleCategory3={dataState.titleCategory3}   srcCategory3={dataState.srcCategory3}
                titleCategory4={dataState.titleCategory4}   srcCategory4={dataState.srcCategory4}
                titleCategory5={dataState.titleCategory5}   srcCategory5={dataState.srcCategory5}
                titleCategory6={dataState.titleCategory6}   srcCategory6={dataState.srcCategory6}
                titleCategory7={dataState.titleCategory7}   srcCategory7={dataState.srcCategory7}
            />
            <ProductShowcaseNewProducts/>
        </div>
    )
}
export default Frontpage
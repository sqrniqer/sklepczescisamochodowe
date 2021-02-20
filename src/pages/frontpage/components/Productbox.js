function Productbox(props) {
    return (
      <div
        className={"ProductBox" + props.catalogNumber}
        style={{
          width: "278px",
          height: "320px",
          boxShadow: "0px 2px 4px rgba(100,100,100,0.5)"
        }}
      >
        <div
          className={"ProductBoxImage" + props.catalogNumber}
          style={{
            width: "260px",
            height: "190px",
            margin: "auto"
          }}
        >
          <img
            alt={props.photo_path}
            src={props.photo_path}
            style={{
              width: "260px",
              height: "190px"
            }}
          />
        </div>
        <div className={"ProductBoxHeader" + props.catalogNumber}>
          <span
            className={"ProductBoxHeaderText" + props.catalogNumber}
            style={{
              fontFamily: "'Poppins', sans-serif",
              paddingLeft: "10px",
              fontSize: "15px",
              fontWeight: "bold"
            }}
          >
            {props.Name}
          </span>
        </div>
        <div className={"ProductBoxManufacturer" + props.catalogNumber}>
          <span
            className={"ProductBoxManufacturerText" + props.catalogNumber}
            style={{
              color: "#999999",
              fontFamily: "Poppins",
              fontSize: "14px",
              fontStyle: "italic",
              paddingLeft: "10px",
              fontWeight: "bold"
            }}
          >
            {props.manufacturer}
          </span>
        </div>
        <div
          className={"ProductBoxBuySection" + props.catalogNumber}
          style={{
            paddingTop: "30px"
          }}
        >
          <div
            className={"ProductBoxPrice" + props.catalogNumber}
            style={{
              fontFamily: "Poppins",
              fontSize: "18px",
              width: "50%",
              display: "inline-block"
            }}
          >
            <span
              className={"ProductBoxPriceText" + props.catalogNumber}
              style={{
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: "bold",
                marginLeft: "15px"
              }}
            >
              {props.bruttoPrice}
            </span>
          </div>
          <div
            className={"ProductBoxBuyButtonWrapper" + props.catalogNumber}
            style={{
              textAlign: "right",
              width: "50%",
              display: "inline-block"
            }}
          >
            <button
              className={"ProductBoxBuyButton" + props.catalogNumber}
              style={{
                width: "120px",
                height: "30px",
                borderRadius: "30px",
                textDecoration: "none",
                background: "#63cb64",
                border: "0px",
                cursor: "pointer",
                marginRight: "15px"
              }}
            >
              <span
                className={"ProductBoxBuyButtonText" + props.catalogNumber}
                style={{
                  fontFamily: "Poppins",
                  fontSize: "11.5px",
                  fontWeight: "bold",
                  color: "#ffffff"
                }}
              >
                Dodaj do koszyka
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Productbox;
  
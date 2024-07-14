import React from "react";
import PrimaryButton from "./PrimaryButton";
import TrustComponet from "./TrustComponet";

function SecondePage() {
  return (
    <>
      <div className="slogn-line">
        João, pague a entrada de R$ 15.300,00 pelo Pix
      </div>
      <img src={require("../images/qr.png")} className="qr" />
      <PrimaryButton>
        <div className="d-flex justify-content-center align-items-center">
          <span>Clique para copiar QR CODE</span>
          &nbsp;
          <img src={require("../images/copy.png")} className="copy" />
        </div>
      </PrimaryButton>

      <div
        style={{
          marginTop: "20px",
        }}
      >
        <div className="price-not-promoting">Prazo de pagamento:</div>
        <div className="second-heading">15/12/2021 - 08:17</div>
      </div>

      <div
        className="d-flex align-items-center w-100"
        style={{
          marginTop: "20px",
        }}
      >
        <div className="d-flex flex-column align-items-center me-1">
          <input type="checkbox" className="check-box-two" style={{
            borderColor:'#03d69d'
          }} />
          <span className="pip">|</span>
          <span className="pip">|</span>
          <input
            type="checkbox"
            className="check-box-two"
            disabled
            style={{
              backgroundColor: "white",
              zIndex: "20",
            }}
          />
        </div>
        <div className="w-100">
          <div
            className="d-flex justify-content-between align-items-center"
            style={{
              maxWidth: "360px",
              width:"100%"
            }}
          >
            <div>1ª entrada no Pix</div>
            <div className="second-heading">R$ 15.300,00</div>
          </div>
          <div
            className="d-flex justify-content-between align-items-center"
            style={{
              maxWidth: "360px",
              width:"100%"
            }}
          >
            <div>2ª no cartão</div>
            <div className="second-heading">R$ 15.300,00</div>
          </div>
        </div>
      </div>
      <hr />
      <div
        className="d-flex justify-content-between align-items-center w-100"
        style={{
          maxWidth: "360px",
        }}
      >
        <div>CET: 0,5%</div>
        <div>Total: R$ 30.600,00</div>
      </div>
      <hr />
      <div
        className="d-flex justify-content-between align-items-center w-100"
        style={{
          maxWidth: "360px",
        }}
      >
        <div className="second-heading">Como funciona?</div>
        <div className="second-heading">^</div>
      </div>
      <hr />
      <div className="d-flex flex-column justify-content-between align-items-center">
        <div className="price-not-promoting">Identificador:</div>
        <div className="identerifier">2c1b951f356c4680b13ba1c9fc889c47</div>
      </div>
      <TrustComponet />
      <div style={{marginTop: '20px'}} />
    </>
  );
}

export default SecondePage;

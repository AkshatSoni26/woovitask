import React from "react";
import TrustComponet from "./TrustComponet";
import { MenuItem, TextField } from "@mui/material";

function ThirdPage() {
  return (
    <>
      <div className="slogn-line">João, pague o restante em 1x no cartão</div>

      <div>
        <TextField
          className="text-filed-name my-2"
          label="Nome completo"
          variant="outlined"
          value={"João Linaldo Dias Fraga Santos"}
          aria-readonly
        />
        <TextField
          className="text-filed-name my-2"
          label="CPF"
          variant="outlined"
          value={"405.503.503-15"}
          aria-readonly
        />
        <TextField
          className="text-filed-name my-2"
          label="Número do cartão"
          variant="outlined"
          value={"405.503.503-15"}
          aria-readonly
        />
        <div
          className="d-flex justify-content-between align-items-center"
          style={{ width: "424px" }}
        >
          <TextField
            className="text-filed-cvv"
            label="Vencimento"
            variant="outlined"
            value={"10/11"}
            aria-readonly
          />
          <TextField
            className="text-filed-cvv"
            label="CVV"
            variant="outlined"
            value={"405"}
            aria-readonly
          />
        </div>
        <TextField
          className="text-filed-name my-2"
          label="Parcelas"
          variant="outlined"
          defaultValue={"first"}
          select
        >
          {[
            {
              value: "first",
              label: "1x de R$ 15.300,00",
            },
          ].map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div
        style={{
          marginTop: "20px",
        }}
      >
        <div className="price-not-promoting">Prazo de pagamento:</div>
        <div className="second-heading">15/12/2021 - 08:17</div>
      </div>

      <div
        className="d-flex align-items-center"
        style={{
          marginTop: "20px",
        }}
      >
        <div className="d-flex flex-column align-items-center">
          <input type="checkbox" className="check-box-two" checked />
          <span className="pip">|</span>
          <span className="pip">|</span>
          <input
            type="checkbox"
            className="check-box-two"
            disabled
            style={{
              backgroundColor: "white",
              zIndex: "20",
              borderColor: "#03d69d",
            }}
          />
        </div>
        <div>
          <div
            className="d-flex justify-content-between align-items-center"
            style={{
              width: "360px",
            }}
          >
            <div>1ª entrada no Pix</div>
            <div className="second-heading">R$ 15.300,00</div>
          </div>
          <div
            className="d-flex justify-content-between align-items-center"
            style={{
              width: "360px",
            }}
          >
            <div>2ª no cartão</div>
            <div className="second-heading">R$ 15.300,00</div>
          </div>
        </div>
      </div>
      <hr />
      <div
        className="d-flex justify-content-between align-items-center"
        style={{
          width: "360px",
        }}
      >
        <div>CET: 0,5%</div>
        <div>Total: R$ 30.600,00</div>
      </div>
      <hr />
      <div
        className="d-flex justify-content-between align-items-center"
        style={{
          width: "360px",
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
      <div style={{ marginTop: "20px" }} />
    </>
  );
}

export default ThirdPage;

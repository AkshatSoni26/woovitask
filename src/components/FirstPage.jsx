import React from "react";
import TrustComponet from "./TrustComponet";
import ComponentCard from "./ComponentCard";

function FirstPage() {
    const PaymenyTypes = [
        {
          badgeWidth: "157px",
          badgeText: "Pix Parcelado",
          priceMultiply: "2x",
          priceRest: "R$ 15.300,00",
          isGreen: false,
          isSlabThing: false,
          borderRadius: "10px 10px 0px 0px",
          marginTop: "36px",
          priceNotPromoting: "Total: R$ 30.600,00",
          isCheck:true
        },
        {
          badgeWidth: "67px",
          badgeText: "",
          priceMultiply: "3x",
          priceRest: "R$ 10.196,66",
          isGreen: false,
          isSlabThing: false,
          // borderRadius: "10px",
          priceNotPromoting: "Total: R$ 30.620,00",
        },
        {
          badgeWidth: "67px",
          badgeText: "",
          priceMultiply: "4x",
          priceRest: "R$ 7.725,00",
          isGreen: false,
          isSlabThing: true,
          // borderRadius: "10px",
          priceNotPromoting: "Total: R$ 30.900,00",
          marketingBoxText: {
            heading: "-3% de juros: ",
            descrptiopn: "Melhor opção de parcelamento",
          },
        },
        {
          badgeWidth: "67px",
          badgeText: "",
          priceMultiply: "5x",
          priceRest: "R$ 6.300,00",
          isGreen: false,
          isSlabThing: false,
          // borderRadius: "10px",
          priceNotPromoting: "Total: R$ 31.500,00",
        },
        {
          badgeWidth: "67px",
          badgeText: "",
          priceMultiply: "6x",
          priceRest: "R$ 5.283,33",
          isGreen: false,
          isSlabThing: false,
          // borderRadius: "10px",
          priceNotPromoting: "Total: R$ 31.699,98",
        },
        {
          badgeWidth: "67px",
          badgeText: "",
          priceMultiply: "7x",
          priceRest: "R$ 4.542,85",
          isGreen: false,
          isSlabThing: false,
          borderRadius: "0px 0px 10px 10px",
          priceNotPromoting: "Total: R$ 31.800,00",
        },
      ];

      
  return (
    <>
      <div className="slogn-line">João, como você quer pagar?</div>
      <ComponentCard
        badgeWidth={"67px"}
        badgeText={"Pix"}
        priceMultiply="1x"
        priceRest="R$ 30.500,00"
        isGreen={true}
        isSlabThing={true}
        borderRadius={"10px"}
        marginTop="36px"
        marketingBoxText={{
          heading: "🤑 R$ 300,00",
          descrptiopn: "de volta no seu Pix na hora",
        }}
      />
      {PaymenyTypes.map((sample, id) => (
        <ComponentCard key={id} {...sample} />
      ))}
      <TrustComponet />
    </>
  );
}

export default FirstPage;

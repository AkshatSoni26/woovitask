import React, { useState } from "react";

function ComponentCard({
  badgeWidth="67px",
  badgeText='',
  priceMultiply='',
  priceRest='',
  isGreen = false,
  isSlabThing = false,
  borderRadius = "0px",
  marginTop="0px",
  priceNotPromoting='',
  marketingBoxText={
    heading:'',
    descrptiopn:''
  },
  isCheck=false
}) {
  const [isChecked, setIsChecked] = useState(isCheck)
  return (
    <div
      className="price-box"
      style={{
        borderRadius: borderRadius,
        marginTop: marginTop,
      borderColor: isChecked && "#03D69D"
      }}
    >
      {
      badgeText.length > 0 &&
      <div className="price-box-badge" style={{ width:badgeWidth }}>
        <span className="price-box-badge-text">{badgeText}</span>
      </div>
      }
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <div>
            <span className="price-multiply">{priceMultiply} </span>
            <span className="price-rest">{priceRest}</span>
          </div>
          {isGreen && (
            <div className="price-green-words">
              Ganhe <span className="price-green-words-bold">3%</span> de
              Cashback
            </div>
          )}
          {!isGreen && (
            <div className="price-not-promoting">
              {priceNotPromoting}
            </div>
          )}
        </div>
        <input type="checkbox" className="check-box" onClick={()=> setIsChecked(checked => !checked)} value={isChecked}/>
      </div>
      {isSlabThing && (
        <div className="d-flex">
          <div className="price-slab-marketing-box price-slab-marketing-box-text d-flex align-items-center px-2">
            <span className="price-slab-marketing-box-text-span mx-1 ms-0">
               {marketingBoxText.heading}
            </span>
             {marketingBoxText.descrptiopn}
          </div>
          <div className="price-slab-marketing-box-text-flag" />
        </div>
      )}
    </div>
  );
}

export default ComponentCard;

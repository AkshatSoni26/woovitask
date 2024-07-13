import React from 'react'
import VerifiedUserTwoToneIcon from "@mui/icons-material/VerifiedUserTwoTone";


function TrustComponet() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{
        marginTop: "36px",
      }}>
        <VerifiedUserTwoToneIcon
          color="action"
        />
        &nbsp;
        <span className="trust-line">Pagamento 100% seguro via:</span>
        &nbsp;
        <img
          src={require("../images/logo2.png")}
          alt="logo"
          className="logo-two"
        />
      </div>
  )
}

export default TrustComponet
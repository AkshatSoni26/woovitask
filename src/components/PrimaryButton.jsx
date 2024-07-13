import React from 'react'

function PrimaryButton({children="button text", style}) {
  return (
    <div className='primary-button but-text text-center' style={{
        alignContent:'center',
        cursor:'pointer',
        marginTop:'20px',
        ...style
    }}>
        {children}
    </div>
  )
}

export default PrimaryButton
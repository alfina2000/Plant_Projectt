import React from 'react'

const HomeProduct = (props) => {
    const {productImage,productName} = props.data;
  return (
    <div>
      <div className='product'>
      < img src={productImage} rel=""/>
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        </div>

      </div>
    </div>
  )
}

export default HomeProduct

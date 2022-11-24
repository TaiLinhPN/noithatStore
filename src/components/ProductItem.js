import React from "react";

const ProductItem = (props) => {
  return (
    <div className="item  slick-current slick-active col-4">
      <div className="evo-product-block-item ">
        <div className="product-img">
          <a title={props.name} className="image-resize">
            <img className="lazy loaded" src={props.img} alt={props.name} />
          </a>
        </div>
        <div className="product-detail clearfix">
          <div className="pro-brand">
            <a title="Evo Nội thất" tabIndex={0}>
              {props.prototype}
            </a>
          </div>
          <h3 className="pro-name">
            <a title={props.name} tabIndex={0}>
              {props.name}
            </a>
          </h3>
          <p className="pro-price">{props.price}đ</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

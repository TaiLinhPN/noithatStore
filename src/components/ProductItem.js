import React from "react";

const ProductItem = () => {
  return (
    <div className="item  slick-current slick-active col-4">
      <div className="evo-product-block-item ">
        <div className="product-img">
          <a
            href="/tu-bep-bang-go-tu-nhien-nho-gon-da-nang-tien-loi"
            title="Tủ bếp bằng gỗ tự nhiên nhỏ gọn đa năng tiện lợi"
            className="image-resize">
            <img
              className="lazy loaded"
              src="//bizweb.dktcdn.net/thumb/large/100/360/933/products/tu-bep-bang-go-tu-nhien-nho-gon-da-nang-tien-loi-ghs-5787-1.jpg?v=1598933882263"
              alt="Tủ bếp bằng gỗ tự nhiên nhỏ gọn đa năng tiện lợi"
            />
          </a>
        </div>
        <div className="product-detail clearfix">
          <div className="pro-brand">
            <a
              href="/search?query=vendor:Evo%20N%E1%BB%99i%20th%E1%BA%A5t"
              title="Evo Nội thất"
              tabIndex={0}>
              Evo Nội thất
            </a>
          </div>
          <h3 className="pro-name">
            <a
              href="/tu-bep-bang-go-tu-nhien-nho-gon-da-nang-tien-loi"
              title="Tủ bếp bằng gỗ tự nhiên nhỏ gọn đa năng tiện lợi"
              tabIndex={0}>
              Tủ bếp bằng gỗ tự nhiên nhỏ gọn đa năng tiện lợi
            </a>
          </h3>
          <p className="pro-price">12.500.000₫</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

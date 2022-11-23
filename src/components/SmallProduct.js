import React from 'react'

const SmallProduct = () => {
  return (
    <div className="evo-product-slide-item">
      <div className="product-img">
        <div className="product-sale">
          <span>- 16% </span>
        </div>
        <a
          href="/giuong-ngu-go-chat-luong-cao-cho-gia-dinh"
          title="Giường ngủ gỗ chất lượng cao cho gia đình"
          className="image-resize"
          tabIndex={0}>
          <img
            className="lazy loaded"
            src="//bizweb.dktcdn.net/thumb/large/100/360/933/products/giuong-ngu-go-chat-luong-cao-cho-gia-dinh-ghs-9071-ava.jpg?v=1565273414883"
            data-src="//bizweb.dktcdn.net/thumb/large/100/360/933/products/giuong-ngu-go-chat-luong-cao-cho-gia-dinh-ghs-9071-ava.jpg?v=1565273414883"
            alt="Giường ngủ gỗ chất lượng cao cho gia đình"
            data-was-processed="true"
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
            href="/giuong-ngu-go-chat-luong-cao-cho-gia-dinh"
            title="Giường ngủ gỗ chất lượng cao cho gia đình"
            tabIndex={0}>
            Giường ngủ gỗ chất lượng cao cho gia đình
          </a>
        </h3>
        <div className="box-pro-prices">
          <p className="pro-price">
            1.290.000₫
            <span className="pro-price-del">
              <del className="compare-price">1.540.000₫</del>
            </span>
          </p>
        </div>
      </div>
    </div>

   
  );
}

export default SmallProduct
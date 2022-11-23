import React from "react";
import ADS from "./ADS";
import Blog from "./Blog";
import Prototype from "./Prodtotye";
import ProductItem from "./ProductItem";
import SmallProduct from "./SmallProduct";
import Title from "./Title";

const Content = () => {
  return (
    <div>
      <Title name={"SẢN PHẨM MỚI VỀ"} />

      <div className="MyRow">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>

      <div className="section_banner">
        <div className="MyRow wrap">
          <Prototype />
          <Prototype />
          <Prototype />
          <Prototype />
          <Prototype />
        </div>
      </div>

      <Title name={"SẢN PHẨM MỚI VỀ"} />

      <div className="MyRow">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>

      <div className="section_trending container">
        <div className="row">
          <ADS />
          <ADS />
        </div>
      </div>

      <div className=" section_san_pham_col ">
        <div className="MyRow">
          <div className="col-3">
            <Title name={"NỔI BẬT"} />
            <SmallProduct />
            <SmallProduct />
            <SmallProduct />
          </div>

          <div className="col-3">
            <Title name={"BÁN CHẠY"} />
            <SmallProduct />
            <SmallProduct />
            <SmallProduct />
          </div>

          <div className="col-3">
            <Title name={"KHUYẾN MÃI"} />
            <SmallProduct />
            <SmallProduct />
            <SmallProduct />
          </div>
        </div>
      </div>

      <Title name={"TƯ VẤN THIẾT KẾ"} />
      <div className="section_blogs">
        <div className="MyRow">

        <Blog />
        <Blog />
        <Blog />
        <Blog />
        </div>
      </div>
    </div>
  );
};

export default Content;

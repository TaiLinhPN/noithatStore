import React from 'react'

const Blog = () => {
  return (
    <div
      className="news-items slick-current slick-active col-4"
      
      
      data-slick-index={0}
      >
      <a
        href="/tam-luoi-thay-tran-nha-giup-gia-chu-sai-gon-thu-gian"
        title="Tấm lưới thay trần nhà giúp gia chủ Sài Gòn thư giãn"
        className="clearfix evo-item-blogs"
        tabIndex={0}>
        <div className="evo-article-image">
          <img
            src="//bizweb.dktcdn.net/thumb/large/100/360/933/articles/ezgif-4-17d1ea1d1572.jpg?v=1564535674483"
            data-src="//bizweb.dktcdn.net/thumb/large/100/360/933/articles/ezgif-4-17d1ea1d1572.jpg?v=1564535674483"
            alt="Tấm lưới thay trần nhà giúp gia chủ Sài Gòn thư giãn"
            className="lazy img-responsive center-block loaded"
            data-was-processed="true"
          />
        </div>
        <h3 className="line-clamps">
          Tấm lưới thay trần nhà giúp gia chủ Sài Gòn thư giãn
        </h3>
        <p>
          {" "}
          Ban đầu, ngồi trên chiếc lưới dù treo trên trần phòng khách, chủ nhà
          cũng thấy “run”, nhưng sau khi đã que...
        </p>
      </a>
    </div>
  );
}

export default Blog
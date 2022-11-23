import React from 'react'

const Header = () => {
  return (
    <div>
      <div className="evo-search-bar">
        <form action="/search" method="get">
          <div className="input-group">
            <input
              type="text"
              name="query"
              className="search-auto form-control"
              placeholder="Bạn cần tìm gì hôm nay?"
            />
            <span className="input-group-btn">
              <button className="btn btn-default" type="submit">
                <i className="fa fa-search" />
              </button>
            </span>
          </div>
        </form>
        <button className="site-header__search" title="Đóng tìm kiếm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26.045"
            height="26.044">
            <g data-name="Group 470">
              <path
                d="M19.736 17.918l-4.896-4.896 4.896-4.896a1.242 1.242 0 0 0-.202-1.616 1.242 1.242 0 0 0-1.615-.202l-4.896 4.896L8.127 6.31a1.242 1.242 0 0 0-1.615.202 1.242 1.242 0 0 0-.202 1.615l4.895 4.896-4.896 4.896a1.242 1.242 0 0 0 .202 1.615 1.242 1.242 0 0 0 1.616.202l4.896-4.896 4.896 4.896a1.242 1.242 0 0 0 1.615-.202 1.242 1.242 0 0 0 .202-1.615z"
                data-name="Path 224"
                fill="#1c1c1c"
              />
            </g>
          </svg>
        </button>
      </div>
      <header className="header">
        <div className="evo-top-header">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 slogan">
                <p>Siêu thị Nội thất &amp; Trang trí Evo Nội Thất</p>
              </div>
              <div className="col-md-6 col-sm-6 evo-account hidden-xs hidden-sm">
                <ul>
                  <li>
                    <a rel="nofollow" href="/account/login" title="Đăng nhập">
                      <i className="fa fa-sign-in" aria-hidden="true" /> Đăng
                      nhập
                    </a>
                  </li>
                  <li>
                    <a rel="nofollow" href="/account/register" title="Đăng ký">
                      <i className="fa fa-user-plus" aria-hidden="true" /> Đăng
                      ký
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="evo-header-logo-search-cart container">
          <div className="row">
            <div className="col-md-3 logo evo-header-mobile">
              <button
                type="button"
                className="evo-flexitem evo-flexitem-fill navbar-toggle collapsed visible-sm visible-xs"
                id="trigger-mobile">
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a href="/" className="logo-wrapper" title="Evo Nội Thất">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                  data-src="//bizweb.dktcdn.net/100/360/933/themes/728303/assets/logo.png?1663835694812"
                  alt="Evo Nội Thất"
                  className="lazy img-responsive center-block"
                />
              </a>
              <div className="evo-flexitem evo-flexitem-fill visible-sm visible-xs">
                <a
                  href="javascript:void(0);"
                  className="site-header-search"
                  rel="nofollow"
                  title="Tìm kiếm">
                  <i className="fa fa-search" aria-hidden="true" />
                </a>
                <a href="/cart" title="Giỏ hàng" rel="nofollow">
                  <svg
                    viewBox="0 0 100 100"
                    data-radium="true"
                    style={{ width: "25px" }}>
                    <g
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd">
                      <g
                        transform="translate(-286.000000, -515.000000)"
                        fill="#000">
                        <path d="M374.302082,541.184324 C374.044039,539.461671 372.581799,538.255814 370.861517,538.255814 L351.078273,538.255814 L351.078273,530.159345 C351.078273,521.804479 344.283158,515 335.93979,515 C327.596422,515 320.801307,521.804479 320.801307,530.159345 L320.801307,538.255814 L301.018063,538.255814 C299.297781,538.255814 297.835541,539.461671 297.577499,541.184324 L286.051608,610.951766 C285.87958,611.985357 286.137623,613.018949 286.825735,613.794143 C287.513848,614.569337 288.460003,615 289.492173,615 L382.387408,615 L382.473422,615 C384.451746,615 386,613.449612 386,611.468562 C386,611.037898 385.913986,610.693368 385.827972,610.348837 L374.302082,541.184324 L374.302082,541.184324 Z M327.854464,530.159345 C327.854464,525.680448 331.467057,522.062877 335.93979,522.062877 C340.412524,522.062877 344.025116,525.680448 344.025116,530.159345 L344.025116,538.255814 L327.854464,538.255814 L327.854464,530.159345 L327.854464,530.159345 Z M293.62085,608.023256 L304.028557,545.318691 L320.801307,545.318691 L320.801307,565.043066 C320.801307,567.024117 322.349561,568.574505 324.327886,568.574505 C326.30621,568.574505 327.854464,567.024117 327.854464,565.043066 L327.854464,545.318691 L344.025116,545.318691 L344.025116,565.043066 C344.025116,567.024117 345.57337,568.574505 347.551694,568.574505 C349.530019,568.574505 351.078273,567.024117 351.078273,565.043066 L351.078273,545.318691 L367.851024,545.318691 L378.25873,608.023256 L293.62085,608.023256 L293.62085,608.023256 Z" />
                      </g>
                    </g>
                  </svg>
                  <span className="count_item_pr">0</span>
                </a>
              </div>
            </div>
            <div className="col-md-5 evo-header-search hidden-sm hidden-xs">
              <form action="/search" method="get">
                <div className="input-group">
                  <input
                    type="text"
                    name="query"
                    className="search-auto form-control"
                    placeholder="Bạn cần tìm gì...?"
                  />
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="submit">
                      <i className="fa fa-search" />
                    </button>
                  </span>
                </div>
              </form>
            </div>
            <div className="col-md-4 evo-header-hotline-cart hidden-sm hidden-xs">
              <div className="hotline">
                <a href="tel:19006750" title="Liên hệ Hotline 19006750">
                  <span className="evo-title">Liên hệ Hotline</span>
                  <span className="evo-hotline">1900 6750</span>
                </a>
              </div>
              <div className="hotline">
                <a href="/he-thong-cua-hang" title="Tìm địa chỉ Cửa hàng">
                  <span className="evo-title">Tìm địa chỉ</span>
                  <span className="evo-hotline">Cửa hàng</span>
                </a>
              </div>
              <div className="evo-cart mini-cart">
                <a href="/cart" title="Giỏ hàng" rel="nofollow">
                  <svg
                    viewBox="0 0 100 100"
                    data-radium="true"
                    style={{ width: "25px" }}>
                    <g
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd">
                      <g
                        transform="translate(-286.000000, -515.000000)"
                        fill="#000">
                        <path d="M374.302082,541.184324 C374.044039,539.461671 372.581799,538.255814 370.861517,538.255814 L351.078273,538.255814 L351.078273,530.159345 C351.078273,521.804479 344.283158,515 335.93979,515 C327.596422,515 320.801307,521.804479 320.801307,530.159345 L320.801307,538.255814 L301.018063,538.255814 C299.297781,538.255814 297.835541,539.461671 297.577499,541.184324 L286.051608,610.951766 C285.87958,611.985357 286.137623,613.018949 286.825735,613.794143 C287.513848,614.569337 288.460003,615 289.492173,615 L382.387408,615 L382.473422,615 C384.451746,615 386,613.449612 386,611.468562 C386,611.037898 385.913986,610.693368 385.827972,610.348837 L374.302082,541.184324 L374.302082,541.184324 Z M327.854464,530.159345 C327.854464,525.680448 331.467057,522.062877 335.93979,522.062877 C340.412524,522.062877 344.025116,525.680448 344.025116,530.159345 L344.025116,538.255814 L327.854464,538.255814 L327.854464,530.159345 L327.854464,530.159345 Z M293.62085,608.023256 L304.028557,545.318691 L320.801307,545.318691 L320.801307,565.043066 C320.801307,567.024117 322.349561,568.574505 324.327886,568.574505 C326.30621,568.574505 327.854464,567.024117 327.854464,565.043066 L327.854464,545.318691 L344.025116,545.318691 L344.025116,565.043066 C344.025116,567.024117 345.57337,568.574505 347.551694,568.574505 C349.530019,568.574505 351.078273,567.024117 351.078273,565.043066 L351.078273,545.318691 L367.851024,545.318691 L378.25873,608.023256 L293.62085,608.023256 L293.62085,608.023256 Z" />
                      </g>
                    </g>
                  </svg>
                  <span className="count_item_pr">0</span>
                </a>
                <div className="top-cart-content">
                  <ul id="cart-sidebar" className="mini-products-list count_li">
                    <li className="list-item">
                      <ul />
                    </li>
                    <li className="action">
                      <ul>
                        <li className="li-fix-1">
                          <div className="top-subtotal">
                            Tổng tiền thanh toán:
                            <span className="price" />
                          </div>
                        </li>
                        <li className="li-fix-2">
                          <div className="actions clearfix">
                            <a
                              rel="nofollow"
                              href="/cart"
                              className="btn btn-primary"
                              title="Giỏ hàng">
                              <i className="fa fa-shopping-basket" /> Giỏ hàng
                            </a>
                            <a
                              rel="nofollow"
                              href="/checkout"
                              className="btn btn-checkout btn-gray"
                              title="Thanh toán">
                              <i className="fa fa-random" /> Thanh toán
                            </a>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="evo-main-nav">
          <div className="container clearfix">
            <div className="col-md-3 col-lg-3 no-padding">
              <div className="mobile-main-menu hidden-lg hidden-md">
                <div className="drawer-header">
                  <div id="close-nav">
                    <svg
                      viewBox="0 0 100 100"
                      data-radium="true"
                      style={{ width: "16px" }}>
                      <g
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        fillRule="evenodd">
                        <g
                          transform="translate(-645.000000, -879.000000)"
                          fill="#000">
                          <path
                            d="M743.998989,926.504303 L697.512507,880.032702 C696.909905,879.430293 695.962958,879 695.016011,879 C694.069064,879 693.122117,879.430293 692.519515,880.032702 L646.033033,926.504303 C644.655656,927.881239 644.655656,930.118761 646.033033,931.495697 C646.721722,932.184165 647.582582,932.528399 648.529529,932.528399 C649.476476,932.528399 650.337337,932.184165 651.026025,931.495697 L691.486482,891.048193 L691.486482,975.471601 C691.486482,977.450947 693.036031,979 695.016011,979 C696.995991,979 698.54554,977.450947 698.54554,975.471601 L698.54554,891.048193 L739.005997,931.495697 C740.383374,932.872633 742.621612,932.872633 743.998989,931.495697 C745.376366,930.118761 745.29028,927.881239 743.998989,926.504303 L743.998989,926.504303 Z"
                            transform="translate(695.000000, 929.000000) rotate(-90.000000) translate(-695.000000, -929.000000) "
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <a href="/" className="logo-wrapper" title="Evo Nội Thất">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                      data-src="//bizweb.dktcdn.net/100/360/933/themes/728303/assets/logo.png?1663835694812"
                      alt="Evo Nội Thất"
                      className="lazy img-responsive center-block"
                    />
                  </a>
                </div>
                <div className="ul-first-menu">
                  <a rel="nofollow" href="/account/login" title="Đăng nhập">
                    Đăng nhập
                  </a>
                  <a rel="nofollow" href="/account/register" title="Đăng ký">
                    Đăng ký
                  </a>
                </div>
              </div>
              <div className="mainmenu ">
                <span>Tất cả sản phẩm</span>
                <div className="nav-cate">
                  <ul id="menu2017">
                    <li className="dropdown menu-item-count">
                      <a
                        className="evo-categories-a"
                        href="/noi-that-go"
                        title="Nội thất gỗ">
                        Nội thất gỗ
                        <i
                          className="fa fa-angle-down hidden-lg hidden-md"
                          data-toggle="dropdown"
                        />
                      </a>
                      <div className="subcate gd-menu">
                        <aside className="aside-evo">
                          <a
                            className="evo-categories-main-sub"
                            href="/ban"
                            title="Bàn">
                            Bàn
                            <i
                              className="fa fa-angle-down hidden-lg hidden-md"
                              data-toggle="dropdown"
                            />
                          </a>
                          <div className="list-evo-categories-main-sub">
                            <a href="/ban-an" title="Bàn ăn">
                              Bàn ăn
                            </a>
                            <a href="/ban-trang-tri" title="Bàn trang trí">
                              Bàn trang trí
                            </a>
                            <a href="/ban-ca-phe" title="Bàn cà phê">
                              Bàn cà phê
                            </a>
                            <a href="/ban-trang-diem" title="Bàn trang điểm">
                              Bàn trang điểm
                            </a>
                          </div>
                        </aside>
                        <aside className="aside-evo">
                          <a
                            className="evo-categories-main-sub"
                            href="/bo-ban-an"
                            title="Bộ bàn ăn">
                            Bộ bàn ăn
                            <i
                              className="fa fa-angle-down hidden-lg hidden-md"
                              data-toggle="dropdown"
                            />
                          </a>
                          <div className="list-evo-categories-main-sub">
                            <a
                              href="/bo-ban-4-ghe-an"
                              title="Bộ bàn & 4 ghế ăn">
                              Bộ bàn &amp; 4 ghế ăn
                            </a>
                            <a
                              href="/bo-ban-6-ghe-an"
                              title="Bộ bàn & 6 ghế ăn">
                              Bộ bàn &amp; 6 ghế ăn
                            </a>
                          </div>
                        </aside>
                        <aside className="aside-evo">
                          <a
                            className="evo-categories-main-sub"
                            href="/giuong"
                            title="Giường">
                            Giường
                            <i
                              className="fa fa-angle-down hidden-lg hidden-md"
                              data-toggle="dropdown"
                            />
                          </a>
                          <div className="list-evo-categories-main-sub">
                            <a href="/giuong-1-2m" title="Giường 1,2m">
                              Giường 1,2m
                            </a>
                            <a href="/giuong-1-6m" title="Giường 1,6m">
                              Giường 1,6m
                            </a>
                            <a href="/giuong-1-8m" title="Giường 1,8m">
                              Giường 1,8m
                            </a>
                            <a href="/giuong-tang" title="Giường tầng">
                              Giường tầng
                            </a>
                          </div>
                        </aside>
                        <aside className="aside-evo">
                          <a
                            className="evo-categories-main-sub"
                            href="/ghe"
                            title="Ghế">
                            Ghế
                            <i
                              className="fa fa-angle-down hidden-lg hidden-md"
                              data-toggle="dropdown"
                            />
                          </a>
                          <div className="list-evo-categories-main-sub">
                            <a href="/ghe-an" title="Ghế ăn">
                              Ghế ăn
                            </a>
                            <a href="/ghe-ngoai-troi" title="Ghế ngoài trời">
                              Ghế ngoài trời
                            </a>
                            <a href="/ghe-dai" title="Ghế dài">
                              Ghế dài
                            </a>
                            <a
                              href="/ghe-don-ngoai-troi"
                              title="Ghế đôn ngoài trời">
                              Ghế đôn ngoài trời
                            </a>
                          </div>
                        </aside>
                        <aside className="aside-evo">
                          <a
                            className="evo-categories-main-sub"
                            href="/tu-ke"
                            title="Tủ kệ">
                            Tủ kệ
                            <i
                              className="fa fa-angle-down hidden-lg hidden-md"
                              data-toggle="dropdown"
                            />
                          </a>
                          <div className="list-evo-categories-main-sub">
                            <a href="/tu-kinh" title="Tủ kính">
                              Tủ kính
                            </a>
                            <a href="/tu-bat-dia" title="Tủ bát đĩa">
                              Tủ bát đĩa
                            </a>
                            <a href="/tu-quan-ao" title="Tủ quần áo">
                              Tủ quần áo
                            </a>
                            <a href="/tu-ngan-keo" title="Tủ ngăn kéo">
                              Tủ ngăn kéo
                            </a>
                          </div>
                        </aside>
                      </div>
                    </li>
                    <li className="dropdown menu-item-count">
                      <a
                        className="evo-categories-a"
                        href="/sofa-ghe-thu-gian-nem"
                        title="Sofa, Ghế thư giãn & Nệm">
                        Sofa, Ghế thư giãn &amp; Nệm
                        <i
                          className="fa fa-angle-down hidden-lg hidden-md"
                          data-toggle="dropdown"
                        />
                      </a>
                      <div className="subcate gd-menu">
                        <aside>
                          <a
                            className="evo-categories-main-sub"
                            href="/sofa"
                            title="Sofa">
                            Sofa
                          </a>
                        </aside>
                        <aside>
                          <a
                            className="evo-categories-main-sub"
                            href="/ghe-phong-khach"
                            title="Ghế phòng khách">
                            Ghế phòng khách
                          </a>
                        </aside>
                        <aside>
                          <a
                            className="evo-categories-main-sub"
                            href="/nem"
                            title="Nệm">
                            Nệm
                          </a>
                        </aside>
                        <aside>
                          <a
                            className="evo-categories-main-sub"
                            href="/don-mem"
                            title="Đôn mềm">
                            Đôn mềm
                          </a>
                        </aside>
                      </div>
                    </li>
                    <li className="dropdown menu-item-count">
                      <a
                        className="evo-categories-a"
                        href="/do-trang-tri"
                        title="Đồ trang trí">
                        Đồ trang trí
                        <i
                          className="fa fa-angle-down hidden-lg hidden-md"
                          data-toggle="dropdown"
                        />
                      </a>
                      <div className="subcate gd-menu">
                        <aside>
                          <a
                            className="evo-categories-main-sub"
                            href="/tinh-dau-tui-thom"
                            title="Tinh dầu & Túi thơm">
                            Tinh dầu &amp; Túi thơm
                          </a>
                        </aside>
                        <aside>
                          <a
                            className="evo-categories-main-sub"
                            href="/cay-hoa-gia"
                            title="Cây & Hoa giả">
                            Cây &amp; Hoa giả
                          </a>
                        </aside>
                        <aside>
                          <a
                            className="evo-categories-main-sub"
                            href="/nen-chan-nen"
                            title="Nến & Chân nến">
                            Nến &amp; Chân nến
                          </a>
                        </aside>
                        <aside>
                          <a
                            className="evo-categories-main-sub"
                            href="/dong-ho"
                            title="Đồng hồ">
                            Đồng hồ
                          </a>
                        </aside>
                        <aside>
                          <a
                            className="evo-categories-main-sub"
                            href="/khung-tranh-anh"
                            title="Khung & Tranh ảnh">
                            Khung &amp; Tranh ảnh
                          </a>
                        </aside>
                      </div>
                    </li>
                    <li className="menu-item-count">
                      <a
                        className="evo-categories-a"
                        href="/do-dung-vai"
                        title="Đồ dùng vải">
                        Đồ dùng vải
                      </a>
                    </li>
                    <li className="menu-item-count">
                      <a
                        className="evo-categories-a"
                        href="/vat-dung-ban-an"
                        title="Vật dụng bàn ăn">
                        Vật dụng bàn ăn
                      </a>
                    </li>
                    <li className="menu-item-count">
                      <a
                        className="evo-categories-a"
                        href="/do-dung-van-phong"
                        title="Đồ dùng văn phòng">
                        Đồ dùng văn phòng
                      </a>
                    </li>
                    <li className="menu-item-count">
                      <a className="evo-categories-a" href="/den" title="Đèn">
                        Đèn
                      </a>
                    </li>
                    <li className="menu-item-count">
                      <a
                        className="evo-categories-a"
                        href="/dung-cu-nha-bep"
                        title="Dụng cụ nhà bếp">
                        Dụng cụ nhà bếp
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-9 col-lg-9 no-padding">
              <ul id="nav" className="nav">
                <li className="nav-item active">
                  <a className="nav-link" href="/" title="Trang chủ">
                    Trang chủ
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="/gioi-thieu" title="Giới thiệu">
                    Giới thiệu
                  </a>
                </li>
                <li className=" nav-item has-childs  has-mega">
                  <a
                    href="/collections/all"
                    className="nav-link"
                    title="Sản phẩm">
                    Sản phẩm{" "}
                    <i className="fa fa-angle-down" data-toggle="dropdown" />
                  </a>
                  <div className="mega-content">
                    <ul className="level0">
                      <li className="level1 parent item fix-navs">
                        <a
                          className="hmega"
                          href="/noi-that-go"
                          title="Nội thất gỗ">
                          Nội thất gỗ{" "}
                          <i
                            className="fa fa-angle-down hidden-lg hidden-md"
                            data-toggle="dropdown"
                          />
                        </a>
                        <ul className="level1">
                          <li className="level2">
                            <a href="/ban" title="Bàn">
                              Bàn
                            </a>
                          </li>
                          <li className="level2">
                            <a href="/bo-ban-an" title="Bộ bàn ăn">
                              Bộ bàn ăn
                            </a>
                          </li>
                          <li className="level2">
                            <a href="/giuong" title="Giường">
                              Giường
                            </a>
                          </li>
                          <li className="level2">
                            <a href="/ghe" title="Ghế">
                              Ghế
                            </a>
                          </li>
                          <li className="level2">
                            <a href="/tu-ke" title="Tủ kệ">
                              Tủ kệ
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="level1 parent item fix-navs">
                        <a
                          className="hmega"
                          href="/sofa-ghe-thu-gian-nem"
                          title="Sofa, Ghế thư giãn & Nệm">
                          Sofa, Ghế thư giãn &amp; Nệm{" "}
                          <i
                            className="fa fa-angle-down hidden-lg hidden-md"
                            data-toggle="dropdown"
                          />
                        </a>
                        <ul className="level1">
                          <li className="level2">
                            <a href="/sofa" title="Sofa">
                              Sofa
                            </a>
                          </li>
                          <li className="level2">
                            <a href="/ghe-phong-khach" title="Ghế phòng khách">
                              Ghế phòng khách
                            </a>
                          </li>
                          <li className="level2">
                            <a href="/nem" title="Nệm">
                              Nệm
                            </a>
                          </li>
                          <li className="level2">
                            <a href="/don-mem" title="Đôn mềm">
                              Đôn mềm
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="level1 parent item fix-navs">
                        <a
                          className="hmega"
                          href="/do-trang-tri"
                          title="Đồ trang trí">
                          Đồ trang trí{" "}
                          <i
                            className="fa fa-angle-down hidden-lg hidden-md"
                            data-toggle="dropdown"
                          />
                        </a>
                        <ul className="level1">
                          <li className="level2">
                            <a
                              href="/tinh-dau-tui-thom"
                              title="Tinh dầu & Túi thơm">
                              Tinh dầu &amp; Túi thơm
                            </a>
                          </li>
                          <li className="level2">
                            <a href="/cay-hoa-gia" title="Cây & Hoa giả">
                              Cây &amp; Hoa giả
                            </a>
                          </li>
                          <li className="level2">
                            <a href="/nen-chan-nen" title="Nến & Chân nến">
                              Nến &amp; Chân nến
                            </a>
                          </li>
                          <li className="level2">
                            <a href="/dong-ho" title="Đồng hồ">
                              Đồng hồ
                            </a>
                          </li>
                          <li className="level2">
                            <a
                              href="/khung-tranh-anh"
                              title="Khung & Tranh ảnh">
                              Khung &amp; Tranh ảnh
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="level1 item">
                        <a
                          className="hmega"
                          href="/do-dung-vai"
                          title="Đồ dùng vải">
                          Đồ dùng vải
                        </a>
                      </li>
                      <li className="level1 item">
                        <a
                          className="hmega"
                          href="/vat-dung-ban-an"
                          title="Vật dụng bàn ăn">
                          Vật dụng bàn ăn
                        </a>
                      </li>
                      <li className="level1 item">
                        <a
                          className="hmega"
                          href="/do-dung-van-phong"
                          title="Đồ dùng văn phòng">
                          Đồ dùng văn phòng
                        </a>
                      </li>
                      <li className="level1 item">
                        <a className="hmega" href="/den" title="Đèn">
                          Đèn
                        </a>
                      </li>
                      <li className="level1 item">
                        <a
                          className="hmega"
                          href="/dung-cu-nha-bep"
                          title="Dụng cụ nhà bếp">
                          Dụng cụ nhà bếp
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item ">
                  <a
                    className="nav-link"
                    href="/hang-moi-ve"
                    title="Hàng mới về">
                    Hàng mới về
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="/blogs/all" title="Tin tức">
                    Tin tức
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="/lien-he" title="Liên hệ">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header
import React from 'react'

const Detail = () => {
  
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
                        <a
                          rel="nofollow"
                          href="/account/login"
                          title="Đăng nhập">
                          <i className="fa fa-sign-in" aria-hidden="true" />{" "}
                          Đăng nhập
                        </a>
                      </li>
                      <li>
                        <a
                          rel="nofollow"
                          href="/account/register"
                          title="Đăng ký">
                          <i className="fa fa-user-plus" aria-hidden="true" />{" "}
                          Đăng ký
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
                      <ul
                        id="cart-sidebar"
                        className="mini-products-list count_li">
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
                                  <i className="fa fa-shopping-basket" /> Giỏ
                                  hàng
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
                      <a
                        rel="nofollow"
                        href="/account/register"
                        title="Đăng ký">
                        Đăng ký
                      </a>
                    </div>
                  </div>
                  <div className="mainmenu mainmenu-other">
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
                                <a
                                  href="/ban-trang-diem"
                                  title="Bàn trang điểm">
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
                                <a
                                  href="/ghe-ngoai-troi"
                                  title="Ghế ngoài trời">
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
                          <a
                            className="evo-categories-a"
                            href="/den"
                            title="Đèn">
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
                    <li className="nav-item ">
                      <a className="nav-link" href="/" title="Trang chủ">
                        Trang chủ
                      </a>
                    </li>
                    <li className="nav-item ">
                      <a
                        className="nav-link"
                        href="/gioi-thieu"
                        title="Giới thiệu">
                        Giới thiệu
                      </a>
                    </li>
                    <li className=" nav-item has-childs  has-mega">
                      <a
                        href="/collections/all"
                        className="nav-link"
                        title="Sản phẩm">
                        Sản phẩm{" "}
                        <i
                          className="fa fa-angle-down"
                          data-toggle="dropdown"
                        />
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
                                <a
                                  href="/ghe-phong-khach"
                                  title="Ghế phòng khách">
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
          <link
            rel="preload"
            as="script"
            href="//bizweb.dktcdn.net/100/360/933/themes/728303/assets/option-selectors.js?1663835694812"
          />
          <link
            rel="preload"
            as="script"
            href="//bizweb.dktcdn.net/100/360/933/themes/728303/assets/api-jquery.js?1663835694812"
          />
          <link
            href="//bizweb.dktcdn.net/100/360/933/themes/728303/assets/picbox.scss.css?1663835694812"
            rel="stylesheet"
            type="text/css"
          />
          <section className="bread-crumb margin-bottom-10">
            <div className="container">
              <ul
                className="breadcrumb"
                itemScope
                itemType="https://schema.org/BreadcrumbList">
                <li
                  className="home"
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/ListItem">
                  <a itemProp="item" href="/" title="Trang chủ">
                    <span itemProp="name">Trang chủ</span>
                    <meta itemProp="position" content={1} />
                  </a>
                  <span>
                    <i className="fa fa-angle-right" />
                  </span>
                </li>
                <li
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/ListItem">
                  <a itemProp="item" href="/do-dung-vai" title="Đồ dùng vải">
                    <span itemProp="name">Đồ dùng vải</span>
                    <meta itemProp="position" content={2} />
                  </a>
                  <span>
                    <i className="fa fa-angle-right" />
                  </span>
                </li>
                <li
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/ListItem">
                  <span itemProp="name">
                    Mẫu giường ngủ gỗ tự nhiên thiết kế thông minh
                  </span>
                  <meta itemProp="position" content={3} />
                </li>
              </ul>
            </div>
          </section>
          <section
            className="product margin-top-30"
            itemScope
            itemType="http://schema.org/Product">
            <meta itemProp="category" content="Đồ dùng vải" />
            <meta
              itemProp="url"
              content="//evo-noi-that.mysapo.net/mau-giuong-ngu-go-tu-nhien-thiet-ke-thong-minh"
            />
            <meta
              itemProp="name"
              content="Mẫu giường ngủ gỗ tự nhiên thiết kế thông minh"
            />
            <meta
              itemProp="image"
              content="http://bizweb.dktcdn.net/thumb/grande/100/360/933/products/ezgif-2-c7f2105dbc1a.jpg?v=1565273733053"
            />
            <meta
              itemProp="description"
              content=" - Làm sạch sản phẩm bằng khăn mềm với nước sạch hoặc dung dịch tẩy rửa dành riêng cho gỗ, sau đó lau khô sản phẩm bằng khăn mềm. 
- Thường xuyên giặt phần đệm ngồi bằng dung dịch giặt tẩy thông thường để đảm bảo vệ sinh. 
- Đặt sản phẩm tại nơi khô thoáng, tránh độ ẩm cao, tránh nhiệt độ cao, nguồn sáng mạnh và các vật dễ cháy. 
- Tránh để sản phẩm tiếp xúc với nước và nhiệt độ cao trong thời gian dài. 
- Không dùng vật sắc nhọn chà xát sản phẩm. "
            />
            <div
              className="d-none hidden"
              itemProp="brand"
              itemType="https://schema.org/Brand"
              itemScope>
              <meta itemProp="name" content="Evo Nội thất" />
            </div>
            <meta itemProp="model" content />
            <meta itemProp="sku" content={4367} />
            <div
              className="d-none hidden"
              itemProp="offers"
              itemScope
              itemType="http://schema.org/Offer">
              <div
                className="inventory_quantity hidden"
                itemScope
                itemType="http://schema.org/ItemAvailability">
                <span className="a-stock" itemProp="supersededBy">
                  Còn hàng
                </span>
              </div>
              <link itemProp="availability" href="http://schema.org/InStock" />
              <meta itemProp="priceCurrency" content="VND" />
              <meta itemProp="price" content={2490000} />
              <meta
                itemProp="url"
                content="https://evo-noi-that.mysapo.net/mau-giuong-ngu-go-tu-nhien-thiet-ke-thong-minh"
              />
              <span
                itemProp="UnitPriceSpecification"
                itemScope
                itemType="https://schema.org/Downpayment">
                <meta itemProp="priceType" content={2490000} />
              </span>
              <meta itemProp="priceValidUntil" content="2099-01-01" />
            </div>
            <div
              className="d-none hidden"
              id="https://evo-noi-that.mysapo.net"
              itemProp="seller"
              itemType="http://schema.org/Organization"
              itemScope>
              <meta itemProp="name" content="Evo Nội Thất" />
              <meta itemProp="url" content="https://evo-noi-that.mysapo.net" />
              <meta
                itemProp="logo"
                content="http://bizweb.dktcdn.net/100/360/933/themes/728303/assets/logo.png?1663835694812"
              />
            </div>
            <div className="container">
              <div className="row details-product padding-bottom-10">
                <div className="col-md-12 col-lg-12 col-xs-12 col-sm-12 product-bottom">
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-lg-12 col-md-12 details-pro">
                      <div className="product-top clearfix">
                        <h1 className="title-head">
                          Mẫu giường ngủ gỗ tự nhiên thiết kế thông minh
                        </h1>
                        <div className="sku-product clearfix">
                          <div className="item-sku">
                            SKU: <span className="variant-sku">4367</span>
                          </div>
                          <div className="item-sku">
                            Thương hiệu:
                            <span className="vendor">Evo Nội thất</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-lg-6 col-md-6">
                      <div className="relative product-image-block">
                        <div className="slider-big-video clearfix margin-bottom-10">
                          <div className="slider slider-for">
                            <a
                              href="//bizweb.dktcdn.net/thumb/1024x1024/100/360/933/products/ezgif-2-c7f2105dbc1a.jpg?v=1565273733053"
                              title="Click để xem">
                              <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                                data-lazy="//bizweb.dktcdn.net/thumb/large/100/360/933/products/ezgif-2-c7f2105dbc1a.jpg?v=1565273733053"
                                alt="Mẫu giường ngủ gỗ tự nhiên thiết kế thông minh"
                                data-image="https://bizweb.dktcdn.net/100/360/933/products/ezgif-2-c7f2105dbc1a.jpg?v=1565273733053"
                                className="img-responsive center-block"
                              />
                            </a>
                            <a
                              href="//bizweb.dktcdn.net/thumb/1024x1024/100/360/933/products/giuong-ngu-gia-dinh-thanh-lich-bang-go-tu-nhien-ghs-9068-ava.jpg?v=1565273801200"
                              title="Click để xem">
                              <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                                data-lazy="//bizweb.dktcdn.net/thumb/large/100/360/933/products/giuong-ngu-gia-dinh-thanh-lich-bang-go-tu-nhien-ghs-9068-ava.jpg?v=1565273801200"
                                alt="Mẫu giường ngủ gỗ tự nhiên thiết kế thông minh"
                                data-image="https://bizweb.dktcdn.net/100/360/933/products/giuong-ngu-gia-dinh-thanh-lich-bang-go-tu-nhien-ghs-9068-ava.jpg?v=1565273801200"
                                className="img-responsive center-block"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="slider-has-video clearfix">
                          <div className="slider slider-nav">
                            <div className="fixs">
                              <img
                                className="lazy"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                                data-src="https://bizweb.dktcdn.net/100/360/933/products/ezgif-2-c7f2105dbc1a.jpg?v=1565273733053"
                                alt="Mẫu giường ngủ gỗ tự nhiên thiết kế thông minh"
                                data-image="https://bizweb.dktcdn.net/100/360/933/products/ezgif-2-c7f2105dbc1a.jpg?v=1565273733053"
                              />
                            </div>
                            <div className="fixs">
                              <img
                                className="lazy"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                                data-src="https://bizweb.dktcdn.net/100/360/933/products/giuong-ngu-gia-dinh-thanh-lich-bang-go-tu-nhien-ghs-9068-ava.jpg?v=1565273801200"
                                alt="Mẫu giường ngủ gỗ tự nhiên thiết kế thông minh"
                                data-image="https://bizweb.dktcdn.net/100/360/933/products/giuong-ngu-gia-dinh-thanh-lich-bang-go-tu-nhien-ghs-9068-ava.jpg?v=1565273801200"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-lg-6 col-md-6 details-pro">
                      <div>
                        <div className="price-box clearfix">
                          <span className="special-price">
                            <span className="price product-price">
                              2.490.000₫
                            </span>
                          </span>{" "}
                          {/* Giá Khuyến mại */}
                          <span className="old-price">
                            <del className="price product-price-old"></del>
                          </span>{" "}
                          {/* Giá gốca */}
                          <span className="save-price">
                            Tiết kiệm:
                            <span className="price product-price-save" />
                          </span>{" "}
                          {/* Tiết kiệm */}
                        </div>
                        <div className="inventory_quantity">
                          <span className="stock-brand-title">Tình trạng:</span>
                          <span className="a-stock a2">Còn hàng</span>
                        </div>
                        <div className="evo-product-summary product_description margin-bottom-10">
                          <a
                            className="evo-product-tabs-header hidden-lg hidden-md hidden-sm"
                            href="javascript:void(0);">
                            <span>Tổng quan</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="5.658"
                              height="9.903"
                              viewBox="0 0 5.658 9.903">
                              <path
                                d="M5429 1331.94l4.451 4.451-4.451 4.452"
                                stroke="#1c1c1c"
                                strokeLinecap="round"
                                fill="none"
                                transform="translate(-5428.5 -1331.44)"
                              />
                            </svg>
                          </a>
                          <div className="rte description rte-summary">
                            <p>
                              - Làm sạch sản phẩm bằng khăn mềm với nước sạch
                              hoặc dung dịch tẩy rửa dành riêng cho gỗ, sau đó
                              lau khô sản phẩm bằng khăn mềm.
                              <br />
                              - Thường xuyên giặt phần đệm ngồi bằng dung dịch
                              giặt tẩy thông thường để đảm bảo vệ sinh.
                              <br />
                              - Đặt sản phẩm tại nơi khô thoáng, tránh độ ẩm
                              cao, tránh nhiệt độ cao, nguồn sáng mạnh và các
                              vật dễ cháy.
                              <br />
                              - Tránh để sản phẩm tiếp xúc với nước và nhiệt độ
                              cao trong thời gian dài.
                              <br />- Không dùng vật sắc nhọn chà xát sản phẩm.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="form-product">
                        <form
                          encType="multipart/form-data"
                          id="add-to-cart-form"
                          action="/cart/add"
                          method="post"
                          className="clearfix form-inline">
                          <div className="select-swatch">
                            <div
                              id="variant-swatch-0"
                              className="swatch clearfix"
                              data-option="option1"
                              data-option-index={0}>
                              <div className="header">Màu sắc:</div>
                              <div className="select-swap">
                                <div
                                  data-value="do"
                                  className="n-sd swatch-element color do ">
                                  <input
                                    data-value="do"
                                    className="variant-0"
                                    id="swatch-0-do"
                                    type="radio"
                                    name="option1"
                                    defaultValue="Đỏ"
                                    defaultChecked
                                  />
                                  <label
                                    className="do has-thumb"
                                    htmlFor="swatch-0-do">
                                    <img
                                      src="//bizweb.dktcdn.net/thumb/icon/100/360/933/products/ezgif-2-c7f2105dbc1a.jpg?v=1565273733053"
                                      alt="Đỏ"
                                      className="ant-swatch"
                                    />
                                    <span>Đỏ</span>
                                    <img
                                      className="crossed-out"
                                      src="//bizweb.dktcdn.net/100/360/933/themes/728303/assets/soldout.png?1663835694812"
                                      alt="Đỏ"
                                    />
                                    <img
                                      className="img-check"
                                      src="//bizweb.dktcdn.net/100/360/933/themes/728303/assets/select-pro.png?1663835694812"
                                      alt="Đỏ"
                                    />
                                  </label>
                                </div>
                                <div
                                  data-value="xanh"
                                  className="n-sd swatch-element color xanh ">
                                  <input
                                    data-value="xanh"
                                    className="variant-0"
                                    id="swatch-0-xanh"
                                    type="radio"
                                    name="option1"
                                    defaultValue="Xanh"
                                  />
                                  <label
                                    className="xanh has-thumb"
                                    htmlFor="swatch-0-xanh">
                                    <img
                                      src="//bizweb.dktcdn.net/thumb/icon/100/360/933/products/giuong-ngu-gia-dinh-thanh-lich-bang-go-tu-nhien-ghs-9068-ava.jpg?v=1565273801200"
                                      alt="Xanh"
                                      className="ant-swatch"
                                    />
                                    <span>Xanh</span>
                                    <img
                                      className="crossed-out"
                                      src="//bizweb.dktcdn.net/100/360/933/themes/728303/assets/soldout.png?1663835694812"
                                      alt="Xanh"
                                    />
                                    <img
                                      className="img-check"
                                      src="//bizweb.dktcdn.net/100/360/933/themes/728303/assets/select-pro.png?1663835694812"
                                      alt="Xanh"
                                    />
                                  </label>
                                </div>
                                <div
                                  data-value="den"
                                  className="n-sd swatch-element color den ">
                                  <input
                                    data-value="den"
                                    className="variant-0"
                                    id="swatch-0-den"
                                    type="radio"
                                    name="option1"
                                    defaultValue="Đen"
                                  />
                                  <label
                                    className="den no-thumb"
                                    htmlFor="swatch-0-den">
                                    <span>Đen</span>
                                    <img
                                      className="crossed-out"
                                      src="//bizweb.dktcdn.net/100/360/933/themes/728303/assets/soldout.png?1663835694812"
                                      alt="Đen"
                                    />
                                    <img
                                      className="img-check"
                                      src="//bizweb.dktcdn.net/100/360/933/themes/728303/assets/select-pro.png?1663835694812"
                                      alt="Đen"
                                    />
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="box-variant clearfix  hidden ">
                            <select
                              id="product-selectors"
                              className="form-control form-control-lg"
                              name="variantId"
                              style={{ display: "none" }}>
                              <option selected="selected" value={26067975}>
                                Đỏ - 2.490.000₫
                              </option>
                              <option value={26067976}>
                                Xanh - 2.490.000₫
                              </option>
                              <option value={26067977}>Đen - 2.490.000₫</option>
                            </select>
                          </div>
                          <div className="clearfix form-group ">
                            <div className="qty-ant clearfix custom-btn-number">
                              <label>Số lượng:</label>
                              <div className="custom custom-btn-numbers form-control">
                                <button
                                  onclick="var result = document.getElementById('qty'); var qty = result.value; if( !isNaN(qty) & qty > 1 ) result.value--;return false;"
                                  className="btn-minus btn-cts"
                                  type="button">
                                  –
                                </button>
                                <input
                                  type="text"
                                  className="qty input-text"
                                  id="qty"
                                  name="quantity"
                                  size={4}
                                  defaultValue={1}
                                  maxLength={3}
                                />
                                <button
                                  onclick="var result = document.getElementById('qty'); var qty = result.value; if( !isNaN(qty)) result.value++;return false;"
                                  className="btn-plus btn-cts"
                                  type="button">
                                  +
                                </button>
                              </div>
                            </div>
                            <div className="btn-mua">
                              <button
                                type="submit"
                                data-role="addtocart"
                                className="btn btn-lg btn-gray btn-cart btn_buy add_to_cart">
                                <span className="txt-main">
                                  Mua ngay với giá{" "}
                                  <b className="product-price">2.490.000₫</b>
                                </span>
                                <span className="text-add">
                                  Đặt mua giao hàng tận nơi
                                </span>
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="call-and-payment">
                        <div className="hotline_products">
                          Gọi điện để được tư vấn:{" "}
                          <a href="tel:19006750" title={19006750}>
                            1900 6750
                          </a>
                        </div>
                        <div className="payment_product">
                          <span className="payment_product_text">
                            Hình thức thanh toán
                          </span>
                          <img
                            src="//bizweb.dktcdn.net/100/360/933/themes/728303/assets/ppayment-1.svg?1663835694812"
                            alt="Evo Nội Thất"
                          />
                          <img
                            src="//bizweb.dktcdn.net/100/360/933/themes/728303/assets/ppayment-2.svg?1663835694812"
                            alt="Evo Nội Thất"
                          />
                          <img
                            src="//bizweb.dktcdn.net/100/360/933/themes/728303/assets/ppayment-3.svg?1663835694812"
                            alt="Evo Nội Thất"
                          />
                        </div>
                      </div>
                      <div className="size-guide">
                        <button
                          className="size-title"
                          data-toggle="modal"
                          data-target="#mySize"
                          title="Hướng dẫn Mua hàng">
                          <img
                            src="//bizweb.dktcdn.net/100/360/933/themes/728303/assets/size_image.svg?1663835694812"
                            alt="Hướng dẫn Mua hàng"
                          />{" "}
                          Hướng dẫn Mua hàng
                        </button>
                        <div
                          className="modal fade"
                          id="mySize"
                          tabIndex={-1}
                          role="dialog"
                          aria-labelledby="myModalLabel">
                          <div className="modal-dialog" role="document">
                            <div className="modal-content">
                              <div className="modal-header">
                                <button
                                  type="button"
                                  className="close"
                                  data-dismiss="modal"
                                  aria-label="Close">
                                  <span aria-hidden="true">×</span>
                                </button>
                                <h4 className="modal-title" id="myModalLabel">
                                  Hướng dẫn Mua hàng
                                </h4>
                              </div>
                              <div className="modal-body">
                                <div>
                                  <h3>
                                    <strong>
                                      Những mặt hàng thương hiệu EVO&nbsp;cung
                                      cấp
                                    </strong>
                                  </h3>
                                  <p>
                                    Showroom EVO giới thiệu hàng loạt các sản
                                    phẩm với thiết kế theo xu hướng mới nhất
                                    trên thị trường nội thất hiện nay với kiểu
                                    dáng tinh tế, hiện đại, mang tính thẩm mỹ
                                    cao như:&nbsp;bàn ghế sofa, bàn ăn, thảm
                                    trang trí, thiết bị vệ sinh mạ vàng đèn
                                    trang trí, giấy dán tường, tranh treo tường,
                                    hoa và những phụ kiện trang trí...
                                  </p>
                                </div>
                                <div>
                                  <h3>
                                    <strong>
                                      Niềm tin được đặt đúng chỗ khi đến
                                      với&nbsp;EVO&nbsp;
                                    </strong>
                                  </h3>
                                  <p>
                                    Siêu thị nội thất EVO với 02 showroom diện
                                    tích hơn 800 m2, nằm ở vị trí trung tâm
                                    thành phố Đà Nẵng&nbsp;với hệ thống giao
                                    thông thuận lợi, là điểm đến tin cậy làm vừa
                                    lòng cả những vị khách hàng khó tính nhất.
                                    Showroom được xây dựng với tiêu chuẩn 3S
                                    (Super, Special và Smart) với đầy đủ tiện
                                    nghi, cơ sở vật chất hiện đại, sang trọng.
                                    Những sản phẩm được trưng bày tại showroom
                                    cam kết mang chất lượng tốt nhất, mang kiểu
                                    dáng, mẫu mã và thiết kế mới nhất, nắm bắt
                                    nhanh và theo kịp những xu hướng trang trí
                                    nội thất mới nhất.
                                  </p>
                                  <h3>
                                    <strong>
                                      Những mặt hàng thương hiệu EVO&nbsp;cung
                                      cấp
                                    </strong>
                                  </h3>
                                  <p>
                                    Showroom EVO giới thiệu hàng loạt các sản
                                    phẩm với thiết kế theo xu hướng mới nhất
                                    trên thị trường nội thất hiện nay với kiểu
                                    dáng tinh tế, hiện đại, mang tính thẩm mỹ
                                    cao như:&nbsp;bàn ghế sofa, bàn ăn, thảm
                                    trang trí, thiết bị vệ sinh mạ vàng đèn
                                    trang trí, giấy dán tường, tranh treo tường,
                                    hoa và những phụ kiện trang trí...
                                  </p>
                                  <h3>
                                    <strong>
                                      Niềm tin được đặt đúng chỗ khi đến
                                      với&nbsp;EVO&nbsp;
                                    </strong>
                                  </h3>
                                  <p>
                                    Siêu thị nội thất EVO với 02 showroom diện
                                    tích hơn 800 m2, nằm ở vị trí trung tâm
                                    thành phố Đà Nẵng&nbsp;với hệ thống giao
                                    thông thuận lợi, là điểm đến tin cậy làm vừa
                                    lòng cả những vị khách hàng khó tính nhất.
                                    Showroom được xây dựng với tiêu chuẩn 3S
                                    (Super, Special và Smart) với đầy đủ tiện
                                    nghi, cơ sở vật chất hiện đại, sang trọng.
                                    Những sản phẩm được trưng bày tại showroom
                                    cam kết mang chất lượng tốt nhất, mang kiểu
                                    dáng, mẫu mã và thiết kế mới nhất, nắm bắt
                                    nhanh và theo kịp những xu hướng trang trí
                                    nội thất mới nhất.
                                  </p>
                                  <h3>
                                    <strong>
                                      Những mặt hàng thương hiệu EVO&nbsp;cung
                                      cấp
                                    </strong>
                                  </h3>
                                  <p>
                                    Showroom EVO giới thiệu hàng loạt các sản
                                    phẩm với thiết kế theo xu hướng mới nhất
                                    trên thị trường nội thất hiện nay với kiểu
                                    dáng tinh tế, hiện đại, mang tính thẩm mỹ
                                    cao như:&nbsp;bàn ghế sofa, bàn ăn, thảm
                                    trang trí, thiết bị vệ sinh mạ vàng đèn
                                    trang trí, giấy dán tường, tranh treo tường,
                                    hoa và những phụ kiện trang trí...
                                  </p>
                                  <h3>
                                    <strong>
                                      Niềm tin được đặt đúng chỗ khi đến
                                      với&nbsp;EVO&nbsp;
                                    </strong>
                                  </h3>
                                  <p>
                                    Siêu thị nội thất EVO với 02 showroom diện
                                    tích hơn 800 m2, nằm ở vị trí trung tâm
                                    thành phố Đà Nẵng&nbsp;với hệ thống giao
                                    thông thuận lợi, là điểm đến tin cậy làm vừa
                                    lòng cả những vị khách hàng khó tính nhất.
                                    Showroom được xây dựng với tiêu chuẩn 3S
                                    (Super, Special và Smart) với đầy đủ tiện
                                    nghi, cơ sở vật chất hiện đại, sang trọng.
                                    Những sản phẩm được trưng bày tại showroom
                                    cam kết mang chất lượng tốt nhất, mang kiểu
                                    dáng, mẫu mã và thiết kế mới nhất, nắm bắt
                                    nhanh và theo kịp những xu hướng trang trí
                                    nội thất mới nhất.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-8 col-lg-9 col-md-9 margin-top-20">
                  <div className="product-tab e-tabs padding-bottom-10 evo-tab-product-mobile">
                    <ul className="tabs tabs-title clearfix hidden-xs">
                      <li className="tab-link" data-tab="tab-1">
                        Mô tả
                      </li>
                      <li className="tab-link" data-tab="tab-2">
                        Giới thiệu
                      </li>
                    </ul>
                    <div id="tab-1" className="tab-content active">
                      <a
                        className="evo-product-tabs-header hidden-lg hidden-md hidden-sm"
                        href="javascript:void(0);">
                        <span>Mô tả</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="5.658"
                          height="9.903"
                          viewBox="0 0 5.658 9.903">
                          <path
                            d="M5429 1331.94l4.451 4.451-4.451 4.452"
                            stroke="#1c1c1c"
                            strokeLinecap="round"
                            fill="none"
                            transform="translate(-5428.5 -1331.44)"
                          />
                        </svg>
                      </a>
                      <div className="rte">
                        <p>
                          Mẫu&nbsp;
                          <strong>
                            giường ngủ gỗ tự nhiên thiết kế thông minh GHS-9069
                          </strong>
                          &nbsp;một lựa chọn mà bạn không nên bỏ lỡ khi đến với
                          Go Home.&nbsp;Giường ngủ gỗ tự nhiên&nbsp;có thiết kế
                          thông minh cung cấp cho người dùng một không gian lưu
                          trữ tiện dụng bên dưới. Ngoài ra, sản phẩm còn kèm
                          theo giường phụ giúp tăng thêm không gian sử dụng khi
                          cần thiết.
                        </p>
                        <h2>
                          Thông tin chi tiết về giường ngủ gỗ tự nhiên thiết kế
                          thông minh GHS-9069
                        </h2>
                        <p>
                          <strong>Mã sản phẩm</strong>: GHS-9069
                        </p>
                        <p>
                          <strong>Hướng dẫn sử dụng</strong>: giường ngủ gỗ tự
                          nhiên có kèm giường phụ
                        </p>
                        <p>
                          <strong>Chất liệu</strong>: gỗ sồi tự nhiên, đầu
                          giường nệm bọc da cao cấp
                        </p>
                        <p>
                          <strong>Kích thước (D x R x C)</strong>: 2210 x 1300 x
                          100mm
                        </p>
                        <p>Giường phụ: 2020 x 930 x 140mm</p>
                        <p>
                          <strong>Màu sắc</strong>: như hình ảnh minh họa
                        </p>
                        <p>
                          <strong>Bảo hành</strong>: 12 tháng
                        </p>
                        <p>
                          <strong>Thời gian giao hàng</strong>: từ 10 – 15 ngày
                        </p>
                      </div>
                    </div>
                    <div id="tab-2" className="tab-content">
                      <a
                        className="evo-product-tabs-header hidden-lg hidden-md hidden-sm"
                        href="javascript:void(0);">
                        <span>Giới thiệu</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="5.658"
                          height="9.903"
                          viewBox="0 0 5.658 9.903">
                          <path
                            d="M5429 1331.94l4.451 4.451-4.451 4.452"
                            stroke="#1c1c1c"
                            strokeLinecap="round"
                            fill="none"
                            transform="translate(-5428.5 -1331.44)"
                          />
                        </svg>
                      </a>
                      <div className="rte">
                        <div>
                          <h3>
                            <strong>
                              Những mặt hàng thương hiệu EVO&nbsp;cung cấp
                            </strong>
                          </h3>
                          <p>
                            Showroom EVO giới thiệu hàng loạt các sản phẩm với
                            thiết kế theo xu hướng mới nhất trên thị trường nội
                            thất hiện nay với kiểu dáng tinh tế, hiện đại, mang
                            tính thẩm mỹ cao như:&nbsp;bàn ghế sofa, bàn ăn,
                            thảm trang trí, thiết bị vệ sinh mạ vàng đèn trang
                            trí, giấy dán tường, tranh treo tường, hoa và những
                            phụ kiện trang trí...
                          </p>
                        </div>
                        <div>
                          <h3>
                            <strong>
                              Niềm tin được đặt đúng chỗ khi đến
                              với&nbsp;EVO&nbsp;
                            </strong>
                          </h3>
                          <p>
                            Siêu thị nội thất EVO với 02 showroom diện tích hơn
                            800 m2, nằm ở vị trí trung tâm thành phố Đà
                            Nẵng&nbsp;với hệ thống giao thông thuận lợi, là điểm
                            đến tin cậy làm vừa lòng cả những vị khách hàng khó
                            tính nhất. Showroom được xây dựng với tiêu chuẩn 3S
                            (Super, Special và Smart) với đầy đủ tiện nghi, cơ
                            sở vật chất hiện đại, sang trọng. Những sản phẩm
                            được trưng bày tại showroom cam kết mang chất lượng
                            tốt nhất, mang kiểu dáng, mẫu mã và thiết kế mới
                            nhất, nắm bắt nhanh và theo kịp những xu hướng trang
                            trí nội thất mới nhất.
                          </p>
                          <h3>
                            <strong>
                              Những mặt hàng thương hiệu EVO&nbsp;cung cấp
                            </strong>
                          </h3>
                          <p>
                            Showroom EVO giới thiệu hàng loạt các sản phẩm với
                            thiết kế theo xu hướng mới nhất trên thị trường nội
                            thất hiện nay với kiểu dáng tinh tế, hiện đại, mang
                            tính thẩm mỹ cao như:&nbsp;bàn ghế sofa, bàn ăn,
                            thảm trang trí, thiết bị vệ sinh mạ vàng đèn trang
                            trí, giấy dán tường, tranh treo tường, hoa và những
                            phụ kiện trang trí...
                          </p>
                          <h3>
                            <strong>
                              Niềm tin được đặt đúng chỗ khi đến
                              với&nbsp;EVO&nbsp;
                            </strong>
                          </h3>
                          <p>
                            Siêu thị nội thất EVO với 02 showroom diện tích hơn
                            800 m2, nằm ở vị trí trung tâm thành phố Đà
                            Nẵng&nbsp;với hệ thống giao thông thuận lợi, là điểm
                            đến tin cậy làm vừa lòng cả những vị khách hàng khó
                            tính nhất. Showroom được xây dựng với tiêu chuẩn 3S
                            (Super, Special và Smart) với đầy đủ tiện nghi, cơ
                            sở vật chất hiện đại, sang trọng. Những sản phẩm
                            được trưng bày tại showroom cam kết mang chất lượng
                            tốt nhất, mang kiểu dáng, mẫu mã và thiết kế mới
                            nhất, nắm bắt nhanh và theo kịp những xu hướng trang
                            trí nội thất mới nhất.
                          </p>
                          <h3>
                            <strong>
                              Những mặt hàng thương hiệu EVO&nbsp;cung cấp
                            </strong>
                          </h3>
                          <p>
                            Showroom EVO giới thiệu hàng loạt các sản phẩm với
                            thiết kế theo xu hướng mới nhất trên thị trường nội
                            thất hiện nay với kiểu dáng tinh tế, hiện đại, mang
                            tính thẩm mỹ cao như:&nbsp;bàn ghế sofa, bàn ăn,
                            thảm trang trí, thiết bị vệ sinh mạ vàng đèn trang
                            trí, giấy dán tường, tranh treo tường, hoa và những
                            phụ kiện trang trí...
                          </p>
                          <h3>
                            <strong>
                              Niềm tin được đặt đúng chỗ khi đến
                              với&nbsp;EVO&nbsp;
                            </strong>
                          </h3>
                          <p>
                            Siêu thị nội thất EVO với 02 showroom diện tích hơn
                            800 m2, nằm ở vị trí trung tâm thành phố Đà
                            Nẵng&nbsp;với hệ thống giao thông thuận lợi, là điểm
                            đến tin cậy làm vừa lòng cả những vị khách hàng khó
                            tính nhất. Showroom được xây dựng với tiêu chuẩn 3S
                            (Super, Special và Smart) với đầy đủ tiện nghi, cơ
                            sở vật chất hiện đại, sang trọng. Những sản phẩm
                            được trưng bày tại showroom cam kết mang chất lượng
                            tốt nhất, mang kiểu dáng, mẫu mã và thiết kế mới
                            nhất, nắm bắt nhanh và theo kịp những xu hướng trang
                            trí nội thất mới nhất.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-4 col-lg-3 col-md-3 margin-top-20">
                  <div className="similar-product">
                    <div className="right-bestsell">
                      <h2>
                        <a href="san-pham-moi" title="Bạn có thể thích">
                          Bạn có thể thích
                        </a>
                      </h2>
                      <div className="list-bestsell">
                        <div className="evo-product-slide-item">
                          <div className="product-img">
                            <div className="product-sale">
                              <span>- 16% </span>
                            </div>
                            <a
                              href="/giuong-ngu-go-chat-luong-cao-cho-gia-dinh"
                              title="Giường ngủ gỗ chất lượng cao cho gia đình"
                              className="image-resize">
                              <img
                                className="lazy"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                                data-src="//bizweb.dktcdn.net/thumb/large/100/360/933/products/giuong-ngu-go-chat-luong-cao-cho-gia-dinh-ghs-9071-ava.jpg?v=1565273414883"
                                alt="Giường ngủ gỗ chất lượng cao cho gia đình"
                              />
                            </a>
                          </div>
                          <div className="product-detail clearfix">
                            <div className="pro-brand">
                              <a
                                href="/search?query=vendor:Evo%20N%E1%BB%99i%20th%E1%BA%A5t"
                                title="Evo Nội thất">
                                Evo Nội thất
                              </a>
                            </div>
                            <h3 className="pro-name">
                              <a
                                href="/giuong-ngu-go-chat-luong-cao-cho-gia-dinh"
                                title="Giường ngủ gỗ chất lượng cao cho gia đình">
                                Giường ngủ gỗ chất lượng cao cho gia đình
                              </a>
                            </h3>
                            <div className="box-pro-prices">
                              <p className="pro-price">
                                1.290.000₫
                                <span className="pro-price-del">
                                  <del className="compare-price">
                                    1.540.000₫
                                  </del>
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="evo-product-slide-item">
                          <div className="product-img">
                            <a
                              href="/mau-giuong-ngu-go-tu-nhien-thiet-ke-thong-minh"
                              title="Mẫu giường ngủ gỗ tự nhiên thiết kế thông minh"
                              className="image-resize">
                              <img
                                className="lazy"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                                data-src="//bizweb.dktcdn.net/thumb/large/100/360/933/products/ezgif-2-c7f2105dbc1a.jpg?v=1565273733053"
                                alt="Mẫu giường ngủ gỗ tự nhiên thiết kế thông minh"
                              />
                            </a>
                          </div>
                          <div className="product-detail clearfix">
                            <div className="pro-brand">
                              <a
                                href="/search?query=vendor:Evo%20N%E1%BB%99i%20th%E1%BA%A5t"
                                title="Evo Nội thất">
                                Evo Nội thất
                              </a>
                            </div>
                            <h3 className="pro-name">
                              <a
                                href="/mau-giuong-ngu-go-tu-nhien-thiet-ke-thong-minh"
                                title="Mẫu giường ngủ gỗ tự nhiên thiết kế thông minh">
                                Mẫu giường ngủ gỗ tự nhiên thiết kế thông minh
                              </a>
                            </h3>
                            <div className="box-pro-prices">
                              <p className="pro-price">2.490.000₫</p>
                            </div>
                          </div>
                        </div>
                        <div className="evo-product-slide-item">
                          <div className="product-img">
                            <a
                              href="/tu-bep-bang-go-tu-nhien-nho-gon-da-nang-tien-loi"
                              title="Tủ bếp bằng gỗ tự nhiên nhỏ gọn đa năng tiện lợi"
                              className="image-resize">
                              <img
                                className="lazy"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                                data-src="//bizweb.dktcdn.net/thumb/large/100/360/933/products/tu-bep-bang-go-tu-nhien-nho-gon-da-nang-tien-loi-ghs-5787-1.jpg?v=1598933882263"
                                alt="Tủ bếp bằng gỗ tự nhiên nhỏ gọn đa năng tiện lợi"
                              />
                            </a>
                          </div>
                          <div className="product-detail clearfix">
                            <div className="pro-brand">
                              <a
                                href="/search?query=vendor:Evo%20N%E1%BB%99i%20th%E1%BA%A5t"
                                title="Evo Nội thất">
                                Evo Nội thất
                              </a>
                            </div>
                            <h3 className="pro-name">
                              <a
                                href="/tu-bep-bang-go-tu-nhien-nho-gon-da-nang-tien-loi"
                                title="Tủ bếp bằng gỗ tự nhiên nhỏ gọn đa năng tiện lợi">
                                Tủ bếp bằng gỗ tự nhiên nhỏ gọn đa năng tiện lợi
                              </a>
                            </h3>
                            <div className="box-pro-prices">
                              <p className="pro-price">12.500.000₫</p>
                            </div>
                          </div>
                        </div>
                        <div className="evo-product-slide-item">
                          <div className="product-img">
                            <div className="product-sale">
                              <span>- 23% </span>
                            </div>
                            <a
                              href="/tu-bep-gia-dinh-go-cong-nghiep-nho-gon-da-nang"
                              title="Tủ bếp gia đình gỗ công nghiệp nhỏ gọn đa năng"
                              className="image-resize">
                              <img
                                className="lazy"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                                data-src="//bizweb.dktcdn.net/thumb/large/100/360/933/products/tu-bep-gia-dinh-go-cong-nghiep-nho-gon-da-nang-ghs-5786-1.jpg?v=1598933931677"
                                alt="Tủ bếp gia đình gỗ công nghiệp nhỏ gọn đa năng"
                              />
                            </a>
                          </div>
                          <div className="product-detail clearfix">
                            <div className="pro-brand">
                              <a href="/search?query=vendor:IKEA" title="IKEA">
                                IKEA
                              </a>
                            </div>
                            <h3 className="pro-name">
                              <a
                                href="/tu-bep-gia-dinh-go-cong-nghiep-nho-gon-da-nang"
                                title="Tủ bếp gia đình gỗ công nghiệp nhỏ gọn đa năng">
                                Tủ bếp gia đình gỗ công nghiệp nhỏ gọn đa năng
                              </a>
                            </h3>
                            <div className="box-pro-prices">
                              <p className="pro-price">
                                5.000.000₫
                                <span className="pro-price-del">
                                  <del className="compare-price">
                                    6.500.000₫
                                  </del>
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row margin-top-20 margin-bottom-10">
                <div className="col-lg-12">
                  <div className="related-product">
                    <div className="home-title text-center">
                      <h2>
                        <a href="/do-dung-vai" title="Sản phẩm liên quan">
                          Sản phẩm liên quan
                        </a>
                      </h2>
                    </div>
                    <div className="evo-owl-product clearfix">
                      <div className="evo-slick">
                        <div className="evo-product-block-item ">
                          <div className="product-img">
                            <div className="product-sale">
                              <span>- 16% </span>
                            </div>
                            <a
                              href="/giuong-ngu-go-chat-luong-cao-cho-gia-dinh"
                              title="Giường ngủ gỗ chất lượng cao cho gia đình"
                              className="image-resize">
                              <img
                                className="lazy"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                                data-src="//bizweb.dktcdn.net/thumb/large/100/360/933/products/giuong-ngu-go-chat-luong-cao-cho-gia-dinh-ghs-9071-ava.jpg?v=1565273414883"
                                alt="Giường ngủ gỗ chất lượng cao cho gia đình"
                              />
                            </a>
                            <form
                              action="/cart/add"
                              method="post"
                              encType="multipart/form-data"
                              className="button-add hidden-sm hidden-xs hidden-md variants form-nut-grid form-ajaxtocart"
                              data-id="product-actions-15115247">
                              <button
                                title="Tùy chọn"
                                type="button"
                                onclick="location.href='/giuong-ngu-go-chat-luong-cao-cho-gia-dinh'"
                                className="action cart-button">
                                <i className="fa fa-link" aria-hidden="true" />
                              </button>
                            </form>
                          </div>
                          <div className="product-detail clearfix">
                            <div className="pro-brand">
                              <a
                                href="/search?query=vendor:Evo%20N%E1%BB%99i%20th%E1%BA%A5t"
                                title="Evo Nội thất">
                                Evo Nội thất
                              </a>
                            </div>
                            <h3 className="pro-name">
                              <a
                                href="/giuong-ngu-go-chat-luong-cao-cho-gia-dinh"
                                title="Giường ngủ gỗ chất lượng cao cho gia đình">
                                Giường ngủ gỗ chất lượng cao cho gia đình
                              </a>
                            </h3>
                            <p className="pro-price">
                              1.290.000₫
                              <span className="pro-price-del">
                                <del className="compare-price">1.540.000₫</del>
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="evo-slick">
                        <div className="evo-product-block-item ">
                          <div className="product-img">
                            <a
                              href="/tu-bep-go-tu-nhien-thiet-ke-da-nang-dep-hien-dai"
                              title="Tủ bếp gỗ tự nhiên thiết kế đa năng đẹp hiện đại"
                              className="image-resize">
                              <img
                                className="lazy"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                                data-src="//bizweb.dktcdn.net/thumb/large/100/360/933/products/tu-bep-go-tu-nhien-thiet-ke-da-nang-dep-hien-dai-ghs-5785-f29777f0-9ccf-41eb-ab9a-f265c025a1be.jpg?v=1565274214760"
                                alt="Tủ bếp gỗ tự nhiên thiết kế đa năng đẹp hiện đại"
                              />
                            </a>
                            <form
                              action="/cart/add"
                              method="post"
                              encType="multipart/form-data"
                              className="button-add hidden-sm hidden-xs hidden-md variants form-nut-grid form-ajaxtocart"
                              data-id="product-actions-15114973">
                              <input
                                type="hidden"
                                name="variantId"
                                defaultValue={26067434}
                              />
                              <button
                                type="button"
                                title="Mua ngay"
                                className="action"
                                onclick="buy_now('26067434')">
                                <i
                                  className="fa fa-check-square-o"
                                  aria-hidden="true"
                                />
                              </button>
                              <button
                                type="button"
                                title="Thêm vào giỏ"
                                className="action add_to_cart">
                                <i
                                  className="fa fa-shopping-bag"
                                  aria-hidden="true"
                                />
                              </button>
                            </form>
                          </div>
                          <div className="product-detail clearfix">
                            <div className="pro-brand">
                              <a href="/search?query=vendor:IKEA" title="IKEA">
                                IKEA
                              </a>
                            </div>
                            <h3 className="pro-name">
                              <a
                                href="/tu-bep-go-tu-nhien-thiet-ke-da-nang-dep-hien-dai"
                                title="Tủ bếp gỗ tự nhiên thiết kế đa năng đẹp hiện đại">
                                Tủ bếp gỗ tự nhiên thiết kế đa năng đẹp hiện đại
                              </a>
                            </h3>
                            <p className="pro-price">9.100.000₫</p>
                          </div>
                        </div>
                      </div>
                      <div className="evo-slick">
                        <div className="evo-product-block-item ">
                          <div className="product-img">
                            <a
                              href="/queen-chair-m-veins"
                              title="Queen Chair M&Veins"
                              className="image-resize">
                              <img
                                className="lazy"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                                data-src="//bizweb.dktcdn.net/thumb/large/100/360/933/products/chair.jpg?v=1565313429893"
                                alt="Queen Chair M&Veins"
                              />
                            </a>
                            <form
                              action="/cart/add"
                              method="post"
                              encType="multipart/form-data"
                              className="button-add hidden-sm hidden-xs hidden-md variants form-nut-grid form-ajaxtocart"
                              data-id="product-actions-15114938">
                              <input
                                type="hidden"
                                name="variantId"
                                defaultValue={26067399}
                              />
                              <button
                                type="button"
                                title="Mua ngay"
                                className="action"
                                onclick="buy_now('26067399')">
                                <i
                                  className="fa fa-check-square-o"
                                  aria-hidden="true"
                                />
                              </button>
                              <button
                                type="button"
                                title="Thêm vào giỏ"
                                className="action add_to_cart">
                                <i
                                  className="fa fa-shopping-bag"
                                  aria-hidden="true"
                                />
                              </button>
                            </form>
                          </div>
                          <div className="product-detail clearfix">
                            <div className="pro-brand">
                              <a
                                href="/search?query=vendor:Evo%20N%E1%BB%99i%20th%E1%BA%A5t"
                                title="Evo Nội thất">
                                Evo Nội thất
                              </a>
                            </div>
                            <h3 className="pro-name">
                              <a
                                href="/queen-chair-m-veins"
                                title="Queen Chair M&Veins">
                                Queen Chair M&amp;Veins
                              </a>
                            </h3>
                            <p className="pro-price">7.500.000₫</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div id="top-tabs-info" className>
            <div className="productAnchor_horizonalNavs">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="productAnchor_horizonalNav">
                      <div className="product_info_image hidden-xs">
                        <img
                          className="pict imagelazyload"
                          src="//bizweb.dktcdn.net/thumb/medium/100/360/933/products/ezgif-2-c7f2105dbc1a.jpg?v=1565273733053"
                          alt="Mẫu giường ngủ gỗ tự nhiên thiết kế thông minh"
                        />
                      </div>
                      <div className="product_info_content hidden-xs">
                        <h2
                          className="product_info_name"
                          title="Mẫu giường ngủ gỗ tự nhiên thiết kế thông minh">
                          Mẫu giường ngủ gỗ tự nhiên thiết kế thông minh
                        </h2>
                        <div className="product_info_price">
                          <div className="product_info_price_title">
                            Giá bán:
                          </div>
                          <div className="product_info_price_value">
                            <div className="product_info_price_value-final">
                              2.490.000₫
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product_info_buttons">
                        <button className="btn btn_buyNow btn-buy-now-click">
                          <span className="txt-main">MUA NGAY</span>
                          <span className="txt-sub">Giao hàng tận nơi</span>
                        </button>
                        <a
                          className="btn btn_traGop btn-tra-gop-click s-flag"
                          href="tel:19006750">
                          <span className="txt-main hidden-xs">Hãy gọi</span>
                          <span className="txt-sub hidden-xs">
                            Liên hệ 1900 6750
                          </span>
                          <i
                            className="fa fa-phone visible-xs"
                            aria-hidden="true"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <link
            href="//bizweb.dktcdn.net/100/360/933/themes/728303/assets/bpr-products-module.scss.css?1663835694812"
            rel="stylesheet"
            type="text/css"
          />
          <div className="bizweb-product-reviews-module" />
          <footer className="footer bg-footer">
            <div className="site-footer">
              <div className="container">
                <div className="footer-inner padding-bottom-20">
                  <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-3 fix-clear">
                      <div className="footer-widget">
                        <h3>Về chúng tôi</h3>
                        <ul className="list-menu has-click">
                          <li>
                            <a href="/" title="Trang chủ" rel="nofollow">
                              Trang chủ
                            </a>
                          </li>
                          <li>
                            <a
                              href="/gioi-thieu"
                              title="Giới thiệu"
                              rel="nofollow">
                              Giới thiệu
                            </a>
                          </li>
                          <li>
                            <a
                              href="/collections/all"
                              title="Sản phẩm"
                              rel="nofollow">
                              Sản phẩm
                            </a>
                          </li>
                          <li>
                            <a
                              href="/hang-moi-ve"
                              title="Hàng mới về"
                              rel="nofollow">
                              Hàng mới về
                            </a>
                          </li>
                          <li>
                            <a href="/blogs/all" title="Tin tức" rel="nofollow">
                              Tin tức
                            </a>
                          </li>
                          <li>
                            <a href="/lien-he" title="Liên hệ" rel="nofollow">
                              Liên hệ
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3 fix-clear">
                      <div className="footer-widget">
                        <h3>Hỗ trợ khách hàng</h3>
                        <ul className="list-menu has-click">
                          <li>
                            <a href="/" title="Trang chủ" rel="nofollow">
                              Trang chủ
                            </a>
                          </li>
                          <li>
                            <a
                              href="/gioi-thieu"
                              title="Giới thiệu"
                              rel="nofollow">
                              Giới thiệu
                            </a>
                          </li>
                          <li>
                            <a
                              href="/collections/all"
                              title="Sản phẩm"
                              rel="nofollow">
                              Sản phẩm
                            </a>
                          </li>
                          <li>
                            <a
                              href="/hang-moi-ve"
                              title="Hàng mới về"
                              rel="nofollow">
                              Hàng mới về
                            </a>
                          </li>
                          <li>
                            <a href="/blogs/all" title="Tin tức" rel="nofollow">
                              Tin tức
                            </a>
                          </li>
                          <li>
                            <a href="/lien-he" title="Liên hệ" rel="nofollow">
                              Liên hệ
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3 fix-clear">
                      <div className="footer-widget footer-contact">
                        <h3>Liên hệ với chúng tôi</h3>
                        <ul className="list-menu">
                          <li>
                            <strong>Địa chỉ</strong>70 Lu Gia, Ward 15, District
                            11, Ho Chi Minh City
                          </li>
                          <li>
                            <strong>Hotline</strong>
                            <a href="tel:19006750" title={19006750}>
                              1900 6750
                            </a>
                          </li>
                          <li>
                            <strong>Email</strong>
                            <a
                              href="mailto:support@sapo.vn"
                              title="support@sapo.vn">
                              support@sapo.vn
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-3 fix-clear">
                      <div className="footer-widget form-mailchimp">
                        <h3>Đăng ký nhận bản tin</h3>
                        <form
                          action="//facebook.us7.list-manage.com/subscribe/post?u=97ba6d3ba28239250923925a8&id=4ef3a755a8"
                          method="post"
                          id="mc-embedded-subscribe-form"
                          name="mc-embedded-subscribe-form"
                          target="_blank">
                          <input
                            type="email"
                            className="form-control"
                            defaultValue
                            placeholder="Email của bạn"
                            name="EMAIL"
                            id="mail"
                          />
                          <button
                            className="btn btn-default"
                            name="subscribe"
                            id="subscribe"
                            type="submit">
                            <i
                              className="fa fa-paper-plane"
                              aria-hidden="true"
                            />
                          </button>
                        </form>
                        <p>
                          Bạn là khách hàng mới. Đăng ký email và nhận mã giảm
                          giá 50.000 đ.
                        </p>
                        <div className="bct-and-payment">
                          <div className="payment-img bct-block">
                            <img
                              data-src="//bizweb.dktcdn.net/100/360/933/themes/728303/assets/payment-1.svg?1663835694812"
                              className="lazy"
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                              alt="Evo Nội Thất"
                            />
                            <img
                              data-src="//bizweb.dktcdn.net/100/360/933/themes/728303/assets/payment-2.svg?1663835694812"
                              className="lazy"
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                              alt="Evo Nội Thất"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="copyright clearfix">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 text-center">
                    <span>
                      © Bản quyền thuộc về <b>Evo Themes</b>{" "}
                      <span className="s480-f">|</span> Cung cấp bởi{" "}
                      <a href="javascript:;">Sapo</a>
                    </span>
                  </div>
                </div>
                <div className="back-to-top" title="Lên đầu trang">
                  <i className="fa fa-angle-up" aria-hidden="true" />
                </div>
              </div>
            </div>
          </footer>
          <div className="backdrop__body-backdrop___1rvky" />
          <div className="ajax-load">
            <span className="loading-icon">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="24px"
                height="30px"
                viewBox="0 0 24 30"
                style={{ enableBackground: "new 0 0 50 50" }}
                xmlSpace="preserve">
                <rect
                  x={0}
                  y={10}
                  width={4}
                  height={10}
                  fill="#333"
                  opacity="0.2">
                  <animate
                    attributeName="opacity"
                    attributeType="XML"
                    values="0.2; 1; .2"
                    begin="0s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="height"
                    attributeType="XML"
                    values="10; 20; 10"
                    begin="0s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="y"
                    attributeType="XML"
                    values="10; 5; 10"
                    begin="0s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect
                  x={8}
                  y={10}
                  width={4}
                  height={10}
                  fill="#333"
                  opacity="0.2">
                  <animate
                    attributeName="opacity"
                    attributeType="XML"
                    values="0.2; 1; .2"
                    begin="0.15s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="height"
                    attributeType="XML"
                    values="10; 20; 10"
                    begin="0.15s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="y"
                    attributeType="XML"
                    values="10; 5; 10"
                    begin="0.15s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect
                  x={16}
                  y={10}
                  width={4}
                  height={10}
                  fill="#333"
                  opacity="0.2">
                  <animate
                    attributeName="opacity"
                    attributeType="XML"
                    values="0.2; 1; .2"
                    begin="0.3s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="height"
                    attributeType="XML"
                    values="10; 20; 10"
                    begin="0.3s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="y"
                    attributeType="XML"
                    values="10; 5; 10"
                    begin="0.3s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                </rect>
              </svg>
            </span>
          </div>
          <div className="loading awe-popup">
            <div className="overlay" />
            <div className="loader" title={2}>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="24px"
                height="30px"
                viewBox="0 0 24 30"
                style={{ enableBackground: "new 0 0 50 50" }}
                xmlSpace="preserve">
                <rect
                  x={0}
                  y={10}
                  width={4}
                  height={10}
                  fill="#333"
                  opacity="0.2">
                  <animate
                    attributeName="opacity"
                    attributeType="XML"
                    values="0.2; 1; .2"
                    begin="0s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="height"
                    attributeType="XML"
                    values="10; 20; 10"
                    begin="0s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="y"
                    attributeType="XML"
                    values="10; 5; 10"
                    begin="0s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect
                  x={8}
                  y={10}
                  width={4}
                  height={10}
                  fill="#333"
                  opacity="0.2">
                  <animate
                    attributeName="opacity"
                    attributeType="XML"
                    values="0.2; 1; .2"
                    begin="0.15s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="height"
                    attributeType="XML"
                    values="10; 20; 10"
                    begin="0.15s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="y"
                    attributeType="XML"
                    values="10; 5; 10"
                    begin="0.15s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect
                  x={16}
                  y={10}
                  width={4}
                  height={10}
                  fill="#333"
                  opacity="0.2">
                  <animate
                    attributeName="opacity"
                    attributeType="XML"
                    values="0.2; 1; .2"
                    begin="0.3s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="height"
                    attributeType="XML"
                    values="10; 20; 10"
                    begin="0.3s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="y"
                    attributeType="XML"
                    values="10; 5; 10"
                    begin="0.3s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                </rect>
              </svg>
            </div>
          </div>
          <div className="addcart-popup product-popup awe-popup">
            <div className="overlay no-background" />
            <div className="content">
              <div className="row row-noGutter">
                <div className="col-xl-6 col-xs-12">
                  <div className="btn btn-full btn-primary a-left popup-title">
                    <i className="fa fa-check" />
                    Thêm vào giỏ hàng thành công
                  </div>
                  <a
                    href="javascript:void(0)"
                    className="close-window close-popup">
                    <i className="fa fa-close" />
                  </a>
                  <div className="info clearfix">
                    <div className="product-image margin-top-5">
                      <img
                        alt="popup"
                        src="//bizweb.dktcdn.net/100/360/933/themes/728303/assets/logo.png?1663835694812"
                        style={{ maxWidth: "150px", height: "auto" }}
                      />
                    </div>
                    <div className="product-info">
                      <p className="product-name" />
                      <p className="quantity color-main">
                        <span>Số lượng: </span>
                      </p>
                      <p className="total-money color-main">
                        <span>Tổng tiền: </span>
                      </p>
                    </div>
                    <div className="actions">
                      <button className="btn  btn-primary  margin-top-5 btn-continue">
                        Tiếp tục mua hàng
                      </button>
                      <button
                        className="btn btn-gray margin-top-5"
                        onclick="window.location='/cart'">
                        Kiểm tra giỏ hàng
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="error-popup awe-popup">
            <div className="overlay no-background" />
            <div className="popup-inner content">
              <div className="error-message" />
            </div>
          </div>
          <div id="popup-cart" className="modal fade" role="dialog">
            <div id="popup-cart-desktop" className="clearfix">
              <div className="title-popup-cart">
                <i
                  className="ion ion-md-notifications-outline"
                  aria-hidden="true"
                />{" "}
                Bạn đã thêm <span className="cart-popup-name" /> vào giỏ hàng
              </div>
              <div className="title-quantity-popup">
                <a href="/cart" title="Xem giỏ hàng">
                  Xem giỏ hàng
                </a>
              </div>
              <div className="content-popup-cart clearfix">
                <div className="thead-popup">
                  <div style={{ width: "55%" }} className="text-left">
                    Sản phẩm
                  </div>
                  <div style={{ width: "15%" }} className="text-center">
                    Đơn giá
                  </div>
                  <div style={{ width: "15%" }} className="text-center">
                    Số lượng
                  </div>
                  <div style={{ width: "15%" }} className="text-center">
                    Thành tiền
                  </div>
                </div>
                <div className="tbody-popup" />
                <div className="tfoot-popup">
                  <div className="tfoot-popup-1 clearfix">
                    <div className="pull-left popupcon">
                      <a
                        className="button btn-continue"
                        title="Tiếp tục mua hàng"
                        onclick="$('#popup-cart').modal('hide');">
                        <span>
                          <span>
                            <i
                              className="fa fa-caret-left"
                              aria-hidden="true"
                            />{" "}
                            Tiếp tục mua hàng
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className="pull-right popup-total">
                      <p>
                        Thành tiền: <span className="total-price" />
                      </p>
                    </div>
                  </div>
                  <div className="tfoot-popup-2 clearfix">
                    <a
                      className="button btn-proceed-checkout"
                      title="Thanh toán đơn hàng"
                      href="/checkout">
                      <span>Thanh toán đơn hàng</span>
                    </a>
                  </div>
                </div>
              </div>
              <a
                className="quickview-close close-window"
                href="javascript:;"
                onclick="$('#popup-cart').modal('hide');"
                title="Đóng">
                <i className="fa fa-times" />
              </a>
            </div>
          </div>
          <div id="myModal" className="modal fade" role="dialog" />
          <link
            rel="preload"
            as="script"
            href="//bizweb.dktcdn.net/100/360/933/themes/728303/assets/main.js?1663835694812"
          />
          <div className="evo-recentview">
            <div className="evo-recent-button" title="Sản phẩm đã xem" />
            <div className="evo-recent_products">
              <div className="evo-recent-title">Đã xem</div>
              <div className="recent_products">
                <div id="recent-content"></div>
              </div>
            </div>
          </div>
          <link
            rel="preload"
            as="style"
            type="text/css"
            href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            onload="this.rel='stylesheet'"
          />
          <link
            href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
            type="text/css"
          />
        </div>
      );
    }
 

export default Detail
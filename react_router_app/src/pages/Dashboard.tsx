import React from "react";

const Dashboard: React.FC = () => {
    return (
        <>
        <section className="header">
          <nav className="navbar navbar-expand-lg sticky-top">
            <div className="container-fluid">
              <a className="navbar-brand me-auto" href="#">
                <img src="./src/assets/logo.svg" id="logoblue" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="offcanvas offcanvas-end"
                tabIndex={-1}
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                    BCR
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  />
                </div>
                <div className="offcanvas-body ms-auto">
                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                      <a className="nav-link mx-lg-2" href="#ourservices">
                        Our Services
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link mx-lg-2" href="#whyus">
                        Why Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link mx-lg-2" href="#testi">
                        Testimonials
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link mx-lg-2" href="#FAQ">
                        FAQ
                      </a>
                    </li>
                    <li className="nav-item register-button">
                      <a
                        className="nav-link mx-lg-2"
                        href="#register"
                        id="registerbutton"
                      >
                        Register
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
          <section className="hero">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 col-sm-12 ">
                  <div className="text">
                    <h1>
                      <b>Sewa &amp; Rental Mobil Terbaik di kawasan (Lokasimu)</b>
                    </h1>
                    <p>
                      Selamat datang di Binar Car Rental. Kami menyediakan mobil
                      kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                      kebutuhanmu untuk sewa mobil selama 24 jam.
                    </p>
                  </div>
                  <div className="buttons">
                    <a href="#" className="btn">
                      Mulai Sewa Mobil
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <img src="./src/assets/car.svg" alt="car-img" />
                </div>
              </div>
            </div>
          </section>
        </section>
        {/*BAG 2*/}
        <section className="ourservices" id="ourservices">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <img
                  src="./src/assets/img_service.png"
                  alt="service-img"
                  id="service-img"
                />
              </div>
              <div className="col-md-7">
                <div className="text">
                  <h2>
                    <b>Best Car Rental for any kind of trip in (Lokasimu)!</b>
                  </h2>
                  <p>
                    Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
                    lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                    kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                    wedding, meeting, dll.
                  </p>
                  <ul>
                    <li>
                      <img src="./src/assets/check.svg" />
                      Sewa Mobil Dengan Supir di Bali 12 jam
                    </li>
                    <li>
                      <img src="./src/assets/check.svg" />
                      Sewa Mobil Lepas Kunci di Bali 24 Jam
                    </li>
                    <li>
                      <img src="./src/assets/check.svg" />
                      Sewa Mobil Jangka Panjang Bulanan
                    </li>
                    <li>
                      <img src="./src/assets/check.svg" />
                      Gratis Antar - Jemput Mobil di Bandara
                    </li>
                    <li>
                      <img src="./src/assets/check.svg" />
                      Layanan Airport Transfer / Drop In Out
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*BAG 3*/}
        <section className="whyus" id="whyus">
          <div className="text">
            <h1>Why Us?</h1>
            <p>Mengapa harus pilih Binar Car Rental?</p>
          </div>
          <div className="points">
            <div className="row">
              <div className="col-md-3">
                <img src="./src/assets/icon_complete.svg" />
                <h3>Mobil Lengkap</h3>
                <p>
                  Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                  terawat
                </p>
              </div>
              <div className="col-md-3">
                <img src="./src/assets/icon_price.svg" />
                <h3>Harga Murah</h3>
                <p>
                  Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
                  mobil lain
                </p>
              </div>
              <div className="col-md-3">
                <img src="./src/assets/icon_24hrs.svg" />
                <h3>Layanan 24 Jam</h3>
                <p>
                  Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                  tersedia di akhir minggu
                </p>
              </div>
              <div className="col-md-3">
                <img src="./src/assets/icon_professional.svg" />
                <h3>Sopir Profesional</h3>
                <p>
                  Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat
                  waktu
                </p>
              </div>
            </div>
          </div>
        </section>
        {/*BAG 4*/}
        <section className="testi" id="testi">
          <div className="text">
            <h1>Testimonial</h1>
            <p>Berbagai review positif dari para pelanggan kami</p>
          </div>
          <div className="owl-carousel owl-theme">
            <div className="item">
              <div className="row">
                <div className="col-md-3">
                  <img src="./src/assets/img_photo.png" className="testiphoto" />
                </div>
                <div className="col-md-9">
                  <img src="./src/assets/star.svg" style={{ width: 80 }} />
                  <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod”
                  </p>
                  <h6>John Dee 32, Bromo</h6>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="row">
                <div className="col-md-3">
                  <img src="./src/assets/img_photo1.png" className="testiphoto" />
                </div>
                <div className="col-md-9">
                  <img src="./src/assets/star.svg" style={{ width: 80 }} />
                  <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod”
                  </p>
                  <h6>John Dee 32, Bromo</h6>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="row">
                <div className="col-md-3">
                  <img src="./src/assets/img_photo.png" className="testiphoto" />
                </div>
                <div className="col-md-9">
                  <img src="./src/assets/star.svg" style={{ width: 80 }} />
                  <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod”
                  </p>
                  <h6>John Dee 32, Bromo</h6>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="row">
                <div className="col-md-3">
                  <img src="./src/assets/img_photo1.png" className="testiphoto" />
                </div>
                <div className="col-md-9">
                  <img src="./src/assets/star.svg" style={{ width: 80 }} />
                  <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod”
                  </p>
                  <h6>John Dee 32, Bromo</h6>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*BAG 5*/}
        <section className="register" id="register">
          <h2>Sewa Mobil di (Lokasimu) Sekarang</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <button>Mulai Sewa Mobil</button>
        </section>
        {/*BAG 6*/}
        <section className="FAQ" id="FAQ">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <h2>Frequently Asked Question</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
              </div>
              <div className="col-md-7">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item mb-3">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button mb-2"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Apa saja syarat yang dibutuhkan?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It
                        is shown by default, until the collapse plugin adds the
                        appropriate classes that we use to style each element. These
                        classes control the overall appearance, as well as the showing
                        and hiding via CSS transitions. You can modify any of this
                        with custom CSS or overriding our default variables. It's also
                        worth noting that just about any HTML can go within the{" "}
                        <code>.accordion-body</code>, though the transition does limit
                        overflow.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mb-3">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Berapa hari minimal sewa mobil lepas kunci?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It
                        is hidden by default, until the collapse plugin adds the
                        appropriate classes that we use to style each element. These
                        classes control the overall appearance, as well as the showing
                        and hiding via CSS transitions. You can modify any of this
                        with custom CSS or overriding our default variables. It's also
                        worth noting that just about any HTML can go within the{" "}
                        <code>.accordion-body</code>, though the transition does limit
                        overflow.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mb-3">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Berapa hari sebelumnya sabaiknya booking sewa mobil?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It
                        is hidden by default, until the collapse plugin adds the
                        appropriate classes that we use to style each element. These
                        classes control the overall appearance, as well as the showing
                        and hiding via CSS transitions. You can modify any of this
                        with custom CSS or overriding our default variables. It's also
                        worth noting that just about any HTML can go within the{" "}
                        <code>.accordion-body</code>, though the transition does limit
                        overflow.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mb-3">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Apakah ada biaya antar-jemput?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It
                        is hidden by default, until the collapse plugin adds the
                        appropriate classes that we use to style each element. These
                        classes control the overall appearance, as well as the showing
                        and hiding via CSS transitions. You can modify any of this
                        with custom CSS or overriding our default variables. It's also
                        worth noting that just about any HTML can go within the{" "}
                        <code>.accordion-body</code>, though the transition does limit
                        overflow.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mb-3">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Bagaimana jika terjadi kecelakaan?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It
                        is hidden by default, until the collapse plugin adds the
                        appropriate classes that we use to style each element. These
                        classes control the overall appearance, as well as the showing
                        and hiding via CSS transitions. You can modify any of this
                        with custom CSS or overriding our default variables. It's also
                        worth noting that just about any HTML can go within the{" "}
                        <code>.accordion-body</code>, though the transition does limit
                        overflow.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*BAG 7*/}
        <section className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                <p>binarcarrental@gmail.com</p>
                <p>081-233-334-808</p>
              </div>
              <div className="col-md-2">
                <h6>Our services</h6>
                <h6>Why Us</h6>
                <h6>Testimonial</h6>
                <h6>FAQ</h6>
              </div>
              <div className="col-md-3">
                <p>Connect with us</p>
                <img src="./src/assets/icon_facebook.svg" />
                <img src="./src/assets/icon_instagram.svg" />
                <img src="./src/assets/icon_twitter.svg" />
                <img src="./src/assets/icon_mail.svg" />
                <img src="./src/assets/icon_twitch.svg" />
              </div>
              <div className="col-md-4">
                <p>Copyright Binar 2022</p>
                <img src="./src/assets/logo.svg" />
              </div>
            </div>
          </div>
        </section>
      </>
      
    )
}

export default Dashboard
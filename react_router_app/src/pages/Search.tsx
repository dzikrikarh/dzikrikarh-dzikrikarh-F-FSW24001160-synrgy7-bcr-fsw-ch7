import React from "react";

const Dashboard: React.FC = () => {
    return (
<>
<style
  dangerouslySetInnerHTML={{
    __html:
      "\n  /*BAGIAN 1*/\n.header {\n    background-color: #f1f3ff;\n    height: 504px;\n    z-index: -1;\n    position: relative;\n  }\n  .topheader {\n    width: 1440px;\n  }\n  .row.navwrapper {\n    padding-top: 30px;\n  }\n  .boxlogo {\n    background-color: #0d28a6;\n    height: 36px;\n    width: 100px;\n    margin-top: 10px;\n  }\n  .navbar b {\n    width: 100%;\n    font-size: 14px;\n  }\n  .registerbox {\n    background-color: #5CB85F;\n    width: 80px;\n    height: 40px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: -1;\n    border-radius: 4px;\n  }\n  .container.bottomheader {\n    padding-bottom: 0px;\n    position: relative;\n  }\n  .col-6.bottomheaderleft {\n    padding-top: 100px;\n    padding-left: 0px;\n  }\n  .bottomheaderleft p {\n    margin-top: 20px;\n    margin-bottom: 30px;\n    max-width: 450px;\n    font-size: 14px;\n    letter-spacing: 0px;\n    font-weight: 450;\n  }\n  .bottomheaderleft btn {\n    background-color: #5cb85f;\n    color: #ffffff;\n    padding: 8px 10px 10px 10px;\n    font-weight: 500;\n    border-radius: 4px;\n  }\n  .col-6.bottomheaderright {\n    position: relative;\n    display: flex;\n    justify-content: flex-end;\n    align-items: flex-end;\n  }\n  .car {\n    position: relative;\n    width: 664px;\n    transform: rotateY(180deg);\n    bottom: -40px;\n    right: -85px;\n  }\n  .box {\n    position: absolute;\n    bottom: -72px;\n    right: -100px;\n    background-color: #0d28a6;\n    height: 237px;\n    width: 750px;\n    border-radius: 60px 0 0 0;\n    z-index: -1;\n  }\n\n/* BAGIAN 2*/\n\n.carimobil {\n  background-color: #ffffff;\n  color: #3C3C3C;\n  width: 80%;\n  height: 100%;\n  border-radius: 8px;\n  text-align: center;\n  padding: 30px 25px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  margin-top: 40px;\n}\n\n.icon {\n  display: inline-block;\n  /* width: 100px; */\n  height: 20px;\n  background-size: contain;\n  background-repeat: no-repeat;\n  vertical-align: middle;\n}\n\n#load-btn {\n  background-color: #5CB85F;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  padding: 5px;\n}\n\n.card-button {\n  background-color: #5CB85F;\n  color: white;\n  border: none;\n  padding: 5px;\n  width: 265px;\n  height: 50px;\n  font-size: 14px;\n}\n\n#cars-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  width: 80%;\n  margin: 0 auto;\n  margin-top: 40px;\n  font-size: 14px;\n}\n\n#cars-container .col {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.card-img {\n  max-height: 160px;\n  overflow:auto;\n  object-fit: cover;\n}\n\n.custom-card {\n  width: 300px;\n}\n\n.icon-capacity {\n  background-image: url('path/to/capacity-icon.png');\n}\n\n.icon-transmission {\n  background-image: url('path/to/transmission-icon.png');\n}\n\n.icon-year {\n  background-image: url('path/to/year-icon.png');\n}\n\n/*BAGIAN 3*/\n  .container.footer {\n  margin-left: 170px;\n  margin-top: 80px;\n  margin-bottom: 100px;\n  background-color:#ffff;\n  }\n  .container.footer p {\n    font-size: 14px;\n    font-weight: 450;\n  }\n  .container.footer h6 {\n    line-height: 1.5;\n  }\n  .footer img {\n    padding-right: 10px;\n  }\n  .box3 {\n    width: 100px;\n    height: 34px;\n    background-color: #0d28a6;\n    z-index: 5;\n  }\n  "
  }}
/>

  {/* BAG 1*/}
  <div className="header">
    <div className="container topheader">
      <div className="row navwrapper">
        <div className="col-1 text-center navbar">
          <div className="boxlogo" />
        </div>
        <div className="col-6 text-center navbar" />
        <div className="col-1 text-center navbar">
          <b>Our Services</b>
        </div>
        <div className="col-1 text-center navbar">
          <b>Why Us</b>
        </div>
        <div className="col-1 text-center navbar">
          <b>Testimonial</b>
        </div>
        <div className="col-1 text-center navbar">
          <b>FAQ</b>
        </div>
        <div className="col-1 text-center navbar">
          <div className="registerbox" />
          <b style={{ color: "#ffff" }}>Register</b>
        </div>
      </div>
    </div>
    <div className="container bottomheader">
      <div className="row">
        <div className="col-6 bottomheaderleft">
          <h1>
            <b>Sewa &amp; Rental Mobil Terbaik di kawasan (Lokasimu)</b>
          </h1>
          <p>
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
        </div>
        <div className="col-6 bottomheaderright">
          <div className="box" />
          <img src="./images/car.png" className="car" />
          <img />
        </div>
      </div>
    </div>
  </div>
  {/* BAG 2*/}
  <div className="container carimobil">
    <div className="row">
      <div className="col" id="form-carimobil">
        <label htmlFor="driver-type">Tipe Driver</label>
        <select id="driver-type">
          <option value="">Tipe Driver</option>
          <option value="true">Dengan Sopir</option>
          <option value="false">Tanpa Sopir</option>
        </select>
      </div>
      <div className="col">
        <label htmlFor="date-input">Tanggal</label>
        <input type="date" id="date-input" placeholder="Tanggal" />
      </div>
      <div className="col">
        <label htmlFor="time-input">Waktu Jemput/Ambil</label>
        <select id="time-input">
          <option value="">Waktu Jemput/Ambil</option>
        </select>
      </div>
      <div className="col">
        <label htmlFor="passenger-input">Jumplah Penumpang</label>
        <input
          type="number"
          id="passenger-input"
          placeholder="Jumlah Penumpang"
          min={1}
        />
      </div>
      <div className="col">
        <button id="load-btn">Cari Mobil</button>
        <button id="clear-btn">Clear</button>
      </div>
    </div>
  </div>
  <div className="row row-cols-3" id="cars-container" />
  {/* BAG 3 */}
  <div className="container footer">
    <div className="row">
      <div className="col-3">
        <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
        <p>binarcarrental@gmail.com</p>
        <p>081-233-334-808</p>
      </div>
      <div className="col-2">
        <h6>Our services</h6>
        <h6>Why Us</h6>
        <h6>Testimonial</h6>
        <h6>FAQ</h6>
      </div>
      <div className="col-3">
        <p>Connect with us</p>
        <img src="./images/icon_facebook.svg" />
        <img src="./images/icon_instagram.svg" />
        <img src="./images/icon_twitter.svg" />
        <img src="./images/icon_mail.svg" />
        <img src="./images/icon_twitch.svg" />
      </div>
      <div className="col-4">
        <p>Copyright Binar 2022</p>
        <div className="box3" />
      </div>
    </div>
  </div>
</>
      
    )
}

export default Dashboard
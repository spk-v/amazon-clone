import React from "react";
import "./Home.css";
import Product from "./Product";
/*https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Bollywood/1500x600_Hero-Tall_np_bolly._CB405289994_.jpg */
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="111"
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          {/*product*/}
          <Product
            id="112"
            title="
            Aucma Stand Mixer,6.5-QT 660W 6-Speed Tilt-Head Food Mixer, Kitchen Electric Mixer with Dough Hook, Wire Whip & Beater (6.5QT, Blue)"
            price={239}
            rating={4}
            image="https://m.media-amazon.com/images/I/61aT8jl8THL._AC_UY327_FMwebp_QL65_.jpg"
          />
          {/*product*/}
        </div>

        <div className="home__row">
          <Product
            id="113"
            title="HP 63 | Ink Cartridge | Black | F6U62AN"
            price={20.89}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41Q-WavqjiL._AC_US240_FMwebp_QL65_.jpg"
          />
          <Product
            id="114"
            title="Roku Streaming Stick+ | HD/4K/HDR Streaming Device with Long-range Wireless and Voice Remote with TV Controls (updated for 2019)"
            price={49}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41MxN-0lMOL._AC_US240_FMwebp_QL65_.jpg"
          />
          <Product
            id="115"
            title="TP-Link AC1750 Smart WiFi Router - Dual Band Gigabit Wireless Internet Router for Home, Works with Alexa, VPN Server, Parental Control&QoS (Archer A7)"
            price={62}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/415vAIn9uEL._AC_US240_FMwebp_QL65_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="116"
            title="ASUS ROG Strix G17 (2020) Gaming Laptop, 17.3” 144Hz IPS Type FHD, NVIDIA GeForce RTX 2070, Intel Core i7-10750H, 16GB DDR4, 512GB PCIe NVM"
            price={1699}
            rating={5}
            image="https://m.media-amazon.com/images/I/81mUGg7nS7L._AC_UL480_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

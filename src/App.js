import "./App.css";
import Nav from "./Nav";
import Carousel from "./Carousel";
import Cards from "./Cards";
import Footer from "./Foooter";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Carousel />
      <Cards />
      <Footer
        facebookLink="https://www.facebook.com/PancakeHousePhilippines"
        twitterLink="https://twitter.com/PancakeHousePh"
        instagramLink="https://www.instagram.com/pancakehouseph/"
        snapchatLink="https://www.snapchat.com/add/pancakehouseph"
        copyrightText="Copyright 2016 © www.pancakehouse.com.ph |"
        privacyPolicyLink="https://www.pancakehouse.com.ph/Privacy-Policy"
        subscribeLink="https://customer.maxsgroupinc.com/subscription/index.php/Optin?id=004"
      />
    </div>
  );
}

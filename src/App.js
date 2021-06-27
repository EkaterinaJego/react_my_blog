import "./App.css";
import Header from "./components/Header"
import Navigation from "./components/Navigation"
import Item from "./components/Item";
import PraktikaByDarvn from "./images/PraktikaByDarvin.jpg"
import Side from "./components/Side";
import Footer from "./components/Footer";

function App() {
  return (<>
  <div className="main">
  <Header maintitle={"My Blog"} baseline={"An awesome baseline"} />
    <Navigation link={"Link"}/>
    <div className="centralpart">
    <div className="firstitem">
    <Item title={"TITLE HEADING"} description={"Titre description"} text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas tempora corporis perspiciatis dignissimos aperiam consequuntur quos nam similique! Illo inventore odit nisi dignissimos harum eligendi odio, alias natus consequuntur possimus?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas tempora corporis perspiciatis dignissimos aperiam consequuntur quos nam similique! Illo inventore odit nisi dignissimos harum eligendi odio, alias natus consequuntur possimus?"/></div>
    <div className="sidewindow">
      <Side title={"ABOUT ME"} img={PraktikaByDarvn} alt="Praktika by Davrin"
     description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas tempora corporis perspiciatis dignissimos aperiam consequuntur quos nam similique!"}/>
     </div>
    <div className="seconditem">
    <Item title={"TITLE HEADING"} description={"Titre description"} text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas tempora corporis perspiciatis dignissimos aperiam consequuntur quos nam similique! Illo inventore odit nisi dignissimos harum eligendi odio, alias natus consequuntur possimus?"/></div>
    </div>
    <eslint-disable-next-line></eslint-disable-next-line>
    <Footer firsttitle={" Made by "} secondtitle= {" Ekaterina Jégo "} thirdtitle={" at Le Reacteur in 2021"}/>
     </div>

  </>);
}


export default App;

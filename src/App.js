import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/home/Home";
import Feature from "./components/pages/feature/Feature";
import Demo from "./components/pages/demo/Demo";
import Slider from "./components/slider/Slider";
import Collections from "./components/collections/Collections";
import NewArrivals from "./components/new-arrivals/NewArrivals";
import FeaturedProducts from "./components/featured-products/FeaturedProducts";
import Footer from "./components/footer/Footer";
import HashLoader from "react-spinners/HashLoader";
import { useState, useEffect } from "react";
import Qualities from "./components/qualities/Qualities";


function App() {

  const [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);

  return (
    <div className="App">

{loading? 
  <div className="spinner-container">
    <HashLoader className="spinner" color='orange' loading={loading} size={60} />
    <label>LOADING...</label>
  </div>
  
:
<Router>
<Navbar />
<Slider />
<Collections />
<NewArrivals/>
<FeaturedProducts />
<Qualities/>
<Footer/>
<Routes>
  <Route path="/" exact component={Home} />
  <Route path="/features" component={Feature} />
  <Route path="/demo" component={Demo} />
</Routes>
</Router>
}

    
    </div>
  );
}

export default App;

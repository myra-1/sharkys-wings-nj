import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Banner from "./components/banner"
import Awards from "./components/Awards"
import HoursAddress from "./components/HoursAddress"
import BarMenu from "./components/BarMenu"
import HappyHour from "./components/HappyHour"
import './App.css';

function App() {
  return (
    <div className="App">
<Header/>
<Banner/>
<Awards/>
<HoursAddress/>
<HappyHour />
<BarMenu/>
    </div>
  );
}

export default App;

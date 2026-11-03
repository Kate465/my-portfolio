import { useState } from 'react'
import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";
import './App.css'

export default function App() {
  return(
   <div className="App">
    <div className="container">
<Header />
<Footer />
<MainContent />
    </div>
    </div>
  );
} 
  
      


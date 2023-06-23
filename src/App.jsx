import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import RecommendetVideo from "./component/RecommendetVideo";
import { Router, Routes, Link, BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="sidebar flex-[0.2] border-1 border-gray-300  fixed z-1 overflow-x-hidden">
                  <Sidebar />
                </div>
                <div className="recomanded  border-1  border-black ml-[40%] md:ml-[10%]">
                  <RecommendetVideo />
                </div>
              </>
            }
          />
          <Route
            path="/search/:str"
            element={
              <>
                <h1>search page</h1>
              </>
            }
          />
          

          {/* <div className="app_page flex"></div> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

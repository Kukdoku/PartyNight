import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import * as ROUTES from "./enventory/pages";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

const Home = React.lazy(() => import("./pages/Home"));
const NotFound = React.lazy(()=>import('./pages/NotFound'))
const TermsCondition = React.lazy(()=>import('./pages/Terms'))

function App() {
  console.log(ROUTES.Home)
  return (
    <div>
      <Router>
        <Suspense fallback={<p>Loading..........</p>}>
            <Header/>
             <Navbar/>
          <Routes>
             
            <Route path={ROUTES.Home} element={<Home/>} exact  />
            <Route path={ROUTES.NOTFOUND} element={<NotFound/>} />
            <Route path={ROUTES.TERMSCONDITION} element={<TermsCondition/>} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;

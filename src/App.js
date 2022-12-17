import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import * as ROUTES from "./enventory/pages";

const Home = React.lazy(() => import("./pages/Home"));
const NotFound = React.lazy(()=>import('./pages/NotFound'))

function App() {
  console.log(ROUTES.Home)
  return (
    <div>
      <Router>
        <Suspense fallback={<p>Loading..........</p>}>
          <Routes>
            <Route path={ROUTES.Home} element={<Home/>} exact  />

            <Route path={ROUTES.NotFound} element={<NotFound/>} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import './index.css';
import Layout from './Layout';
import Home from './pages/home/Home';
import ToolsPage from './pages/tools/Tools';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Switch> */}
            <Route path="tools" element={<ToolsPage />} />
          {/* </Switch> */}
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="*" element={<Home />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>

    {/* <Home /> */}
    {/* <ToolsPage /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

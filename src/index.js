import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Layout from './Layout';
import { HomePage, ToolsPage, ToolsDetailPage, ContributionPage } from './pages';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Layout />}>
          <Route index element={<HomePage />} />
            <Route path="tools" element={<ToolsPage />} />
            <Route path="tools/:id" element={<ToolsDetailPage />} />
            <Route path="contribution" element={<ContributionPage />} />
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

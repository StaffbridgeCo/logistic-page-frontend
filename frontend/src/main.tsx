import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"; // 👈 importa tu componente aquí

import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import TeamMember from "./pages/TeamMember";
import WorkWithUs from "./pages/WorkWithUs"; 
import GetStarted from "./pages/GetStarted";
import Logistics from "./pages/Logistics";
import Recruitment from "./pages/Recruitment"; 
import OfficeSpace from "./pages/OfficeSpace";
import Retention from "./pages/Retention";
import Payroll from "./pages/payroll";
import BackOffice from "./pages/BackOffice";
import CustomerService from "./pages/CustomerService";
import ItOperations from "./pages/ItOperations";
import ExecutiveSupport from "./pages/ExecutiveSupport";
import EngineeringDesign from "./pages/EngineeringDesign";
import SoftwareDeveloper from "./pages/SoftwareDeveloper";
import ArticlePage from "./pages/ArticlePage";
import ArticleDetailPage from "./pages/ArticleDetailPage";
import ArticleNearshorePage from "./pages/ArticleNearshore";
import LifeAtStaffbridge from "./pages/LifeAtStaffbridge";
import OurOffices from "./pages/OurOffices";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
          <ScrollToTop /> {/* 👈 esto es lo que hace que vuelva al tope */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team/:id" element={<TeamMember />} />
        <Route path="/work-with-us" element={<WorkWithUs />} /> 
        <Route path="/get-started" element={<GetStarted />} /> 
        <Route path="/logistics" element={<Logistics />} />
        <Route path="/recruitment" element={<Recruitment />} /> 
        <Route path="/office-space" element={<OfficeSpace />} /> 
        <Route path="/retention" element={<Retention />} /> 
        <Route path="/payroll" element={<Payroll />} /> 
        <Route path="/back-office" element={<BackOffice />} /> 
        <Route path="/customer-service" element={<CustomerService />} /> 
        <Route path="/it-operation" element={<ItOperations />} /> 
        <Route path="/executive-support" element={<ExecutiveSupport />} /> 
        <Route path="/engineering-design" element={<EngineeringDesign />} /> 
        <Route path="/software-developer" element={<SoftwareDeveloper />} /> 
        <Route path="/article-page" element={<ArticlePage />} /> 
        <Route path="/articles/customer-service-growth" element={<ArticleDetailPage />} />
        <Route path="/articles/article-Near" element={<ArticleNearshorePage />} /> 
<Route path="/life-StaffBridge" element={<LifeAtStaffbridge />} />
<Route path="/our-offices" element={<OurOffices />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

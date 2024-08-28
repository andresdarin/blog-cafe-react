import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { LandingPage } from "../components/pages/LandingPage";
import { Article } from "../components/pages/Article";
import { AboutUs } from "../components/pages/AboutUs";
import { Contact } from "../components/pages/Contact";
import { Course } from "../components/pages/Course";

const Rutas = () => {

    return (
        <BrowserRouter>
            <Header />
            {/* Tu configuración de enrutamiento */}
            <section id="content" className="content">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/articles" element={<Article />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/course" element={<Course />} />
                    <Route path="*" element={
                        <div className="jumbo">
                            <h1>Error 404</h1>
                        </div>
                    } />
                </Routes>
            </section>
            <Footer />
        </BrowserRouter>
    );
};

export default Rutas;





{/* <Route path="/articles" element={<LandingPage />} />
                    <Route path="/about-us" element={<LandingPage />} />
                    <Route path="/contact" element={<LandingPage />} />
                    <Route path="/course" element={<LandingPage />} />
                    <Route path="*" element={
                        <div className="jumbo">
                            <h1>Error 404</h1>
                        </div>
                    } /> */}
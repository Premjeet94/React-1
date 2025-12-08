import React from "react";
import ReactDOM from "react-dom/client";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";








const AppLayout = () => {
  return (
    <div className="w-screen px-4 py-4 flex flex-col items-center ">
      <Header />
      <h1 className="font-medium text-4xl m-10">TOP FEATURED RESTAURANT</h1>
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

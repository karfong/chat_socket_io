import React from "react";
import assets from "../assets/assets";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl">
      {/* left */}
      <img src={assets.log_big} alt="" />
    </div>
  );
};

export default LoginPage;

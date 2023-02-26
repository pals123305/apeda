import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/footer/footer";
import Header from "../../Components/header/header";
import Navigation from "../../Components/navigation/navigation";
import Sidebar from "../../Components/sidebar/sidebar";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [isAuthenticate, setIsauthenticate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user_data");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setIsauthenticate(true);
    } else checkAuth();
  }, []);

  const checkAuth = () => {
    if (!isAuthenticate) {
      navigate("/login");
    }
  };

  return (
    <>
      {isAuthenticate ? (
        <div id="dash">
          <Sidebar />
          <Header />
          <Navigation />
          <Outlet />
          <Footer />
        </div>
      ) : (
        checkAuth()
      )}
    </>
  );
}

export default Dashboard;

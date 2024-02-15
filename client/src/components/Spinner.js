import React, { useState, useEffect } from "react";
import { useNavigate,useLocation } from "react-router-dom";

const Spinner = () => {
  const [count, setCount] = useState(3);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => prevValue - 1);
    }, 1000);

    // Cleanup function to clear interval when component unmounts or when count reaches 0
    return () => {
      clearInterval(interval);
    };
  }, []); // Empty dependency array to run effect only once on mount

  useEffect(() => {
    // Check if count has reached 0, then navigate to login
    if (count === 0) {
      navigate("/login",{state:location.pathname});
    }
  }, [count, navigate,location]);

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <h1 className="text-center">
        Redirecting to you in {count} {count === 1 ? "second" : "seconds"}
      </h1>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;

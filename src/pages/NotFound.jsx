import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-8xl font bold mb-8">Ooops!</h1>
          <p className="text-5xl mb8">404 page not Found</p>
          <Link to="/" className="btn btn-primary btn-lg mt-3">
            <FaHome className="mr-2" />
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;

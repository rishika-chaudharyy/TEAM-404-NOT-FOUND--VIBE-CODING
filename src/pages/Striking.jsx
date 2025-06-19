import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Pipe from "./Pipe";
import "../styles/striking.css";
import { Link } from "react-router-dom";

const StrikingPage = () => {
  return (
    <div className="striking-3d-container">
      <nav className="dashboard-navbar">
        <div className="logo">3D animation</div>
        <ul className="nav-links">
          <li>
            <Link to="/customer">Customer</Link>
          </li>
        </ul>
      </nav>

      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <OrbitControls />
        <Environment preset="sunset" />

        {/* Pipes */}
        <Pipe position={[-2, 0, 0]} />
        <Pipe position={[2, 1, -1]} />
        <Pipe position={[0, -2, 1]} />
      </Canvas>

      <div className="overlay-text">
        <h1>
          Here I have tried to animate the pipes somewhat like provided in the
          asset
        </h1>
        <p>Grab and play with the 3D pipe objects!</p>
        PLEASE CLICK ON <span>CUSTOMER </span> TO MOVE TO NEXT PAGE
      </div>
    </div>
  );
};

export default StrikingPage;

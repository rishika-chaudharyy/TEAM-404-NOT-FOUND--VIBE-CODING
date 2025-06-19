import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useDrag } from "@use-gesture/react";
import * as THREE from "three";

const Pipe = ({ position }) => {
  const meshRef = useRef();
  const [pos, setPos] = useState(() => new THREE.Vector3(...position));

  const bind = useDrag(({ offset: [x, y] }) => {
    setPos(new THREE.Vector3(x / 100, -y / 100, 0));
  });

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.lerp(pos, 0.2);
    }
  });

  return (
    <mesh ref={meshRef} {...bind()} castShadow>
      <cylinderGeometry args={[0.3, 0.3, 4, 32]} />
      <meshStandardMaterial color="#ffd166" />
    </mesh>
  );
};

export default Pipe;

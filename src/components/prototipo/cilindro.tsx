"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

interface CilindroProps {
  radiusTop: number;
  radiusBottom: number;
  height: number;
}

export default function Cilindro({
  radiusTop,
  radiusBottom,
  height,
}: CilindroProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  // const [radiusTop, setRadiusTop] = useState(1);
  // const [radiusBottom, setRadiusBottom] = useState(1);
  // const [height, setHeight] = useState(2);
  const [cylinder, setCylinder] = useState<THREE.Mesh | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      ((window.innerWidth * 0.8) / window.innerHeight) * 0.6,
      0.1,
      100,
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth * 0.8, window.innerHeight * 0.6);
    renderer.setClearColor(0xeecad1); // Establece el color de fondo
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.CylinderGeometry(
      radiusTop,
      radiusBottom,
      height,
      32,
    );
    const material = new THREE.MeshBasicMaterial({
      color: 0x0077ff,
      transparent: true,
      opacity: 0.5,
      wireframe: true,
    });
    const cylinder = new THREE.Mesh(geometry, material);
    scene.add(cylinder);

    camera.position.z = 5;

    const controls = new OrbitControls(camera, renderer.domElement);

    const animate = function () {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    setCylinder(cylinder);

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [radiusTop, radiusBottom, height]);

  useEffect(() => {
    if (cylinder) {
      cylinder.geometry.dispose();
      cylinder.geometry = new THREE.CylinderGeometry(
        radiusTop,
        radiusBottom,
        height,
        32,
      );
    }
  }, [radiusTop, radiusBottom, height]);

  return <div ref={mountRef} style={{ width: "600px", height: "400px" }} />;
}

/* eslint-disable prettier/prettier */
"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

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
  const [cylinder, setCylinder] = useState<THREE.Mesh | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      1, // Relación de aspecto será manejada por el contenedor padre
      0.1,
      100,
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth * 0.43, window.innerHeight * 0.62);
    renderer.setClearColor(0xbfe3dd); // Establece el color de fondo
    mountRef.current.appendChild(renderer.domElement);

    // Añadir luz ambiental
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Añadir luz direccional
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5).normalize();
    scene.add(directionalLight);

    const geometry = new THREE.CylinderGeometry(
      radiusTop,
      radiusBottom,
      height,
      32,
    );
    const material = new THREE.MeshLambertMaterial({
      color: 0xffffff,
      opacity: 0.5,
      side: THREE.DoubleSide,
      transparent: true,
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

  return (
    <div
      ref={mountRef}
      style={{ width: "600px", height: "400px", backgroundColor: "#BFE3DD" }}
    />
  );
}
"use client";
import React, { useRef, useMemo, Suspense } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";
import * as THREE from "three";

// Actual photo is 459x544px
const PHOTO_ASPECT = 459 / 544;
const CARD_HEIGHT = 2.3;
const CARD_WIDTH = CARD_HEIGHT * PHOTO_ASPECT;

function PhotoCard() {
  const groupRef = useRef(null);
  const texture = useLoader(THREE.TextureLoader, "/images/HIM.png");
  texture.colorSpace = THREE.SRGBColorSpace;

  const materials = useMemo(
    () => [
      new THREE.MeshStandardMaterial({ color: "#a855f7", roughness: 0.5 }), // right edge
      new THREE.MeshStandardMaterial({ color: "#a855f7", roughness: 0.5 }), // left edge
      new THREE.MeshStandardMaterial({ color: "#ec4899", roughness: 0.5 }), // top edge
      new THREE.MeshStandardMaterial({ color: "#ec4899", roughness: 0.5 }), // bottom edge
      new THREE.MeshStandardMaterial({ map: texture, roughness: 0.6 }), // front (photo)
      new THREE.MeshStandardMaterial({ color: "#18181b", roughness: 0.7 }), // back
    ],
    [texture]
  );

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.06;
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.12;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh material={materials}>
        <boxGeometry args={[CARD_WIDTH, CARD_HEIGHT, 0.06]} />
      </mesh>
      <mesh position={[0, 0, -0.06]}>
        <torusGeometry args={[CARD_HEIGHT * 0.66, 0.02, 8, 64]} />
        <meshStandardMaterial color="#c4b5fd" emissive="#c4b5fd" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

const AvatarScene = () => {
  return (
    <div className="w-full h-full cursor-grab active:cursor-grabbing touch-none">
      <Canvas camera={{ position: [0, 0, 4.4], fov: 42 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.7} />
        <pointLight position={[3, 3, 4]} intensity={35} color="#ec4899" />
        <pointLight position={[-3, -2, 3]} intensity={20} color="#a855f7" />
        <Suspense fallback={null}>
          <PhotoCard />
          <Sparkles count={30} scale={4} size={2} speed={0.3} color="#c4b5fd" />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.5}
          minAzimuthAngle={-0.6}
          maxAzimuthAngle={0.6}
          minPolarAngle={Math.PI / 2 - 0.4}
          maxPolarAngle={Math.PI / 2 + 0.4}
        />
      </Canvas>
    </div>
  );
};

export default AvatarScene;

"use client";
import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, MeshDistortMaterial, Sparkles, Float } from "@react-three/drei";

function AvatarHead() {
  const headRef = useRef(null);

  useFrame((state) => {
    if (headRef.current) {
      headRef.current.rotation.y += 0.002;
      headRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.05;
    }
  });

  return (
    <group ref={headRef}>
      {/* Head */}
      <mesh position={[0, 0.4, 0]}>
        <icosahedronGeometry args={[1.05, 1]} />
        <MeshDistortMaterial
          color="#a855f7"
          distort={0.22}
          speed={1.4}
          roughness={0.25}
          metalness={0.55}
        />
      </mesh>

      {/* Neck / shoulders */}
      <mesh position={[0, -1.15, 0]}>
        <coneGeometry args={[1.35, 1.5, 6, 1, true]} />
        <meshStandardMaterial
          color="#ec4899"
          wireframe
          transparent
          opacity={0.45}
        />
      </mesh>

      {/* Accent rings orbiting the head */}
      <mesh rotation={[Math.PI / 2.5, 0.3, 0]}>
        <torusGeometry args={[1.6, 0.015, 8, 64]} />
        <meshStandardMaterial color="#ec4899" emissive="#ec4899" emissiveIntensity={0.6} />
      </mesh>
      <mesh rotation={[Math.PI / 1.8, -0.4, 0]}>
        <torusGeometry args={[1.85, 0.012, 8, 64]} />
        <meshStandardMaterial color="#c4b5fd" emissive="#c4b5fd" emissiveIntensity={0.4} />
      </mesh>
    </group>
  );
}

const AvatarScene = () => {
  return (
    <div className="w-full h-full cursor-grab active:cursor-grabbing touch-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.55} />
        <pointLight position={[5, 5, 5]} intensity={40} color="#ec4899" />
        <pointLight position={[-5, -3, -5]} intensity={25} color="#a855f7" />
        <Suspense fallback={null}>
          <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.6}>
            <AvatarHead />
          </Float>
          <Sparkles count={35} scale={4.5} size={2} speed={0.35} color="#c4b5fd" />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1.8}
          rotateSpeed={0.6}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={(Math.PI * 2) / 3}
        />
      </Canvas>
    </div>
  );
};

export default AvatarScene;

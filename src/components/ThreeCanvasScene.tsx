"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, Sphere, MeshDistortMaterial, TorusKnot, Icosahedron } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Scene({ activeSection }: { activeSection: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const targetCamPos = useRef(new THREE.Vector3(0, 0, 5));
  const targetCamLook = useRef(new THREE.Vector3(0, 0, 0));
  const currentLookAt = useRef(new THREE.Vector3(0, 0, 0));

  useFrame((state, delta) => {
    if (activeSection === 0) { 
      targetCamPos.current.set(0, 0, 8);
      targetCamLook.current.set(0, 0, 0);
    } else if (activeSection === 1 || activeSection === 2) { 
      targetCamPos.current.set(4, 1, 6);
      targetCamLook.current.set(4, 0, 0);
    } else if (activeSection === 3 || activeSection === 4) { 
      targetCamPos.current.set(-4, 4, 5);
      targetCamLook.current.set(-4, 5, 0);
    } else { 
      targetCamPos.current.set(0, -6, 6);
      targetCamLook.current.set(0, -6, 0);
    }
    
    state.camera.position.lerp(targetCamPos.current, delta * 2.0);
    currentLookAt.current.lerp(targetCamLook.current, delta * 2.5);
    state.camera.lookAt(currentLookAt.current);

    if (groupRef.current) {
      groupRef.current.rotation.x += delta * 0.02;
      groupRef.current.rotation.y += delta * 0.03;
    }
  });

  return (
    <group ref={groupRef}>
      <Stars radius={100} depth={50} count={4000} factor={4} saturation={1} fade speed={1.5} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#00d4ff" />
      <directionalLight position={[-10, -10, -5]} intensity={2} color="#7c3aed" />
      <pointLight position={[0, -5, 0]} intensity={2} color="#f59e0b" />

      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1} position={[0, 0, -2]}>
        <Sphere args={[1, 64, 64]}>
          <MeshDistortMaterial color="#080c14" distort={0.3} speed={2} roughness={0.2} metalness={0.8} />
        </Sphere>
      </Float>

      <Float speed={2} rotationIntensity={2} floatIntensity={2} position={[4, 0, 0]}>
        <TorusKnot args={[1, 0.3, 128, 16]}>
          <MeshDistortMaterial color="#7c3aed" distort={0.2} speed={2} roughness={0.2} metalness={0.8} />
        </TorusKnot>
      </Float>

      <Float speed={1.5} rotationIntensity={1} floatIntensity={1} position={[-4, 5, -2]}>
        <Icosahedron args={[1.5, 0]}>
          <MeshDistortMaterial color="#00d4ff" distort={0.5} speed={3} roughness={0.1} metalness={1} wireframe />
        </Icosahedron>
      </Float>

      <Float speed={1} rotationIntensity={0.5} floatIntensity={1} position={[0, -6, -1]}>
        <TorusKnot args={[1.5, 0.4, 64, 8]}>
          <MeshDistortMaterial color="#f59e0b" distort={0.4} speed={1.5} roughness={0.4} metalness={0.5} wireframe />
        </TorusKnot>
      </Float>
    </group>
  );
}

export default function ThreeCanvasScene({ activeSection }: { activeSection: number }) {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 60 }} dpr={[1, 2]}>
      <Scene activeSection={activeSection} />
    </Canvas>
  );
}

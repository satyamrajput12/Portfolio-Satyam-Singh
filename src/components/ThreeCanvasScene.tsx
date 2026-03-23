"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, Icosahedron, Box, Octahedron, MeshDistortMaterial, Torus } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Scene({ activeSection }: { activeSection: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const targetCamPos = useRef(new THREE.Vector3(0, 0, 5));
  const targetCamLook = useRef(new THREE.Vector3(0, 0, 0));
  const currentLookAt = useRef(new THREE.Vector3(0, 0, 0));

  // Hacker / Cyberpunk colors
  const primaryColor = "#00ff41"; // Matrix Green
  const secondaryColor = "#008f11"; // Dark Green
  const accentColor = "#00b8ff"; // Cyber Blue

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
      groupRef.current.rotation.x += delta * 0.05;
      groupRef.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Dense, fast moving stars mimicking data bits */}
      <Stars radius={100} depth={50} count={6000} factor={3} saturation={1} fade speed={3} />
      
      <ambientLight intensity={0.2} color={secondaryColor} />
      <directionalLight position={[10, 10, 5]} intensity={3} color={primaryColor} />
      <directionalLight position={[-10, -10, -5]} intensity={2} color={accentColor} />
      <pointLight position={[0, -5, 0]} intensity={3} color={primaryColor} />

      {/* Main Core - Distorted wireframe sphere serving as a "data core" */}
      <Float speed={2} rotationIntensity={3} floatIntensity={1.5} position={[0, 0, -2]}>
        <Icosahedron args={[1.5, 2]}>
          <MeshDistortMaterial color={primaryColor} distort={0.5} speed={4} wireframe roughness={0} metalness={1} />
        </Icosahedron>
      </Float>

      {/* Floating Hacker Data Block */}
      <Float speed={3} rotationIntensity={4} floatIntensity={2} position={[5, 0, -1]}>
        <Box args={[1.5, 1.5, 1.5]}>
          <meshStandardMaterial color={primaryColor} wireframe opacity={0.6} transparent />
        </Box>
        <Box args={[1.2, 1.2, 1.2]}>
          <meshStandardMaterial color={accentColor} wireframe opacity={0.3} transparent />
        </Box>
      </Float>

      {/* Floating Cyber Gem / Node */}
      <Float speed={2} rotationIntensity={2} floatIntensity={1} position={[-5, 5, -2]}>
        <Octahedron args={[1.5, 0]}>
          <MeshDistortMaterial color={accentColor} distort={0.2} speed={5} roughness={0.1} metalness={1} wireframe />
        </Octahedron>
      </Float>

      {/* Data Node Cluster */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1.5} position={[0, -6, -1]}>
        <Icosahedron args={[1.5, 0]}>
          <meshStandardMaterial color={primaryColor} wireframe opacity={0.8} transparent />
        </Icosahedron>
        <Icosahedron args={[0.5, 0]}>
          <meshBasicMaterial color="#ffffff" />
        </Icosahedron>
      </Float>

      {/* Additional Wireframes to replace the Text that crashed on newer Three.js versions */}
      <Float speed={1.5} rotationIntensity={2} floatIntensity={2} position={[-3, 1, 1]}>
        <Torus args={[0.8, 0.2, 16, 32]}>
          <meshStandardMaterial color={primaryColor} wireframe opacity={0.5} transparent />
        </Torus>
      </Float>

      <Float speed={2.5} rotationIntensity={3} floatIntensity={1.5} position={[3, 4, 1]}>
        <Torus args={[0.6, 0.1, 8, 16]}>
          <meshStandardMaterial color={accentColor} wireframe opacity={0.6} transparent />
        </Torus>
      </Float>
      
      <Float speed={1} rotationIntensity={1.5} floatIntensity={2} position={[0, 3, -3]}>
        <Box args={[2, 0.1, 2]}>
          <meshStandardMaterial color={primaryColor} wireframe opacity={0.4} transparent />
        </Box>
      </Float>
    </group>
  );
}

export default function ThreeCanvasScene({ activeSection }: { activeSection: number }) {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 60 }} dpr={[1, 2]}>
      <fog attach="fog" args={['#080c14', 5, 25]} />
      <Scene activeSection={activeSection} />
    </Canvas>
  );
}

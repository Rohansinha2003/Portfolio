"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const ref = useRef<THREE.Points>(null);
  
  // Generate random coordinate positions in a sphere bounding volume
  const [positions] = useMemo(() => {
    const count = 250;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = THREE.MathUtils.randFloat(0, Math.PI * 2);
      const phi = THREE.MathUtils.randFloat(0, Math.PI);
      const r = THREE.MathUtils.randFloat(2, 6);
      
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return [pos];
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.03;
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.015;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#5EEAD4"
        transparent
        opacity={0.5}
        depthWrite={false}
        sizeAttenuation={true}
      />
    </points>
  );
}

function FloatingSphere({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  useFrame((state) => {
    if (groupRef.current) {
      // Automatic rotation
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.12;
      groupRef.current.rotation.x = state.clock.getElapsedTime() * 0.08;

      // Mouse Parallax inertia lerp
      const targetX = (mouse.current.x * viewport.width) / 2;
      const targetY = (mouse.current.y * viewport.height) / 2;

      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX * 0.2, 0.05);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY * 0.2, 0.05);
      
      // Fine-grained floating vertical offset
      groupRef.current.position.y += Math.sin(state.clock.getElapsedTime() * 1.5) * 0.003;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Faceted inner core */}
      <mesh scale={1.3}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#111827"
          roughness={0.2}
          metalness={0.9}
          flatShading={true}
          emissive="#8B5CF6"
          emissiveIntensity={0.2}
        />
      </mesh>
      {/* Outer structural wireframe overlay */}
      <mesh scale={1.31}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#5EEAD4"
          wireframe={true}
          transparent={true}
          opacity={0.3}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

export default function HeroScene() {
  const mouse = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
  };

  return (
    <div 
      className="w-full h-full min-h-[400px] md:min-h-[550px] relative select-none"
      onMouseMove={handleMouseMove}
    >
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        
        {/* Colorful scene spotlights to give nice volumetric visual highlights */}
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#5EEAD4" />
        <pointLight position={[-10, -10, -10]} intensity={1.2} color="#8B5CF6" />
        <spotLight position={[0, 8, 2]} intensity={1.5} color="#8B5CF6" />
        
        <FloatingSphere mouse={mouse} />
        <Particles />
      </Canvas>
    </div>
  );
}

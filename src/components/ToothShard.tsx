import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

export default function ToothShard() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  // Create a stylized, faceted tooth/crystal shape
  const geometry = new THREE.IcosahedronGeometry(1.5, 0);
  // Stretch it to look more like a tooth/shard
  geometry.scale(0.8, 1.4, 0.8);
  // Flatten the top slightly
  const positions = geometry.attributes.position;
  for (let i = 0; i < positions.count; i++) {
    const y = positions.getY(i);
    if (y > 0.5) {
      positions.setY(i, y * 0.8);
    }
    if (y < -0.5) {
      // Taper the bottom (roots)
      positions.setX(i, positions.getX(i) * 0.6);
      positions.setZ(i, positions.getZ(i) * 0.6);
    }
  }
  geometry.computeVertexNormals();

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
      <mesh ref={meshRef} geometry={geometry}>
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={2}
          chromaticAberration={0.5}
          anisotropy={0.1}
          distortion={0.2}
          distortionScale={0.3}
          temporalDistortion={0.1}
          iridescence={1}
          iridescenceIOR={1.5}
          iridescenceThicknessRange={[100, 400]}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transmission={1}
          roughness={0.1}
          ior={1.5}
          color="#e2e8f0"
          attenuationColor="#2dd4bf"
          attenuationDistance={3}
        />
      </mesh>
      
      {/* Ambient sparkles around the crystal */}
      <Sparkles count={40} scale={4} size={2} speed={0.4} opacity={0.5} color="#fbbf24" />
      <Sparkles count={40} scale={5} size={1.5} speed={0.2} opacity={0.3} color="#2dd4bf" />
    </Float>
  );
}

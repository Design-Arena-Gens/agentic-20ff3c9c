'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import VoxelBoy from '../components/VoxelBoy';

export default function Page() {
  return (
    <main style={{ height: '100vh', width: '100vw' }}>
      <Canvas dpr={[1, 1.5]} camera={{ position: [6, 6, 10], fov: 50 }}>
        <color attach="background" args={["#a0d8ff"]} />
        <hemisphereLight intensity={0.7} groundColor={'#4a5568'} />
        <directionalLight position={[5, 10, 5]} intensity={1} />
        <gridHelper args={[40, 40, '#cbd5e0', '#e2e8f0']} position={[0, -0.01, 0]} />
        <VoxelBoy position={[0, 0, 0]} />
        <OrbitControls enablePan={false} maxPolarAngle={Math.PI / 2.05} />
      </Canvas>
    </main>
  );
}

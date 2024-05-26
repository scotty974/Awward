"use client";
import { Canvas } from "@react-three/fiber";
export default function Home() {
  return (
    <main>
      <div className="h-screen w-full">
        <Canvas>
          <ambientLight intensity={0.5} />
          <mesh>
            <boxGeometry />
            <meshStandardMaterial />
          </mesh>
        </Canvas>
      </div>
    </main>
  );
}

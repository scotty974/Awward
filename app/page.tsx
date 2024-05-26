"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Alpine from "./components/car/Alpine";
export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="h-40 w-full">
        <Canvas>
          <ambientLight intensity={0.5} />
          <OrbitControls />
          <Alpine />
        </Canvas>
      </div>
    </main>
  );
}

import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/Addons.js"

export default function Alpine(){
    const gltf = useLoader(GLTFLoader, 'scene.gltf')
    return <primitive object={gltf.scene} />
}
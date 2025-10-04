import { Suspense, useMemo, type ReactElement } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, ContactShadows, Sky, Environment } from "@react-three/drei"

export type WindowStyle = "modern" | "classic"

export interface HouseSceneProps {
  baseColor: string
  roofColor: string
  accentColor: string
  floorCount: number
  hasGarage: boolean
  windowStyle: WindowStyle
}

const FLOOR_HEIGHT = 1.8
const HOUSE_WIDTH = 3.2
const HOUSE_DEPTH = 2.4
const ROOF_HEIGHT = 1.3
const GARAGE_WIDTH = 1.8
const GARAGE_HEIGHT = 1.4

const HouseBody = ({
  baseColor,
  roofColor,
  accentColor,
  floorCount,
  hasGarage,
  windowStyle,
}: HouseSceneProps) => {
  const bodyHeight = floorCount * FLOOR_HEIGHT
  const windowElements = useMemo(() => {
    const elements: ReactElement[] = []
    for (let floor = 0; floor < floorCount; floor++) {
      const levelY = 0.8 + floor * FLOOR_HEIGHT
      const windowWidth = windowStyle === "modern" ? 0.9 : 0.7
      const windowHeight = windowStyle === "modern" ? 1.0 : 0.8
      const windowOffsetX = windowStyle === "modern" ? 1.0 : 0.85
      const windowOffsetZ = HOUSE_DEPTH / 2 + 0.02

      const windowMaterialProps = {
        color: "#bae6fd",
        transparent: true,
        opacity: 0.85,
      }

      elements.push(
        <mesh key={`front-left-${floor}`} position={[-windowOffsetX, levelY, windowOffsetZ]} castShadow>
          <planeGeometry args={[windowWidth, windowHeight]} />
          <meshStandardMaterial {...windowMaterialProps} />
        </mesh>
      )
      elements.push(
        <mesh key={`front-right-${floor}`} position={[windowOffsetX, levelY, windowOffsetZ]} castShadow>
          <planeGeometry args={[windowWidth, windowHeight]} />
          <meshStandardMaterial {...windowMaterialProps} />
        </mesh>
      )
      elements.push(
        <mesh
          key={`back-left-${floor}`}
          position={[-windowOffsetX, levelY, -windowOffsetZ]}
          rotation={[0, Math.PI, 0]}
          castShadow
        >
          <planeGeometry args={[windowWidth, windowHeight]} />
          <meshStandardMaterial {...windowMaterialProps} />
        </mesh>
      )
      elements.push(
        <mesh
          key={`back-right-${floor}`}
          position={[windowOffsetX, levelY, -windowOffsetZ]}
          rotation={[0, Math.PI, 0]}
          castShadow
        >
          <planeGeometry args={[windowWidth, windowHeight]} />
          <meshStandardMaterial {...windowMaterialProps} />
        </mesh>
      )
    }
    return elements
  }, [floorCount, windowStyle])

  return (
    <group>
      {/* Main body */}
      <mesh position={[0, bodyHeight / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[HOUSE_WIDTH, bodyHeight, HOUSE_DEPTH]} />
        <meshStandardMaterial color={baseColor} />
      </mesh>

      {/* Roof */}
      <mesh position={[0, bodyHeight + ROOF_HEIGHT / 2 - 0.05, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>
        <coneGeometry args={[HOUSE_WIDTH * 0.9, ROOF_HEIGHT, 4]} />
        <meshStandardMaterial color={roofColor} />
      </mesh>

      {/* Chimney */}
      <mesh position={[HOUSE_WIDTH / 4, bodyHeight + ROOF_HEIGHT - 0.2, HOUSE_DEPTH / 6]} castShadow>
        <boxGeometry args={[0.35, 0.9, 0.35]} />
        <meshStandardMaterial color={accentColor} />
      </mesh>

      {/* Door */}
      <mesh position={[-HOUSE_WIDTH / 4, 0.85, HOUSE_DEPTH / 2 + 0.01]} castShadow>
        <boxGeometry args={[0.7, 1.7, 0.08]} />
        <meshStandardMaterial color={accentColor} />
      </mesh>
      <mesh position={[-HOUSE_WIDTH / 4 + 0.2, 0.9, HOUSE_DEPTH / 2 + 0.09]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="#fde68a" />
      </mesh>

      {/* Garage */}
      {hasGarage && (
        <mesh
          position={[HOUSE_WIDTH / 2 + GARAGE_WIDTH / 2 - 0.1, GARAGE_HEIGHT / 2, 0.2]}
          castShadow
          receiveShadow
        >
          <boxGeometry args={[GARAGE_WIDTH, GARAGE_HEIGHT, HOUSE_DEPTH * 0.8]} />
          <meshStandardMaterial color={baseColor} />
        </mesh>
      )}

      {/* Garage door */}
      {hasGarage && (
        <mesh
          position={[HOUSE_WIDTH / 2 + GARAGE_WIDTH / 2 - 0.1, 0.9, HOUSE_DEPTH * 0.8 / 2 + 0.18]}
          castShadow
        >
          <boxGeometry args={[GARAGE_WIDTH * 0.9, 1.5, 0.08]} />
          <meshStandardMaterial color={accentColor} />
        </mesh>
      )}

      {/* Windows */}
      {windowElements}
    </group>
  )
}

const GardenDetails = ({ accentColor }: { accentColor: string }) => {
  return (
    <group>
      {/* Path */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-HOUSE_WIDTH / 4, 0.01, HOUSE_DEPTH / 2 + 0.3]} receiveShadow>
        <planeGeometry args={[1.4, 2.4]} />
        <meshStandardMaterial color="#d1d5db" />
      </mesh>

      {/* Accent hedge */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, -HOUSE_DEPTH / 2 - 0.4]} receiveShadow>
        <planeGeometry args={[HOUSE_WIDTH + 2, 0.6]} />
        <meshStandardMaterial color={accentColor} opacity={0.6} transparent />
      </mesh>

      {/* Trees */}
      <group position={[-HOUSE_WIDTH, 0, -HOUSE_DEPTH]}>
        <mesh position={[0, 0.6, 0]} castShadow>
          <cylinderGeometry args={[0.12, 0.12, 1.2]} />
          <meshStandardMaterial color="#8d6e63" />
        </mesh>
        <mesh position={[0, 1.4, 0]} castShadow>
          <icosahedronGeometry args={[0.65, 1]} />
          <meshStandardMaterial color="#4ade80" />
        </mesh>
      </group>
      <group position={[HOUSE_WIDTH, 0, HOUSE_DEPTH]}>
        <mesh position={[0, 0.6, 0]} castShadow>
          <cylinderGeometry args={[0.12, 0.12, 1.2]} />
          <meshStandardMaterial color="#8d6e63" />
        </mesh>
        <mesh position={[0, 1.35, 0]} castShadow>
          <icosahedronGeometry args={[0.55, 1]} />
          <meshStandardMaterial color="#22c55e" />
        </mesh>
      </group>
    </group>
  )
}

export const HouseScene = (props: HouseSceneProps) => {
  return (
    <div className="w-full h-full">
      <Canvas
        className="rounded-2xl"
        shadows
        camera={{ position: [6, 5, 7], fov: 40, near: 0.1, far: 100 }}
      >
        <Suspense fallback={null}>
          <Sky sunPosition={[10, 20, 0]} turbidity={6} rayleigh={3} mieCoefficient={0.005} />
          <ambientLight intensity={0.55} />
          <directionalLight
            intensity={1.1}
            position={[8, 10, 5]}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <pointLight intensity={0.3} position={[-4, 5, -4]} />

          <group position={[0, 0, 0]}>
            <HouseBody {...props} />
            <GardenDetails accentColor={props.accentColor} />
          </group>

          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
            <planeGeometry args={[30, 30]} />
            <meshStandardMaterial color="#e2e8f0" />
          </mesh>

          <ContactShadows position={[0, 0, 0]} opacity={0.4} scale={12} blur={2.5} far={5} />
          <Environment preset="sunset" />
          <OrbitControls enableDamping maxPolarAngle={Math.PI / 2.1} minDistance={5} maxDistance={12} />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default HouseScene

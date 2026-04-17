"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

function BlackHoleBeam({ p0, p1, p2, p3, speed, lengthMultiplier, offset, radius, z }: any) {
  const materialRef = useRef<THREE.ShaderMaterial>(null)
  
  const curve = useMemo(() => {
    return new THREE.CubicBezierCurve3(
      new THREE.Vector3(p0[0], p0[1], z),
      new THREE.Vector3(p1[0], p1[1], z),
      new THREE.Vector3(p2[0], p2[1], z),
      new THREE.Vector3(p3[0], p3[1], z)
    )
  }, [p0, p1, p2, p3, z])

  useFrame((state, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value += delta
    }
  })

  // Shader para desenhar uma onda de plasma/luz que viaja ATRAVÉS do próprio tubo encurvado.
  // Isso garante 100% de precisão de dobra visual, sem parecer "estacas".
  const shader = useMemo(() => ({
    uniforms: {
      time: { value: offset },
      color: { value: new THREE.Color("#ffffff") },
      speed: { value: speed },      // O quão lento a luz viaja (0.05 etc)
      beamLength: { value: lengthMultiplier }, // O quão comprida a "cauda" do laser é ao longo do tubo (ex: 0.3 = 30%)
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float time;
      uniform vec3 color;
      uniform float speed;
      uniform float beamLength;
      varying vec2 vUv;
      void main() {
        // vUv.x vai de 0.0 (início do tubo na origeM) até 1.0 (fim do tubo lá no alto)
        
        // shiftedProgress garante que a luz nasça magicamente fora da tela e morra depois de passar
        float progress = fract(time * speed) * (1.0 + beamLength * 2.0) - beamLength;
        
        float dist = progress - vUv.x;
        float alpha = 0.0;
        
        // Desenha a cabeça do raio (dist = 0) e o rastro longo dele até (dist = beamLength)
        if (dist >= 0.0 && dist < beamLength) {
            float tailProgress = 1.0 - (dist / beamLength);
            // A cauda some como fogo
            alpha = pow(tailProgress, 3.0); 
        }

        // Reforço brilhante do Buraco Negro: ofusca mais quando a onda 
        // calha de passar pelo meio geográfico do tubo encurvado (Horizonte de eventos)
        float bendingGlow = max(0.0, 1.0 - abs(vUv.x - 0.5) * 3.0);
        float intensity = 0.4 + bendingGlow * 1.5;

        // Suaviando as beiradinhas laterais do tubo pra ele não parecer 3D poligonal
        float edge = sin(vUv.y * 3.14159);
        
        // Apaga sumariamente as pontas extremas do tubo pra nao vazar das bordas bruscamente
        float pathFade = smoothstep(0.0, 0.1, vUv.x) * smoothstep(1.0, 0.9, vUv.x);

        gl_FragColor = vec4(color * intensity, alpha * edge * pathFade);
      }
    `
  }), [speed, lengthMultiplier, offset])

  return (
    <mesh>
      <tubeGeometry args={[curve, 64, radius, 8, false]} />
      <shaderMaterial
        ref={materialRef}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        args={[shader]}
      />
    </mesh>
  )
}

function LightBeamParticles() {
  const streakCount = 120 // Dobramos a quantidade de feixes de luz
  
  const beams = useMemo(() => {
    return Array.from({ length: streakCount }, (_, i) => {
      const side = i % 2 === 0 ? 1 : -1 // Esquerda ou Direita
      
      const indexPerSide = Math.floor(i / 2)
      // lane=0 (Feixes do meio), lane=1 (Feixes super abertos de borda)
      const lane = indexPerSide / ((streakCount / 2) - 1)

      return {
        id: i,
        // *** 1 -> MUITO MAIS LENTOS ***
        speed: 0.01 + Math.random() * 0.02, // Extremamente lentos! Variam pra uns serem ainda mais lerdos
        offset: Math.random() * 1000, 
        lengthMultiplier: 0.2 + Math.random() * 0.3, // Cada feixe acende apenas entre 20% e 50% do tamanho total do trajeto 
        radius: 0.015 + Math.random() * 0.02, // Tubos sutilmentes fininhos pra lembrar fotóns
        z: (Math.random() - 0.5) * 6,

        // *** 2 -> A DOBRA CÚBICA (BURACO NEGRO) FIXADA PARA ELES CORREREM NELA ***
        // P0 (Nascem longe lateralmente embaixo)
        p0: [side * (12 + lane * 6), -10 + lane * 4], 
        // P1 (Correm forte para o meio, caindo um tiquinho no eixo gravidade)
        p1: [side * (4 + lane * 2), -5 + lane * 2], 
        // P2 (A Borda do Buraco Negro: Aperta brutalmente no meio)
        p2: [side * (0.2 + lane * 1.5), -1 + lane * 1.5], 
        // P3 (Catapultados pra cima como energia)
        p3: [side * (0.5 + lane * 2.5), 18]
      }
    })
  }, [])

  return (
    <group>
      {beams.map(b => (
        <BlackHoleBeam key={b.id} {...b} />
      ))}
    </group>
  )
}

function VolumetricBeams() {
  const beamsRef = useRef<THREE.Group>(null)
  const beamCount = 12

  const beams = useMemo(() => {
    return Array.from({ length: beamCount }, (_, i) => {
      const angle = ((i / beamCount) - 0.5) * Math.PI * 0.5
      const spread = Math.sin(angle) * 3
      return {
        position: [spread * 0.5, 0, -1] as [number, number, number],
        rotation: [0, 0, angle * 0.3] as [number, number, number],
        scale: [0.02 + Math.random() * 0.03, 8, 1] as [number, number, number],
        opacity: 0.03 + Math.random() * 0.05,
        speed: 0.5 + Math.random() * 0.5,
      }
    })
  }, [])

  useFrame((state) => {
    if (!beamsRef.current) return
    const time = state.clock.elapsedTime
    
    beamsRef.current.children.forEach((beam, i) => {
      const mesh = beam as THREE.Mesh
      const material = mesh.material as THREE.MeshBasicMaterial
      material.opacity = beams[i].opacity * (0.7 + Math.sin(time * beams[i].speed + i) * 0.3)
    })
  })

  return (
    <group ref={beamsRef} position={[0, 2, -2]}>
      {beams.map((beam, i) => (
        <mesh key={i} position={beam.position} rotation={beam.rotation} scale={beam.scale}>
          <planeGeometry args={[1, 1]} />
          <meshBasicMaterial
            color="#67e8f9"
            transparent
            opacity={beam.opacity}
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  )
}

function CentralGlow() {
  const glowRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!glowRef.current) return
    const time = state.clock.elapsedTime
    const material = glowRef.current.material as THREE.MeshBasicMaterial
    material.opacity = 0.15 + Math.sin(time * 0.3) * 0.05
  })

  return (
    <mesh ref={glowRef} position={[0, 3, -3]}>
      <circleGeometry args={[2, 64]} />
      <meshBasicMaterial
        color="#22d3ee"
        transparent
        opacity={0.15}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  )
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#000000"]} />
      <fog attach="fog" args={["#000000", 5, 15]} />
      <LightBeamParticles />
    </>
  )
}

export function LightBeamsBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Scene />
      </Canvas>
      {/* Gradient overlay for smoother blend */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />
    </div>
  )
}

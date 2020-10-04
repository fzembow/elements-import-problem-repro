import * as React from "react";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { Vector3 } from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";

const SVG = {
  email: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`,
};

interface IBoxProps {
  position: Vector3;
}

export const Box: React.FunctionComponent<any> = (props) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef<any>();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    if (!mesh.current) {
      return;
    }

    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  const loader = new SVGLoader();
  const svgData = loader.parse(SVG.email);
  console.log(svgData);

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <boxBufferGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
};

export const Container = () => (
  <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Box position={[-1.2, 0, 0]} />
    <Box position={[1.2, 0, 0]} />
  </Canvas>
);

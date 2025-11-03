import React from 'react';

function Box({ position, size, color }) {
  return (
    <mesh position={position} castShadow receiveShadow>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} roughness={0.9} metalness={0} />
    </mesh>
  );
}

export default function VoxelBoy(props) {
  const skin = '#f2c6a0';
  const hair = '#3b2b22';
  const shirt = '#2b6cb0';
  const pants = '#2d3748';
  const shoes = '#5a3825';
  const eye = '#111111';

  // Dimensions
  const shoeH = 0.6;
  const legH = 3.2;
  const torsoH = 3.6;
  const headS = 2.6;
  const armH = torsoH;

  // Y centers
  const yShoe = shoeH / 2; // ~0.3
  const yLeg = shoeH + legH / 2; // ~1.9
  const yTorso = shoeH + legH + torsoH / 2; // ~5.3
  const yHead = shoeH + legH + torsoH + headS / 2; // ~8.4

  // Width references
  const legW = 1.2;
  const legZ = 1.2;
  const legX = 0.8; // offset from center for legs

  const torsoW = 3.6;
  const torsoZ = 1.6;

  const armW = 1.0;
  const armZ = 1.2;
  const armX = (torsoW / 2) + (armW / 2); // ~2.3

  return (
    <group {...props}>
      {/* Shoes */}
      <Box position={[-legX, yShoe, 0.2]} size={[1.4, shoeH, 2.0]} color={shoes} />
      <Box position={[ legX, yShoe, 0.2]} size={[1.4, shoeH, 2.0]} color={shoes} />

      {/* Legs */}
      <Box position={[-legX, yLeg, 0]} size={[legW, legH, legZ]} color={pants} />
      <Box position={[ legX, yLeg, 0]} size={[legW, legH, legZ]} color={pants} />

      {/* Torso */}
      <Box position={[0, yTorso, 0]} size={[torsoW, torsoH, torsoZ]} color={shirt} />

      {/* Arms */}
      <Box position={[-armX, yTorso, 0]} size={[armW, armH, armZ]} color={skin} />
      <Box position={[ armX, yTorso, 0]} size={[armW, armH, armZ]} color={skin} />

      {/* Neck */}
      <Box position={[0, shoeH + legH + 0.3, 0]} size={[1.2, 0.4, 1.2]} color={skin} />

      {/* Head */}
      <Box position={[0, yHead, 0]} size={[headS, headS, headS]} color={skin} />

      {/* Hair cap and back */}
      <Box position={[0, yHead + (headS / 2) + 0.4, 0]} size={[headS, 0.8, headS]} color={hair} />
      <Box position={[0, yHead + 0.2, -(headS / 2) - 0.25]} size={[headS, 1.2, 0.5]} color={hair} />

      {/* Eyes */}
      <Box position={[-0.5, yHead + 0.2, (headS / 2) + 0.16]} size={[0.3, 0.3, 0.3]} color={eye} />
      <Box position={[ 0.5, yHead + 0.2, (headS / 2) + 0.16]} size={[0.3, 0.3, 0.3]} color={eye} />
    </group>
  );
}

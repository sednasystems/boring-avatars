import * as React from 'react';
import { getNumber, getRandomColor } from '../utilities';

const ELEMENTS = 64;
const SIZE = 80;
const colorToOpacity = {
  '#ffbf2e': '0.80', // yellow
  '#00b5c9': '0.90', // teal
  '#f55d2a': '0.95', // orange
  '#e10f8d': '0.95', // pink
};

function getOpacityFromColor(color) {
  return colorToOpacity[color] || '0.9';
}

function generateColors(name, colors) {
  const numFromName = getNumber(name);
  const range = colors && colors.length;

  const elementsProperties = Array.from({ length: ELEMENTS }, (_, i) => {
    const color = getRandomColor(numFromName % (i + 13), colors, range);
    const opacity = getOpacityFromColor(color);
    return {
      color: color,
      opacity: opacity,
    };
  });
  return elementsProperties;
}

const AvatarSedna = (props) => {
  const backgroundColor = props.colors[0];
  const properties = generateColors(props.name, props.colors.slice(1));

  return (
    <svg
      viewBox={'0 0 ' + SIZE + ' ' + SIZE}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
    >
      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={SIZE}
        height={SIZE}
      >
        <rect width={SIZE} height={SIZE} rx={props.square ?  undefined : SIZE * 2 } fill="white" />
      </mask>
      <g mask="url(#mask0)">
        <rect width={10} height={10} fill="blue" />
        <circle cx={40} cy={40} r={80} fill={backgroundColor} />
        <circle opacity={properties[9].opacity} cx={77} cy={64} r={25} fill={properties[9].color} />
        <circle opacity={properties[10].opacity} cx={35} cy={75} r={18} fill={properties[10].color} />
        <circle opacity={properties[0].opacity} cx={28} cy={16} r={3} fill={properties[0].color} />
        <circle opacity={properties[1].opacity} cx={0} cy={15} r={16} fill={properties[1].color} />
        <circle opacity={properties[2].opacity} cx={62} cy={84} r={15} fill={properties[2].color} />
        <circle opacity={properties[3].opacity} cx={46} cy={-1} r={5} fill={properties[3].color} />
        <circle opacity={properties[4].opacity} cx={28} cy={-10} r={22} fill={properties[4].color} />
        <circle opacity={properties[5].opacity} cx={-5} cy={70} r={27} fill={properties[5].color} />
        <circle opacity={properties[6].opacity} cx={25} cy={38} r={17} fill={properties[6].color} />
        <circle opacity={properties[7].opacity} cx={6} cy={47} r={17} fill={properties[7].color} />
        <circle opacity={properties[8].opacity} cx={0} cy={85} r={30} fill={properties[8].color} />
        <circle opacity={properties[12].opacity} cx={40} cy={33} r={7} fill={properties[12].color} />
        <circle opacity={properties[11].opacity} cx={38} cy={35} r={3} fill={properties[11].color} />
        <circle opacity={properties[13].opacity} cx={78} cy={13} r={16} fill={properties[13].color} />
        <circle opacity={properties[14].opacity} cx={34} cy={65} r={2} fill={properties[14].color} />
        <circle opacity={properties[15].opacity} cx={60} cy={60} r={4} fill={properties[15].color} />
        <circle opacity={properties[16].opacity} cx={56} cy={12} r={8} fill={properties[16].color} />
        <circle opacity={properties[17].opacity} cx={60} cy={30} r={6} fill={properties[17].color} />
        <circle opacity={properties[18].opacity} cx={60} cy={48} r={13} fill={properties[18].color} />
      </g>
    </svg>
  );
};

export default AvatarSedna;

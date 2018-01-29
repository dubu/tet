
import React from 'react';
import { Rect, Group, Text } from 'react-konva';
import gameConstants from '../gameConstants.js';

const { blockUnit } = gameConstants;

function getCoordinates(shape) {
    const coordinates = [];
    for (let i = 0; i < shape.length; i++) {
        for (let j = 0; j < shape[i].length; j++) {
            if (shape[i][j]) {
                coordinates.push({ x: j, y: i });
            }
        }
    }
    return coordinates;
}

function tetrominoGroup(xs, ys, color) {
    const arr = [];
    // console.log("xs==" + ys)
    for (let i = 0 ; i<xs.length; i++) {
        arr.push(<Rect key={i} width={blockUnit} height={blockUnit} x={xs[i]} y={ys[i]} fill={color} stroke="black" strokeWidth={5} />);
    }


    // arr.push(  <Text text="Try click on recttttt" />)
    // arr.push(<div>11</div>)
    // arr.push(<div>11</div>)
    // arr.push(<div>11</div>)
    //
    // console.log("arr == "+arr[0]);
    //
    //
    // return <Rect  width={blockUnit} height={blockUnit} x={10} y={10} fill={"black"} stroke="black" strokeWidth={5} />;

    // return  <div>aal<svg><rect  width="70" height="10" color="black" /></svg>ccc</div>;

    // return (<div> grorup</div>)

    return arr;

}



// const Tetromino = ({ shape, offsetX, offsetY, color }) => {
//     const coordinates = getCoordinates(shape);
//     const xs = coordinates.map((coord) => (coord.x * blockUnit) + offsetX);
//     const ys = coordinates.map((coord) => (coord.y * blockUnit) + offsetY);
//     return (
//         <Group>
//             {tetrominoGroup(xs, ys, color)}
//         </Group>
//     );
// };

const Tetromino = ({ shape, offsetX, offsetY, color }) => {
        const coordinates = getCoordinates(shape);
    const xs = coordinates.map((coord) => (coord.x * blockUnit) + offsetX);
    const ys = coordinates.map((coord) => (coord.y * blockUnit) + offsetY);
    return (
        <Group>
            {tetrominoGroup(xs, ys, color)}
        </Group>
    );
};

Tetromino.propTypes = {
    offsetX: React.PropTypes.number,
    offsetY: React.PropTypes.number,
    shape: React.PropTypes.array,
    color: React.PropTypes.string,
};

export default Tetromino;

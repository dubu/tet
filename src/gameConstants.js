const initialGrid = [];
for (let index = 0; index < 15; index++) {
    initialGrid.push([]);
}
for (let index = 0; index < 15; index++) {
    for (let count = 0; count < 25; count++) {
        initialGrid[index].push('grey');
    }
}

export default {initialGrid};

/*
8.6
Towers of Hanoi
*/

var towers = [];

function Tower() {
    this.stack = [];
}
Tower.prototype.put = function(e) {
    if (e > this.stack[this.stack.length - 1]) {
        return null;
    }
    return this.stack.push(e);
};
Tower.prototype.get = function(e) {
    return this.stack.pop();
};


function prepare(n, numberOfTowers) {
    // create towers
    for (var i = 0; i < numberOfTowers; i++) {
        towers[i] = new Tower();
    }
    // fill first tower
    for (var k = n; k > 0; k--) {
        towers[0].put(k);
    }
}

function hanoiMove(n, from, to, buffer) {
    if (n === 0) {
        return;
    }
    hanoiMove(n - 1, from, buffer, to);
    moveTop(from, to);
    hanoiMove(n - 1, buffer, to, from);
}

function moveTop(from, to) {
    towers[to].put(towers[from].get());
}

!function run(numberOfElements, numberOfTowers) {
    prepare(numberOfElements, numberOfTowers);
    hanoiMove(numberOfElements, 0, 2, 1);
}(10, 3);
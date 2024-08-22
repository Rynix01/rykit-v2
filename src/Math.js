function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

function permutation(n, r) {
  return factorial(n) / factorial(n - r);
}

function combination(n, r) {
  return factorial(n) / (factorial(r) * factorial(n - r));
}

function sin(degrees) {
  return Math.sin(degrees * (Math.PI / 180));
}

function cos(degrees) {
  return Math.cos(degrees * (Math.PI / 180));
}

function tan(degrees) {
  return Math.tan(degrees * (Math.PI / 180));
}

module.exports = {
  getRandomNumber,
  factorial,
  permutation,
  combination,
  sin,
  cos,
  tan,
};

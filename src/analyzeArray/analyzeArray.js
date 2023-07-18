export default function analyzeArray(arr) {
  return arr.length > 0
    ? {
        average:
          arr.reduce((accumulator, currentVal) => accumulator + currentVal, 0) /
          arr.length,
        max: arr.reduce((max, current) => max > current ? max : current, arr[0]),
        min: arr.reduce((min, current) => min < current ? min : current, arr[0]),
        length: arr.length,
      }
    : {
        average: undefined,
        max: undefined,
        min: undefined,
        length: 0,
      };
}

const input = [1, 2, 3, 4, 5];

// * Create custom operation fn to transform the input arr[]
function transform(i) {
  return i * 2;
}

// * Pass the custom operation method to the map() method
const ans = input.map(transform);

console.log(ans);

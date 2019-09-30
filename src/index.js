module.exports = function multiply(first, second) {
  let a = first.split('').reverse();
  let b = second.split('').reverse();
  let c = [];
  for(let x = 0; x < a.length; x++) {
    for(let y = 0; y < b.length; y++) {
      let i = a[x] * b[y];
      c[x + y];
      if(c[x + y]) {c[x + y] = c[x + y] + i}
      else{c[x + y] = i}
  }}
  for(let x = 0; x < c.length; x++) {
    let num = c[x] % 10;
    let snum = Math.floor(c[x] / 10);
    c[x] = num;
    if(c[x + 1]){c[x + 1] += snum}
    else if (snum != 0) {c[x + 1] = snum}
  }
return c.reverse().join('');
}
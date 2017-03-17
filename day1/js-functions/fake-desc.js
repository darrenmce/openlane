
let state = [];

function describe(label, testContainer) {
  state.push({
    desc: label,
    suite: testContainer
  });  
}


describe('some test suite', () => {
});

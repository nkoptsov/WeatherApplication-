function allBind(area, ...func) {
  func.forEach(element => {
    if (typeof area[element] === 'function') {
      area[element] = area[element].bind(area);
    } else {
      console.log('not a function');
    }
  });
}
export default allBind;

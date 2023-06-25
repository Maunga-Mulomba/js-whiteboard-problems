function valueConcat(array, obj) {
  return array.map((ele)=>{
    if(ele in obj) {
      return ele + obj[ele]
    } else {
      return ele
    }
  })
}

try {
  module.exports = valueConcat;
} catch (error) {
  module.exports = null;
}

// var recipes = new Object({});
// var obj = { prop: 1 }
// function updateObjectWithKeyAndValue(object, key, value) {
//      return Object.assign({}, obj, {[key]: value})
//
// };
// function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
//    object.prop2 = 2
//    return object;
// };
// var newObj = Object.assign({}, obj);
//
// function deleteFromObjectByKey(object, key) {
//   delete newObj[key];
//   return newObj;
// };
//
// function destructivelyDeleteFromObjectByKey(object, key) {
//   delete object[key]
//   return object;
// };
// var recipes = {};
function updateObjectWithKeyAndValue(object, key, value) {
     return Object.assign({}, object, {[key]: value})
};
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object;

}
function deleteFromObjectByKey(object, key){
   var newObj = Object.assign({}, object)
   delete newObj[key]
   return newObj
}
function destructivelyDeleteFromObjectByKey(object, key) {
   delete object[key]
   return object;
}

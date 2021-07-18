let facebookDiv = document.getElementById('.fb-block')
const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

console.log('Im working')

window.addEventListener('resize', logDimensions);

function logDimensions(e) {
  console.log(width)
  console.log(height)
}

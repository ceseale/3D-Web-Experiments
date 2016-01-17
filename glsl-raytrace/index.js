var canvas   = document.body.appendChild(document.createElement('canvas'))
var clear    = require('gl-clear')({ color: [0, 0, 0, 1] })
var gl       = require('gl-context')(canvas, render)
var glBuffer = require('gl-buffer')
var mat4     = require('gl-mat4')
var triangle = require('a-big-triangle')
var glShader = require('gl-shader')
var glslify  = require('glslify')
var now = require('right-now');
var mouse = require('mouse-position')();
var start = now();
var fit = require('canvas-fit');
fit.scale = 2.0;

var shader = glShader(gl,
  glslify('./shader.vert'),
  glslify('./shader.frag')
)

function render() {
  var width = gl.drawingBufferWidth
  var height = gl.drawingBufferHeight

  // Clear the screen and set the viewport before
  // drawing anything
  clear(gl)
  gl.viewport(0, 0, width, height)

  // Bind the shader
  shader.bind();
  // shader.attributes.position.pointer();
  shader.uniforms.iGlobalTime = (now() - start) / 1000;
  shader.uniforms.iResolution = [width, height, 1];
  shader.uniforms.iMouse = [mouse.x, canvas.height - mouse.y];
  triangle(gl);
}

// Resize the canvas to fit the screen
window.addEventListener('resize'
  , fit(canvas)
  , false
)
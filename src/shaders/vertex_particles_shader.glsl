
uniform float time;

varying vec2 vUv;
varying vec3 vPosition;
varying float vRandomColors;
uniform sampler2D texture1;

attribute float randoms;
attribute float randomColors;

float PI = 3.14159;


void main() {
    vUv = uv;
    vRandomColors = randomColors;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = (50.0 * randoms +0.5) * (1.0/ -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
}
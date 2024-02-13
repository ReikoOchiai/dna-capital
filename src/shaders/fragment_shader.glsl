varying vec2 vUv;
varying float vRandomColors;

uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;

void main() {

    float disc = 1.0 - smoothstep(-0.2, 0.5, length(gl_PointCoord - vec2(0.5)));

    vec3 finalColor = uColor1;
    if(vRandomColors>0.33 && vRandomColors<0.66){
        finalColor = uColor2;
    }
    if(vRandomColors>0.66){
        finalColor = uColor3;
    }
    gl_FragColor = vec4(finalColor, 1.0);
    gl_FragColor = vec4(disc, 0.,0., 1.0);

}

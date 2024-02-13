varying vec2 vUv;
varying float vRandomColors;

uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;

void main() {

    float alpha = 1.0 - smoothstep(-0.2, 0.5, length(gl_PointCoord - vec2(0.5)));
    alpha *= 0.5;
    vec3 finalColor = uColor1;
    if(vRandomColors>0.33 && vRandomColors<0.66){
        finalColor = uColor2;
    }
    if(vRandomColors>0.66){
        finalColor = uColor3;
    }

    float gradient = smoothstep(0.35, 0.5, vUv.y);
    gl_FragColor = vec4(finalColor, alpha*gradient);
    // gl_FragColor = vec4(alpha, 0.,0., alpha);

}

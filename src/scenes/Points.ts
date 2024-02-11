import * as THREE from 'three'

// src
import Experience from '../Experience.js'

// utils
import Resources from '../utils/Resources.js'

// shaders
import vertexShader from '../shaders/vertex_particles_shader.glsl'
import fragmentShader from '../shaders/fragment_shader.glsl'
import Time from '../utils/Time.js'

export default class Plane {
	experience: Experience
	scene: THREE.Scene
	resources: Resources
	geometry: THREE.BufferGeometry
	material: THREE.ShaderMaterial
	model: THREE.Points
	time: Time

	constructor() {
		this.experience = new Experience()
		this.scene = this.experience.scene
		this.resources = this.experience.resources
		this.time = this.experience.time
		this.setModel()
	}

	setModel() {
		this.geometry = new THREE.PlaneGeometry(1, 1, 10, 10)
		this.material = new THREE.ShaderMaterial({
			vertexShader: vertexShader,
			fragmentShader: fragmentShader,
			uniforms: {
				time: { value: 0 },
				resolution: { value: new THREE.Vector4() },
			},
			wireframe: false,
			side: THREE.DoubleSide,
		})
		this.model = new THREE.Points(this.geometry, this.material)
		this.scene.add(this.model)
	}

	resize() {}

	update() {
		this.material.uniforms.time.value = this.time?.elapsed / 1000
	}
}

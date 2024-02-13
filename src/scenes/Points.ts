import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

// src
import Experience from '../Experience.js'

// utils
import Resources from '../utils/Resources.js'

// shaders
import vertexShader from '../shaders/vertex_particles_shader.glsl'
import fragmentShader from '../shaders/fragment_shader.glsl'
import Time from '../utils/Time.js'

type Parameters = {
	rotationSpeed: number
	size: number
}
export default class Points {
	experience: Experience
	scene: THREE.Scene
	resources: Resources
	geometry: THREE.BufferGeometry
	material: THREE.ShaderMaterial
	dnaModel: THREE.Points
	parameters: Parameters

	time: Time
	loader: GLTFLoader
	model: THREE.Group
	numbers: number
	constructor() {
		this.experience = new Experience()
		this.scene = this.experience.scene
		this.resources = this.experience.resources
		this.time = this.experience.time
		this.model = this.resources.items.gltfModel.dnaModel.scene

		this.parameters = {
			rotationSpeed: 0.0005,
			size: 1,
		}

		this.setModel()
	}

	setModel() {
		this.geometry = (this.model.children[0] as THREE.Mesh).geometry
		this.geometry.center()
		// this.geometry = new THREE.PlaneGeometry(1, 1, 10, 10)

		this.material = new THREE.ShaderMaterial({
			vertexShader: vertexShader,
			fragmentShader: fragmentShader,
			uniforms: {
				uColor1: { value: new THREE.Color(0x612574) },
				uColor2: { value: new THREE.Color(0x293583) },
				uColor3: { value: new THREE.Color(0x1954ec) },
				time: { value: 0 },
				resolution: { value: new THREE.Vector4() },
			},
			wireframe: false,
			side: THREE.DoubleSide,
			depthTest: false,
			depthWrite: false,
			blending: THREE.AdditiveBlending,
		})

		this.numbers = this.geometry.attributes.position.array.length
		let randoms = new Float32Array(this.numbers / 3)
		let randomColors = new Float32Array(this.numbers / 3)

		for (let i = 0; i < this.numbers / 3; i++) {
			randoms.set([Math.random()], i)
			randomColors.set([Math.random()], i)
		}

		this.geometry.setAttribute('randoms', new THREE.BufferAttribute(randoms, 1))
		this.geometry.setAttribute(
			'randomColors',
			new THREE.BufferAttribute(randomColors, 1)
		)

		this.dnaModel = new THREE.Points(this.geometry, this.material)
		this.scene.add(this.dnaModel)
	}

	animateGeometry() {
		this.dnaModel.rotation.y = this.time.elapsed / 10000
	}

	resize() {}

	update() {
		this.material.uniforms.time.value = this.time?.elapsed / 100
		this.animateGeometry()
	}
}

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

import ModelBaker from '../helpers/ModelBaker.js'
// import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { assets } from '../constants/assets.js'

type Parameters = {
	rotationSpeed: number
	size: number
}
export default class Plane {
	experience: Experience
	scene: THREE.Scene
	resources: Resources
	geometry: THREE.BufferGeometry
	material: THREE.ShaderMaterial
	points: THREE.Points
	parameters: Parameters
	bakedModel: ModelBaker
	time: Time
	loader: GLTFLoader
	model: THREE.Group

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
		})
		this.points = new THREE.Points(this.geometry, this.material)
		this.scene.add(this.points)
	}

	resize() {}

	update() {
		this.material.uniforms.time.value = this.time?.elapsed / 1000
	}
}

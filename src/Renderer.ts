import * as THREE from 'three'

// src
import Experience from './Experience.ts'
import Camera from './Camera.ts'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js'
// utils
import Sizes from './utils/Sizes.ts'
import Debug from './utils/Debug.ts'
type BloomEffectSettings = {
	threshold: number
	strength: number
	radius: number
}
export default class Renderer {
	experience: Experience
	sizes: Sizes
	scene: THREE.Scene
	canvas: HTMLElement | null
	camera: Camera
	renderer: THREE.WebGLRenderer
	renderScene: RenderPass
	composer: EffectComposer
	bloomPass: UnrealBloomPass
	settings: BloomEffectSettings
	debug: Debug

	constructor() {
		this.experience = new Experience()
		this.sizes = this.experience.sizes
		this.scene = this.experience.scene
		this.canvas = this.experience.canvas
		this.camera = this.experience.camera
		this.debug = this.experience.debug

		this.settings = {
			threshold: 0.001,
			strength: 0.8,
			radius: 0.10,
		}
		this.setRenderer()
		this.initpost()
	}
	initpost() {
		// GUI settings
		// window.location.hash = 'debug' // Activate GUI
		// if (this.debug.active) {
		// 	this.debug.gui
		// 		.add(this.settings, 'threshold', 0, 1)
		// 		.name('Bloom threshold')
		// 		.step(0.0001)
		// 		.onChange((value) => (this.bloomPass.threshold = value))
		// 	this.debug.gui
		// 		.add(this.settings, 'strength', 0, 10)
		// 		.name('Bloom strength')
		// 		.step(0.001)
		// 		.onChange((value) => (this.bloomPass.strength = value))
		// 	this.debug.gui
		// 		.add(this.settings, 'radius', 0, 10)
		// 		.name('Bloom radius')
		// 		.step(0.001)
		// 		.onChange((value) => (this.bloomPass.radius = value))
		// }

		this.renderScene = new RenderPass(this.scene, this.camera.perspectiveCamera)

		this.bloomPass = new UnrealBloomPass(
			new THREE.Vector2(window.innerWidth, window.innerHeight),
			1.5,
			0.9,
			0.85
		)
		this.bloomPass.threshold = this.settings.threshold
		this.bloomPass.strength = this.settings.strength
		this.bloomPass.radius = this.settings.radius

		this.composer = new EffectComposer(this.renderer)
		this.composer.addPass(this.renderScene)
		this.composer.addPass(this.bloomPass)
	}
	setRenderer() {
		this.renderer = new THREE.WebGLRenderer({
			canvas: this.canvas,
			antialias: true,
			alpha: true,
		})

		this.renderer.outputColorSpace = THREE.SRGBColorSpace
		this.renderer.toneMapping = THREE.CineonToneMapping
		this.renderer.toneMappingExposure = 1.75
		this.renderer.shadowMap.enabled = true
		this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
		this.renderer.setSize(this.sizes.width, this.sizes.height)

		this.renderer.setPixelRatio(this.sizes.pixelRatio)
		this.renderer.setClearColor(0x000000, 1)
	}

	resize() {
		this.renderer.setSize(this.sizes.width, this.sizes.height)
		this.renderer.setPixelRatio(this.sizes.pixelRatio)
	}

	update() {
		// this.renderer.render(this.scene, this.camera.perspectiveCamera)
		this.composer.render()
	}
}

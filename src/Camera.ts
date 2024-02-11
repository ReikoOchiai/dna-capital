import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// src
import Experience from './Experience.ts'

// utils
import Sizes from './utils/Sizes.ts'

export default class Camera {
	experience: Experience
	sizes: Sizes
	scene: THREE.Scene
	canvas: HTMLElement | null
	perspectiveCamera: THREE.PerspectiveCamera
	orthographicCamera: THREE.OrthographicCamera
	orbitControls: OrbitControls

	constructor() {
		this.experience = new Experience()
		this.sizes = this.experience.sizes
		this.scene = this.experience.scene
		this.canvas = this.experience.canvas

		this.createPerspectiveCamera()
		this.createOrthographicCamera()
		this.setOrbitControls()
	}

	createPerspectiveCamera() {
		this.perspectiveCamera = new THREE.PerspectiveCamera(
			70,
			this.sizes.aspect,
			0.01,
			1000
		)
		this.perspectiveCamera.position.x = 0
		this.perspectiveCamera.position.y = 0
		this.perspectiveCamera.position.z = 2

		const helper = new THREE.CameraHelper(this.perspectiveCamera)
		this.scene.add(helper)
		this.scene.add(this.perspectiveCamera)
	}

	createOrthographicCamera() {
		this.orthographicCamera = new THREE.OrthographicCamera(
			(-this.sizes.aspect * this.sizes.frustrum) / 2,
			(this.sizes.aspect * this.sizes.frustrum) / 2,
			this.sizes.frustrum / 2,
			-this.sizes.frustrum / 2,
			-100,
			100
		)

		this.scene.add(this.orthographicCamera)
	}

	setOrbitControls() {
		this.orbitControls = new OrbitControls(this.perspectiveCamera, this.canvas)
		this.orbitControls.enableDamping = true
		this.orbitControls.enableZoom = true
		this.orbitControls.enablePan = true
		this.orbitControls.maxPolarAngle = Math.PI
		this.orbitControls.target.set(0, 0, 0)
	}

	resize() {
		this.perspectiveCamera.aspect = this.sizes.aspect
		this.perspectiveCamera.updateProjectionMatrix()

		this.orthographicCamera.left =
			(-this.sizes.aspect * this.sizes.frustrum) / 2
		this.orthographicCamera.right =
			(this.sizes.aspect * this.sizes.frustrum) / 2
		this.orthographicCamera.top = this.sizes.frustrum / 2
		this.orthographicCamera.bottom = -this.sizes.frustrum / 2
		this.orthographicCamera.updateProjectionMatrix()
	}

	update() {
		this.orbitControls.update()
	}
}

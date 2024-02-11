import Experience from '../Experience.ts'

// utils
import Resources from '../utils/Resources.ts'

// scenes
import Environment from './Environment.ts'

import Points from './Points.ts'
export default class World {
	experience: Experience
	scene: THREE.Scene
	resources: Resources
	environment: Environment
	points: Points

	constructor() {
		this.experience = new Experience()
		this.scene = this.experience.scene
		this.resources = this.experience.resources

		this.resources.on('ready', () => {
			this.environment = new Environment()
			this.points = new Points()
		})
	}

	resize() {
		if (this.environment) {
			this.environment.resize()
		}
		if (this.points) {
			this.points.resize()
		}
	}

	update() {
		if (this.environment) {
			this.environment.update()
		}
		if (this.points) {
			this.points.update()
		}
	}
}

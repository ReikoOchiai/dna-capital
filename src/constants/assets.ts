export type Asset = {
	name: string
	type:
		| 'gltfModel'
		| 'texture'
		| 'cubeTexture'
		| 'audio'
		| 'video'
		| 'font'
	path: string
}

export const assets: Asset[] = [
	{
		name: 'dnaModel',
		type: 'gltfModel',
		path: 'models/dna.glb',
	},
]

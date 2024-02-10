<template>
    <head>
		<meta charset="utf-8">
		<title>My first three.js app</title>
		
	</head>
    <div>
       

    </div>
    
</template>

<script setup>




import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( {color: 0x80ff09, transparent: true, opacity: 0.5 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
renderer.render( scene, camera );







import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
const loader = new GLTFLoader();


loader.load( 'Assembly.gltf', function ( gltf ) {

	scene.add( gltf.scene );
	renderer.render( scene, camera )

}, undefined, function ( error ) {

	console.error( error );

} );

camera.position.z = 5;


function animate() {
	requestAnimationFrame( animate );

	//cube.rotation.x += 0.01;
	//cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}

//animate();

renderer.render( scene, camera );

console.log('/starscape-frontend\\public\\JUT.gltf')

</script>

<style scoped>

			body { margin: 0; }
		
</style>
<template>
    <head>
		<meta charset="utf-8">
		<title>My first three.js app</title>
		
	</head>
    <div>
       

    </div>
    
</template>

<script setup>

/* 


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


loader.load( '\public\Assembly1.gltf', function ( gltf ) {

	scene.add( gltf.scene );
	renderer.render( scene, camera )
	gltf.animations; // Array<THREE.AnimationClip>
	gltf.scene; // THREE.Group
	gltf.scenes; // Array<THREE.Group>
	gltf.cameras; // Array<THREE.Camera>
	gltf.asset; // Object
}, undefined, function ( error ) {

	console.error( error );
	console.trace();

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


 */

// Import necessary modules
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Create a scene
var scene = new THREE.Scene();
//scene.background = new THREE.Color(0xCCCCCC);

// Create a camera
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);

camera.position.set(10, 10, 20);



const controls = new OrbitControls(camera, document.body);
controls.enableDamping = true;
controls.enablePan = false;
controls.minDistance = 5;
controls.maxDistance = 100;
controls.maxPolarAngle = 0.5;
controls.maxPolarAngle = 1.5;
controls.autoRotate = false;
controls.target = new THREE.Vector3(0, 1, 0);
controls.update();


// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;




const groundGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
groundGeometry.rotateX(-Math.PI / 2);
const groundMaterial = new THREE.MeshBasicMaterial({ 
	color: 0x555555 ,
	side: THREE.DoubleSide
});

const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.receiveShadow = true;

scene.add(ground);

const spotLight = new THREE.SpotLight(0xffffff, 3000, 1000, 0.2, 0.5);
spotLight.position.set(0, 100, 0);
spotLight.castShadow = true;
//Artifacting Fixer
//spotLight.shadow.bias = -0.0001;
scene.add(spotLight);


// Load the .gltf model

const loader = new GLTFLoader().setPath('public/');
loader.load('Assembly1.gltf', function (gltf) {
	const mesh = gltf.scene;

	mesh.traverse((child) => {
		if (child.isMesh) {
			child.castShadow = true;
			child.receiveShadow = true;
		}
	});


	mesh.position.set(0, 0, 0);
	console.log(mesh);
    scene.add(mesh);

}, undefined, function (error) {
    console.error(error);
	console.trace();	
});

// Create a render loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
	controls.update();
}
animate();
//renderer.render(scene, camera);





</script>

<style scoped>
			
			body { margin: 0; 
				height: 20vh;
				width: 20vw;
			}
			
		
</style>
<template>
  <div id="threejs-container"></div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

let animationId;

onMounted(() => {
  // Get the container
  const container = document.getElementById('threejs-container');

  // Create a scene
  const scene = new THREE.Scene();
  //const textureLoader = new THREE.TextureLoader();
//const backgroundTexture = textureLoader.load('/space-safari-background.png');
//scene.background = backgroundTexture;
  scene.background = new THREE.Color(0x000000);
  scene.fog = new THREE.Fog(0x404040, 1, 1000); // Set fog color and distance

  // Create a camera
  const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 1, 1000);
  camera.position.set(20, 20, 20);
  camera.lookAt(0, 0, 0);

  // Create a renderer
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  // Append the renderer to the container
  container.appendChild(renderer.domElement);

  // Add OrbitControls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.enableZoom = true;
  controls.enableRotate = true;
  controls.enablePan = true;
  controls.autoRotate = true;

  // Add a plane
  //const planeGeometry = new THREE.PlaneGeometry(50, 50);
 // const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x808080, side: THREE.DoubleSide });
  //const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  //plane.rotation.x = -Math.PI / 2;
  //plane.receiveShadow = true;
  //scene.add(plane);

  // Add lights
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(10, 10, 10);
  light.castShadow = true;
  scene.add(light);

  const ambientLight = new THREE.AmbientLight(0x404040);
  scene.add(ambientLight);

  // Load the GLTF model
  const loader = new GLTFLoader();
  loader.load('Models/CAD Model.gltf', (gltf) => {
    const model = gltf.scene;
    model.position.set(0, 0, -7.5); // Center the model
	model.scale.set(100, 100, 100); // Scale the model down
    model.castShadow = true; // Enable shadows for the model
    model.receiveShadow = true; // Allow the model to receive shadows
	model.rotation.x = - Math.PI /2 ; // Rotate 90 degrees around the Y-axis
    scene.add(model);
	console.log('Model loaded successfully:', gltf);
  }, undefined, (error) => {
    console.error('An error occurred while loading the model:', error);
  });

  // Add a resize listener
  window.addEventListener('resize', () => {
    renderer.setSize(container.clientWidth, container.clientHeight);
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
  });

  // Animation loop
  function animate() {
    animationId = requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  animate();

  // Cleanup on unmount
  onUnmounted(() => {
    cancelAnimationFrame(animationId);
    renderer.dispose();
    scene.clear();
    container.removeChild(renderer.domElement);
  });
});
</script>

<style scoped>
#threejs-container {
  width: 100%;
  height: 60vh;
  margin: 0 auto;
  border: 2px solid #ffffff;
  position: relative;
  overflow: hidden;
  background-color: #000;
}
</style>
import './style.css'

import * as THREE from 'three';

import { AmbientLight } from 'three';

// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(3);

const geometry = new THREE.DodecahedronGeometry( 1, 1 );
const material = new THREE.MeshStandardMaterial( { color: 0xFF6347, wireframe: true} );
const torus = new THREE.Mesh( geometry, material );

scene.add(torus)
torus.position.setX(1);

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(5,5,5)

const ambientLight = new THREE.AmbientLight(0xffffff)
scene.add(pointLight, ambientLight)

// const controls = new OrbitControls(camera, renderer.domElement);

renderer.setClearColor( 0xffffff, 0);
// const spaceTexture = new THREE.TextureLoader().load('space.jpeg')
// scene.background = spaceTexture;

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  camera.position.y = t * 0.007;
}

document.body.onscroll = moveCamera;


function animate() {
  requestAnimationFrame( animate );
  // torus.rotation.x += 0.01;
  torus.rotation.y += 0.01;
  // torus.rotation.z += 0.01;

  // controls.update();

  renderer.render( scene, camera );
}

animate()
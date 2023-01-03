import * as THREE from 'three';

// Set up the scene, camera, and renderer
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

camera.position.z = 5;

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Create the ball and add it to the scene
var ballGeometry = new THREE.SphereGeometry( 1, 16, 16 );
var ballMaterial = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
var ball = new THREE.Mesh( ballGeometry, ballMaterial );
scene.add( ball );

// Animate the ball
function animate(event) {
  requestAnimationFrame( animate );

  // Get the device's orientation
  var alpha = event.alpha;
  var beta = event.beta;
  var gamma = event.gamma;

  // Use the orientation to move the ball
  ball.position.x = gamma / 90;
  ball.position.y = beta / 90;

  // Render the scene
  renderer.render( scene, camera );
}

// Start listening for deviceorientation events
window.addEventListener( 'deviceorientation', animate );

var camera, scene, light, renderer, controls;
var geometry, material, mesh;
var octahedron1, octahedronGeometry1, octahedron2, octahedronGeometry2;

function init(){
   scene = new THREE.Scene();
   var width = window.innerWidth;
   var height = window.innerHeight;

   camera = new THREE.PerspectiveCamera(45, width/height, 100, 25000);
   camera.position.set(0, 200, 700);
   scene.add(camera);

   light = new THREE.DirectionalLight(0xffffff, 1);
   light.position.set(1, 1, 1);
   scene.add(light);

   var textureLoader = new THREE.TextureLoader();

   textureLoader.load("images/nebula.jpg", function(texture){
	material = new THREE.MeshStandardMaterial({map: texture});

	octahedronGeometry1 = new THREE.OctahedronGeometry(100, 0);
	octahedron1 = new THREE.Mesh(octahedronGeometry1, material);
	octahedron1.position.y = 100;
	octahedron1.castShadow = true;
	scene.add(octahedron1);

	octahedronGeometry2 = new THREE.OctahedronGeometry(100, 0);
	octahedron2 = new THREE.Mesh(octahedronGeometry2, material);
	octahedron2.position.y = 100;
	octahedron2.rotation.y = Math.PI / -2;
	octahedron2.castShadow = true;
	scene.add(octahedron2);
   });

   textureLoader.load("images/BlueSpace.jpg", function(texture){
	var planeMaterial = new THREE.MeshStandardMaterial({map: texture, side: THREE.DoubleSide});
	var planeGeometry = new THREE.PlaneGeometry(1000, 1000, 10, 10);
	var plane = new THREE.Mesh(planeGeometry, planeMaterial);
	plane.rotation.x = Math.PI / -2;
	plane.receiveShadow = true;
	scene.add(plane);
   });

   renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
   renderer.setSize(width, height);
   renderer.shadowMap.enabled = true;

   controls = new THREE.OrbitControls(camera, renderer.domElement);

   document.body.appendChild(renderer.domElement);
}

function animate(){
   requestAnimationFrame(animate);

   octahedron1.rotation.y += 0.01;
   octahedron2.rotation.z += 0.01;

   renderer.render(scene, camera);
   controls.update();
}

init();
animate();
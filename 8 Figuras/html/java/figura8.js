var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
    75, window.innerWidth/window.innerHeight, 0.5, 1000
);
camera.position.z = 5;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Cube

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshNormalMaterial({color: 0x00aaff});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

var geometry1 = new THREE.BoxGeometry(1, 1, 1);
var material1 = new THREE.MeshNormalMaterial({color: 0x00aaff, wireframe : true});
var cube1 = new THREE.Mesh(geometry1, material1);
scene.add(cube1);

var geometry2 = new THREE.BoxGeometry(1, 1, 1);
var material2 = new THREE.MeshNormalMaterial({color: 0x00aaff});
var cube2 = new THREE.Mesh(geometry2, material2);
scene.add(cube2);

var geometry3 = new THREE.BoxGeometry(1, 1, 1);
var material3 = new THREE.MeshNormalMaterial({color: 0x00aaff, wireframe : true});
var cube3 = new THREE.Mesh(geometry3, material3);
scene.add(cube3);

cube.position.x = 1;
cube1.position.y = -2;
cube2.position.x = -1;
cube3.position.y = 2;

//Movimiento con raton
/* var control = new THREE.OrbitControls( camera, renderer.domElement);
control.minDistance = 2;
control.maxDistance = 5; */

/* var control = new THREE.PointerLockControls( camera, renderer.domElement );
document.getElementById('btnplay').onclick = () => {
    control.lock();} */
    

var controls = new THREE.DragControls([cube, cube1, cube2, cube3], camera, renderer.domElement)

function animate(){
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube1.rotation.x += 0.01;
    cube1.rotation.y += 0.01;
    cube2.rotation.x += 0.01;
    cube2.rotation.y += 0.01;
    cube3.rotation.x += 0.01;
    cube3.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();


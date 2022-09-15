//Escenario
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x4E4E4E); 
//scene.fog = new THREE.Fog(0xfffffff, 3, 6);


//Imagen fondo
/*var loader = new  THREE.TextureLoader();
loader.load(
    '../img/Fondo1.jpeg', function(texture){
        scene.background = texture;
    }
    );*/

//Cámara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//Render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Geometría

const geometry = new THREE.BoxGeometry( 1, 1, 1 );

const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load('../texturas/luna.jpg');

const material = new THREE.MeshMatcapMaterial( );
material.matcap = matcap;
material.flatShading =  true;

const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

//OrbiControl

var control = new THREE.OrbitControls( camera, renderer.domElement);

//line

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
scene.add( line );

const material2 = new THREE.LineBasicMaterial({
	color: 0x000000
});

camera.position.z = 5;


//Animacion
function animate() {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.1;
    line.rotation.x += 0.01;
    line.rotation.y += 0.01;
    line.rotation.z += 0.1;


    renderer.render( scene, camera );
}
animate();
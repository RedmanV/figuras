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

const geometry = new THREE.CylinderGeometry( 5, 5, 20, 32 );

const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load('../texturas/madera.jpg');

const material = new THREE.MeshMatcapMaterial( );
material.matcap = matcap;
material.flatShading =  true;

const cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );

//line

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
scene.add( line );

const material2 = new THREE.LineBasicMaterial({
	color: 0x000000
});

camera.position.z = 22;


//Animacion
function animate() {
    requestAnimationFrame( animate );
    cylinder.rotation.x += 0.02;
    cylinder.rotation.y += 0.01;
    cylinder.rotation.z += 0.02;
    line.rotation.x += 0.02;
    line.rotation.y += 0.01;
    line.rotation.z += 0.02;

    renderer.render( scene, camera );
}
animate();
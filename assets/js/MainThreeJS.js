import * as THREE from "https://unpkg.com/three@0.126.1/build/three.module.js";
import { OrbitControls } from "https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://unpkg.com/three@0.126.1/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "https://unpkg.com/three@0.126.1/examples/jsm/loaders/DRACOLoader.js";

// scene
const scene = new THREE.Scene();

// 카메라 설정
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(5, 5, 5);

// 렌더러 생성
const canvas = document.getElementById('MainThreeD');
const renderer = new THREE.WebGLRenderer({ 
    canvas: canvas,
    antialias: true
 });
renderer.setSize(canvas.clientWidth + 4, canvas.clientHeight + 4);
renderer.setClearColor(0xFFFFFF, 1);

const controls = new OrbitControls(camera, renderer.domElement);
controls.minDistance = 0.1;
controls.maxDistance = 500;

const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(0, 1, 0);
scene.add(directionalLight);

// 축 선 그리기
const axesHelper = new THREE.AxesHelper(50);
scene.add(axesHelper);

// 그리드 그리기
const gridHelper = new THREE.GridHelper(100, 100);
scene.add(gridHelper);

// GLTFLoader와 DRACOLoader 인스턴스 생성
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("https://unpkg.com/three@0.126.1/examples/js/libs/draco/"); // DRACO 디코더 경로 설정

const loader = new GLTFLoader();
loader.setDRACOLoader(dracoLoader); // GLTFLoader에 DRACOLoader 설정

const mixers = [];
const gltfFiles = [
  'images/model1.gltf',
  'images/model2.gltf',
  'images/model3.gltf',
  'images/model4.gltf',
  'images/model5.gltf',
  'images/model6.gltf',
  'images/model7.gltf',
];

const randomFile = gltfFiles[Math.floor(Math.random() * gltfFiles.length)];
// GLTF 파일 로드
loader.load(randomFile, (gltf) => {
    scene.add(gltf.scene);
    // 애니메이션 믹서 생성
    const mixer = new THREE.AnimationMixer(gltf.scene);
    gltf.animations.forEach((clip) => {
      mixer.clipAction(clip).play(); // 모든 애니메이션 재생
    });
    mixers.push(mixer); // 믹서를 배열에 추가
}, undefined, (error) => {
    console.error(error);
});

let autoRotate = false; // 자동 회전 상태 변수
renderer.domElement.addEventListener('dblclick', () => {
  autoRotate = !autoRotate; // 자동 회전 상태 전환
});

const clock = new THREE.Clock();
const animate = () => {
  requestAnimationFrame(animate);
  controls.update();
  
  // 애니메이션 업데이트
  const delta = clock.getDelta();
  mixers.forEach((mixer) => mixer.update(delta)); // 모든 믹서 업데이트
  
  // 자동 회전 기능
  if (autoRotate) {
    scene.rotation.y += 0.01; // Y축을 기준으로 회전
  }
  renderer.render(scene, camera);
};
animate();

// 윈도우 크기 변경 시 렌더러와 카메라 비율 업데이트
window.addEventListener('resize', () => {
  const width = canvas.clientWidth + 4;
  const height = canvas.clientHeight + 4;

  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});

renderer.setSize(canvas.clientWidth, canvas.clientHeight);
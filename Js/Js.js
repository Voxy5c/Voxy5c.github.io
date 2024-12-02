// Buttons Start 
function Home() {
    window.location.href = 'https://Voxy5c.github.io/';
}
function Login() {
    window.location.href = 'https://Voxy5c.github.io/Login.html'
}
function Sign_Up() {
    window.location.href = 'https://Voxy5c.github.io/Sign_Up.html'
}
function myf() {
    window.open("https://youtube.com/@Voxy72"); 
    alert("Hi from Dragan")
    }
    
function mys() { 
    window.open("https://github.com/Voxy72");
     alert("Zuri8")
    }
function donke() {
    window.open('https://Voxy5c.github.io/', '_blank');
    }
// Buttons End
const button = document.getElementById("tB");

function gensnfl() {
  const numsnf = 100;
  for (let i = 0; i < numsnf; i++) {
    const snf = document.createElement("div");
    snf.classList.add("snowf");
    snf.textContent = "❄";

    const size = Math.random() * 2.5 + 8.5;
    const lpos = Math.random() * 1830;
    const aDur = Math.random() * 5 + 2.5;
    const aDly = Math.random() * 10;

    snf.style.fontSize = `${size}px`;
    snf.style.left = `${lpos}px`;
    snf.style.animationDuration = `${aDur}s`;
    snf.style.animationDelay = `${aDly}s`;
    snf.style.animationName = `fall, drift`;
    snf.style.animationTimingFunction = `linear, ease-in-out`;
    snf.style.animationDuration = `${aDur}s`, `${Math.random() * 5 + 5}s`;
    snf.style.animationIterationCount = `infinite, infinite`;
    document.body.appendChild(snf);
  }
}
function stgensnfl() {
  const snf = document.querySelectorAll(".snowf");
  snf.forEach(snf => snf.remove());
}

let snfViz= false;
const but = document.getElementById("snfl"); 
button.addEventListener("click", () => {
  if (snfViz) {
    stgensnfl();
  }
  else {
    gensnfl();
  }
  snfViz = !snfViz;
});

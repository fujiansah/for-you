const pesanElement = document.getElementById('pesan');
const canvas = document.getElementById('hatiCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 300;
canvas.height = 300;

const pesanRomantis = [
  "Hai uciiiiiii...",
  "Ada sesuatu yang ingin puci sampaikan...",
  "Mungkin uci nggak sadar...",
  "Tapi sejak uci hadir, semuanya jadi lebih indah.",
  "Senyum uci, cara uci bicara, semuanya bikin aku nyaman...",
  "Dan satu hal yang pasti...",
  "Aku sayanggg uciiii ❤️",
  "ucii istimewa. Selalu. 💖"
];

let index = 0;

function tampilkanPesan() {
  if (index < pesanRomantis.length) {
    pesanElement.textContent = pesanRomantis[index];
    index++;
    setTimeout(tampilkanPesan, 2000);
  } else {
    tampilkanHati();
  }
}

function tampilkanHati() {
  canvas.style.display = 'block';
  pesanElement.style.display = 'none';
  let t = 0;
  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ff69b4";
    ctx.beginPath();
    for (let i = 0; i < 2 * Math.PI; i += 0.01) {
      const x = 16 * Math.pow(Math.sin(i), 3);
      const y = -(13 * Math.cos(i) - 5 * Math.cos(2 * i) - 2 * Math.cos(3 * i) - Math.cos(4 * i));
      ctx.lineTo(150 + x * 10, 150 + y * 10);
    }
    ctx.fill();
  };
  draw();
}

tampilkanPesan();

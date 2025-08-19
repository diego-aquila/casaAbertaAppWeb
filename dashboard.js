const labels = ["deuAlerta", "deuCena", "deuCurto", "deuGame", "deuLink", "deuPixel", "deuPlanta"];

// Cores predominantes de cada stand
const standColors = [
  "rgba(255, 193, 7, 0.7)",   // deuAlerta - Amarelo
  "rgba(255, 20, 147, 0.7)",  // deuCena - Pink/Magenta
  "rgba(255, 87, 34, 0.7)",   // deuCurto - Laranja
  "rgba(255, 152, 0, 0.7)",   // deuGame - Laranja
  "rgba(156, 39, 176, 0.7)",  // deuLink - Roxo
  "rgba(13, 71, 161, 0.7)",   // deuPixel - Azul escuro
  "rgba(76, 175, 80, 0.7)"    // deuPlanta - Verde
];

const ctx = document.getElementById("graficoVisitas").getContext("2d");

const chart = new Chart(ctx, {
  type: "bar",
  data: {
    labels,
    datasets: [{
      label: "Visitas",
      data: new Array(labels.length).fill(0),
      backgroundColor: standColors // Usando as cores específicas de cada stand
    }]
  },
  options: {
    responsive: true,
    plugins: {
      datalabels: {
        color: '#000',
        anchor: 'end',
        align: 'end',
        font: {
          weight: 'bold',
          size: 23
        }
      }
    },
    scales: {
      y: { beginAtZero: true }
    }
  },
  plugins: [ChartDataLabels]
});

// Atualiza o gráfico com dados do Firestore
db.collection("visitas").onSnapshot(snapshot => {
  const newData = new Array(labels.length).fill(0);

  snapshot.docs.forEach(doc => {
    const label = doc.id;
    const index = labels.indexOf(label);
    if (index !== -1) {
      newData[index] = doc.data().quantidade || 0;
    }
  });

  chart.data.datasets[0].data = newData;
  chart.update();
});
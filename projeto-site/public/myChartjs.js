var ctx1 = document.getElementById("grafBarras").getContext("2d");

var data = {
  labels: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
  datasets: [
    {
      label: "15min",
      backgroundColor: "#4F57E8",
      data: [46, 65, 40, 25, 47, 75, 18]
    },
    {
      label: "30min",
      backgroundColor: "rgb(255, 199, 132)",
      data: [50, 15, 60, 69, 8, 45, 50]
    },
    {
      label: "45min",
      backgroundColor: "#66ff99",
      data: [30, 20, 67, 50, 12, 56, 65]
    },
    {
      label: "1Hr+",
      backgroundColor: "rgb(55, 99, 132)",
      data: [70, 30, 50, 88, 95, 63, 43]
    }
  ]
};

var myBarChart = new Chart(ctx1, {
  type: 'bar',
  data: data,
  options: {
    barValueSpacing: 20,
    scales: {
      yAxes: [{
        ticks: {
          min: 0,
          stepSize: 10
        }
      }]
    }
  }
});
//----------------------------------------------------------------------

var ctx2 = document.getElementById("grafDonut").getContext("2d");

var data_2 = {
  labels: ["15Min", "30Min", "45Min", "1Hr+"],
  datasets: [{
    data: [30, 45, 20, 15],

    backgroundColor: [
      "#e6f2fc",
      "#4f57e8",
      "rgb(255, 199, 132)",
      "rgb(55, 99, 132)",
    ],
    label: 'Dataset 1'
  }],
  labels: [
    '15Min',
    '30Min',
    '45Min',
    '1Hr+',
  ]
}

var myDoughnutChart = new Chart(ctx2, {
  type: 'doughnut',
  data: data,
});
//----------------------------------------------------------------------------------

var ctx3 = document.getElementById("myChart").getContext("2d");

// Cria-se um objeto chamado dados onde:
var data_3 = {
    datasets: [{
        // cria-se um vetor data, com os valores a ser dispostos no gráfico
        data: [],
        // cria-se uma propriedade para adicionar cores aos respectivos valores do vetor data
        backgroundColor: ['rgb(55, 99, 132)','#4f57e8' , 'rgb(255, 199, 132)', '#e6f2fc']
    }],
    // cria-se legendas para os respectivos valores do vetor data
    labels: []
};

var myPieChart = new Chart(ctx3, {
  type: 'pie',
  data: data,
  options: {
    
  }
});

//-------------------------------

var ctx4 = document.getElementById("myLine").getContext("2d");

var data_4 = {
  labels: [],
  datasets: [{
      label: 'Número de visitantes',
      borderColor: '#0f62fb',
      data: [],
  }]
}

var myLineChart = new Chart(ctx4, {
  type: 'line',
  data: data,
  options: {
    scales: {
      yAxes: [{
        ticks: {
          stepSize: 10,
          beginAtZero: false
        }
      }]
    },
    elements: {
      line: {
          tension: 0  
      }
    }
  }  
});

function obterDadosGraficoLinha() {

  fetch('/leituras/ultimas', { cache: 'no-store' }).then(function (response) {
      if (response.ok) {
          response.json().then(function (resposta) {

              console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

              resposta.reverse();

              for (i = 0; i < resposta.length; i++) {
                  var registro = resposta[i];
        
                  data_4.labels.push(registro.dia);
                  data_4.datasets[0].data.push(registro.entradas);
              }
            window.myLineChart.data=data_4;          
            window.myLineChart.update();
          });
      } else {
          console.error('Nenhum dado encontrado ou erro na API');
      }
  })
  .catch(function (error) {
      console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
  });

}

function obterDadosGraficoPizza() {

  fetch('/leituras/pizza', { cache: 'no-store' }).then(function (response) {
      if (response.ok) {
          response.json().then(function (resposta) {

              console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

              resposta.reverse();

              for (i = 0; i < resposta.length; i++) {
                  var registro = resposta[i];
        
                  data_3.labels.push(registro.LoginUsuario);
                  data_3.datasets[0].data.push(registro.loginUsuario);
              }
              window.myPieChart.data=data_3;          
              window.myPieChart.update();
          });
      } else {
          console.error('Nenhum dado encontrado ou erro na API');
      }
  })
  .catch(function (error) {
      console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
  });

}



obterDadosGraficoPizza();
obterDadosGraficoLinha();


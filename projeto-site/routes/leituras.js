var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Leitura = require('../models').Leitura;

/* Recuperar as últimas N leituras */
router.get('/ultimas', function(req, res, next) {
	
	// quantas são as últimas leituras que quer? 8 está bom?
	const limite_linhas = 7;

	console.log(`Recuperando as últimas ${limite_linhas} leituras`);
	
	const instrucaoSql = `select top ${limite_linhas} 
						umidade,
						temperatura, 
						luminosidade,
						FORMAT(dataHora,'HH:mm:ss') as momento_grafico 
						from sensores order by idSensores desc`;

	sequelize.query(instrucaoSql, {
		model: Leitura,
		mapToModel: true 
	  })
	  .then(resultado => {
			console.log(`Encontrados: ${resultado.length}`);
			res.json(resultado);
	  }).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
	  });
});


router.get('/qt_pronto', function(req, res, next) {
	
	// quantas são as últimas leituras que quer? 8 está bom?
	const limite_linhas = 7;

	console.log(`Recuperando as últimas ${limite_linhas} leituras`);
	
	const instrucaoSqlpizza = `select sum(TotalCogumelo) as 'total', sum(qt_prontos) as 'quantidade' from Estufa;`;

	sequelize.query(instrucaoSqlpizza, {
		model: Leitura,
		mapToModel: true 
	  })
	  .then(resultado => {
			console.log(`Encontrados: ${resultado.length}`);
			res.json(resultado);
	  }).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
	  });
});

router.get('/lumens', function(req, res, next) {
	
	// quantas são as últimas leituras que quer? 8 está bom?
	const limite_linhas = 7;

	console.log(`Recuperando as últimas ${limite_linhas} leituras`);
	
	const instrucaoSqllumi = `select top ${limite_linhas}
						luminosidade,
						FORMAT(dataHora,'HH:mm:ss') as momento_grafico 
						from sensores order by idSensores desc`;

	sequelize.query(instrucaoSqllumi, {
		model: Leitura,
		mapToModel: true 
	  })
	  .then(resultado => {
			console.log(`Encontrados: ${resultado.length}`);
			res.json(resultado);
	  }).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
	  });
});


// tempo real (último valor de cada leitura)
router.get('/tempo-real', function (req, res, next) {
	
	console.log(`Recuperando a última leitura`);

	const instrucaoSql = `select top 1 umidade,temperatura,luminosidade, FORMAT(dataHora,'HH:mm:ss') as momento_grafico  
						from sensores order by idSensores desc`;

	sequelize.query(instrucaoSql, { type: sequelize.QueryTypes.SELECT })
		.then(resultado => {
			res.json(resultado[0]);
		}).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
		});
  
});

// tempo real (último valor de cada leitura)
router.get('/tempo-real-lumi', function (req, res, next) {
	
	console.log(`Recuperando a última leitura`);

	const instrucaoSql = `select top 10 luminosidade, FORMAT(dataHora,'HH:mm:ss') as momento_grafico  
						from sensores order by idSensores desc`;

	sequelize.query(instrucaoSql, { type: sequelize.QueryTypes.SELECT })
		.then(resultado => {
			res.json(resultado[0]);
		}).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
		});
  
});


// estatísticas (max, min, média, mediana, quartis etc)
router.get('/estatisticas', function (req, res, next) {
	
	console.log(`Recuperando as estatísticas atuais`);

	//const momentoHora = new Date(new Date()-(1000*60*60)) // correto
	const momentoHora = new Date('06/11/2020') // temporario

	var dataatual = new Date();
	const anoatual = dataatual.getFullYear();
	const mesatual = dataatual.getMonth();
	const diaatual = dataatual.getDate();
	const horaatual = dataatual.getHours();
	const minatual = dataatual.getMinutes();
	const segatual = dataatual.getSeconds();

	const instrucaoSql = `select avg(luminosidade) as lumi, avg(temperatura) as temp, avg(umidade) as umid from sensores where dataHora >= '${anoatual}-0${mesatual+1}-${diaatual} ${horaatual-1}:${minatual}:${segatual}' and dataHora <= '${anoatual}-0${mesatual+1}-${diaatual} ${horaatual}:${minatual}:${segatual}';`;



	sequelize.query(instrucaoSql, { type: sequelize.QueryTypes.SELECT })
		.then(resultado => {
			res.json(resultado[0]);
		}).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
		});
  
});


module.exports = router;

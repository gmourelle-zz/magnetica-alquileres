const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

const deptos = [];

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());

app.use(morgan('combined'));
// retrieve all deptos
app.get('/', (req, res) => {
  const ds = deptos.map(d => ({
    id: d.id,
    ubicacion: d.ubicacion,
    ambientes: d.ambientes,
    metros: d.metros,
    pNoche: d.pNoche,
    pMes: d.pMes,
    inquilinos: d.inquilinos,
    alquilado: d.alquilado
  }));
  res.send(ds);
});

app.post('/', (req, res) => {
  const { ubicacion, ambientes, metros, pNoche, pMes } = req.body;
  const newDepto = {
    id: deptos.length + 1,
    ubicacion,
    ambientes,
    metros,
    pNoche,
    pMes,
    inquilinos: [],
    alquilado: false
  };
  deptos.push(newDepto);
  res.status(200).send();
});

app.put('/:id/inquilino', function(req, res) {
  const { inquilino } = req.body;

  const dto = deptos.filter(d => d.id === parseInt(req.params.id));
  if (dto.length > 1) return res.status(500).send();
  if (dto.length === 0) return res.status(404).send();
  const exists = dto[0].inquilinos.find(inq => inq.dni === inquilino.dni);
  if (!exists) {
    dto[0].inquilinos.push(inquilino);
  }
  dto[0].alquilado = true;

  res.status(200).send({ depto: dto[0], message: 'Alquiler confirmado' });
});

// start the server
app.listen(8081, () => {
  console.log('listening on port 8081');
});

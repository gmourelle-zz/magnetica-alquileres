import axios from 'axios';

const urlDeptos = 'http://localhost:8081/';

export const getDeptos = () =>
  fetch(urlDeptos)
    .then(data => data.json())
    .then(depto_data => depto_data)
    .catch(err => err);

export const putDepto = (id, inquilino) =>
  axios
    .put(`${urlDeptos}${id}/inquilino`, {
      inquilino
    })
    .then(depto_data => depto_data.data)
    .catch(err => err);

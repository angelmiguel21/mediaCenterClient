const _ = require('lodash');
const Serie = require('../models/series');

async function getSeries(req, res, next) {
  const series = await Serie.find({});
  res.send(series);
};

async function getSerie(req, res, next) {
  const serie = await Serie.findById(req.params.id);
  res.send(serie);
};

module.exports = {
  getSeries,
  getSerie
}
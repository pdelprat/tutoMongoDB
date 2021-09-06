const config = require('config');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sampleModel = mongoose.model('Sample', new Schema({}, { strict: false }));

exports.sampleModel = sampleModel;

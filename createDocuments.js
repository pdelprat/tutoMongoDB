const { connect } = require('./startup/db');
const { sampleModel } = require('./models/sample.model');

async function create() {
  await connect();
  const result = await sampleModel.create({
    nom: 'Delprat',
    role: 'TSA',
  });
}

create();

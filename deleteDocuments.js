const { connect } = require('./startup/db');
const { sampleModel } = require('./models/sample.model');

async function deleteMany() {
  await connect();
  const result = await sampleModel.deleteMany({
    nom: 'Delprat'
  });
}

deleteMany();

const { connect } = require('./startup/db');
const { sampleModel } = require('./models/sample.model');

async function find() {
  await connect();
  const result = await sampleModel.find();
  result.map((doc) => {
    console.log('Document:', doc);
  });
}

find();

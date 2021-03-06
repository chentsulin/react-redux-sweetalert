/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');

const express = require('express');
const webpack = require('webpack');

const config = require('./webpack.config');

const port = process.env.PORT || 3000;

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
  },
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, 'localhost', err => {
  if (err) {
    console.log(err); // eslint-disable-line no-console
    return;
  }

  console.log(`Listening at http://localhost:${port}`); // eslint-disable-line no-console
});

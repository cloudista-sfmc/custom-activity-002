const path = require('path');
const fs = require('fs');
const SF_SSJS = require('../utils/sfmc-ssjs');

/**
 * Render Config
 * @param req
 * @param res
 */
exports.config = (req, res) => {
  const domain = req.headers.host || req.headers.origin;
  const file = path.join(__dirname, '..', 'public', 'config-template.json');

  const configTemplate = fs.readFileSync(file, 'utf-8');
  const config = JSON.parse(configTemplate.replace(/\$DOMAIN/g, domain));
  res.json(config);
};

/**
 * Render UI
 * @param req
 * @param res
 */
exports.ui = (req, res) => {
  res.render('index', {
    title: 'Details',
    dropdownOptions: [
      {
        name: 'Journey Entry',
        value: 'journeyEntry',
      },
      {
        name: 'Journey Intermediate',
        value: 'journeyIntermediate',
      },
      {
        name: 'Journey Exit',
        value: 'journeyExit',
      },
    ],
    DElist_2: SF_SSJS.dropdownListDE,
    DElist: [
      {
        name: 'Test DE 1',
        value: 'TestDE1',
      },
      {
        name: 'Test DE 2',
        value: 'TestDE2',
      },
    ],
  });
};

import got from 'got';

const url = 'http://cloud.sf.croud.com/get-all-de';
const allDEs = await got(url).json();

var dropdownListDE = [];
allDEs.forEach(element => {
  var dropdownOption = {
    name: element.Name,
    value: element.CustomerKey
  };
  dropdownListDE.push(dropdownOption);
});

module.exports = {
  dropdownListDE
};

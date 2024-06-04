const handlebars = require('handlebars');
const fs = require('fs');
const  path = require('path');
const mjml2html = require('mjml');



   async function compileEmailTemplate({ fileName, data }){
    const mjMail = await fs.promises.readFile(path.join('./', fileName), 'utf8');
    const template = mjml2html(mjMail).html;
    return handlebars.compile(template)(data).toString();
  }

  module.exports = compileEmailTemplate
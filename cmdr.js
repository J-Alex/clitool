var program = require('commander');
var fs = require('fs')
var path = require('path');
var input = 'nombre';
var template = require('./templates/component.js')(input);

program
  .version('0.1.0')
  .option('-p, --peppers', 'Add peppers')
  .option('-c, --create', 'Create Component')
  .parse(process.argv);

//console.log('you ordered pizza with: ');

if(program.peppers) {
  console.log('Peppers');
}
if(program.create){
  console.log(template);
  //fs.readFileSync(__dirname + '/component/' + 'new.component.js', 'utf-8')
  /*var readStream = fs.createReadStream('templates/component.js', 'utf-8');
  readStream.on('data', function(chunk){
    console.log('reading...');
    var input = 'nombre';
    var streamText = chunk;
    console.log(streamText);
  }).on('end', function(){
    console.log('| lectura finalizada: ');
  });*/

  //console.log(t);


  fs.appendFile('./newfile.js', template, (err)=>{
    if(err)throw err;
    console.log("file interpolation created successfully!!");
  });


  /*fs.mkdir(path.join(__dirname, '/component'),function(err){
    if(err)throw err;
    console.log("FolderComponent created successfully!!");

    fs.appendFile(__dirname + '/component/' + 'new.component.js', 'logica', (err)=>{
      if(err)throw err;
      console.log("Component created successfully!!");
    });
  });*/
}
/*
comandos module,component, service
leer plantillla
escribir parametro de nombre en las interpolaciones de la plantillla
crear documento nuevo apartir de la plantilla + interpolacion

*/

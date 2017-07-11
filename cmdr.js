var program = require('commander');
var fs = require('fs')
var path = require('path');

program
  .version('0.2.0')
  .command('createComponent [name]')
  .action(function(name){

    if(name === undefined){
      console.log('no args given')
    }else{
      console.log(name);
    
      var template = require('./templates/component.js')(name);

      fs.mkdir(path.join(__dirname, `/${name}Component`), function(err){
        if(err)throw err;
        console.log(`Folder ${name}Component created successfully!!`);

        fs.appendFile(`${__dirname}/${name}Component/${name}.component.js`, template, (err)=>{
          if(err)throw err;
          console.log(`File: ${name}.component.js created successfully!!`);
        });
      });
    }
  });

  program.parse(process.argv);

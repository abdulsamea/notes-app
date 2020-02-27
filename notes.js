const fs = require('fs')
const chalk = require('chalk')
const path = require('path')


const getNotes = function (title) {
    try{
        console.log('<<<<<<<<<<<<-------- reading the  note -------->>>>>>>>>>>>');
        if(title != undefined){
            fs.readFile('./'+ title + '.txt', 'utf8', (err, contents) => {
                if(err){
                    console.log(chalk.rgb(255,127,80).inverse(err))
                }
                console.log(chalk.rgb(87,99,150).bold(contents));
            })

    }
    }
    catch(e){
        console.log(e)
    }
}



const addNote = (title, body) => {

    try{
        console.log('adding a new note...');
        if(title != undefined){
        fs.appendFile(title  + '.txt', body + '\n', () =>{
            let msg = chalk.rgb(0,250,154).bold(title)
            console.log(msg + ' created by nodejs')
        });
    }
    }

    catch(e){
        console.log(e);
    }

}

const removeNote = (title) => {
    if(fs.existsSync(title + '.txt')){
        console.log('removing a note...');
        if(title != undefined){
            fs.unlink(title + '.txt', () => {
            let msg = chalk.rgb(255,127,80).bold(title)
            console.log(msg + ' deleted by nodejs')
        });
        }
    }
    else{
        let error = chalk.rgb(255,127,80).inverse('No file found with title = ' + title + ' !')
        console.log(error)
    }
}



const listNotes = function () {
    try{
         console.log('All notes present are:');
        fs.readdir('./', (err, files) => {
            if(err){
                console.log(chalk.rgb(255,127,80).inverse(err))
            }
            files.forEach(file => {
                if(path.extname(file) == '.txt' ){
                    console.log(chalk.rgb(155,27,80)(file));
                }
            });
          });
    }
    catch(e){
        console.log(e)
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}
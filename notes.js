const fs = require('fs')


const getNotes = function(title){
    try{
        console.log('<<<<<<<<<<<<-------- reading the  note -------->>>>>>>>>>>>');
        if(title != undefined){
            fs.readFile('./'+ title + '.txt', 'utf8', function(err, contents) {
                console.log(contents);
            })

    }
    }
    catch(e){
        console.log(e)
    }
}



const addNote = function(title, body){

    try{
        console.log('adding a new note...');
        if(title != undefined)
        fs.appendFile(title  + '.txt', body + '\n', function(){
            console.log(title + ' ceated by nodejs')
        });

    }

    catch(e){
        console.log(e);
    }

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote
}
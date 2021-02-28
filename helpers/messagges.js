const { rejects } = require('assert')

require('colors')

const showMenu =  () => {

    return new Promise ((resolve)=>{


        console.clear()
        console.log('======================='.gray)
        console.log('selec an option'.blue)
        console.log('======================='.gray)
    
        console.log(`${'1.'.green} Create task`);
        console.log(`${'2.'.green} All tasks`);
        console.log(`${'3.'.green} List completed tasks`);
        console.log(`${'4.'.green} List incomplete tasks`);
        console.log(`${'5.'.green} Complete task`);
        console.log(`${'6.'.green} Delete task`);
        console.log(`${'0.'.green} Out`);
    
    
        const readline = require('readline').createInterface({
            input:process.stdin,
            output:process.stdout
    
    
        })
    
        readline.question('Select an option: ',(opt)=>{
            readline.close()
            resolve(opt)
        })

    })

}


const pause = ()=>{

    return new Promise(resolve =>{

        const readline = require('readline').createInterface({
            input:process.stdin,
            output:process.stdout
    
    
        })
    
        readline.question('Enter to continue.. '.blue,(opt)=>{
            
            readline.close()
            resolve()
        })


    })
}




module.exports = { showMenu , pause}

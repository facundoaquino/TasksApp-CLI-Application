const fs = require('fs');
const pathFile = './db/data.json'

const saveDb = (data)=>{


    fs.writeFileSync(pathFile,JSON.stringify(data,null,5))
}


const readDb = ()=>{


    if(!fs.existsSync(pathFile)){
        return null
    }

    const data = fs.readFileSync(pathFile,{encoding:'utf-8'})

    return JSON.parse(data)

}

module.exports={saveDb , readDb}
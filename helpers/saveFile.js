const fs = require('fs');

const saveDb = (data)=>{

    const pathFile = './db/data.json'

    fs.writeFileSync(pathFile,JSON.stringify(data,null,5))
}


module.exports={saveDb}
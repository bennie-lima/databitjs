const dataType = require('./dataType');
const utilFunction = require('./util');

const validDataTypeObject = (objectValue) => {
    if (!utilFunction.isEmpty(objectValue)) {
        let objectModel2 = {}
        
        Object.entries(objectValue).forEach(i => {
            let key = i[0]
            let value = i[1]
                
            try {
                objectModel2[key] = dataType[value]()
            } catch {
                objectModel2[key] = validDataTypeObject(value)
            }
        })
        return objectModel2

    }
    console.error(`data type not exist: ${objectValue}`)
    return null 
    
}

function dataBit(){
    const countGenerate = arguments[1]
    const structureObject = arguments[0]
    let listObject = []
    
    if(!Number.isInteger(countGenerate)) return console.error(`Some arguments are missing`)
    

    for(let item = 1; item <= countGenerate; ++item){
        let objectModel = {}

        Object.entries(structureObject).forEach(i => {
            let key = i[0]
            let value = i[1]
            
            try {
                objectModel[key] = dataType[value]()
            } catch {
                objectModel[key] = validDataTypeObject(value)
            }
        })

        listObject.push(objectModel)
    }

    return listObject
}

module.exports = dataBit
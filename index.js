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

let lista = dataBit({
    nome: "username",
    numero: "int",
    cor: "color",
    email: "email",
    telefone: "telephone",
    casado: "boolean"
}, 2)

console.log(lista)

// generateData({
//     nome: "username",
//     pai: "username",
//     idade: "int",
//     data: "date",
//     cor: "color",
//     float: "float",
//     label: {
//         nome: "username",
//         nome2: "date",
//         cor2: "color",
//         lista: "int"
//     },
//     // vazio1: {},
//     // vazio2: null,
//     // vazio3: undefined,
//     // vazio4: 0,
//     // vazio5: [],
//     // vazio6: "",
//     // vazio7: "0",
//     // vazio8: 1,
//     objectoDinamico: {
//         label: "username",
//         lista1: {
//             label: "username",
//             label2: "username",
//             label3: {
//                 nome: "int"
//             }
//         }
//     },
//     objectoDinamico2: {
//         label: "username",
//         objeto1: {
//             nome: "username"
//         }
//     }
// }, 2)
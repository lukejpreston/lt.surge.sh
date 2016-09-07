
    const path = require('path')
    const fs = require('fs')
    const convert = require('./csvtojson.js')

    const dataOutput = path.join(__dirname, '../src/data')
    if(!fs.existsSync(dataOutput)) {
        fs.mkdir(dataOutput)
    } else {
        fs.readdirSync(dataOutput).forEach(file => {
            file = path.join(dataOutput, file)
            fs.unlinkSync(file)
        })
    }

    const dataLocation = path.resolve(
    path.join(__dirname, 'pokeapi/data/v2/csv/')
  )

    fs.readdirSync(dataLocation)
    .filter(file => {
        return file.includes('csv')
    })
    .forEach(file => {
        const name = file.replace('.csv', '.json')
        file = path.join(dataLocation, file)
        const data = convert(fs.readFileSync(file).toString())
        const dataString = JSON.stringify(data, null, 4)
        fs.writeFileSync(path.join(dataOutput, name), dataString)
    })

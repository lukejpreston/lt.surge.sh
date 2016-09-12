const fs = require('fs')
const path = require('path')
const changeCase = require('change-case')
const mustache = require('mustache')
const base64Img = require('base64-img')
const ITEMS_PATH = path.resolve(__dirname, './pokeapi/data/v2/sprites/items')
const POKEMON_PATH = path.resolve(__dirname, './pokeapi/data/v2/sprites/pokemon')

const TEMPLATE = fs.readFileSync(path.join(__dirname, './image.js')).toString()
mustache.parse(TEMPLATE)

const OUTPUT_PATH = path.resolve(__dirname, '../src/sprites')
if (!fs.existsSync(OUTPUT_PATH)) {
  fs.mkdir(OUTPUT_PATH)
} else {
  fs.readdirSync(OUTPUT_PATH).forEach(file => {
    file = path.join(OUTPUT_PATH, file)
    fs.unlinkSync(file)
  })
}

function create (base, file, type) {
  let src = base64Img.base64Sync(path.join(base, file))
  let output = mustache.render(TEMPLATE, {
    name: '$' + changeCase.pascal(file.replace('.png', '')),
    type,
    src
  })
  let outputFile = path.join(OUTPUT_PATH, changeCase.param(file).replace('-png', '.js'))
  fs.writeFileSync(outputFile, output)
}

function run (base, type) {
  fs.readdirSync(base)
    .filter(file => {
      return file.includes('.png')
    })
    .forEach(file => {
      create(base, file, type)
    })
}

run(ITEMS_PATH, 'item')
run(POKEMON_PATH, 'pokemon')

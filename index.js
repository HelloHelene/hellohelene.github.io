const pug = require('pug')
const stylus = require('stylus')
const fs = require('fs')
const data = require('./cv.js')
const compiler = pug.compileFile('template.pug')

const styles = fs.readFileSync('./styles.styl', 'utf-8')

stylus(styles, {filename: 'styles.css'}, function(err, css) {
  console.log(css)
})

fs.writeFileSync('index.html', compiler(data))

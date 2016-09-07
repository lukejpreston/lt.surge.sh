module.exports = function (string) {
  var rows = string.split('\n')
  var head = rows.shift().split(',')

  var startConcating = false
  var paragraph = []
  let mapped = rows.map(function (row) {
    if (row.includes('"')) {
      var count = row.split('"').length - 1
      if (count % 2 !== 0) startConcating = !startConcating
    }

    if (startConcating) paragraph.push(row)
    else {
      paragraph.push(row)
      row = paragraph.join(' ')
      var quoted = row.match(/"(.*)"/)
      if (quoted !== null) {
        var fixed = quoted[0].replace(',', '--')
        row = row.replace(quoted[0], fixed)
      }
      paragraph = []

      var data = row.split(',')
      var result = {}
      head.forEach(function (key, index) {
        result[key] = data[index]
      })
      Object.keys(result).forEach(key => {
        if (typeof result[key] === 'string') result[key] = result[key].replace('--', ',')
      })
      return result
    }
  })

  return mapped.filter(row => {
    return row !== undefined
  })
}

const reExp = /(^( )?(var|if|for|else|switch|case|break|{|}|;))(.*)?/g

function template(tpl, options) {
  var code = 'with(obj) { var r=[];\n'
  var cursor = 0
  var result
  var match
  var pre = options.ktpl_pre || "\\$\\{"
  var post = options.ktpl_post || '\\}'
  var re = new RegExp(pre + "(.+?)" + post, "g")

  var add = function (line, js) {
    js ? (code += line.match(reExp) ? line + '\n' : 'r.push(' + line + ');\n')
      : (code += line !== '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : '')
    return add
  }

  while (match = re.exec(tpl)) {
    add(tpl.slice(cursor, match.index))(match[1], true)
    cursor = match.index + match[0].length
  }

  add(tpl.substr(cursor, tpl.length - cursor))

  code = (code + 'return r.join(""); }').replace(/[\r\t\n]/g, ' ')

  try {
    result = new Function('obj', code).apply(options, [options])
  } catch (err) {
    console.error("'" + err.message + "'", ' in \n\nCode:\n', code, '\n')
  }

  return result
}

template.render = function (file, options) {
  try {
    const fs = require('fs')
    var tpl = fs.readFileSync(file).toString()
    return template(tpl, options)
  } catch (err) {
    console.error('ktpl render(tpl, data) can not read file ' + file + " '" + err.message + "'", '\n')
  }
}

module.exports = template

var tpl = require('.')

var html = tpl.render('./tpl.html', {
  name: 'KPlayer',
  age: 29,
  user: {
    name: 'xxxx'
  }
})

console.log(html)

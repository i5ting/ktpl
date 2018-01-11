var tpl = require('.')

var html = tpl.render('./tpl3.html', {
  ktpl_pre: "<%",
  ktpl_post: "%>",
  name: 'KPlayer',
  age: 29,
  user: {
    name: 'xxxx'
  }
})

console.log(html)

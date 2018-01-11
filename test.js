var tpl = require('.')

var source = '<p>Hello, my name is ${ user.name }. I\'m ${ age} years old.</p>'

var html = tpl(source, {
  name: 'KPlayer',
  age: 29,
  user: {
    name: 'xxxx'
  }
})

console.log(html)

var Benchmark = require('benchmark')

var suite = new Benchmark.Suite()

// add tests
suite.add('ktpl', function () {
  var tpl = require('.')

  var source = '<p>Hello, my name is <% user.name %>. I\'m <% age%> years old.</p>'

  tpl(source, {
    name: 'i5ting',
    age: 29,
    user: {
      name: 'xxxx'
    }
  })
})
  .add('art-template', function () {
    var template = require('art-template')

    var source = '<p>Hello, my name is <% user.name %>. I\'m <% age%> years old.</p>'
    // compile source of template as function
    template.compile(source, {
      name: 'i5ting',
      age: 29,
      user: {
        name: 'xxxx'
      }
    })
  })
  // add listeners
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  // run async
  .run({ 'async': true })

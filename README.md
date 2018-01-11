# ktpl

> ktpl: simple template

## Install

```
$ npm i -S ktpl
```

## Usages

1) 直接编译

```js
var tpl = require('ktpl')

var template = '<p>Hello, my name is ${ user.name }. I\'m ${ age} years old.</p>'

var html = tpl(template, {
  name: 'KPlayer',
  age: 29,
  user: {
    name: 'xxxx'
  }
})
```

2）render方法


定义模板

```html
<p>Hello, my name is ${ user.name }. I\'m ${ age} years old.</p>
```

使用render方法编译

```js
var tpl = require('ktpl')

var html = tpl.render('./tpl.html', {
  name: 'KPlayer',
  age: 29,
  user: {
    name: 'xxxx'
  }
})

console.log(html)
```

## 模板语法

1）模板变量使用 `${ user.name }` 嵌入，只提供简单的编译

```html
<p>Hello, my name is ${ user.name }. I\'m ${ age} years old.</p>
```

2）语序嵌入js语法

```html
<p>Hello, my name is ${ user.name }. I\'m ${ age} years old.</p>

${ if(user) {}
    <p>Hello</p>
${}}
```

## 高级

自定义，如果是非正则字符，直接写，如果是正则字符，需要使用`\\`进行转译，默认用法`${}`对应的是`\\$\\{`。

- ktpl_pre: "<%"
- ktpl_post: "%>"

例如

```js
var tpl = require('ktpl')

var html = tpl.render('./tpl3.html', {
  ktpl_pre: "<%",
  ktpl_post: "%>",
  name: 'KPlayer',
  age: 29,
  user: {
    name: 'xxxx'
  }
})
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## 版本历史

- v1.0.0 初始化版本

## 欢迎fork和反馈

如有建议或意见，请在issue提问或邮件

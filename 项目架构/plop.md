# plop工具
plop是一个模板文件生成工具
我们可以通过这个工具一次性根据我们定制的模板生成单个或多个不同类型的文件
方便我们的开发
安装
```
npm install plop -D
```
在文件根目录新建plop运行文件plopfile.js, 随便找个地儿新建选项文件和模板文件
```
// plopfile.js
const viewGenerator = require('./plop-templates/views/prompt.js')
module.exports = function (plop){
  plop.setGenerator('name', )
}

// plop-templates/views/prompt.js
function validFunc(name) {
  return (name) => {
    return !name || name.trim() === ''
      ? `${name} is required`
      : true
  }
}
module.exports = {
  description: '模板描述',
  // 命令行提示&交互
  prompts: [{
    type: 'input', // 输入类型提示
    name: 'name',
    message: 'view name please',
    validate: validFunc('name')
  }, {
    type: 'checkbox',
    name: 'blocks', // 储存在data中的属性名
    message: 'Blocks',
    choices: [{
      name: '<template>',
      value: template, // 储存的变量名
      checked: true // 默认选中
    }]
  }],
  // 实际操作的方法
  actions: data => {
    const name = '{{name}}' // 模板字符串
    const actions = [{
      type: 'add',
      path: 'src/views/${name}.vue',
      templateFile: 'plop-templates/views/index.hbs',
      data: {
        name: name,
        template: data.blocks.template,
        script: data.blocks.script
      }
    }]
  }
}

// prompt文件引用的templateFile模板文件index.hbs
{{#if template}} // 判断从用户在cli输入的template值决定是否渲染
<template>
  <div />
</template>
{{/if}}
```

运行文件plopfile.js,提示文件prompt.js和模板文件index.hbs都准备好了
就可以在cli输入plop
cli就会提示你对创建的模板信息进行输入选择
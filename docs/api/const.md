---
outline : deep
---

# 常量类型定义  

## EVENTS  
内置事件  
 ```js
 import { EVENTS } from 'rd-runtime'
 ```   

 ### CLICK_BACKGROUND
 `EVENTS.CLICK_BACKGROUND`
 点击舞台背景

 ### CLICK_SPRITE
 `EVENTS.CLICK_SPRITE`
 点击舞台元素获取id信息

 ### MOUSEOVER_SPRITE
 `EVENTS.MOUSEOVER_SPRITE`
 鼠标经过舞台元素

 ### MOUSEOUT_SPRITE
 `EVENTS.MOUSEOUT_SPRITE`
 鼠标离开舞台元素

 ### MOUSEOUT_SPRITE
 `EVENTS.STAGE_MOUNTED`
 舞台渲染完毕


```js
 import { EVENTS,cmd } from 'rd-runtime'
 cmd.addEventLister(EVENTS.CLICK_SPRITE,res=>{
     //元素的基本信息
 })
 cmd.addEventLister(EVENTS.MOUSEOVER_SPRITE,res=>{
     //元素的基本信息
 })
 cmd.addEventLister(EVENTS.MOUSEOUT_SPRITE,res=>{
     //元素的基本信息
 })
```

## dataOptions  
相关数据选择模型  
 ```js
 import { dataOptions } from 'rd-runtime'
 ```   

### dataOptions.level   
模块类型选项 
```js
[{
    name: '主内容区',
    type: 'content'
}, {
    name: '覆盖弹层',
    type: 'overlayer'
}, {
    name: '固定层',
    type: 'fixed'
}]
```

 ### dataOptions.events   
 事件类型选项  
 ```js
[{
    name: '点击',
    event: 'click',
    pams: '',
    actions: [],
    actionValue: {}
},
{
    name: '定时任务',
    event: 'interval',
    pams: { delay: 1000 },
    actions: [],
    actionValue: {}
},
{
    name: '延迟任务',
    event: 'timeout',
    pams: { delay: 1000 },
    actions: [],
    actionValue: {}
}]
 ```    
 
 ### dataOptions.component   
 组件类型选项  
 ```js
[
    { name: '图表', type: 'chart' },
    { name: '文本', type: 'text' },
    { name: '表格', type: 'table' },
    { name: '形状', type: 'shape' },
    { name: '菜单', type: 'menu' },
    { name: '媒体', type: 'media' },
    { name: '地图', type: 'map' },
    { name: '3D', type: '3d' },
    { name: '其它', type: 'other' }
]
 ```  

 ### dataOptions.actions   
 基本动作类型选项 
 ```js
[{
    name: '显示隐藏',
    action: "show",
    target: 'component',
    valueType: 'boolean',
    value: true
},
{
    name: '显示开关',
    action: "toggle",
    target: 'component',
    valueType: "undefined",
    value: null
},
{
    name: '发送数据',
    action: "sendData",
    target: 'component',
    valueType: 'object',
    value: null
}, {
    name: '打开外链',
    action: 'href',
    target: 'url',
    valueType: 'string',
    value: ''
}, {
    name: '页面切换',
    action: 'singleModule',
    target: 'modules',
    valueType: 'string',
    value: ""
}, {
    name: '开关弹窗',
    action: 'popup',
    target: 'module',
    valueType: 'string',
    value: ""
}]

 ```  

 ### dataOptions.dataType   
 基本数据类型选项 
 ```js
[
   { name: '原始数据', type: 'source' },
   { name: '远程数据', type: 'remote' },
   { name: '本地数据', type: 'local' },
]
 ```  

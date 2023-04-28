---
outline : deep
---

# app.controller 
控制器一般用于引擎内部使用，如果存在运行过程中的一些调整覆盖，可以考虑以下方法。


## controller.useAction()   
给控制器添加一个新的动作    
```js
/**
* 添加一个动作
* @param {object} config 配置项
*/
controller.useAction(config)  
```
 * config 配置项    

| 名称      | 类型     | 默认值    | 说明           |
| --------- | -------- | --------- | -------------- |
| name      | string   | -         | 动作命名       |
| action    | string   | -         | 动作执行方法名 |
| target    | string   | component | 执行目标类型   |
| value     | string   | -         | 动作默认值     |
| valueType | *        | -         | 默认值数据类型 |
| handle    | function | -         | 自定义执行方法 |

## controller.remove()   
删除动作    
```js
/**
* 删除动作
* @param {object} action 动作方法名
*/
controller.remove(action)  
```


## controller.removeAll()   
删除控制器所有动作
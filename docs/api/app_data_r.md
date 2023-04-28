---
outline : deep
---
# app.data.rData    

应用内的远程数据源管理

## rData.fillData()   
数据填充    
```js
/**
* 数据填充
* @param {object} data 初始数据内容
*/
rData.fillData(data)
```

## rData.addRemote()
添加远程请求api的方法    
```js
/**
* 添加远程请求api的方法
* @param {*} options 远程接口配置
* @returns 
*/
rData.addRemote(options)
```
 * options参数  
    | 参数        | 类型   | 说明                              |
    | ----------- | ------ | --------------------------------- |
    | id          | string | 唯一id值                          |
    | url         | string | 接口地址                          |
    | body        | object | 请求的附带参数 Payload            |
    | method      | string | 请求方式                          |
    | itval       | number | 轮询请求间隔秒数，0为不做轮询请求 |
    | extractRule | Object | 过滤规则                          |
 添加一个远端数据对象  
* 返回 `remote`
* body `Payload` 数组
  * `key` 字段名
  * `value` 值，可以是GD_开头的全局数据id
  * `path` value对象取值路径 `a.[1].c`




## rData.delRemote()
删除一个远程数据源对象    
```js
/**
* 删除一个远程数据源对象
* @param {*} id 远程对象id
* @returns 
*/
rData.delRemote(id)
```

## rData.getRemote()
删除一个远端请求对象，如果id值为空，将删除所有请求对象    
```js
/**
* 返回一个远程数据源对象
* @param {*} id 远程对象id
* @returns 
*/
rData.getRemote(id)
```

## rData.requestData()
请求数据    
```js
/**
 * 请求数据
 * @param {*} refresh 是否刷新数据
 * @param {*} api 接口地址
 * @param {*} callback 完成回调方法
 * @returns 
 */
rData.requestData(refresh = false, api = "", callback)
```

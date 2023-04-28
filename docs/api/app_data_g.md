---
outline : deep
---
# app.data.gData    

全局数据对象据管理

## gData.fillData()   
数据对象数据填充    
```js
/**
* 数据对象数据填充
* @param {object} data 初始数据内容
*/
gData.fillData(data)
```

## gData.addGData()
新增一个数据对象    
```js
/**
* 新增一个数据对象
* @param {*} value 值
* @param {*} name 名称
* @param {*} type 类型
* @returns 
*/
gData.addGData(value, name = "", type = "source")
```

## gData.editGData()
编辑一个数据对象    
```js
/**
* 编辑一个数据对象
* @param {string|object} res 数据对象id或原始数据对象
* @param {object} value 需要修改的值
* @returns 
*/
gData.editGData(res, value)
```

## gData.delGData()
删除一个数据对象    
```js
/**
* 删除一个数据对象
* @param {string} id 动作id
* @returns 
*/
gData.delGData(id)
```

## gData.getGData()
返回一个数据对象    
```js
/**
* 返回一个数据对象
* @param {array} id 数据对象id
* @returns 
*/
gData.getGData(id)
```

## gData.getGDataList()
返回所有数据列表（数组）    
```js
/**
* 返回所有数据列表（数组）
* @returns 
*/
gData.getGDataList()
```

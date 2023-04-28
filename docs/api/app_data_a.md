---
outline : deep
---
# app.data.aData    

动作数据管理

## aData.fillData()   
动作数据填充    
```js
/**
* 动作数据填充
* @param {object} data 初始数据内容
*/
aData.fillData(data)
```

## aData.createActionData()
创建新动作    
```js
/**
* 创建新动作
* @param {string} actionName 动作名称
* @param {object} option 覆盖参数
* @returns 
*/
aData.createActionData(actionName,option)
```

## aData.editActionData()
修改动作数据    
```js
/**
* 修改动作数据
* @param {object} data 编辑的数据
* @returns 
*/
aData.editActionData(data)
```

## aData.delActionData()
删除动作数据    
```js
/**
* 删除动作数据
* @param {string} id 动作id
* @returns 
*/
aData.delActionData(id)
```

## aData.getActionsData()
返回当前所有    
```js
/**
* 返回当前所有
* @returns 
*/
aData.getActionsData()
```

## aData.getActionList()
返回当前所有（数组）    
```js
/**
* 返回当前所有（数组）
* @param {array} ids 动作id数组
* @returns 
*/
aData.getActionList(ids)
```

---
outline : deep
---
# app.data   
数据管理对象

## 所有属性方法 

 * 属性方法  
    | 名称             | 说明                 | 其它                                |
    | ---------------- | -------------------- | ----------------------------------- |
    | AppSetup         | 应用配置             | -                                   |
    | info             | 应用基本信息         | -                                   |
    | mData            | 页面元素渲染数据对象 | -                                   |
    | aData            | 动作数据对象         | -                                   |
    | gData            | 全局数据配置数据对象 | -                                   |
    | rData            | 远程请求数据对象     | -                                   |
    | pData            | 插件数据对象         | -                                   |
    | init()           | 初始化数据           | -                                   |
    | requestRemote()  | 请求远端数据         | -                                   |
    | getElement()     | 返回元素             | 同 `app.data.mData.getElement()`    |
    | getModuleList()  | 模块列表             | 同 `app.data.mData.getElement()`    |
    | getElementList() | 元素列表             | 同 `app.data.mData.getElement()`    |
    | getActionList()  | 动作列表             | 同 `app.data.aData.getActionList()` |
    | getGDataList()   | 全局数据列表         | 同 `app.data.gData.getGDataList()`  |
    | getRemoteList()  | 远程接口列表         | 同 `app.data.rData.getRemoteList()` |
    | getAppData()     | 返回应用信息数据     | -                                   |
    | getDataSource()  | 返回内容原始数据     | -                                   |
    | clearDataAll()   | 清除所有数据         | -                                   |
    | getData()        | 返回所有数据         | 可用于保存项目信息内容              |

## data.init() 
完整路径：`app.data.init`     
返回单个元素
```js
/**
 * 初始化数据
 * @param {object} data 应用数据对象
 */
data.init(data)
```

## data.requestRemote() 
完整路径：`app.data.requestRemote`     
请求远端数据
```js
/**
 * 请求远端数据接口
 */
data.requestRemote()
```

## data.getAppData() 
完整路径：`app.data.getAppData`     
返回应用信息数据
```js
/**
 * 返回应用信息数据
 * {
        info: 应用信息,
        scale: 缩放比例,
        transform: 样式尺寸变化
    }
 */
data.getAppData()
```

## data.getDataSource() 
完整路径：`app.data.getDataSource`     
返回数据对象
```js
/**
 * 根据全局数据对象或远程数据对象放回绑定的数据源
 * @param {*} value 
 * @returns *
 */
data.getDataSource(value)
```

## data.clearDataAll() 
完整路径：`app.data.clearDataAll`     
清除所有数据
```js
/**
 * 清除所有数据
 */
data.clearDataAll()
```

## data.getData() 
完整路径：`app.data.getData`     
返回所有数据
```js
/**
 * 返回所有数据
 */
data.getData()
```


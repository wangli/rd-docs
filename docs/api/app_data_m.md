---
outline : deep
---
# app.data.mData    

## 说明  
完整路径：`app.data.mData`    
页面元素渲染数据对象 

 * 属性方法  
    | 名称                                    | 说明                         | 其它                     |
    | --------------------------------------- | ---------------------------- | ------------------------ |
    | AppSetup                                | 应用配置                     | -                        |
    | [elements](#mdata-elements)             | 所有元素集合                 | -                        |
    | [fillData()](#mdata-filldata)           | 填充数据                     | -                        |
    | [addElement()](#mdata-addelement)       | 添加元素                     | -                        |
    | [delElement()](#mdata-delelement)       | 删除元素                     | -                        |
    | [getElement()](#mdata-getelement)       | 返回单个元素                 |                          |
    | [appendElement()](#mdata-appendelement) | 添加已有元素到容器           | 可是编组或模块           |
    | [removeElement()](#mdata-removeelement) | 移除容器内的已有元素         | 可是编组或模块           |
    | [newMoule()](#mdata-newmoule)           | 新建模块                     |                          |
    | [delModule()](#mdata-delmodule)         | 删除模块                     |                          |
    | [getModule()](#mdata-getmodule)         | 返回模块                     | -                        |
    | [getModules()](#mdata-getmodules)       | 返回所有模块键值对集合       | -                        |
    | [getModuleList()](#mdata-getmodulelist) | 返回所有模块数组列表         | -                        |
    | [getMyElements()](#mdata-getmyelements) | 返回模块内所有元素           |                          |
    | [newGroup()](#mdata-newgroup)           | 添加一个新的组合             |                          |
    | [getGroup()](#mdata-getgroup)           | 返回组合对象                 |                          |
    | [getGroups()](#mdata-getgroups)         | 返回所有组合的键值对集合     |                          |
    | [getGroupList()](#mdata-getgrouplist)   | 返回所有组合的数组集合       |                          |
    | [bindGroup()](#mdata-bindgroup)         | 多个元素编组                 | 创建新组合并加入已有元素 |
    | [unbindGroup()](#mdata-unbindgroup)     | 解绑恢复                     |                          |
    | [getSprites()](#mdata-getsprites)       | 返回所有元素键值对集合       | 不含编组                 |
    | [getSpriteList()](#mdata-getspritelist) | 返回所有元素数组列表         | 不含编组                 |
    | [getMaxZIndex()](#mdata-getmaxzindex)   | 返回模块内元素的当前最大深度 |                          |
    | [clearData()](#mdata-cleardata)         | 清空所有内容数据             |                          |


## mData.elements 
完整路径：`app.data.mData.elements` 
以`元素id`为key的所有舞台元素的键值对集合，这里包含基本元素与编组元素，每一个元素值都是一个reactive响应式对象，
单elements本事并不是响应式的。

## mData.fillData() 
完整路径：`app.data.mData.fillData`     
渲染数据填充，也是页面元素初始化填充的所需数据。
```js
// 参数是来在应用模块列表数据
mData.fillData(modules:array)
```

## mData.addElement() 
完整路径：`app.data.mData.addElement`     
添加元素内容
```js
/**
 * 添加已有的数据模板
 * @param {string|object} value 可以是元件名称，也可是数据内容
 * @param {string|object} mid 模块id
 * @param {string} gid 编组id
 */
mData.addElement(value,mid,gid)
```

## mData.delElement() 
完整路径：`app.data.mData.delElement`     
删除元素
```js
/**
 * 删除元素
 * @param {*} id 删除的id
 * @param {*} clear 是否清除原始数据
 */
mData.delElement(id, clear = true)
```

## mData.getElement() 
完整路径：`app.data.mData.getElement`     
返回单个元素
```js
/**
 * 删除元素
 * @param {*} id 元素或编组id
 */
mData.getElement(id)
```

## mData.appendElement() 
完整路径：`app.data.mData.appendElement`     
将元素追加到容器内
```js
/**
 * 将元素追加到容器内
 * @param {*} element 元素内容（可以是对象，也可是是元素id）
 * @param {*} parentId 需要加入的容器id（模块或编组）
 */
mData.appendElement(element,parentId)
```

## mData.removeElement() 
完整路径：`app.data.mData.removeElement`     
将元素从容器内移除
```js
/**
 * 将元素从容器内移除
 * @param {*} element 
 * @param {*} parentId 
 */
mData.removeElement(id, parentId)
```

## mData.newMoule() 
完整路径：`app.data.mData.newMoule`     
新建模块
```js
/**
 * 创建一个新的模块，并添加
 * @param {*} data 初始化添加的数据内容，非必要
 * @returns 新模块数据
 */
mData.newMoule(data)
```

## mData.delModule() 
完整路径：`app.data.mData.delModule`     
删除模块数据
```js
/**
* 删除模块数据
* @param {*} mid 模块id
* @param {*} clear 是否清除所有模块内数据
* @returns 
 */
mData.delModule(mid, clear = false)
```

## mData.getModule() 
完整路径：`app.data.mData.getModule`     
返回某个模块
```js
/**
 * 返回某个模块
* @param {*} mid 模块id
 */
mData.getModule(id)
```

## mData.getModules() 
完整路径：`app.data.mData.getModules`     
返回当前所有模块键值对集合
```js
/**
 * 返回当前所有模块键值对集合
 */
mData.getModules()
```

## mData.getModuleList() 
完整路径：`app.data.mData.getModuleList`     
返回当前所有（数组）
```js
/**
* 返回当前所有（数组）
* @param {string|function} filter 过滤键值，或自定义过滤方法
* @param {string} key 过滤键名
* @returns 
*/
mData.getModuleList(filter, key = 'type')
```

## mData.getMyElements() 
完整路径：`app.data.mData.getMyElements`     
返回模块中的所有元素
```js
/**
* 返回模块中的所有元素
* @param {*} mid 模块id
* @param {*} source 是否是原始数据
* @returns 
*/
mData.getMyElements(mid = 'default', source = false)
```

## mData.newGroup() 
完整路径：`app.data.mData.newGroup`     
添加一个组合
```js
/**
* 添加一个组合
* @param {object} data 数据对象
* @param {string} mid 模块id
* @returns 
*/
mData.newGroup(data, mid = 'default')
```

## mData.getGroup() 
完整路径：`app.data.mData.getGroup`     
返回某个组合
```js
/**
* 返回某个组合
* @param {string} id 
* @returns 
*/
mData.getGroup(id)
```

## mData.getGroups() 
完整路径：`app.data.mData.getGroups`     
返回当前所有组合
```js
/**
 * 返回当前所有组合
 */
mData.getGroups()
```

## mData.getGroupList() 
完整路径：`app.data.mData.getGroupList`     
返回当前所有（数组）
```js
/**
 * 返回当前所有（数组）
 */
mData.getGroupList()
```

## mData.bindGroup() 
完整路径：`app.data.mData.bindGroup`     
创建新组合并加入已有元素
```js
/**
* 创建新组合并加入已有元素
* @param {array} ids 需要绑定编组的元素id
* @param {string} mid 当前模块id
* @returns 
*/
mData.bindGroup(ids, mid = 'default')
```

## mData.unbindGroup() 
完整路径：`app.data.mData.unbindGroup`     
编组解绑，并删除这个组合
```js
/**
* 编组解绑，并删除这个组合
* @param {*} gpid 组合id
* @param {*} add 是否移除后添加到源有模块中
* @returns 
*/
mData.unbindGroup(gpid, add = true)
```

## mData.getSprites() 
完整路径：`app.data.mData.getSprites`     
返回元件数据集合（以id键名）
```js
/**
 * 返回元件数据集合（以id键名）
 */
mData.getSprites()
```


## mData.getSpriteList() 
完整路径：`app.data.mData.getSpriteList`     
返回元件数据集合（数组）
```js
/**
* 返回元件数据集合（数组）
* @param {string} mid 模块id
* @returns array
*/
mData.getSpriteList(mid)
```


## mData.getMaxZIndex() 
完整路径：`app.data.mData.getMaxZIndex`     
返回模块内元素的当前最大深度
```js
/**
* 返回模块内元素的当前最大深度
* @param {string} mid 模块id
*/
mData.getMaxZIndex(mid)
```


## mData.clearData() 
完整路径：`app.data.mData.clearData`     
清空所有内容数据
```js
/**
 * 清空所有内容数据
 */
mData.clearData()
```

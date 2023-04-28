---
outline : deep
---

# app.helper 
操作助手

## 事件维护

### helper.addEvent()  
为元素添加一个事件  
 ```js
 /**
 * 为元素添加一个事件
 * @param {string} id 元素id
 * @param {string} eventName 事件名称 
 * @param {string} pams 事件参数 
 */
 helper.addEvent(id, eventName, pams)
 ```    

### helper.removeEvent()  
 删除元素某一事件  
 ```js
/**
 * 删除元素某一事件
 * @param {*} id 元素id
 * @param {*} eventName 事件名称 
 */
 helper.removeEvent(id, eventName)
 ```    
  
### helper.editEvent()  
返回事件信息 
 ```js
/**
 * 编辑元素事件参数
 * @param {string} id 元素id
 * @param {string} eventName 事件名称 
 * @param {string} pams 事件参数 
 */
 helper.editEvent(id, eventName, pams)
 ```    
 
### helper.getEvent()  
返回事件信息 
 ```js
 /**
 * 返回事件信息，eventName不传时返回所有事件列表
 * @param {string} id 元素id
 * @param {string} eventName 事件类型
 * @param {boolean} index 只返回事件所在列表的索引位置
 * @returns 
 */
 helper.getEvent(id, eventName, index = false)
 ```    

## 配置事件动作
 
### helper.addEventAction()  
为事件添加一个动作  
 ```js
/**
 * 为事件添加一个动作
 * @param {string} actionId 动作id
 * @param {object|string} target 添加的目标对象，事件的响应对象，元素id 
 * @param {string} eventName 事件名称，通过元素id添加动作时，必须包含一个事件名称
 */
 helper.addEventAction(actionId, target, eventName = "")
 ```    
 
### helper.editEventAction()  
编辑当前元素向触发的动作传值  
 ```js
 /**
 * 编辑当前元素向触发的动作传值
 * @param {*} actionId 
 * @param {*} target 
 * @param {*} eventName 
 * @param {*} value 
 */
 helper.editEventAction(actionId, target, eventName, value)
 ```    
 
### helper.removeEventAction()  
删除事件上的动作 
 ```js
 /**
 * 删除事件上的动作
 * @param {string} actionId  动作id
 * @param {*} target 目标对象
 * @param {*} eventName 事件名称
 * @param {*} removeSource 是否删除源头
 * @returns 
 */
 helper.removeEventAction(actionId, target, eventName = "", removeSource = false)
 ```    
 

 ### helper.getSpriteActions()  
获取元素上的所有动作  
 ```js
 /**
 * 获取元素上的所有动作
 * @param {*} id 目标对象id
 * @param {*} event 事件名称
 * @returns 获取所有元素的所有动作id信息
 */
 helper.getSpriteActions(id, event)
 ```    

 ## 元素模块

###  helper.setZindex()  
调整元素层级  
 ```js
 /**
 * 调整元素层级
 * @param {string}} spid 
 * @param {string} level 
 */
 helper.setZindex(spid, level = 'up')
 ```    

### helper.copy()  
复制元素数据
```js
/**
 * 复制元素数据
 * @param {*} id 需要复制的数据id
 * @param {*} clear 是否清除事件与数据
 */
helper.copy(id, clear)
```    


### helper.copyAdd()  
复制元素并添加
```js
/**
 * 复制元素并添加
 * @param {*} sid 需要复制的数据id
 * @param {*} option 数据覆盖
 * @param {*} gpid 所在组id
 */
helper.copyAdd(sid, option, gpid = null)
```    


### helper.changeModuleShow()  
切换模块  
 ```js
 /**
 * 切换模块
 * @param {*} id 需要显示的模块id
 * @param {*} ids 跳过不处理的id数组
 */
 helper.changeModuleShow(id, ids)
 ```    
 
 ## 其它

### helper.jsonData()    
将一个对象转换为纯数据对象，也可以是将数据对象拷贝一份。


### helper.getBodyData()  
转换接口传参转换  
 ```js
/**
 * 转换接口传参转换（数组转请求body值）
 * @param {Array} data 
 * @returns 
 */
 helper.getBodyData(data)
 ```    

### helper.extractData()  
提取原来数据中的相关数据，转换  
 ```js
/**
 * @param {*} data 提取数据
 * @param {*} config 提取规则
 * @returns
 */
 helper.extractData(data, config)
 ```    
```js
/**
 * 提取原来数据中的相关数据，转换后如下
 * config是提取规则，规则主要是两个值x和y值
 * x是一个横向的数据的提取规则
 * y是一个纵向的多组数据的提取规则
 * 任何一个规则都包含三个属性值
 * (name：姓名名称，path：提取深度路径，mapKey：提取所在深度的具体值)
 * 示例：
 * 数据源
 *  {
    base: {
        name: 'wangli',
        age: 18,
        ued: [{
                year: '2010',
                fk: {a: 11,b: 99}
            },
            {
                year: '2011',
                fk: {a: 15,b: 80}
            },
            {
                year: '2012',
                fk: {a: 30,b: 60}
            }]
        }
    }
 * -------------------------------------------------------------------------
  提取规则 1
  {name:'year',path:'base.ued',mapKey:'year',format:{func:'dayjs',rule:''}}
  返回结果
  { year:['2010','2011','2012'] }
 * -------------------------------------------------------------------------
  提取规则 2
  [
  {name:'year',path:'base.ued',mapKey:'year'},
  {name:'name',path:'base.name',mapKey:''},
  ]
  返回结果
  {
  year:['2010','2011','2012'],
  name:'wangli'
  }
 * -------------------------------------------------------------------------
  提取规则 3
  {
   x:{name:'年份',path:'base.ued',mapKey:'year',format:null},
   y:[{name:'张三',path:'base.ued',mapKey:'fk.a',format:null},
   {name:'张三',path:'base.ued',mapKey:'fk.a',format:null}]
  }
  返回结果
  [
    [ '年份', '张三', '李四' ],
    [ '2010', 11, 99 ],
    [ '2011', 15, 80 ],
    [ '2012', 30, 60 ]
  ]
 * -------------------------------------------------------------------------
 */
```
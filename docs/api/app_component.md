---
outline : deep
---

# app.component 
组件管理器一般用于引擎内部使用，如果存在运行过程中的一些调整覆盖，可以考虑以下方法。

::: warning
一旦组件使用install注册安装便不可以卸载
:::
## 属性  
| 名称            | 类型     | 说明                                         |
| --------------- | -------- | -------------------------------------------- |
| iComponents     | object   | 所有已安装组件                               |
| iComponentsInfo | reactive | 所有已安装组件的信息内容，是一个reactive对象 |
| componentItems  | array    | 所有添加进来的组件数组                       |

## 方法
### component.install()   
安装已有组件，不传参数将安装所有已添加组件。 
 ```js
 component.install(com:Object|Array)
 ```    
 安装组件   
  * 参数  
    | 参数 | 类型   | 必要 | 说明     |
    | ---- | ------ | ---- | -------- |
    | com  | object | 必填 | 组件对象 |
  

 
 ###  component.getItems()   
返回已安装组件列表 
 
 ###  component.getEvents()   
返回组件事件（含默认事件）    
 ```js
 component.getEvents(name:String)
 ```    
  * 参数  
    | 参数 | 类型   | 必要 | 说明     |
    | ---- | ------ | ---- | -------- |
    | name | string | 必填 | 组件名称 |

 
###  component.getMyEvents()     
返回组件自定义事件
 ```js
 component.getMyEvents(name:String)
 ```    
  * 参数  
    | 参数 | 类型   | 必要 | 说明     |
    | ---- | ------ | ---- | -------- |
    | name | string | 必填 | 组件名称 |

 
###  component.getDefaultData()   
返回组件默认数据 
 
  
###  component.add()   
添加组件 
  
###  component.del()   
删除组件 
   
 ###  component.removeAll()   
删除所有组件 
 
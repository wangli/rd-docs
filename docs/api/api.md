---
outline : deep
---

# rd-runtime

数据可视化渲染引擎接口
```js
import {createVapp,cmd,secrecy,remote,EVENTS,dataOptions,uitils} from 'rd-runtime'
/**
 * 全局接口
 * createVapp：创建应用实例
 * EVENTS：应用内置事件类型
 * cmd：事件命令操作
 * secrecy：加解密方法
 * remote：远程数据管理
 * dataOptions：数据配置筛选项
 * utils：常用工具库
 */
```

## createVapp    
创建一个项目应用实例，createVapp方法创建的对象。实际是对App类实例化后的相关初始化操作
 ```js
import {createVapp} from 'rd-runtime'

const app=createVapp({
   // 项目配置选项
})

 ```   
 * 配置项参数  
    | 参数        | 类型             | 默认值 | 说明                   |
    | ----------- | ---------------- | ------ | ---------------------- |
    | dom         | `string,Element` | -      | 应用需要挂载的页面位置 |
    | plugins     | `array,object`   | -      | 需要注册的内部组件插件 |
    | data        | `object`         | -      | 应用数据               |
    | scale       | `boolean`        | true   | 是否开启自动缩放       |
    | display     | `boolean`        | -      | 自动显示               |
    | interaction | `boolean`        | true   | 开启应用操作用户交互   |
    | slots       | `object`         | -      | 舞台显示的底部内容插槽 |


## remote  
事件命令管理对象，主要用于监听应用事件，与向应用执行任务动作   
 ```js
import {cmd,EVENTS} from 'rd-runtime'

cmd.addEventListener(EVENTS.DATA_LOADED, app => {
   // 数据初始化成功
})
 ```  
 * 方法函数  
    | 方法             | 参数                 | 说明         |
    | ---------------- | -------------------- | ------------ |
    | addEventListener | (事件类型,执行方法)  | 监听应用事件 |
    | execute          | (动作,元素id,应用id) | 执行应用动作 |


### remote.requestData()  
远程数据管理对象   
 ```js
import {remote} from 'rd-runtime'
// 请求项目页面所有接口
remote.requestData()
 ```  

 * 方法函数  
    | 方法        | 参数                  | 说明         |
    | ----------- | --------------------- | ------------ |
    | requestData | (强制刷新,接口对象id) | 请求接口     |
    | requestData | (,元素id,应用id)      | 执行应用动作 |



## cmd  
命令控制器  
 ```js
 import { cmd } from 'rd-runtime'
 ```   

### cmd.execute()  
 * 方法函数  
 ```js
 cmd.execute(action:String|Object, target:Object)  
 ```  
 执行一个命令    
 * 参数  
    | 参数   | 类型   | 必要 | 说明     |
    | ------ | ------ | ---- | -------- |
    | action | string | 必填 | 命令     |
    | target | object | -    | 执行对象 |

### cmd.addEventListener()  
 * 方法函数  
 ```js
 cmd.addEventListener(eventName:String, fun:Function)  
 ```  
 添加一个事件方法    
 * 参数  
    | 参数      | 类型     | 必要 | 说明 |
    | --------- | -------- | ---- | ---- |
    | eventName | string   | 必填 | 命令 |
    | fun       | function | 必填 | 方法 |
[eventName系统内置](const.md)

### cmd.removeEventListener()  
 * 方法函数  
 ```js
 cmd.removeEventListener(eventName:String, fun:Function)  
 ```  
 删除一个事件方法    
 * 参数  
    | 参数      | 类型     | 必要 | 说明 |
    | --------- | -------- | ---- | ---- |
    | eventName | string   | 必填 | 命令 |
    | fun       | Function | 必填 | 方法 |


---
outline : deep
---

# App类 
通过createVapp创建的应用实例
*  `appSetup`：应用的基本配置信息
   * `interaction: false` 开启交互动作
   * `clickCursor: 'auto'` 点击事件鼠标经过光标样式
   * `scale: false` 是否开启整体缩放
   * `status: 'none'` 应用状态，none未创建，create已创建，display已展示，destroy销毁
   * `dom: null` 所在页面容器
*  `app.vm`：vue的实例对象

`app.appSetup` => `AppSetup` 对象会注入到添加到舞台的每一个元素的属性中，在生命周期created后可以使用


## app.create()   
创建数据页面渲染方法，创建舞台后，默认挂载到页面（如果之前已经显示过页面）  
 * 参数  
    | 参数  | 类型   | 默认 | 说明                  |
    | ----- | ------ | ---- | --------------------- |
    | props | Object | ---  | vue3官方createApp参数 |

## app.display()   
页面显示

## app.remove()   
删除应用的页面渲染

## app.destroy()   
销毁应用    
 * 参数  
    | 参数      | 类型    | 默认 | 说明         |
    | --------- | ------- | ---- | ------------ |
    | clearData | boolean | ---  | 是否清楚数据 |

## app.initData()   
应用数据初始化（初始填装数据信息）,initData方法是一个异步函数

## app.getData()   
返回应用数据

## app.addComponent()   
添加组件

## app.use()   
插件安装， install可以是一个方法，也可以是一个带有install方法的对象。     
install方法接收一个完整的App类的实例对象
* 参数  
  | 参数    | 类型   | 默认 | 说明               |
  | ------- | ------ | ---- | ------------------ |
  | install | Object | --   | 插件安装方法或对象 |



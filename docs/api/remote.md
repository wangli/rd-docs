# remote    
远端数据对象  
 ```js
 import { remote } from 'rd-runtime'
 ```   
```js
// 对象的基础属性及方法
{
    id:'自动生成的唯一标识',
    url:'接口地址',
    body:'附带的请求数据',
    method:'请求方式',
    data:'reactive对象，返回被过滤的数据',
    sourceData:'原数据，唯过滤',
    isloading:'是否在加载中',
    status:'wait|request|success',
    err:'错误信息',
    extractRule:'过滤规则',
    //request请求远程数据方法，请求成功后会更新数据到data中
    request()
 }
 ```  
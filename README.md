# sui-processing
简洁优雅的loading动画小插件，有加载中、成功、错误三种状态，可随时切换状态并分别对应三种不同的动画和配色，支持链式操作。

## 用法

### 引入脚本库
```html
<script src="path/to/sui-processing.min.js"></script>
```

### HTML里随便添加几个按钮，用来绑定事件，测试效果
```html
<button id="show">显示窗口</button>
<button id="success">成功</button>
<button id="error">失败</button>
<button id="loading">加载中</button>
```

### js部分
```html
<script>
    // 实例化并添加默认配置
    var sp = new SuiProcessing({
        // 设置窗口默认状态，默认为loading，可选：loading，success，error
        defaultStatus: 'loading',
        // 设置窗口默认提示文字
        tipsText: '处理中，请稍后',
        // 设置关闭窗口的延时时长，在调用hide()方法时起作用
        hideDelay: 2000
    })
    // 调用sp.show()方法，显示窗口，因为上面设置了defaultStatus为loading，所以调用show()方法时为loading动画
    document.getElementById("show").addEventListener('click', function() {
        sp.show()
    })
    // 使用toSuccess()方法将窗口状态切换为成功，并显示成功动画，然后调用hide()方法将窗口关闭
    document.getElementById("success").addEventListener('click', function() {
        // 支持链式操作
        // 先将状态置为loading
        sp.show().toLoading()
        setTimeout(function() {
            sp.toSuccess({
                text: '成功！'
            }).hide()
        }, 1000)
    })
    // 使用toError()方法将窗口状态切换为失败，并显示失败动画，然后调用hide()方法将窗口关闭
    document.getElementById("error").addEventListener('click', function() {
        sp.show().toLoading()
        setTimeout(function() {
            sp.toError({
                text: '失败！'
            }).hide()
        }, 1000)
    })
</script>
```

## 参数及方法说明
### 初始化参数，看下面示例注释即可
```js
var sp = new SuiProcessing({
    // 设置窗口默认状态，默认为loading，可选：loading，success，error
    defaultStatus: 'loading',
    // 设置窗口默认提示文字
    tipsText: '处理中，请稍后',
    // 设置关闭窗口的延时时长，在调用hide()方法时起作用
    hideDelay: 2000
})
```
### 显示窗口
`show()`
#### 用法
```js
sp.show({
    // 可选参数，callback，添加窗口显示后的执行的回调函数
    callback: function() {
        
    }
})
```
### 关闭窗口
`hide()`
#### 用法
```js
sp.hide({
    // 可选参数，callback，添加窗口关闭后的执行的回调函数
    callback: function() {
        
    },
    // 可选参数，hideDelay，设置延迟多少毫秒后关闭窗口，默认为2000
    hideDelay: 1000
})
```

### 支持链式写法，如下
`sp.show().toLoading().hide()`

### 切换为loading状态，并显示转圈动画
`toLoading()`
#### 用法
```js
sp.toLoading({
    // 可选参数，text，设置该状态下的提示文字
    text: '处理中...'
})
```

### 切换为success状态，并显示对号动画
`toSuccess()`
#### 用法
```js
sp.toSuccess({
    // 可选参数，text，设置该状态下的提示文字
    text: '操作成功'
})
```

### 切换为error状态，并显示叉号动画
`toError()`
#### 用法
```js
sp.toError({
    // 可选参数，text，设置该状态下的提示文字
    text: '操作失败'
})
```
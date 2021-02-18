import './assets/style.scss'

// 使用方法：
// sp.show().toSuccess({
//     text: '处理成功'
// }).hide()
/**
 * 组件主类
 * @class SuiProcessing
 * @constructor
 * @param {Object} options 实例化参数
 */
export default class SuiProcessing {
    constructor(options) {
        const defaultOptions = {
            // 初始化默认状态
            defaultStatus: 'loading',
            // 初始化默认提示文字
            tipsText: '处理中，请稍后',
            hideDelay: 2000
        }
        this.options = Object.assign(defaultOptions, options)

        this.randomString = this.randomString(9)
        this.wrapperId = 'spid-' + this.randomString
        this.circleWrapId = 'spcwid-' + this.randomString
        this.textId = 'sptxt-' + this.randomString
        this.checkmarkId = 'spcheckmark-' + this.randomString
        this.crossmarkId = 'spcrossmark-' + this.randomString

        this.wrapperDom = null
        this.circleWrapDom = null
        this.textDom = null

        this.initHtml()
    }
    initHtml() {
        var warpper = document.createElement("div");
        warpper.classList.add("sui-processing", 'sp-status-' + this.options.defaultStatus);
        warpper.id = this.wrapperId
        let html = `
        <div class="sui-processing-inner">
            <div class="sui-processing-icon">
                <div class="sp-loading-icon">
                    <div class="sk-chase">
                        <div class="sk-chase-dot"></div>
                        <div class="sk-chase-dot"></div>
                        <div class="sk-chase-dot"></div>
                        <div class="sk-chase-dot"></div>
                        <div class="sk-chase-dot"></div>
                        <div class="sk-chase-dot"></div>
                    </div>
                </div>
                <div class="sp-circle-icon">
                    <div class="sp-circle-wrap" id=${this.circleWrapId}>
                        <div class="sp-checkmark" id="${this.checkmarkId}"></div>
                        <div class="sp-crossmark" id="${this.crossmarkId}"></div>
                        <div class="sp-circle-part sp-cp-left">
                            <div class="sp-circle sp-circle-left"></div>
                        </div>
                        <div class="sp-circle-part sp-cp-right">
                            <div class="sp-circle sp-circle-right"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sui-processing-text" id=${this.textId}>
                ${this.options.tipsText}
            </div>
        </div>
        `
        warpper.innerHTML = html
        document.body.appendChild(warpper)

        this.wrapperDom = document.getElementById(this.wrapperId)
        this.circleWrapDom = document.getElementById(this.circleWrapId)
        this.textDom = document.getElementById(this.textId)
        this.checkmarkDom = document.getElementById(this.checkmarkId)
        this.crossmarkDom = document.getElementById(this.crossmarkId)
    }
    /**
     * 显示提示框方法
     * @method show
     * @for SuiProcessing
     * @param {Object} options {callback：显示窗口后触发的回调函数}
     * @return {Object} 返回实例自身，用于链式调用
     */
    show(options) {
        this.wrapperDom.classList.add('sp-show')
        if(options && options.callback) {
            let { callback } = options
            callback && Object.prototype.toString.call(callback) === '[object Function]' ? callback(this) : void(0)
        } 
        return this
    }
    /**
     * 隐藏提示框方法
     * @method hide
     * @for SuiProcessing
     * @param {Object} options {hideDelay：延迟多久后隐藏窗口，callback：隐藏窗口后触发的回调函数}
     * @return {Object} 返回实例自身，用于链式调用
     */
    hide(options) {
        let hideDelay = this.options.hideDelay
        if(options && options.hasOwnProperty('hideDelay')) {
            hideDelay = options.hideDelay
        }
        setTimeout(() => {
            this.wrapperDom.classList.remove('sp-show')
            if(options && options.callback) {
                options.callback && Object.prototype.toString.call(options.callback) === '[object Function]' ? options.callback(this) : void(0)
            }
        }, hideDelay)

        return this
    }
    /**
     * 更改提示框状态为加载中
     * @method toLoading
     * @for SuiProcessing
     * @param {Object} data {text：窗口提示文字}
     * @return {Object} 返回实例自身，用于链式调用
     */
    toLoading(data) {
        this.wrapperDom.classList.remove('sp-status-success', 'sp-status-error', 'sp-status-warning')
        this.wrapperDom.classList.add('sp-status-loading')
        this.textDom.innerText = data.text ? data.text : '处理中，请稍后...'

        return this
    }
    /**
     * 更改提示框状态为成功
     * @method toLoading
     * @for SuiProcessing
     * @param {Object} data {text：窗口提示文字}
     * @return {Object} 返回实例自身，用于链式调用
     */
    toSuccess(data) {
        this.wrapperDom.classList.remove('sp-status-loading', 'sp-status-error', 'sp-status-warning')
        this.wrapperDom.classList.add('sp-status-success')

        this.circleWrapDom.classList.remove('sp-error')
        this.circleWrapDom.classList.add('sp-success')

        this.textDom.innerText = data.text ? data.text : '处理成功！'
        
        return this
    }
    /**
     * 更改提示框状态为失败
     * @method toLoading
     * @for SuiProcessing
     * @param {Object} data {text：窗口提示文字}
     * @return {Object} 返回实例自身，用于链式调用
     */
    toError(data) {
        this.wrapperDom.classList.remove('sp-status-loading', 'sp-status-warning', 'sp-status-success')
        this.wrapperDom.classList.add('sp-status-error')

        this.circleWrapDom.classList.remove('sp-success')
        this.circleWrapDom.classList.add('sp-error')

        this.textDom.innerText = data.text ? data.text : '处理失败！'
        
        return this
    }
    // 生成随机id序列
    randomString(len) {
    　　len = len || 32;
    　　var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';//把这些容易混淆的字符oOLl,9gq,Vv,Uu,I1  排除掉他们，以防混淆和错乱
    　　var maxPos = $chars.length;
    　　var rand= '';
    　　for (let i = 0; i < len; i++) {
    　　　　rand+= $chars.charAt(Math.floor(Math.random() * maxPos));
    　　}
    　　return rand;
    }
}
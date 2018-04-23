//暴露全局变量Redux,这个js文件只会对外暴露Redux这个变量
//等价于window.Redux = {}
var Redux = {};	

//函数自执行,为Redux赋值; 避免全局变量污染
(function(exports) {
	//声明一个打印输出的方法，用来调试
	var rdxLog = (...arg) => console.log('redux.js-log  ===> ',...arg);

	//这里声明的都是局部变量
	var a = 32;
	var b = 'xxx';

	//这五个方法是，Redux核心的方法，会在后面的步骤中实现它们
  exports.createStore = () => rdxLog('createStore');
  exports.combineReducers = () =>rdxLog('combineReducers');
  exports.bindActionCreators = () => rdxLog('bindActionCreators');
  exports.applyMiddleware = () => rdxLog('applyMiddleware');
  exports.compose = () => rdxLog('compose');
})(Redux)



//暴露全局变量Redux,这个js文件只会对外暴露Redux这个变量
//等价于window.Redux = {}
var Redux = {};

//函数自执行,为Redux赋值; 避免全局变量污染
(function(exports) {
	//声明一个打印输出的方法，用来调试
	//参数中写(...arg)等价于es5的arguments,有的es6就直接可以用...代替,这里的arg是传进来的参数数组
	//console.log中的...arg是把arg这个数组展开,主要用在与传参，
	//相当于(console.log('redux.js-log  ===> ',arg[0],arg[1],arg[2],arg[n]))
	var rdxLog = (...arg) => console.log('redux.js-log  ===> ',...arg);

	//这里声明的都是局部变量
	//用math.random生成随机数，转成36进制保证不重复，split('').join('.')只是为了输出好看
	var ActionTypes = {
		INIT:'initState:' + Math.random().toString(36).substring(7).split('').join('.'),
	}
	/*
	输出查看随机数的值，可以打开看看
	for (var i = 0; i < 100; i++) {
		rdxLog(Math.random().toString(36).substring(7).split('').join('.'));
	}
	*/

	function createStore(reducer) {
		var state;

		//返回当前state
		function getState() {
			return state;
		}

		//把用户传过来的reducer、action组合在一起，所有信息都是用户定义的，store负责组装
		function dispatch(action) {
			state = reducer(state, action);
		}

		//最开始执行dispatch一次，获取reducer给的默认state值
		dispatch(ActionTypes.INIT);

		var store = {
			getState,
			dispatch
		};
		return store;
	}


	//这五个方法是，Redux核心的方法，会在后面的步骤中实现它们
  exports.createStore = createStore;
  exports.combineReducers = () =>rdxLog('combineReducers');
  exports.bindActionCreators = () => rdxLog('bindActionCreators');
  exports.applyMiddleware = () => rdxLog('applyMiddleware');
  exports.compose = () => rdxLog('compose');

  //为了方便，把rdxLog导出
  exports.rdxLog = rdxLog;
})(Redux)

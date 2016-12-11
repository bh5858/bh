var app = angular.module("myApp", []);
//app.controller("myFirstCtrl", ["$scope", function($scope) {
//	$.ajax({
//		type:"get",
//		url:"data/data.json",
//		success:function(data){
//			$scope.data = data;
//		}
//	});
//	
//}])	
app.controller("myFirstCtrl",function($scope){
	var datas=[
{"num":1,"name":"张三1","note":"zhangsan1","state":"在线","time":"2015-06-01","last":"2016-2-1","type":"个人账号","id":1},
{"num":2,"name":"张三2","note":"zhangsan1","state":"离线","time":"2015-06-05","last":"2016-3-1","type":"对公账号","id":2},
{"num":3,"name":"张三3","note":"zhangsan1","state":"在线","time":"2015-07-01","last":"2016-4-12","type":"个人账号","id":3},
{"num":4,"name":"张三4","note":"zhangsan1","state":"在线","time":"2015-08-08","last":"2016-6-14","type":"个人账号","id":4},
{"num":5,"name":"张三5","note":"zhangsan1","state":"离线","time":"2015-06-07","last":"2016-5-13","type":"对公账号","id":5},
{"num":6,"name":"张三6","note":"zhangsan1","state":"离线","time":"2015-06-01","last":"2016-7-15","type":"对公账号","id":6},
{"num":7,"name":"张三7","note":"zhangsan1","state":"离线","time":"2015-06-09","last":"2016-8-16","type":"个人账号","id":7},
{"num":8,"name":"张三8","note":"zhangsan1","state":"离线","time":"2015-06-10","last":"2016-9-17","type":"对公账号","id":8},
{"num":10,"name":"张三10","note":"zhangsan1","state":"在线","time":"2015-06-03","last":"2016-11-19","type":"个人账号","id":9},
{"num":9,"name":"张三9","note":"zhangsan1","state":"在线","time":"2015-01-01","last":"2016-10-18","type":"个人账号","id":10},
{"num":11,"name":"张三11","note":"zhangsan1","state":"离线","time":"2015-06-11","last":"2016-12-08","type":"个人账号","id":11},
{"num":12,"name":"张三12","note":"zhangsan1","state":"在线","time":"2015-04-12","last":"2016-2-22","type":"对公账号","id":12},
{"num":13,"name":"张三13","note":"zhangsan1","state":"在线","time":"2015-06-13","last":"2016-4-26","type":"个人账号","id":13},
{"num":14,"name":"张三14","note":"zhangsan1","state":"离线","time":"2015-04-14","last":"2016-6-25","type":"对公账号","id":14},
{"num":15,"name":"张三15","note":"zhangsan1","state":"在线","time":"2015-06-18","last":"2016-8-24","type":"个人账号","id":15},
{"num":16,"name":"张三16","note":"zhangsan1","state":"离线","time":"2015-05-19","last":"2016-10-23","type":"个人账号","id":16},
{"num":17,"name":"张三17","note":"zhangsan1","state":"在线","time":"2015-09-01","last":"2016-12-22","type":"对公账号","id":17},
{"num":18,"name":"张三18","note":"zhangsan1","state":"在线","time":"2015-12-20","last":"2016-1-21","type":"个人账号","id":18},
{"num":19,"name":"张三19","note":"zhangsan1","state":"离线","time":"2015-06-09","last":"2016-2-20","type":"对公账号","id":19},
{"num":20,"name":"张三20","note":"zhangsan1","state":"在线","time":"2015-11-24","last":"2016-3-19","type":"个人账号","id":20},
{"num":21,"name":"张三21","note":"zhangsan1","state":"离线","time":"2015-09-21","last":"2016-4-18","type":"对公账号","id":21},
{"num":23,"name":"张三23","note":"zhangsan1","state":"离线","time":"2015-04-22","last":"2016-6-15","type":"个人账号","id":22},
{"num":22,"name":"张三22","note":"zhangsan1","state":"在线","time":"2015-07-01","last":"2016-5-17","type":"个人账号","id":23},
{"num":24,"name":"张三24","note":"zhangsan1","state":"离线","time":"2015-06-01","last":"2016-7-14","type":"对公账号","id":24},
{"num":25,"name":"张三25","note":"zhangsan1","state":"在线","time":"2015-06-23","last":"2016-8-13","type":"个人账号","id":25},
{"num":26,"name":"张三26","note":"zhangsan1","state":"离线","time":"2015-09-01","last":"2016-9-12","type":"对公账号","id":26},
{"num":27,"name":"张三27","note":"zhangsan1","state":"在线","time":"2015-06-24","last":"2016-10-07","type":"个人账号","id":27},
{"num":28,"name":"张三28","note":"zhangsan1","state":"离线","time":"2015-10-25","last":"2016-11-06","type":"对公账号","id":28}
];
	$scope.datas = datas;
	$scope.remove = function(){
		$(".btn").parent().parent().remove();
	}
})
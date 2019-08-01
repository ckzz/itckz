//导航栏方法实现---方法有点笨
$(document).ready(function(){
$(".right div:eq(1)").show();
	$(".right div:eq(2)").hide();
	$(".right div:eq(3)").hide();
	$(".right div:eq(4)").hide();
	
$(".left ul li:eq(0)").click(function(){
	$(".right div:eq(1)").show();
 	$(".right div:eq(2)").hide();
 	$(".right div:eq(3)").hide();
 	$(".right div:eq(4)").hide();
})

$(".left ul li:eq(1)").click(function(){
	$(".right div:eq(2)").show();
 	$(".right div:eq(1)").hide();
 	$(".right div:eq(3)").hide();
 	$(".right div:eq(4)").hide();
})

$(".left ul li:eq(2)").click(function(){
	$(".right div:eq(3)").show();
 	$(".right div:eq(1)").hide();
 	$(".right div:eq(2)").hide();
 	$(".right div:eq(4)").hide();
})

$(".left ul li:eq(3)").click(function(){
	$(".right div:eq(4)").show();
 	$(".right div:eq(1)").hide();
 	$(".right div:eq(2)").hide();
 	$(".right div:eq(3)").hide();
})
});

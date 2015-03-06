require.config({
	paths: {
		jquery:"jquery-1.11.1"
	}
})

require(["jquery"],function($) {
	$(function() {
		$(".mail_input").blur(function() {
			var email=$(this).val();
			var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/; 
			var ismail=reg.test(email);
			if(!ismail) {
				$(".mail_error").text("邮箱格式不正确");
			}
			else {
				$(".mail_error").text("");
			}		
		})

		$(".password_input").eq(0).blur(function() {
			if($(this).val().length<6 || $(this).val().lenght>12) {
				$(".password_error").eq(0).text("密码格式不对");
			}
			else {
				$(".password_error").eq(0).text("");
			}
		})

		$(".password_input").eq(1).blur(function() {
			if($(this).val()!=$(".password_input").eq(0).val()) {
				$(".password_error").eq(1).text("两次输入的密码不一致");
			}
			else {
				$(".password_error").eq(1).text("");
			}
		})

		$(".register_btn").click(function() {
			if($(".mail_error").text()=="" && $(".password_error").text()=="") {
				switch(true) {
					case $(".mail_input").val()=="":
						$(".mail_error").text("请先填写邮箱");
						break;
					case $(".password_input").eq(0).val()=="":
						$(".password_error").eq(0).text("请先填写密码");
						break;
					case $(".password_input").eq(1).val()=="":
						$(".password_error").eq(1).text("请再次输入密码");
						break;
					default:
						var email=$(".mail_input").val();
						var password=$(".password_input").eq(0).val();
						$.post("register",{"email":email,"password":password},function(data) {
                            console.log(data);
							switch(data.code) {
								case 10001 :
									$(".mail_error").text("此邮箱已存在");
									break;
								case 10002 :
									$(".mail_error").text("邮箱格式错误");
									break;
								case 10004 :
									$(".mail_error").text("密码格式错误");
									break;
								case 0 : 
									location.href="/setting";
							}
						},"json")
				}
			}
		})
	})
})

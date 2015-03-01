require.config({
	paths: {
		jquery:"jquery-1.11.1"
	}
})

require(["jquery"],function($) {
	$(function() {
		//登出
		$(".logout").click(function() {
			$.get("logout",function(data) {
				location.href="/";
			})
		})

		$(".guide_input").eq(0).blur(function() {
			var email=$(this).val();
			var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/; 
			var ismail=reg.test(email);
			if(!ismail) {
				$(".guide_error").eq(0).text("邮箱格式不正确");
			}
			else {
				$(".guide_error").eq(0).text("");
			}		
		})

		$(".guide_next").eq(0).click(function() {
			if($(".guide_input").eq(0).val()=="") {
				$(".guide_error").text("请先填写常用邮箱");
			}
			else if($(".guide_error").text()!="") {
				return false;
			}
			else {
				var email=$(".guide_input").eq(0).val();
				// $.post(url,{"email":email},function(data) {
				// })
				$(".guide_content_ul").animate({"left":"-600px"},"fast","swing");
				$(".guide_pic_number").eq(0).addClass("active");
				$(".guide_pic_line").eq(0).addClass("active");
			}
		})

		$(".guide_next").eq(1).click(function() {
			//var bool=false;
			if($(".guide_checkbox").find("input").is(":checked")) {
				$(".guide_content_ul").animate({"left":"-1200px"},"fast","swing");
				$(".guide_pic_number").eq(1).addClass("active");
				$(".guide_pic_line").eq(1).addClass("active");
			}
			else {
				$(".guide_error_two").show();
			}
		})
	})
})
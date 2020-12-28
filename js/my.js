$(document).ready(function() {
	$('.dropdown').click(function(event) {
		event.preventDefault();
		$(this).toggleClass('open').parent().siblings().find('.dropdown').removeClass('open');
		$(this).siblings('.dropdown-menu').slideToggle(400).parent().siblings().find('.dropdown-menu').slideUp(400);
	});

	$(document).mouseup(function(e){
	  	var _con = $('.dropdown');	//設置目標區域
	  	if(!_con.is(e.target) && _con.has(e.target).length === 0){	//Mark1
	    	$('.dropdown').removeClass('open').siblings('.dropdown-menu').slideUp();
	  	}
	});
	// Mark 1 的原理：
	// 判断点击事件发生在区域外的条件是：
	// 1）点击事件的对象不是目标区域本身
	// 2）事件对象同时也不是目标区域的子元素

	$('.intro-click').click(function() {
		$('html,body').animate({scrollTop:$('#intro').offset().top}, 500)
	});

	$('.feedback-click').click(function() {
		$('html,body').animate({scrollTop:$('#feedback').offset().top}, 800);
	});
	// animate()是用來執行css所定義的動畫
	// scrollTop:$('#feedback').offset().top這段是透過offset這個方法來獲取#feedback這個區塊距離頂部的位置的值
	
	$('.intro li>a').hover(function() {
		$(this).find('img').toggleClass('animated pulse');
	});


	$('.member-work li').hover(function() {
		$(this).find('.work-title').toggleClass('active');
	});

	$('.b2top a').click(function(event) {
		event.preventDefault();
		$('html,body').animate({
			scrollTop: 0
		}, 700);
	});
});
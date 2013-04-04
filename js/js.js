var work = {
	$work_show : $('#work_show li'),
	$work_btns: $('#works_select li'),
	offon : 1,
	hide : function(i){
		$('.now_work').animate({opacity:'0',left:'50px'},'slow',function(){
			$(this).css({display:'none'});
			$('.now_work').removeClass('now_work');
			work.show(i)
		});
	},
	show : function(i){
		work.$work_show.eq(i).addClass('now_work').css({top:'-50px',display:'block',left:'0px'}).animate({opacity:'1',top:'2px'},'slow',function(){
			work.offon = 1;
		});
	},
	init : function(){
		for(var i = 0;i<15;i++){
			(function(num){
				work.$work_btns.eq(num).click(function(){
					var x = $('.now_work').index();
					console.log(x,num);
					if(x!=num&&work.offon==1){
					work.offon = 0;
					work.hide(num);
					}
				});
			})(i)
		}
		$('.pic_box img').mouseenter(function(){
			$(this).animate({top:'-120px'},300);
		}).mouseleave(function(){
			$(this).animate({top:'0px'},300);
		});
	}
};
work.init();

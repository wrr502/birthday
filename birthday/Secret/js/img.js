$(function () {
    
    var li = $('.img-li');
    var leng = li.length;
    var i=0;
	
    function feiru() {
        if ((leng - 1) > i) {
            setTimeout(function () {
                var a=new animateFct(i);
                console.log(i);
                feiru();
                i++;
            }, 4000);
        } else {
			$('.begin').text("很简单，嘻嘻");
			$('.begin').fadeIn();
            return;
        }
    };
	
    function animateFct(i) {
        var randTBArr = new Array('top', 'bottom');
        var randLRArr = new Array('right', 'left');
        var data={};
        var c = Math.floor((Math.random() * 2)+1);
        li.eq(i).css(randTBArr[c-1],'-100%');
        var d = Math.floor((Math.random() * 2)+1);
        li.eq(i).css(randLRArr[d-1],'-100%');
        li.eq(i).css('z-index',i)
        var n= Math.floor((Math.random() * 30)+(-30));
        li.eq(i).css({transform:"rotate("+n+"deg)"})
        li.eq(i).find('img').css({width:'250px',height:'350px'})
        li.eq(i).show();
        if (parseInt(li.eq(i).css('top'))<0){
            data.top=parseInt(Math.random() * 20 +5)+"%";
        }
        if (parseInt(li.eq(i).css('left'))<0){
            data.left=parseInt(Math.random() * 15 +5)+"%";
        }
        if (parseInt(li.eq(i).css('right'))<0){
            data.right=parseInt(Math.random() * 15 +5)+"%";
        }
        if (parseInt(li.eq(i).css('bottom'))<0){
            data.bottom=parseInt(Math.random() * 30 +15)+"%";
        }
        li.eq(i).stop().animate(data,3000);
    }
	
	var beg=$('.begin');
    beg.click(function(){
        $(this).hide();
        $('audio')[0].play();
        feiru();
    });
})
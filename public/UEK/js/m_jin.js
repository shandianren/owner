/**
 * Created by mayun on 2017/1/6.
 */
//ѡ�
$(function(){
    $(".li").on('click',function(){
        var i=$(this).index();
        $(".san").eq(i).addClass('active').siblings().removeClass("active");
        $(this).addClass('te').siblings().removeClass("te");
        $('.lie').eq(i).addClass('active').siblings().removeClass("active");
    })
})
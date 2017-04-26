$(function(){
    var z = /^[1-9]\d*$/;
    var s = /^1[34578]\d{9}$/;
    var t = /^[1-9][0-9]*$/;
    var a =/^[\u4E00-\u9FA5A-Za-z0-9]+$/;
    var f =/^[0-9]*$/;
    var nums = null;
    var Num = '';
     
        var json ={
         a:"弓箭坊",
         b:"南京晓庄",
         c:"南京三江学院",
         d:'三山街',
         e:'弓箭坊40号',
     }
    
    
    
    //点击南京出现城市下拉
    $(".city").on("click",function(){
        if($(".city_").css("display")=="none"){
            $(".city_").show();
            }else{
            $(".city_").hide();
        }
    })
    $(window).scroll(function(){
        $(".city_").hide();
     })
    
    
    
    
  //判断区域板块  
    $(".second").blur(function(){
        nums =  $(this).find('option:selected');
         if($(nums).text() === '区域'){
            $(".area-dr").show();
        }else{
            $(".area-dr").hide();
        }
    })
     $(".second2").blur(function(){
        nums =  $(this).find('option:selected');
         if($(nums).text() === '板块'){
            $(".area-dr").show();
        }else{
            $(".area-dr").hide();
        }
    })
     
     
    //判断户型 
     $(".type-inputa").change(function(){
        nums = $(".type-inputa").val();
        if(nums == ''){
            $(".type-dr").show();
        }else if(!z.test(nums)){
            $(".type-dr").show();
        }else{
            $(".type-dr").hide();
        }
     })
     
     $(".type-inputb").change(function(){
        nums = $(".type-inputb").val();
        if(nums == ''){
            $(".type-dr").show();
        }else if(!f.test(nums)){
            $(".type-dr").show();
        }else{
            $(".type-dr").hide();
        }
     })
     
     
     $(".type-inputc").change(function(){
        nums = $(".type-inputc").val();
        if(nums == ''){
            $(".type-dr").show();
        }else if(!f.test(nums)){
            $(".type-dr").show();
        }else{
            $(".type-dr").hide();
        }
     })
     
     $(".type-inputd").change(function(){
        nums = $(".type-inputd").val();
        if(nums == ''){
            $(".type-dr").show();
        }else if(tf.test(nums)){
            $(".type-dr").show();
        }else{
            $(".type-dr").hide();
        }
     })
     
     
     $("#est").change(function(){
         if($(".type-inputa").val()+$(".type-inputb").val()+$(".type-inputc").val()+$(".type-inputd").val() == "0000"){
              $(".type-dr").show();
         }else if(!z.test($(".type-inputa").val())||!z.test($(".type-inputb").val())||!z.test($(".type-inputc").val())||!z.test($(".type-inputd").val())){
             $(".type-dr").show(); 
         }    
     })
     
       
     //判断面积
     
     $(".por").blur(function(){
        nums = $(".por").val();
        if(nums == ''){
            $(".portion-dr").show();
        }else if(!t.test(nums)){
            $(".portion-dr").show();
        }else{
            $(".portion-dr").hide();
        }
     })
     
   
             
       //判断租金      
     
        $(".ren").blur(function(){
        nums = $(".ren").val();
        if(nums == ''){
            $(".ren-dr").show();
        }else if(!t.test(nums)){
            $(".ren-dr").show();
        }else{
            $(".ren-dr").hide();
        }
     })
        
        
        
        
        //判断小区名    模糊搜索
        
        
        
        $(".name").blur(function(){
        nums = $(".name").val();
        if(nums == ''){
            $(".plot-dr").show();
        }else if(!a.test(nums)){
            $(".plot-dr").show();
        }else{
            $(".plot-dr").hide();
        }
    })
        
        $(".name").keyup(function(){
        query();
            
  
                
         function query() {
            var val = $('.name').val();
            if(val == ''){
                $(".ser").hide();
            }
            if(val == "弓"){
                $(".ser").html("");
                $(".ser").show().append('<p>'+ json.a +' </p>');
            }
            if(val == "南"|| val=="南京"){
                $(".ser").html("");
                $(".ser").show().append('<p>'+ json.b +' </p>').append('<p> '+ json.c +' </p>');
            }
            if(val == "三"){
                $(".ser").html("");
                $(".ser").show().append('<p>'+ json.d +' </p>');
            }
        }
            
            
        $(".ser p").on("click",function(){
            var p = $(this).text();
            $(".name").val(p);
            $(".ser").hide();
        })
            
     })
         
       
        //付款方式
        $("#opt").on("click",function(){
              $(".opt").attr("checked",false);
        })
         $(".opt").on("click",function(){
              $("#opt").attr("checked",false);
        })
        
        
        
        
         
         
     //手机验证
     
     $(".gain,.sub").on("click",function(){
        Num = '';
        nums = $(".num").val();
        if(nums == ''){
            $(".mobile-dr").text("请输入手机号码").show();
        }else if(!s.test(nums)){
            $(".mobile-dr").text("请输入正确的手机号").show();
        }else{
            $(".gain").val("获取成功");
            $(".mobile-dr").hide();
        }
     })
     
     
     
     //卧室下拉
      
    $(".ren-input").blur(function(){
        nums =  $(this).find('option:selected');
         if($(nums).text() === '选择卧室内容'){
            $(".rent-dr").show(); 
        }else{
            $(".rent-dr").hide();
        }
    })
     $("ren-input2").blur(function(){
        nums =  $(this).find('option:selected');
         if($(nums).text() === '选择限制条件'){
            $(".rent-dr").show(); 
        }else{
            $(".rent-dr").hide();
        }
    })

          
       //地图   
     
     $(".plat").on("click",function(){
		 if($(this).val() == '展开地图'){
			 $(this).val("地图找房");
			 $(".shaow").css({"height": 300}).slideDown(1000);			 
		 } else {
			 $(this).val("展开地图");
			 $(".shaow").slideUp(1000);			 
		 }

	 })
     
     //上传图片
     
        $(".btn-im").on("click",function(){
             $(".btn-im").hide();
			 $(".imge").css({"height": 300}).slideDown(1000);	
	  })
        
        $(".lock").on("click",function(){
			 $(".imge").slideUp(1000);
             $(".btn-im").show();
	  })
     
     
     //信息汇总
     $(window).change(function(){
         var a =$(".name").val();
         var b =$(".second option:checked").text();
         var c =$(".second2 option:checked").text();
         var d =$(".type-inputa").val();
         var e =$(".type-inputb").val();
         var f =$(".type-inputc").val();
         var g =$(".type-inputd").val();
         var h =$(".ren-input option:checked").text();
         var i =$(".ren-input2 option:checked").text();
         var j =$(".por").val();
         var k =$(".ren").val();
         var l =$(".num").val();
         var m =$("input:checkbox[name='a']:checked").next().text();
         var n =$("input:checkbox[name='b']:checked").next().text();
         var o =$("input:checkbox[name='c']:checked").next().text();
         var p =$("input:checkbox[name='d']:checked").next().text();
         var q =$("input:checkbox[name='e']:checked").next().text();
         var r =$("input:radio[name='f']:checked").next().text();
         $(".textarea").html("小区名称：" + a + "</br>区域：" + b +"</br>区域：" + c + "</br>" + d + "室" + e + "厅" + f + "卫" + g + "阳台" +"</br>出租形式:" + r + "</br>卧室:" + h + "条件:" + i + "</br>面积:" + j + "平方米" +"</br>租金:" + k +"元/月" + "</br>付款方式：" + m + n + o + p + q + "</br>手机号码:" + l);
     })
     
   
     $(".sub").on("click",function(){
        if(!$(".plot-dr").is(":hidden")){
            $(".sub").val("提交失败");
        }else{
            $(".sub").val("提交成功");
            $(".sub").css("background","yellow");
        }
     })
     
     
     
     
     
     
     
     
     
     
     
     $(".sub").on("click",function(){
        if(!$(".plot-dr").is(":hidden")||!$(".area-dr").is(":hidden")||!$(".type-dr").is(":hidden")||!$(".rent-dr").is(":hidden")||!$(".portion-dr").is(":hidden")||!$(".ren-dr").is(":hidden")||!$(".mobile-dr").is(":hidden")){
            $(".sub").val("提交失败");
            $(".sub").css("background","red");
        }else{
            $(".sub").val("提交成功");
            $(".sub").css("background","yellow");
        }
     })
})
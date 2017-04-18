$(function(){
    var z = /^[1-9]\d*$/;
    var s = /^1[34578]\d{9}$/;
    var t = /^[1-9][0-9]*$/;
    var a =/^[\u4E00-\u9FA5A-Za-z0-9]+$/;
    var f =/^[0-9]*$/;
    var nums = null;
    var Num = '';
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
    
    
    
    
    
    $(".second").blur(function(){
        nums =  $(this).find('option:selected');
         if($(nums).text() === '区域'){
            $(".area-dr").text("&#xe607;"); 
        }else{
            $(".area-dr").text("&#xe62a;");
        }
    })
     $(".second2").blur(function(){
        nums =  $(this).find('option:selected');
         if($(nums).text() === '板块'){
            $(".area-dr").text("&#xe607;"); 
        }else{
            $(".area-dr").text("&#xe62a;");
        }
    })
     
     
     
     $(".type-input").blur(function(){
        nums = $(".type-input").val();
        if(nums == ''){
            $("type-dr").text("&#xe607;");
        }else if(!z.test(nums)){
            $("type-dr").text("&#xe607;");
        }else{
            $("type-dr").text("&#xe62a;");
        }
     })
     
     
     
     $(".por").blur(function(){
        nums = $(".por").val();
        if(nums == ''){
            $(".portion-dr").text("&#xe607;");
        }else if(!t.test(nums)){
            $(".portion-dr").text("&#xe607;");
        }else{
            $(".portion-dr").text("&#xe62a;");
        }
     })
     
     
        $(".ren").blur(function(){
        nums = $(".ren").val();
        if(nums == ''){
            $(".ren-dr").text("&#xe607;");
        }else if(!t.test(nums)){
            $(".ren-dr").text("&#xe607;");
        }else{
            $(".ren-dr").text("&#xe62a;");
        }
     })
        
        
        
        
        $(".name").blur(function(){
        nums = $(".name").val();
        if(nums == ''){
            $(".plot-dr").text("&#xe6ba;");
        }else if(!a.test(nums)){
            $(".plot-dr").text("&#xe6ba;");
        }else{
            $(".plot-dr").text("&#xe683;");
        }
     })
         
       
        
        $("#opt").on("click",function(){
              $(".opt").attr("checked",false);
        })
         $(".opt").on("click",function(){
              $("#opt").attr("checked",false);
        })
        
        
        
        
      $(".type-input").blur(function(){
        nums = $(".type-input").val();
        if(nums == ''){
            $(".type-dr").text("&#xe607;");
        }else if(!z.test(nums)){
            $(".type-dr").text("&#xe607;");
        }else{
            $(".type-dr").text("&#xe62a;");
        }
     })
         
         
         
     
     
     $(".gain").on("click",function(){
        Num = '';
        nums = $(".num").val();
        if(nums == ''){
            $(".mobile-dr").text("请输入手机号码");
        }else if(!s.test(nums)){
            $(".mobile-dr").text("请输入正确的手机号");
        }else{
            $(".gain").val("获取成功");
            $(".mobile-dr").text("请稍等");
        }
     })
     
     
     
     
      
    $(".ren-input").blur(function(){
        nums =  $(this).find('option:selected');
         if($(nums).text() === '选择卧室内容'){
            $(".rent-dr").text("&#xe607;"); 
        }else{
            $(".rent-dr").text("&#xe62a;");
        }
    })
     $("ren-input2").blur(function(){
        nums =  $(this).find('option:selected');
         if($(nums).text() === '选择限制条件'){
            $(".rent-dr").text("&#xe607;"); 
        }else{
            $(".rent-dr").text("&#xe62a;");
        }
    })

          
          
     
     $(".plat").click(function(){
		 if($(this).val() == '展开地图'){
			 $(this).val("地图找房");
			 $(".shaow").css({"height": 300}).slideDown(1000);			 
		 } else {
			 $(this).val("展开地图");
			 $(".shaow").slideUp(1000);			 
		 }

	 })
})
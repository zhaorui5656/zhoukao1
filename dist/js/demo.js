new Swiper(".box",{autoplay:2e3,loop:!0,pagination:".page"}),$.ajax({url:"/getdata",type:"GET",success:function(i){var s=JSON.parse(i);console.log(s);var a="";$.each(s.list,function(i,s){a+=" <dl><dt><img src='"+s.img+"'></dt><dd>"+s.p+"</dd></dl>"}),$(".m-top").append(a);var d="";$.each(s.ops,function(i,s){d+="  <div class='zh'><div><img src='"+s.img+"'></div><p>"+s.p+"</p></div>"}),$(".one").append(d);var o="";$.each(s.opss,function(i,s){o+="  <div class='zh'><div><img src='"+s.img+"'></div><p>"+s.p+"</p></div>"}),$(".two").append(o);var p="";$.each(s.opsx,function(i,s){p+="<div class='zh'><div><img src='"+s.img+"'></div><p>"+s.p+"</p></div>"}),$(".three").append(p);var e="";$.each(s.opsh,function(i,s){e+="<div class='zh'><div><img src='"+s.img+"'></div><p>"+s.p+"</p></div>"}),$(".for").append(e)},error:function(i){console.log(i)}}),$("footer dl").click(function(){var i=$(this).index();console.log(i),$(this).addClass("bk").siblings().removeClass("bk"),$(".main>div:eq("+i+")").addClass("by").siblings().removeClass("by")});
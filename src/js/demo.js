new Swiper(".box", {
    autoplay: 2000,
    loop: true,
    pagination: ".page"
})



$.ajax({
    url: "/getdata",
    type: "GET",
    success: function(res) {
        var da = JSON.parse(res);
        console.log(da)
        var html = "";
        $.each(da.list, function(i, v) {

            html += " <dl><dt><img src='" + v.img + "'></dt><dd>" + v.p + "</dd></dl>";
        });
        $(".m-top").append(html);


        var h = "";

        $.each(da.ops, function(i, v) {

            h += "  <div class='zh'><div><img src='" + v.img + "'></div><p>" + v.p + "</p></div>";
        });
        $(".one").append(h);


        var ht = "";
        $.each(da.opss, function(i, v) {

            ht += "  <div class='zh'><div><img src='" + v.img + "'></div><p>" + v.p + "</p></div>";;
        });
        $(".two").append(ht);


        var htt = "";
        $.each(da.opsx, function(i, v) {

            htt += "<div class='zh'><div><img src='" + v.img + "'></div><p>" + v.p + "</p></div>";
        });
        $(".three").append(htt);



        var htp = "";
        $.each(da.opsh, function(i, v) {

            htp += "<div class='zh'><div><img src='" + v.img + "'></div><p>" + v.p + "</p></div>";
        });
        $(".for").append(htp);


    },
    error: function(error) {
        console.log(error)
    }
})


$("footer dl").click(function() {
    var ins = $(this).index();
    console.log(ins);
    $(this).addClass('bk').siblings().removeClass('bk');
    $(".main>div:eq(" + ins + ")").addClass("by").siblings().removeClass("by")

})

$(document).ready(() => {
    $("#intro")
        .on("mouseenter", () => {
            $("#intro h1, #intro p").css({
                "animation": "scrollInfadeInDown 2s",
                "animation-fill-mode": "forwards"
            });
            $("#intro img").css({
                "animation": "scrollInfadeInDownPic 1s",
                "animation-fill-mode": "forwards"
            });
        });

    $("#exp").on("mouseenter", () => {
        $("#exp h1,#exp p,#exp #stop").css({
            "animation": "scrollInfadeInDown 2s",
            "animation-fill-mode": "forwards"
        });

    });

    $("#skills").on("mouseenter", () => {
        $(".circle_fadeIn").css({
            "animation": "scrollInfadeInDown 2s",
            "animation-fill-mode": "forwards"
        });
       
        canvas_fire("java_canvas", "3 years+", 100);
        canvas_fire("andr_canvas", "2 years+", 80);
        canvas_fire("c_canvas", "2 years+", 80);
        canvas_fire("web_canvas", "2 years+", 80);
        canvas_fire("sql_canvas", "1.5 years+", 70);
    });

    $("#contact").on("mouseenter", () => {
        $("#contact h1,#contact p,#contact #img,#contact #map,#contact a,#linkedIn,#github").css({
            "animation": "scrollInfadeInDown 2s",
            "animation-fill-mode": "forwards"
        });
        
    });

    $("#contact #email,#contact #emailA")
        .on("mouseenter", () => {
            $("#email").css({
                "width": "50px",
                "height": "50px"
            });
            $("#emailA").css({
                "font-size": "1.5em"
            });
        })
        .on("mouseout", () => {
            $("#email").css({
                "width": "30px",
                "height": "30px"
            });
            $("#emailA").css({
                "font-size": "1em"
            });
        });



        $(window).scroll(function() {
            var height = $(window).scrollTop();
            
            if(height<100||height>930&&height<1720||height>2600){
                //console.log("@@@"+height%200);
                $("#arrow").css({
                    "background":"transparent url(./pictures/arrow-top.png) center center no-repeat"
                })
                 $("#top").css({
                     "color":"white"
                 });
            }
            else {
             $("#arrow").css({
                 "background":"transparent url(./pictures/arrow-top-black.png) center center no-repeat"
             })
              $("#top").css({
                  "color":"black"
              });
            }
            
           
            
           
        });
        

});





function scrollToTop() {
    window.scrollTo(0, 0);
}



function canvas_fire(canvas_name, years, stop) {
    var ctx = document.getElementById(canvas_name).getContext('2d');
    var al = 0;
    var start = 4.72;
    var cw = 200;
    var ch = 200;
    var diff;


    function progressSim() {
        diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2);
        ctx.clearRect(0, 0, cw, ch);
        ctx.lineWidth = 10;
        ctx.fillStyle = 'black';
        ctx.strokeStyle = "black";
        ctx.textAlign = 'center';
        ctx.font = "30px Arial";
        ctx.fillText(years, 100, 110);
        ctx.beginPath();
        ctx.arc(100, 105, 80, start, diff / 10 + start, false);
        ctx.stroke();
        if (al >= stop) {
            clearTimeout(sim);
        }
        al++;
    }

    var sim = setInterval(progressSim, 30);
}


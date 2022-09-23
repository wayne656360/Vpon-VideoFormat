var web_url = "";
var $body = window.opera
  ? document.compatMode == "CSS1Compat"
    ? $("html")
    : $("body")
  : $("html,body");
var is_mobile =
  navigator.userAgent.match(
    /Line|J2ME|Opera Mini|SonyEricsson|Nokia|iPhone|iPod|BB10|PlayBook|android|webOS|BlackBerry|Windows Phone|Windows CE|Android/i
  ) != null;

$(function () {
  // loading
  Pace.on("done", function () {
    setTimeout(function () {
      var $container = $("#progress");
      $container.addClass("dispear");
      $("h1").addClass("active");
    }, 300);
    setTimeout(function () {
      $(".header-txt p").addClass("active");
    }, 800);
    setTimeout(function () {
      $(".header-txt a").addClass("active");
    }, 1500);
  });
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".gsapright", {
    x: "100%",
    scrollTrigger: {
      trigger: "#view",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      id: "grid",
    },
  });
  gsap.to(".gsapleft", {
    x: "-100%",
    scrollTrigger: {
      trigger: "#view",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      id: "grid",
    },
  });
  gsap.to(".gsaptop", {
    y: "25%",
    scrollTrigger: {
      trigger: "#view",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      id: "grid",
    },
  });
  gsap.to(".gsapbottom", {
    y: "-25%",
    scrollTrigger: {
      trigger: "#view",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      id: "grid",
    },
  });
  $(window).scroll(function () {
    $("#footer").each(function () {
      if ($(this).isOnScreen(0, 0) == true) {
        $(".ba").fadeOut();
      } else {
        $(".ba").fadeIn();
      }
    });
  });

  $(".openPop").on("touchstart click", function (e) {
    var $target = $(this).attr("href");
    var $web_url = location.pathname + "?adType=" + $target;
    var $pop_url =
      "https://creative-demo.vpon.com/img/video/banner/index.html" +
      "?adType=" +
      $target;
    var $pop_url2 =
      "https://creative-demo.vpon.com/img/video/interstitial/index.html" +
      "?adType=" +
      $target;
    window.history.pushState({}, document.title, $web_url);
    if (
      $target == "31_skyladder_video" ||
      $target == "ISV_Shuffle" ||
      $target == "ISV_Pop-up" ||
      $target == "ISV_Cube" ||
      $target == "ISV_Standard" ||
      $target == "ISV_Vertical" ||
      $target == "ISV_Center" ||
      $target == "31_ISV_Standard"
    ) {
      $("#demoPop").attr("src", $pop_url2);
    } else {
      $("#demoPop").attr("src", $pop_url);
    }

    $("#pop").addClass("active");
    return false;
  });

  $(".is-anchor").click(function () {
    var $target = $(this).attr("href");
    var $targetX = $($target).offset().top;
    $("body,html").delay(300).animate({ scrollTop: $targetX }, 800);
    return false;
  });
  $(".popClose").on("touchstart click", function (e) {
    $("#pop").removeClass("active");
  });

  $(".coming").click(function () {
    alert("Coming Soon!");
    return false;
  });

  //進入抓取參數開啟pop
  var web_url = location.href;
  if(web_url.indexOf('?')!=-1){
    var aryPop = web_url.split('=');
    var PopName = aryPop[1];
    var $pop_url =
      "https://creative-demo.vpon.com/img/video/banner/index.html?adType=" +
      PopName;
    var $pop_url2 =
      "https://creative-demo.vpon.com/img/video/interstitial/index.html?adType=" + 
      PopName;
    if (
      PopName == "31_skyladder_video" ||
      PopName == "ISV_Shuffle" ||
      PopName == "ISV_Pop-up" ||
      PopName == "ISV_Cube" ||
      PopName == "ISV_Standard" ||
      PopName == "ISV_Vertical" ||
      PopName == "ISV_Center" ||
      PopName == "31_ISV_Standard"
    ) {
      $("#demoPop").attr("src", $pop_url2);
    } else {
      $("#demoPop").attr("src", $pop_url);
    }

    $("#pop").addClass("active");
    console.log(PopName)
    console.log($pop_url)
    console.log($pop_url2)
  }
});

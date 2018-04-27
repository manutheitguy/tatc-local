$(window).load(function() {
  $("body").removeClass("preload");
  $("body").removeClass("preLoaderBlock");
  $("body > div.testHidden").removeClass("test");
  $("#fadeInanimation").addClass("fadeExt");
  $(".onloadEffect").addClass("fadeIn");
  $(".onloadzoom").addClass("zoomIn");
  $(".blureAnimation").addClass("showContent");
  $(".servicesButton").addClass("bannerTextAnimation");
  $(".footerRight").hover(function() {
    $(".popUpFormThree").removeClass("wow");
  });
});
$(window).scroll(function() {
  var sc = $(window).scrollTop();
  if (sc > 20) {
    $(".magic-show  ").addClass("logosize");
  } else {
    $(".magic-show").removeClass("logosize");
  }
});
$(window).scroll(function() {
  var sc = $(window).scrollTop();
  if (sc > 20) {
    $(".nmHeading").addClass("fadeIn");
  } else {
    $(".nmHeading").removeClass("fadeIn");
  }
});
$(window).scroll(function() {
  var sc = $(window).scrollTop();
  if (sc > 40) {
    $(".movingLing").addClass("fadeIn");
  } else {
    $(".movingLing").removeClass("fadeIn");
  }
});
$(window).scroll(function() {
  var sc = $(window).scrollTop();
  if (sc > 100) {
    $(".nmContent").addClass("fadeIn");
  } else {
    $(".nmContent").removeClass("fadeIn");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 480 && scroll <= 1300) {
    $(".cwiBlocks").addClass("lineColor");
  } else {
    $(".cwiBlocks").removeClass("lineColor");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 430 && scroll <= 1300) {
    $(".borBottomNone").addClass("lineColor");
  } else {
    $(".borBottomNone").removeClass("lineColor");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 160 && scroll <= 800) {
    $(".movingLing ").addClass("lineAnimation");
  } else {
    $(".movingLing ").removeClass("lineAnimation");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 1000 && scroll <= 1500) {
    $(".movelineAnimate ").addClass("scrollAnimate");
  } else {
    $(".movelineAnimate ").removeClass("scrollAnimate");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 300 && scroll <= 850) {
    $(".mediaMovingLing ").addClass("scrollAnimate");
  } else {
    $(".mediaMovingLing ").removeClass("scrollAnimate");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 900 && scroll <= 1400) {
    $(".marSolution").addClass("scrollAnimate");
  } else {
    $(".marSolution").removeClass("scrollAnimate");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 400 && scroll <= 1100) {
    $(".seoFirm").addClass("scrollAnimate");
  } else {
    $(".seoFirm").removeClass("scrollAnimate");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 1300 && scroll <= 1800) {
    $(".seoFirm2").addClass("scrollAnimate");
  } else {
    $(".seoFirm2").removeClass("scrollAnimate");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 500 && scroll <= 1500) {
    $(".seoConsultant").addClass("scrollAnimate");
  } else {
    $(".seoConsultant").removeClass("scrollAnimate");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 180 && scroll <= 800) {
    $(".moveingLine ").addClass("lineAnimation");
  } else {
    $(".moveingLine ").removeClass("lineAnimation");
  }
});
wow = new WOW({
  animateClass: "animated",
  offset: 100,
  callback: function(box) {
    console.log("WOW: animating <" + box.tagName.toLowerCase() + ">");
  }
});
wow.init();
jQuery(document).ready(function() {
  function toggleIcon(e) {
    $(e.target)
      .prev(".panel-heading")
      .find(".fa")
      .toggleClass("fa-plus fa-minus");
  }
  $(".panel-group").on("hidden.bs.collapse", toggleIcon);
  $(".panel-group").on("shown.bs.collapse", toggleIcon);
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 3700) {
    $(".homecount").each(function() {
      $(this)
        .prop("Counter", 0)
        .animate(
          { Counter: $(this).text() },
          {
            delay: 50,
            duration: 9000,
            easing: "swing",
            step: function(now) {
              $(this).text(Math.ceil(now));
            }
          }
        );
    });
    {
      $(".homecount")
        .removeClass("homecount")
        .addClass("counted");
    }
  }
});
$(document).ready(function() {
  $(".popUpFormThree").click(function() {
    $(".onlineCostThree").addClass("viewPopup");
  });
  $(".close").click(function() {
    $(".onlineCostThree").removeClass("viewPopup");
  });
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 4400) {
    $("#counterBox")
      .contents()
      .find(".rstcount")
      .each(function() {
        $(this)
          .prop("Counter", 0)
          .animate(
            { Counter: 125112 },
            {
              duration: 4000,
              easing: "swing",
              step: function(now) {
                $(this).text(Math.ceil(now));
              }
            }
          );
      });
    {
      $("#counterBox")
        .contents()
        .find(".rstcount")
        .removeClass("rstcount")
        .addClass("counted");
    }
    $("#counterBox")
      .contents()
      .find(".rstcount2")
      .each(function() {
        $(this)
          .prop("Counter", 0)
          .animate(
            { Counter: 23250 },
            {
              duration: 4000,
              easing: "swing",
              step: function(now) {
                $(this).text(Math.ceil(now));
              }
            }
          );
      });
    {
      $("#counterBox")
        .contents()
        .find(".rstcount2")
        .removeClass("rstcount2")
        .addClass("counted");
    }
    $("#counterBox")
      .contents()
      .find(".rstcount3")
      .each(function() {
        $(this)
          .prop("Counter", 0)
          .animate(
            { Counter: 10120 },
            {
              duration: 4000,
              easing: "swing",
              step: function(now) {
                $(this).text(Math.ceil(now));
              }
            }
          );
      });
    {
      $("#counterBox")
        .contents()
        .find(".rstcount3")
        .removeClass("rstcount3")
        .addClass("counted");
    }
    $("#counterBox")
      .contents()
      .find(".rstcount4")
      .each(function() {
        $(this)
          .prop("Counter", 0)
          .animate(
            { Counter: 11345 },
            {
              duration: 4000,
              easing: "swing",
              step: function(now) {
                $(this).text(Math.ceil(now));
              }
            }
          );
      });
    {
      $("#counterBox")
        .contents()
        .find(".rstcount4")
        .removeClass("rstcount4")
        .addClass("counted");
    }
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 2600 && scroll <= 2800) {
    $(".moreSales p a").addClass("change");
  } else {
    $(".moreSales p a").removeClass("change");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 800 && scroll <= 1000) {
    $(".home .whoLinks a").addClass("underlineColor");
  } else {
    $(".home .whoLinks a").removeClass("underlineColor");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll > 900) {
    $(".home .whoLinks").css("margin-top", "25px");
  } else {
    $(".home .whoLinks").css("margin-top", "300px");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 40) {
    $("#slider").addClass("magic-padding");
  } else {
    $("#slider").removeClass("magic-padding");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 40) {
    $(".midBar").addClass("magic-show");
  } else {
    $(".midBar").removeClass("magic-show");
  }
});
$(document).ready(function() {
  $(".menu_outer ul li ul li").mouseover(function() {
    $("#magic-line").addClass("magic-none");
  });
  $(".menu_outer ul li ul li").mouseout(function() {
    $("#magic-line").removeClass("magic-none");
  });
  $(".menu_outer ul li.lastChild").mouseover(function() {
    $("#magic-line").css("display", "none");
    $("#magic-line").css("width", "0px");
  });
  $(".menu_outer ul li.lastChild").mouseout(function() {
    $("#magic-line").css("display", "block");
  });
});
$(document).ready(function() {
  $(".menu_outer nav.navbar ul li span i").click(function() {
    $(".menu_outer nav.navbar ul li.current_page_item > ul").slideToggle(500);
    $(".menu_outer nav.navbar ul li.dropmenu > ul").slideToggle(500);
  });
});
$(document).ready(function() {
  $(".carousel").carousel({ pause: "null", interval: 4000 });
  $(".carousel-inner").hover(
    function() {
      $(".carousel").carousel("pause");
    },
    function() {
      $(".carousel").carousel("cycle");
    }
  );
});
$(document).ready(function() {
  $(".bxslider").bxSlider({
    auto: true,
    pause: 3000,
    speed: 500,
    autoControls: true,
    mode: "fade",
    autoHover: false,
    autoplayHoverPause: false
  });
});
$(document).ready(function() {
  $("#back-top").hide();
  $(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $("#back-top").fadeIn();
      } else {
        $("#back-top").fadeOut();
      }
    });
    $("#back-top ").click(function() {
      $("body,html").animate({ scrollTop: 0 }, 1000);
      return false;
    });
  });
});
$(document).ready(function() {
  $(".scroll a").on("click", function(e) {
    e.preventDefault();
    var target = this.hash;
    var $target = $(target);
    $("html, body")
      .stop()
      .animate({ scrollTop: $target.offset().top }, 900, "swing", function() {
        window.location.hash = target;
      });
  });
});
$(document).ready(function() {
  $("#mainform").validationEngine("attach", {
    autoHidePrompt: true,
    scroll: true,
    autoHideDelay: 5000,
    promptPosition: "topRight:-90,15",
    focusFirstField: false,
    maxErrorsPerField: 1
  });
  $("#mainMobileform").validationEngine({
    autoHidePrompt: true,
    scroll: false,
    autoHideDelay: 5000,
    promptPosition: "topRight:-90,15",
    focusFirstField: false,
    maxErrorsPerField: 1,
    onValidationComplete: function(form, status) {
      if (status == true) {
        var form_data = $("#mainMobileform").serialize();
        $.ajax({
          type: "POST",
          url: "ajaxemail.php",
          dataType: "json",
          data: form_data,
          success: function(data) {
            if (data.status == "success") {
              $(".containermessage").css("display", "block");
              $(".containermessage > p").html(
                "We have received your query and we will contact you."
              );
              $("input").val("");
              $("textarea").val("");
              $("input:checkbox").removeAttr("checked");
              setTimeout(function() {
                $(".containermessage > p").html(" ");
              }, 5000);
            } else {
              $(".containermessage").html("Something went wrong");
              setTimeout(function() {
                $(".containermessage > p").html(" ");
              }, 5000);
            }
          }
        });
      } else {
        $("html, body").animate(
          { scrollTop: $("#contForm").offset().top },
          2000
        );
      }
    }
  });
  $("#paymentform").validationEngine("attach", {
    autoHidePrompt: true,
    scroll: true,
    autoHideDelay: 5000,
    promptPosition: "topRight:-90,15",
    focusFirstField: false,
    maxErrorsPerField: 1
  });
  $(".submitBtn").click(function() {
    $("#paymentform").attr("action", "");
    if (document.getElementById("chkr").checked) {
      var response = grecaptcha.getResponse();
      if (response.length == 0) {
        $("#paymentform").attr("action", "credit.card.php?captcha=failed");
      } else {
        $("#paymentform").attr("action", "payment-confirmation.php");
      }
    } else {
      $("#paymentform").attr("action", "credit.card.php");
    }
  });
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 1200 && scroll <= 1400) {
    $(".home .businessButton .getAudit").addClass("simpleBounce");
  } else {
    $(".home .businessButton .getAudit").removeClass("simpleBounce");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 540 && scroll <= 900) {
    $(".yellowLineAmination").addClass("animatY");
  } else {
    $(".yellowLineAmination").removeClass("animatY");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 570 && scroll <= 900) {
    $(".yellowLineAmination").addClass("animatY-line");
  } else {
    $(".yellowLineAmination").removeClass("animatY-line");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 2700 && scroll <= 2900) {
    $(".moreSales  a.hvr-grow").addClass("simpleBounce");
  } else {
    $(".moreSales  a.hvr-grow").removeClass("simpleBounce");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 4200 && scroll <= 4400) {
    $(".superCharge  button").addClass("simpleBounce");
  } else {
    $(".superCharge  button").removeClass("simpleBounce");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 4800 && scroll <= 4900) {
    $(".similarResults ul").addClass("simpleBounce");
  } else {
    $(".similarResults ul").removeClass("simpleBounce");
  }
});
function toggleIcon(e) {
  $(e.target)
    .prev(".panel-heading")
    .find(".more-less")
    .toggleClass("glyphicon-plus glyphicon-minus");
}
$(".panel-group").on("hidden.bs.collapse", toggleIcon);
$(".panel-group").on("shown.bs.collapse", toggleIcon);
$(window).load(function() {
  setTimeout(function() {
    $(".menu_outer nav.navbar ul li.lastChild").addClass("finished");
  }, 10000);
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 2110) {
    $(".aboutCount").each(function() {
      $(this)
        .prop("Counter", 0)
        .animate(
          { Counter: this.id },
          {
            duration: 4000,
            easing: "swing",
            step: function(now) {
              $(this).text(Math.ceil(now));
            }
          }
        );
    });
    {
      $(".aboutCount")
        .removeClass("aboutCount")
        .addClass("counted");
    }
  }
});
function checkpoint(field, rules, i, options) {
  var file = field.val();
  var exts = ["doc", "docx", "pdf", "PDF", "DOCX", "DOC"];
  if (file) {
    var get_ext = file.split(".");
    get_ext = get_ext.reverse();
    if ($.inArray(get_ext[0].toLowerCase(), exts) > -1) {
      return true;
    } else {
      return 'Valid file type("DOC,PDF").';
    }
  }
}
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 1900 && scroll <= 2000) {
    $(".awt .businessButton button").addClass("simpleBounce");
  } else {
    $(".awt .businessButton button").removeClass("simpleBounce");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 2450 && scroll <= 2600) {
    $(".cwt .businessButton button").addClass("simpleBounce");
  } else {
    $(".cwt .businessButton button").removeClass("simpleBounce");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 2500 && scroll <= 2700) {
    $(".dmt .businessButton button").addClass("simpleBounce");
  } else {
    $(".dmt .businessButton button").removeClass("simpleBounce");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 1800 && scroll <= 2000) {
    $(".hdt .businessButton button").addClass("simpleBounce");
  } else {
    $(".hdt .businessButton button").removeClass("simpleBounce");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 1900 && scroll <= 2100) {
    $(".ims .businessButton button").addClass("simpleBounce");
  } else {
    $(".ims .businessButton button").removeClass("simpleBounce");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 1800 && scroll <= 2000) {
    $(".oms .businessButton button").addClass("simpleBounce");
  } else {
    $(".oms .businessButton button").removeClass("simpleBounce");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 1900 && scroll <= 2100) {
    $(".obw .businessButton button").addClass("simpleBounce");
  } else {
    $(".obw .businessButton button").removeClass("simpleBounce");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 1800 && scroll <= 2000) {
    $(".rst .businessButton button").addClass("simpleBounce");
  } else {
    $(".rst .businessButton button").removeClass("simpleBounce");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 1450 && scroll <= 1700) {
    $(".sci .businessButton button").addClass("simpleBounce");
  } else {
    $(".sci .businessButton button").removeClass("simpleBounce");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 2000 && scroll <= 2200) {
    $(".woi .businessButton button").addClass("simpleBounce");
  } else {
    $(".woi .businessButton button").removeClass("simpleBounce");
  }
});
$(document).ready(function() {
  $(".cKhm .KHM-2").click(function() {
    var vl = $(this).attr("id");
    var prv = $(".displayB").attr("id");
    $("#i_" + vl).toggle();
    if ("i_" + vl != prv) {
      $("#" + prv).removeClass("displayB");
      $("#" + prv).css("display", "none");
      $("#i_" + vl).addClass("displayB");
    } else {
      $("#i_" + vl).removeClass("displayB");
    }
  });
});
$(document).ready(function() {
  $(".cKhm .KHM-2").on("click", function() {
    var vl = $(this).attr("id");
    var prv = $(".open").attr("id");
    if (vl != prv) {
      var prv = $("#" + prv).removeClass("open");
    }
    $(this).toggleClass("open");
    $(this)
      .parent()
      .toggleClass("openOut");
  });
});
$(document).ready(function() {
  $(".menu_outer .navbar-header button").on("click", function() {
    $(this)
      .parent()
      .parent()
      .parent()
      .prev()
      .toggleClass("visibleLogo");
    $(this)
      .prev()
      .toggleClass("visibleLogo");
    $(this)
      .parent()
      .parent()
      .parent()
      .parent()
      .parent()
      .toggleClass("magic-pad");
  });
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 40) {
    $(".mobStickyBar").addClass("mobStickyBarShow");
  } else {
    $(".mobStickyBarShow").removeClass("mobStickyBarShow");
  }
});
if ($(window).width() < 768) {
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $("header").outerHeight();
  $(window).scroll(function(event) {
    didScroll = true;
  });
  setInterval(function() {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 100);
  function hasScrolled() {
    var st = $(this).scrollTop();
    if (Math.abs(lastScrollTop - st) <= delta) return;
    if (st > lastScrollTop && st > navbarHeight) {
      $("header")
        .removeClass("nav-down")
        .addClass("nav-up");
    } else {
      if (st + $(window).height() < $(document).height()) {
        $("header")
          .removeClass("nav-up")
          .addClass("nav-down");
      }
    }
    lastScrollTop = st;
  }
}
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 1000 && scroll <= 1200) {
    $(".ppc .ppcsuperCharge button").addClass("simpleBounce");
  } else {
    $(".ppc .ppcsuperCharge button").removeClass("simpleBounce");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 2300 && scroll <= 2500) {
    $(".ppc .smoProposal button").addClass("simpleBounce");
  } else {
    $(".ppc .smoProposal button").removeClass("simpleBounce");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 4700 && scroll <= 4900) {
    $(".ppc #BEF .businessButton button").addClass("simpleBounce");
  } else {
    $(".ppc #BEF .businessButton button").removeClass("simpleBounce");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 3300 && scroll <= 3500) {
    $(".ppc .ppcCompanyButton button").addClass("simpleBounce");
  } else {
    $(".ppc .ppcCompanyButton button").removeClass("simpleBounce");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 5600 && scroll <= 5800) {
    $(".ppc .horAccButton button").addClass("simpleBounce");
  } else {
    $(".ppc .horAccButton button").removeClass("simpleBounce");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 900 && scroll <= 1100) {
    $(".contentWriting .superCharge button").addClass("simpleBounce");
  } else {
    $(".contentWriting .superCharge button").removeClass("simpleBounce");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 2100 && scroll <= 2200) {
    $(".contentWriting .cwbButton button").addClass("simpleBounce");
  } else {
    $(".contentWriting .cwbButton button").removeClass("simpleBounce");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 2600 && scroll <= 2800) {
    $(".contentWriting .cwqButton button").addClass("simpleBounce");
  } else {
    $(".contentWriting .cwqButton button").removeClass("simpleBounce");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 3300 && scroll <= 3500) {
    $(".contentWriting .cwtRight button").addClass("simpleBounce");
  } else {
    $(".contentWriting .cwtRight button").removeClass("simpleBounce");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 1150 && scroll <= 1350) {
    $(".seo .businessButton button").addClass("simpleBounce");
  } else {
    $(".seo .businessButton button").removeClass("simpleBounce");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 2600 && scroll <= 2900) {
    $(".seo .superCharge button").addClass("simpleBounce");
  } else {
    $(".seo .superCharge button").removeClass("simpleBounce");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 3650 && scroll <= 3950) {
    $(".seo .cfButton button").addClass("simpleBounce");
  } else {
    $(".seo .cfButton button").removeClass("simpleBounce");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 900 && scroll <= 1000) {
    $(".seo .nmTagLine button").addClass("simpleBounce");
  } else {
    $(".seo .nmTagLine button").removeClass("simpleBounce");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 5400 && scroll <= 5700) {
    $(".seo .scklast button").addClass("simpleBounce");
  } else {
    $(".seo .scklast button").removeClass("simpleBounce");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 1200 && scroll <= 1400) {
    $(".linkBuilding #BEF .businessButton button").addClass("simpleBounce");
  } else {
    $(".linkBuilding #BEF .businessButton button").removeClass("simpleBounce");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 2200 && scroll <= 2400) {
    $(".linkBuilding .lbsButton button").addClass("simpleBounce");
  } else {
    $(".linkBuilding .lbsButton button").removeClass("simpleBounce");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 2900 && scroll <= 3100) {
    $(".linkBuilding .pfButton button").addClass("simpleBounce");
  } else {
    $(".linkBuilding .pfButton button").removeClass("simpleBounce");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 1200 && scroll <= 1300) {
    $(".smo .businessButton button").addClass("simpleBounce");
  } else {
    $(".smo .businessButton button").removeClass("simpleBounce");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 3300 && scroll <= 3500) {
    $(".smo .smmButton button").addClass("simpleBounce");
  } else {
    $(".smo .smmButton button").removeClass("simpleBounce");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 2400 && scroll <= 2600) {
    $(".smo .smoProposal .blueButton").addClass("simpleBounce");
  } else {
    $(".smo .smoProposal .blueButton").removeClass("simpleBounce");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 4100 && scroll <= 4300) {
    $(".smo .smoKhmButton button").addClass("simpleBounce");
  } else {
    $(".smo .smoKhmButton button").removeClass("simpleBounce");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 1900 && scroll <= 2100) {
    $(".seoPackage .businessButton button").addClass("simpleBounce");
  } else {
    $(".seoPackage .businessButton button").removeClass("simpleBounce");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 3000 && scroll <= 3100) {
    $(".testimonials .businessButton button").addClass("simpleBounce");
  } else {
    $(".testimonials .businessButton button").removeClass("simpleBounce");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 2600 && scroll <= 2700) {
    $(".ranking #BEF .businessButton button").addClass("simpleBounce");
  } else {
    $(".ranking #BEF .businessButton button").removeClass("simpleBounce");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 1200 && scroll <= 1350) {
    $(".ormPage .businessButton button").addClass("simpleBounce");
  } else {
    $(".ormPage .businessButton button").removeClass("simpleBounce");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 2300 && scroll <= 2500) {
    $(".ormPage .osBelow button").addClass("simpleBounce");
  } else {
    $(".ormPage .osBelow button").removeClass("simpleBounce");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 3000 && scroll <= 3200) {
    $(".ormPage .opButton button").addClass("simpleBounce");
  } else {
    $(".ormPage .opButton button").removeClass("simpleBounce");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 4000 && scroll <= 4200) {
    $(".ormPage .ormTabsMessage button").addClass("simpleBounce");
  } else {
    $(".ormPage .ormTabsMessage button").removeClass("simpleBounce");
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 1500 && scroll <= 1700) {
    $(".obw .businessButton button").addClass("simpleBounce");
  } else {
    $(".obw .businessButton button").removeClass("simpleBounce");
  }
});
$(document).ready(function() {
  $(".infoEmail").html('<a href="mailto:info@tatc.co.ke">info@tatc.co.ke</a>');
  $(".salesEmail").html(
    '<a href="mailto:info@tatc.co.ke"><i class="fa fa-envelope" aria-hidden="true"></i>info@tatc.co.ke</a>'
  );
  $(".partnerEmail").html(
    '<a href="mailto:info@tatc.co.ke">info@tatc.co.ke</a>'
  );
  $(".careerEmail").html(
    '<a href="mailto:info@tatc.co.ke">info@tatc.co.ke</a>'
  );
});
jQuery(document).ready(function() {
  jQuery("#freeAudit .freeContent .freeIn .input-group span button").click(
    function() {
      jQuery("#freeAudit").slideUp("1000");
      jQuery("#report").slideDown("1000");
    }
  );
  jQuery("#report.freeAudit .modal-header button.close").click(function() {
    jQuery("#report").slideUp("1000");
    jQuery("#freeAudit").slideDown("1000");
  });
});
$(window).scroll(function() {
  var sc = $(window).scrollTop();
  if (sc > 650) {
    $("#lhc_status_container").addClass("getFixed");
  } else {
    $("#lhc_status_container").removeClass("getFixed");
  }
});
$(window).scroll(function() {
  var sc = $(window).scrollTop();
  if (sc > 250) {
    $("#back-top").addClass("getFixed");
  } else {
    $("#back-top").removeClass("getFixed");
  }
});
$(window).scroll(function() {
  var sc = $(window).scrollTop();
  if (sc > 650) {
    $(".lhc-min").addClass("getFixed");
  } else {
    $(".lhc-min").removeClass("getFixed");
  }
});
$("#jQueryButtons,#jQueryButtons2").click(function() {
  $("html, body").animate(
    { scrollTop: $("#aboutSeoExperts,#company").offset().top },
    2000
  );
});
$("#jQueryButtons1").click(function() {
  $("html, body").animate(
    { scrollTop: $("#aboutSeoExperts1,#marketing").offset().top },
    2000
  );
});
$(document).ready(function() {
  $(".tabAccHeading > .tabPara").on("click", function(e) {
    e.preventDefault();
    $(this)
      .closest(".my_featureRow")
      .toggleClass("active");
  });
});
$("document").ready(function() {
  $("#example-one .dropmenu").click(function() {
    $(".dropdown-menu").toggleClass("show");
  });
  $("#exTab1").hover(function() {
    $(".nav-pills").toggleClass("autoSlideTab");
  });
});
$(document).ready(function() {
  $(function() {
    $("a[title]").tooltip();
    var tabCarousel = setInterval(function() {
      var tabs = $(".autoSlideTab > li"),
        active = tabs.filter(".active"),
        next = active.next("li"),
        toClick = next.length ? next.find("a") : tabs.eq(0).find("a");
      toClick.trigger("click");
    }, 3000);
  });
});
$(document).ready(function() {
  $(".bx-start").click(function() {
    $(".bx-stop").addClass("active");
    $(".bx-start").removeClass("active");
  });
  $(".bx-stop").click(function() {
    $(".bx-start").addClass("active");
    $(".bx-stop").removeClass("active");
  });
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 2620) {
    $(".bbrstcount").each(function() {
      $(this)
        .prop("Counter", 0)
        .animate(
          { Counter: 800 },
          {
            duration: 4000,
            easing: "swing",
            step: function(now) {
              $(this).text(Math.ceil(now));
            }
          }
        );
    });
    {
      $(".bbrstcount")
        .removeClass("bbrstcount")
        .addClass("counted");
    }
    $(".bbrstcount2").each(function() {
      $(this)
        .prop("Counter", 0)
        .animate(
          { Counter: 350 },
          {
            duration: 4000,
            easing: "swing",
            step: function(now) {
              $(this).text(Math.ceil(now));
            }
          }
        );
    });
    {
      $(".bbrstcount2")
        .removeClass("bbrstcount2")
        .addClass("counted");
    }
    $(".bbrstcount3").each(function() {
      $(this)
        .prop("Counter", 0)
        .animate(
          { Counter: 200 },
          {
            duration: 4000,
            easing: "swing",
            step: function(now) {
              $(this).text(Math.ceil(now));
            }
          }
        );
    });
    {
      $(".bbrstcount3")
        .removeClass("bbrstcount3")
        .addClass("counted");
    }
    $(".bbrstcount4").each(function() {
      $(this)
        .prop("Counter", 0)
        .animate(
          { Counter: 10 },
          {
            duration: 4000,
            easing: "swing",
            step: function(now) {
              $(this).text(Math.ceil(now));
            }
          }
        );
    });
    {
      $(".bbrstcount4")
        .removeClass("bbrstcount4")
        .addClass("counted");
    }
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 2890) {
    $(".offrstcount").each(function() {
      $(this)
        .prop("Counter", 0)
        .animate(
          { Counter: 800 },
          {
            duration: 4000,
            easing: "swing",
            step: function(now) {
              $(this).text(Math.ceil(now));
            }
          }
        );
    });
    {
      $(".offrstcount")
        .removeClass("offrstcount")
        .addClass("counted");
    }
    $(".offrstcount2").each(function() {
      $(this)
        .prop("Counter", 0)
        .animate(
          { Counter: 350 },
          {
            duration: 4000,
            easing: "swing",
            step: function(now) {
              $(this).text(Math.ceil(now));
            }
          }
        );
    });
    {
      $(".offrstcount2")
        .removeClass("offrstcount2")
        .addClass("counted");
    }
    $(".offrstcount3").each(function() {
      $(this)
        .prop("Counter", 0)
        .animate(
          { Counter: 200 },
          {
            duration: 4000,
            easing: "swing",
            step: function(now) {
              $(this).text(Math.ceil(now));
            }
          }
        );
    });
    {
      $(".offrstcount3")
        .removeClass("offrstcount3")
        .addClass("counted");
    }
    $(".offrstcount4").each(function() {
      $(this)
        .prop("Counter", 0)
        .animate(
          { Counter: 10 },
          {
            duration: 4000,
            easing: "swing",
            step: function(now) {
              $(this).text(Math.ceil(now));
            }
          }
        );
    });
    {
      $(".offrstcount4")
        .removeClass("offrstcount4")
        .addClass("counted");
    }
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 2800) {
    $(".saiscount").each(function() {
      $(this)
        .prop("Counter", 0)
        .animate(
          { Counter: 800 },
          {
            duration: 4000,
            easing: "swing",
            step: function(now) {
              $(this).text(Math.ceil(now));
            }
          }
        );
    });
    {
      $(".saiscount")
        .removeClass("saiscount")
        .addClass("counted");
    }
    $(".saiscount2").each(function() {
      $(this)
        .prop("Counter", 0)
        .animate(
          { Counter: 350 },
          {
            duration: 4000,
            easing: "swing",
            step: function(now) {
              $(this).text(Math.ceil(now));
            }
          }
        );
    });
    {
      $(".saiscount2")
        .removeClass("saiscount2")
        .addClass("counted");
    }
    $(".saiscount3").each(function() {
      $(this)
        .prop("Counter", 0)
        .animate(
          { Counter: 200 },
          {
            duration: 4000,
            easing: "swing",
            step: function(now) {
              $(this).text(Math.ceil(now));
            }
          }
        );
    });
    {
      $(".saiscount3")
        .removeClass("saiscount3")
        .addClass("counted");
    }
    $(".saiscount4").each(function() {
      $(this)
        .prop("Counter", 0)
        .animate(
          { Counter: 10 },
          {
            duration: 4000,
            easing: "swing",
            step: function(now) {
              $(this).text(Math.ceil(now));
            }
          }
        );
    });
    {
      $(".saiscount4")
        .removeClass("saiscount4")
        .addClass("counted");
    }
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 3360) {
    $(".sficount").each(function() {
      $(this)
        .prop("Counter", 0)
        .animate(
          { Counter: 800 },
          {
            duration: 4000,
            easing: "swing",
            step: function(now) {
              $(this).text(Math.ceil(now));
            }
          }
        );
    });
    {
      $(".sficount")
        .removeClass("sficount")
        .addClass("counted");
    }
    $(".sficount2").each(function() {
      $(this)
        .prop("Counter", 0)
        .animate(
          { Counter: 350 },
          {
            duration: 4000,
            easing: "swing",
            step: function(now) {
              $(this).text(Math.ceil(now));
            }
          }
        );
    });
    {
      $(".sficount2")
        .removeClass("sficount2")
        .addClass("counted");
    }
    $(".sficount3").each(function() {
      $(this)
        .prop("Counter", 0)
        .animate(
          { Counter: 200 },
          {
            duration: 4000,
            easing: "swing",
            step: function(now) {
              $(this).text(Math.ceil(now));
            }
          }
        );
    });
    {
      $(".sficount3")
        .removeClass("sficount3")
        .addClass("counted");
    }
    $(".sficount4").each(function() {
      $(this)
        .prop("Counter", 0)
        .animate(
          { Counter: 10 },
          {
            duration: 4000,
            easing: "swing",
            step: function(now) {
              $(this).text(Math.ceil(now));
            }
          }
        );
    });
    {
      $(".sficount4")
        .removeClass("sficount4")
        .addClass("counted");
    }
  }
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 2800) {
    $(".seoscount").each(function() {
      $(this)
        .prop("Counter", 0)
        .animate(
          { Counter: 800 },
          {
            duration: 4000,
            easing: "swing",
            step: function(now) {
              $(this).text(Math.ceil(now));
            }
          }
        );
    });
    {
      $(".seoscount")
        .removeClass("seoscount")
        .addClass("counted");
    }
    $(".seoscount2").each(function() {
      $(this)
        .prop("Counter", 0)
        .animate(
          { Counter: 350 },
          {
            duration: 4000,
            easing: "swing",
            step: function(now) {
              $(this).text(Math.ceil(now));
            }
          }
        );
    });
    {
      $(".seoscount2")
        .removeClass("seoscount2")
        .addClass("counted");
    }
    $(".seoscount3").each(function() {
      $(this)
        .prop("Counter", 0)
        .animate(
          { Counter: 200 },
          {
            duration: 4000,
            easing: "swing",
            step: function(now) {
              $(this).text(Math.ceil(now));
            }
          }
        );
    });
    {
      $(".seoscount3")
        .removeClass("seoscount3")
        .addClass("counted");
    }
    $(".seoscount4").each(function() {
      $(this)
        .prop("Counter", 0)
        .animate(
          { Counter: 10 },
          {
            duration: 4000,
            easing: "swing",
            step: function(now) {
              $(this).text(Math.ceil(now));
            }
          }
        );
    });
    {
      $(".seoscount4")
        .removeClass("seoscount4")
        .addClass("counted");
    }
  }
});

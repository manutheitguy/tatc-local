if ($(window).width() > 1199) {
  var controller = new ScrollMagic.Controller();
  $(function() {
    var scene = new ScrollMagic.Scene({
      triggerElement: "#trigger1",
      duration: 600
    })
      .setPin("#pin1")
      .addIndicators({ name: "1 (duration: 1200)" })
      .addTo(controller);
  });
  $(function() {
    var scene = new ScrollMagic.Scene({
      triggerElement: "#trigger2",
      duration: 600
    })
      .setPin("#pin2")
      .addIndicators({ name: "1 (duration: 1200)" })
      .addTo(controller);
    new ScrollMagic.Scene({
      triggerElement: "#trigger2",
      duration: 500,
      offset: 300
    })
      .setClassToggle("#auditbtn", "hovereffect")
      .addTo(controller);
  });
  $(function() {
    var scene = new ScrollMagic.Scene({
      triggerElement: "#trigger3",
      duration: 600
    })
      .setPin("#pin3")
      .addIndicators({ name: "1 (duration: 800)" })
      .addTo(controller);
    new ScrollMagic.Scene({
      triggerElement: "#trigger3",
      duration: 300,
      offset: 150
    })
      .setClassToggle("#getstartbtn", "hovereffect")
      .addTo(controller);
  });
}

// the team section
$(window).scroll(function () {
  let upperElement = $(window).height() + $("#stats").offset().top;
  let windowHeight = $(window).height() + window.scrollY;
  if (windowHeight >= upperElement * 0.9) {
    $(".teamDescription,.teamProfiles,#statitics").animate(
      {
        opacity: "1",
        right: "0%",
        left: "0%",
      },
      700
    );
$("#statitics meter").animate(
  {
    width: "100%",
    height: "45%",
  },
  700
);
  }
});

// end of team section

// the Services section

$(".Service-part").mouseenter(function(){
    $(this).animate({
        left : "2.5%"
    });
})
$(".Service-part").mouseleave(function(){
    $(this).animate({
        left : "0%"
    });
})
$(".Service-part")
  .on("mouseenter", function () {
    $(this).animate({
        left : "2.5%"
    });
})
  .on("mouseleave", function () {
    $(this).animate({
        left : "0%"
    });
  });
    $(".Team-pic , .Team-list").animate(
      {
        opacity: "1",
        right: "0%",
        left: "0%",
      },
      700
    );

// end of services section

$(".description , .profile").animate(
    {
      opacity: "1",
      right: "0%",
      left: "0%",
    },
    700
  );

let now = "creativity"
$("#routesToslides h3").on("click", function () {
    if(this.innerHTML != now){
        $("."+now).slideUp();
        $("." + this.innerHTML).slideDown();
        now = this.innerHTML;
        }
});

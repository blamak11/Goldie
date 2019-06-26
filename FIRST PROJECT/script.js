$('nav a').on('click', function () {
  const goToSection = "#" + $(this).attr('class');
  console.log(goToSection)
  const $nav = $('nav')
  const navHeight = $nav.height()


  $('body, html').animate({
      scrollTop: $(goToSection).offset().top - navHeight * 2,
    },
    2000)
})
$(document).on('scroll', function () {

  const windowHeight = $(window).height()
  const scrollValue = $(this).scrollTop();
  // console.log(scrollValue);


  //section solutions
  const $art2 = $('.solution2');
  const art2FromTop = $art2.offset().top
  // console.log(art2FromTop);
  const art2Height = $art2.outerHeight()
  // console.log(art2Height);

  const $art3 = $('.solution3');
  const art3FromTop = $art3.offset().top
  const art3Height = $art3.outerHeight()

  const $art4 = $('.solution4');
  const art4FromTop = $art4.offset().top
  const art4Height = $art4.outerHeight()

  if (scrollValue > art2FromTop + art2Height - windowHeight) {
    $art2.addClass('active');
  }

  if (scrollValue > art3FromTop + art3Height - windowHeight) {
    $art3.addClass('active');
  }

  if (scrollValue > art4FromTop + art4Height - windowHeight) {
    $art4.addClass('active');
  }

  if (scrollValue < 100) {
    $('div').removeClass('active');
  }
})
const $burger = $('header i')
const $menu = $('aside')

$burger.on('click', function () {
  $menu.toggleClass('active')
  $burger.toggleClass('active')

})
const projetos = [
    new ProjetoWeb('Projeto criacação de login', 'Esse projeto simula uma página de login simples.'),
    new ProjetoWeb('Projeto de cadastro de Devs', 'Nesse projeto, ele simual um cadastro com email e senha.' ),
    new ProjetoWeb('Projeto Calculadora', 'Essa calculadora serve para calcular contas simples')
]

document.addEventListener('DOMContentLoaded', () => {
    const projectList = document.getElementById('project-list')
    projetos.forEach(projeto => {
        projectList.innerHTML += projeto.exibirProjeto()
    })
})

let currentIndex = 0

function showNextImage() {
    const carouselInner = document.querySelector('.carousel-inner')
    const items = document.querySelectorAll('.carousel-item')
    currentIndex = (currentIndex + 1) % items.length
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`
}

setInterval(showNextImage, 3000);
jQuery(document).ready(function ($) {
	var feedbackSlider = $(".feedback-slider")
	feedbackSlider.owlCarousel({
		items: 1,
		nav: true,
		dots: true,
		autoplay: true,
		loop: true,
		mouseDrag: true,
		touchDrag: true,
		navText: [
			"<i class='fa fa-long-arrow-left'></i>",
			"<i class='fa fa-long-arrow-right'></i>"
		],
		responsive: {
			
			767: {
				nav: true,
				dots: false
			}
		}
	})

	feedbackSlider.on("translate.owl.carousel", function () {
		$(".feedback-slider-item h3")
			.removeClass("animated fadeIn")
			.css("opacity", "0")
		$(".feedback-slider-item img, .feedback-slider-thumb img, .customer-rating")
			.removeClass("animated zoomIn")
			.css("opacity", "0")
	})

	feedbackSlider.on("translated.owl.carousel", function () {
		$(".feedback-slider-item h3").addClass("animated fadeIn").css("opacity", "1");
		$(".feedback-slider-item img, .feedback-slider-thumb img, .customer-rating")
			.addClass("animated zoomIn")
			.css("opacity", "1")
	})
	feedbackSlider.on("changed.owl.carousel", function (property) {
		var current = property.item.index
		var prevThumb = $(property.target)
			.find(".owl-item")
			.eq(current)
			.prev()
			.find("img")
			.attr("src")
		var nextThumb = $(property.target)
			.find(".owl-item")
			.eq(current)
			.next()
			.find("img")
			.attr("src")
		var prevRating = $(property.target)
			.find(".owl-item")
			.eq(current)
			.prev()
			.find("span")
			.attr("data-rating")
		var nextRating = $(property.target)
			.find(".owl-item")
			.eq(current)
			.next()
			.find("span")
			.attr("data-rating")
		$(".thumb-prev").find("img").attr("src", prevThumb)
		$(".thumb-next").find("img").attr("src", nextThumb)
		$(".thumb-prev")
			.find("span")
			.next()
			.html(prevRating + '<i class="fa fa-star"></i>')
		$(".thumb-next")
			.find("span")
			.next()
			.html(nextRating + '<i class="fa fa-star"></i>')
	})
	$(".thumb-next").on("click", function () {
		feedbackSlider.trigger("next.owl.carousel", [300])
		return false
	})
	$(".thumb-prev").on("click", function () {
		feedbackSlider.trigger("prev.owl.carousel", [300])
		return false
	})
})
var i = 0

    var tag = document.getElementById("text")
    var html = document.getElementById("text").innerHTML
    var attr = tag.setAttribute("data", html)
    var txt = tag.getAttribute("data")
    var speed = 170

    function typeWriter() {
      if (i <= txt.length) {
        document.getElementById("text").innerHTML = txt.slice(0 , i + 1)
        i++
        setTimeout(typeWriter, speed)
      }
    
    }

typeWriter()
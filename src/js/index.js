var Index = function() {
};

Index.prototype.slider = function() {
	$(".slider__wrap").slick({
		autoplay: true,
		autoplaySpeed: 5000,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		prevArrow: '<span class="slide-arrow prev-arrow"></span>',
		nextArrow: '<span class="slide-arrow next-arrow"></span',
	});
};


if (document.querySelector(".slider__wrap")) {
	var index = new Index();
	index.slider();
}

var Animation = function() {
	this.header = document.querySelector("header");
	this.headerBtPosition = this.header.clientHeight;
	this.scrollImg = document.querySelector(".scrollImg");
};

Animation.prototype.randomImg = function() {
	var random = Math.floor(Math.random() * 7);
	var scrollImg = this.scrollImg.querySelector("img");
	var imgPath = ["scTop01", "scTop02", "scTop03", "scTop04", "scTop05", "scTop06", "scTop07"];
	scrollImg.setAttribute("src", "./src/img/" + imgPath[random] + ".png");
};

Animation.prototype.scroll = function() {
	var scrollPosition = this.header.getBoundingClientRect();
	if (scrollPosition.top + this.headerBtPosition < 0) {
		this.scrollImg.querySelector("span").setAttribute("class", "active");
	} else {
		this.scrollImg.querySelector("span").classList.remove("active");
	}
};

Animation.prototype.toTop = function() {
	$('body, html').animate({scrollTop:0},400);
};

window.addEventListener("load", function() {
	var animation = new Animation();
	animation.randomImg();

	window.addEventListener("scroll", function() {
		animation.scroll();
	}, false);

	var topHref = document.querySelector(".scrollImg > span");
	topHref.addEventListener("click", function(){
		animation.toTop();
	}, false);
}, false);

var ArchiveChange = function() {
	this.bt = document.querySelector(".index__archiveBt");
};

ArchiveChange.prototype.mouseover = function() {
	this.bt.addEventListener("mouseover", function(){
		document.querySelector(".index__archiveList").style.display = "block";
	}, false);
};

ArchiveChange.prototype.mouseout = function() {
	this.bt.addEventListener("mouseout", function(){
		document.querySelector(".index__archiveList").style.display = "none";
	}, false);
};

ArchiveChange.prototype.tabChange = function() {
	var tab = document.querySelectorAll(".index__archiveItem");
	var that = this;
	for (var i = 0; i < tab.length; i++) {
		tab[i].addEventListener("click", function(){
			that.changeEvent(this);
		}, false);
	}
};

ArchiveChange.prototype.changeEvent = function(tab) {
	var tabs = document.querySelectorAll(".index__archiveItem");
	var con = document.querySelectorAll(".mainContent__wrap");
	for(var i = 0; i < tabs.length; i++) {
		if (tab === tabs[i]) {
			con[i].style.display = "block";
		} else {
			con[i].style.display = "none";
		}
	}
};

if (document.querySelector(".index__archiveBt")) {
	var archive = new ArchiveChange();
	archive.mouseover();
	archive.mouseout();
	archive.tabChange();
}

var HoverEvent = function() {

};

HoverEvent.prototype.srcChange = function() {
	var imgs = document.querySelectorAll(".js_srcChange");
	for (var i = 0; i < imgs.length; i++) {
		imgs[i].addEventListener("mouseover", function() {
			this.setAttribute("src", this.getAttribute("src").replace(/.png$/, "_hover.png"));
			this.addEventListener("mouseout", function() {
				this.setAttribute("src", this.getAttribute("src").replace(/_hover.png$/, ".png"));
			}, false);
		}, false);
	}
};

var hoverEvent = new HoverEvent();
hoverEvent.srcChange();

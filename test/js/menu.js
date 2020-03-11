(function(){
  'use strict';

  class Menu {
    constructor(settings) {
      this.nodeMenu = settings.nodeMenu;
      settings.nodeMenuButton.addEventListener('click', this.toggle.bind(this));
    }

    toggle() {
      return this.nodeMenu.classList.toggle('js-menu_activated');
    }
  }

  let nodeMenu = document.querySelector('body');
  
  new Menu({
    nodeMenu: nodeMenu,
    nodeMenuButton: nodeMenu.querySelector('.js-menu__toggle')
  });

  var device = navigator.userAgent.toLowerCase();
var mob = device.match(/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/);
        if (mob) {
            $(".section-img-cover").removeClass("section-img-fixed");

            var bg_img = document.getElementById("bg_img");
            var img = document.createElement("img");
            img.src = "img/fon.jpg";
            bg_img.appendChild(img);
        }
})();
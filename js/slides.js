    var lis = document.getElementsByTagName('li');
    for (var i = 0; i < lis.length; i++) {
      lis[i].style.position = 'relative';
      var span = document.createElement('span');

      span.style.cssText = 'position:absolute;left:0;top:0';
      span.innerHTML = i + 1;
      lis[i].appendChild(span);
    }

    var width = 323;
    var count = 3;

    var gallery = document.getElementById('gallery');
    var slide = gallery.querySelector('ul');
    var image = gallery.querySelectorAll('li');

    var position = 0;

    gallery.querySelector('.previous').onclick = function() {

      position = Math.min(position + width, 0)
      slide.style.marginLeft = position + 'px';
    };

    gallery.querySelector('.next').onclick = function() {

      position = Math.max(position - width, -width * (image.length - count));
      slide.style.marginLeft = position + 'px';
    };
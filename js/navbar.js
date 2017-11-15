  $(document).ready(function () {

      var toggleAffix = function (affixElement, scrollElement, wrapper) {

          var height = affixElement.outerHeight(),
              top = wrapper.offset().top;

          if (scrollElement.scrollTop() >= top) {
              wrapper.height(height);
              affixElement.addClass("affix");
              toggleNavbarSchema(false);
          } else {
              affixElement.removeClass("affix");
              wrapper.height('auto');
              toggleNavbarSchema(true);
          }

      };


      $('[data-toggle="affix"]').each(function () {
          var ele = $(this),wrapper = $('<div></div>');

          ele.before(wrapper);
          $(window).on('scroll resize', function () {
              toggleAffix(ele, $(this), wrapper);
          });

          // init
          toggleAffix(ele, $(window), wrapper);
      });
      
      // toggle between 'navbar-light' and 'navbar-inverse'
      function toggleNavbarSchema(light) {
          if (light) {
              $("nav").addClass("navbar-light");
              $("nav").removeClass("navbar-inverse");
          } else {
              $("nav").addClass("navbar-inverse");
              $("nav").removeClass("navbar-light");
          }
      }
      
      
      

  });



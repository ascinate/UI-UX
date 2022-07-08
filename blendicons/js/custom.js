// JavaScript Document

// $(document).ready(function(){
        
//   $(function(){
     
//     $('.showSingle').click(function(){
//           $('.targetDiv').slideUp();
//           $('#div'+$(this).attr('target')).slideDown();
//     });
//   });
// });

// $(document).ready(function(){
//   $('.tab-content').hide();
//   $('#tab-1').show();
  
//   $('#select-box').change(function () {
//      dropdown = $('#select-box').val();
//     $('.tab-content').hide();
//     $('#' + "tab-" + dropdown).show();                                    
//   });
// });

$(document).ready(function(){
  $(function() {
    $('input[name="daterange"]').daterangepicker();
  });
});


$(document).ready(function(){
  $(function(){
    $('#datepicker3').datepicker();
  });
});
$(document).ready(function(){
  $(function(){
    $('#datepicker4').datepicker();
  });
});


// sorting
// $(document).ready(function(){
//     $(function() {
//       const ths = $("th");
//       let sortOrder = 1;

//       ths.on("click", function() {
//         const rows = sortRows(this);
//         rebuildTbody(rows);
//         updateClassName(this);
//         sortOrder *= -1; //反転
//       })

//       function sortRows(th) {
//         const rows = $.makeArray($('tbody > tr'));
//         const col = th.cellIndex;
//         const type = th.dataset.type;
//         rows.sort(function(a, b) {
//           return compare(a, b, col, type) * sortOrder;      
//         });
//         return rows;
//       }

//       function compare(a, b, col, type) {
//         let _a = a.children[col].textContent;
//         let _b = b.children[col].textContent;
//         if (type === "number") {
//           _a *= 1;
//           _b *= 1;
//         } else if (type === "string") {
//           //全て小文字に揃えている。toLowerCase()
//           _a = _a.toLowerCase();
//           _b = _b.toLowerCase();
//         }

//         if (_a < _b) {
//           return -1;
//         }
//         if (_a > _b) {
//           return 1;
//         }
//         return 0;
//       }

//       function rebuildTbody(rows) {
//         const tbody = $("tbody");
//         while (tbody.firstChild) {
//           tbody.remove(tbody.firstChild);
//         }

//         let j;
//         for (j=0; j<rows.length; j++) {
//           tbody.append(rows[j]);
//         }
//       }

//       function updateClassName(th) {
//         let k;
//         for (k=0; k<ths.length; k++) {
//           ths[k].className = "";
//         }
//         th.className = sortOrder === 1 ? "asc" : "desc";   
//       }
      
//     });
// });

$(document).ready(function(){

  $(".toggle-password").click(function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
});

$(document).ready(function(){
  $("#pills-home-tab").click(function(){
    $("#collection-filter-div-id").hide();
    $("#icon-filter-div-id").show();
  });
  $("#pills-profile-tab2").click(function(){
    $("#collection-filter-div-id").show();
    $("#icon-filter-div-id").hide();
  });

  $("#user-details-button").click(function(){
    $("#user-details-div2").show();
    $("#all-user").hide();
  });

  $("#back-btn").click(function(){
    $("#user-details-div2").hide();
    $("#all-user").show();
  });

  $("#blogs-btn").click(function(){
    $("#ser-1").show();
    $("#pills-tab").hide();
    
  });


  $("#is").click(function(){
    $("#is-div").show();
    $("#is-between-div").hide();
    
  });

  $("#betweenn").click(function(){
    $("#is-div").hide();
    $("#is-between-div").show();
    
  });


  // 06

  $("#save-change-btn").click(function(){
    $("#edite-flter3").show();
    $("#edite-flter2").hide();
    
  });

  $("#save-change-btn2").click(function(){
    $("#edite-flter3").hide();
    $("#edite-flter2").show();
    
  });
  // 06 end


  $("#download-btn1").click(function(){
    $("#primimun-divs").show();
    $("#copy-div1").hide();
    $("#main-ps-option").hide();
    
  });

  $("#copy-btn2").click(function(){
    $("#primimun-divs").hide();
    $("#copy-div1").show();
    $("#main-ps-option").hide();
    
  });

  $(".close-copy").click(function(){
    $("#primimun-divs").hide();
    $("#copy-div1").hide();
    $("#main-ps-option").show();
    
  });


  


  $("#list-btn-vew").click(function(){
    $("#list-vew").show();
    $("#grid-vew").hide();
  });


  $("#grid-btn-vew").click(function(){
    $("#list-vew").hide();
    $("#grid-vew").show();
  });




  $("#edit-icons-bttons").click(function(){
    $("#edit-tls-div").show();
    $(".main-edit-icon").addClass("show-close");
  });

  $("#dark-icon").click(function(){
    $(".sub-pagelogin-div").hide();
  });
  
  $("#close-icons-bttons").click(function(){
    $("#edit-tls-div").hide();
    $(".main-edit-icon").removeClass("show-close");
  });
  
  
  $("#grid").click(function(){
    $("#list-vew-div").hide();
    $("#grid-view-div").show();
    $(".plush-div1").show();
    
  });
  
  $("#list").click(function(){
    $("#list-vew-div").show();
    $("#grid-view-div").hide();
    $(".plush-div1").hide();
  });


  $("#user-tab").click(function(){
    $("#user-grid-div").show();
    $("#collections-grid-div").hide();
  });
  
  $("#collections-tab").click(function(){
    $("#user-grid-div").hide();
    $("#collections-grid-div").show();
  });

  $("#collections-grid").click(function(){
    $("#grid-vew-inside-div-collections").show();
    $("#list-vew-inside-div-collections").hide();
  });

  $("#collections-list").click(function(){
    $("#grid-vew-inside-div-collections").hide();
    $("#list-vew-inside-div-collections").show();
  });

  $("#icon-details").click(function(){
    $("#icon-user-div").show();
    $("#products-details-main").hide();
  });

  $("#back-btn-next").click(function(){
    $("#icon-user-div").hide();
    $("#products-details-main").show();
  });


  $("#table-search").click(function(){
    $("#site-search-main-body").hide();
    $("#site-search-details-body").show();
    $(".serach-div").show();
    
  });
  $("#back-search-main").click(function(){
    $("#site-search-main-body").show();
    $("#site-search-details-body").hide();
    $(".serach-div").hide();
    
  });


  $("#table-number").click(function(){
    $("#number-search-details-body").show();
    $("#site-search-main-body").hide();
    $(".number-search ").show();
    
  });

  $("#back-number-main").click(function(){
    $("#number-search-details-body").hide();
    $("#site-search-main-body").show();
    $(".number-search ").hide();
    
  });

  $("#plans-bn-text").click(function(){
    $("#edit-plan").show();
    $(".sub-paln-text").addClass("show-visible");
    
    
  });

  $("#email-tabs-new").click(function(){
    $("#edit-plan").hide();
    $(".sub-paln-text").removeClass("show-visible");
    
    
  });

  $("#general-tabs-new").click(function(){
    $("#edit-plan").hide();
    $(".sub-paln-text").removeClass("show-visible");
    
  });
  $("#ads-tabs-new").click(function(){
    $("#edit-plan").hide();
    $(".sub-paln-text").removeClass("show-visible");
    
  });

  $("#category-tabs-new").click(function(){
    $("#edit-plan").hide();
    $(".sub-paln-text").removeClass("show-visible");
    
  });

  $("#search-tabs-new").click(function(){
    $("#edit-plan").hide();
    $(".sub-paln-text").removeClass("show-visible");
    
  });

  $("#plan-table-btn").click(function(){
    $("#main-plans-div").hide();
    $("#plans-edit-div").show();
    $(".plans-fixed-search").show();
    
    
  });

  $("#back-plans-main").click(function(){
    $("#main-plans-div").show();
    $("#plans-edit-div").hide();
    $(".plans-fixed-search").hide();
    
    
  });


  $("#email-tabs-new").click(function(){
    $("#plush-email").show();
    
    
  });






  // tabs search
  $("#search-tabs-new").click(function(){

    $("#plush-email").hide();
    $("#back-search-main").hide();
    $("#site-search-details-body").hide();
    $("#back-number-main").hide();
    $("#number-search-details-body").hide();
    $("#back-plans-main").hide();
    $("#plans-edit-div").hide();

    // expect plans div
    $("#edit-plan").hide(); 
    
    // expect plans div ends



    

    $("#site-search-main-body").show();
    $("#main-plans-div").show();

    
    
    
    
    
    
    
  });

  $("#category-tabs-new").click(function(){
    $("#plush-email").hide();
    $(".serach-div").hide();
    $("#site-search-details-body").hide();
    $(".number-search").hide();
    $("#number-search-details-body").hide();
    $(".plans-fixed-search").hide();
    $("#plans-edit-div").hide();
    
    // expect plans div
    $("#edit-plan").hide(); 
    $(".sub-paln-text").removeClass("show-visible");
    // expect plans div ends


    $("#site-search-main-body").show();
    $("#main-plans-div").show();
    
  });

  $("#plans-bn-text").click(function(){
    
    $("#plush-email").hide();
    $(".serach-div").hide();
    $("#site-search-details-body").hide();
    $(".number-search").hide();
    $("#number-search-details-body").hide();
    $(".plans-fixed-search").hide();
    $("#plans-edit-div").hide();
    

    $("#site-search-main-body").show();
    $("#main-plans-div").show();
    
  });

  $("#ads-tabs-new").click(function(){
    
    $("#plush-email").hide();
    $(".serach-div").hide();
    $("#site-search-details-body").hide();
    $(".number-search").hide();
    $("#number-search-details-body").hide();
    $(".plans-fixed-search").hide();
    $("#plans-edit-div").hide();
    
    // expect plans div
    $("#edit-plan").hide(); 
    
    // expect plans div ends


    $("#site-search-main-body").show();
    $("#main-plans-div").show();
    
  });

  $("#ads-tabs-new").click(function(){
    
    $("#plush-email").hide();
    $(".serach-div").hide();
    $("#site-search-details-body").hide();
    $(".number-search").hide();
    $("#number-search-details-body").hide();
    $(".plans-fixed-search").hide();
    $("#plans-edit-div").hide();
    
    // expect plans div
    $("#edit-plan").hide(); 
    
    // expect plans div ends

    $("#site-search-main-body").show();
    $("#main-plans-div").show();
    
  });

  $("#payment-tabs-new").click(function(){
    

    $("#plush-email").hide();
    $(".serach-div").hide();
    $("#site-search-details-body").hide();
    $(".number-search").hide();
    $("#number-search-details-body").hide();
    $(".plans-fixed-search").hide();
    $("#plans-edit-div").hide();
    
    // expect plans div
    $("#edit-plan").hide(); 
    
    // expect plans div ends

    $("#site-search-main-body").show();
    $("#main-plans-div").show();
    
  });

  $("#general-tabs-new").click(function(){
    
    $("#plush-email").hide();
    $(".serach-div").hide();
    $("#site-search-details-body").hide();
    $(".number-search").hide();
    $("#number-search-details-body").hide();
    $(".plans-fixed-search").hide();
    $("#plans-edit-div").hide();
    
    // expect plans div
    $("#edit-plan").hide(); 
    
    // expect plans div ends


    $("#site-search-main-body").show();
    $("#main-plans-div").show();
    
  });



  


  $("#settings-select").click(function(){
    
    $("#setting-divs").show();
    $("#pages-div").hide();
    $("#navigator-div").hide();
    
  });

  $("#pages-select").click(function(){
    
    $("#setting-divs").hide();
    $("#pages-div").show();
    $("#navigator-div").hide();
    
  });


  $("#navigator-select").click(function(){
    
    $("#setting-divs").hide();
    $("#pages-div").hide();
    $("#navigator-div").show();
    
  });
  
  

  $("#footer-edit").click(function(){
    
    $("#site-main-page").hide();
    $("#site-banner").hide();
    $("#footer-menu-div").show();
    
  });


  $("#footer-back").click(function(){
    
    $("#site-main-page").show();
    $("#site-banner").show();
    $("#footer-menu-div").hide();
    
  });
  


  $("#mobile-menu-edit").click(function(){
    
    $("#site-main-page").hide();
    $("#site-banner").hide();
    $("#top-main-menu-div").show();
    
  });


  $("#to-menu-back").click(function(){
    
    $("#site-main-page").show();
    $("#site-banner").show();
    $("#top-main-menu-div").hide();
    
  });


  $("#top-main-bar-edit").click(function(){
    
    $("#site-main-page").hide();
    $("#site-banner").hide();
    $("#top-main-bar-div").show();
    
  });


  $("#top-main-bar-back").click(function(){
    
    $("#site-main-page").show();
    $("#site-banner").show();
    $("#top-main-bar-div").hide();
    
  });


  $("#top-menu-back").click(function(){
    
    $("#site-main-page").show();
    $("#site-banner").show();
    $("#top-main-bar-div").hide();
    
  });
  
  

  
  
  

  
  


  
  
  
});





$(document).ready(function(){
	$(".listblock li").click(function(){
		$(".listblock li.active").removeClass("active");
		$(this).addClass("active")
	})
});

$(document).ready(function(){
  $(".cm-music").click(function() {
    $(this).toggleClass("del-off");
    
  });
});


$(document).ready(function(){
  $('.comon-ul li').on('click', function() {
    var getValue = $(this).text();
    $('.dropdown-select').text(getValue);
  });

});

$(document).ready(function(){
  $('.analytic-sel li').on('click', function() {
    var getValue = $(this).text();
    $('.dropdown-select').text(getValue);
  });

});



$(document).ready(function(){
  $('#user-grid-div a').click(function(){
      $('#user-grid-div a').removeClass("active");
      $(this).addClass("active");
  });
  });

  $(document).ready(function(){
    $('#collections-grid-div a').click(function(){
        $('#collections-grid-div a').removeClass("active");
        $(this).addClass("active");
    });
  });

$(document).ready(function(){
  $('.new-add li').on('click', function() {
    var getValue = $(this).text();
    $('.dropdown-select-new').text(getValue);
  });

});

$(document).ready(function(){
  $('.analytic-sel li').on('click', function() {
    var getValue = $(this).text();
    $('.dropdown-select-new').text(getValue);
  });

});



$(document).ready(function(){
  $('.dropdown-menu-new li').on('click', function() {
    var getValuenew = $(this).text();
    $('.new-div-dp').text(getValuenew);
  });

});
$(document).ready(function(){
  $('.listed-bn li a').click(function(){
      $('.listed-bn li a').removeClass("active");
      $(this).addClass("active");
  });
  $('.listed-bn2 li a').click(function(){
    $('.listed-bn2 li a').removeClass("active");
    $(this).addClass("active");
  });
  }); 
//  analaytic page

$(document).ready(function(){
  $("#upload-select").click(function(){
    $("#upload-div").show();
    $("#download-div").hide();
    $("#coustomer-div").hide();
    $("#revenue-div").hide();
  });
}); 

$(document).ready(function(){
  $("#download-select").click(function(){
    $("#upload-div").hide();
    $("#download-div").show();
    $("#coustomer-div").hide();
    $("#revenue-div").hide();
  });
}); 

$(document).ready(function(){
  $("#customers-select").click(function(){
    $("#upload-div").hide();
    $("#download-div").hide();
    $("#coustomer-div").show();
    $("#revenue-div").hide();
  });
}); 

$(document).ready(function(){
  $("#revenue-select").click(function(){
    $("#upload-div").hide();
    $("#download-div").hide();
    $("#coustomer-div").hide();
    $("#revenue-div").show();
  });
}); 

  // list grid
  $(document).ready(function(){
    $("#grid-view-btn").click(function(){
      $("#grid-view").show();
      $("#list-view").hide();
    });
    $("#list-view-btn").click(function(){
      $("#list-view").show();
      $("#grid-view").hide();
    });



    $("#grid-view-btn2").click(function(){
      $("#grid-view").show();
      $("#list-view").hide();
    });
    $("#list-view-btn2").click(function(){
      $("#list-view").show();
      $("#grid-view").hide();
    });

    $(".showSingle").click(function(){
      $(".targetDiv").show();
    });
   
    
  });
(function($, window){
    $(function() {
      let arrowWidth = 30;
  
      $.fn.resizeselect = function(settings) {  
        return this.each(function() { 
  
          $(this).change(function(){
            let $this = $(this);
  
            // get font-weight, font-size, and font-family
            let style = window.getComputedStyle(this)
            let { fontWeight, fontSize, fontFamily } = style
  
            // create test element
            let text = $this.find("option:selected").text();
            let $test = $("<span>").html(text).css({
              "font-size": fontSize, 
              "font-weight": fontWeight, 
              "font-family": fontFamily,
              "visibility": "hidden" // prevents FOUC
            });
  
            // add to body, get width, and get out
            $test.appendTo($this.parent());
            let width = $test.width();
            $test.remove();
  
            // set select width
            $this.width(width + arrowWidth);
  
            // run on start
          }).change();
  
        });
      };
  
      // run by default
      $("select.resizeselect").resizeselect();                       
    })
  })(jQuery, window);


  $(".whish-bn1").click(function() {
    $(this).toggleClass("whise-save");
    
  });
  $(".fv-list").click(function() {
    $(this).toggleClass("favlist");
    
  });
  $(".plus-section").click(function() {
    $(this).toggleClass("icon-ps1");
    
  });

  $(".switch-btn").click(function() {
    $(this).toggleClass("onsclass");
    
  });


  $(".collections-div-section .comon-grid-div").click(function() {
    $(this).toggleClass("onsclass");
    
  });


  
$(document).on("click", "i.del" , function() {
  // 	to remove card
    $(this).parent().remove();
  // to clear image
    // $(this).parent().find('.imagePreview').css("background-image","url('')");
  });
  $(function() {
      $(document).on("change",".uploadFile", function()
      {
          var uploadFile = $(this);
          var files = !!this.files ? this.files : [];
          if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support
   
          if (/^image/.test( files[0].type)){ // only image file
              var reader = new FileReader(); // instance of the FileReader
              reader.readAsDataURL(files[0]); // read the local file
   
              reader.onloadend = function(){ // set image data as background of div
                  //alert(uploadFile.closest(".upimage").find('.imagePreview').length);
  uploadFile.closest(".imgUp").find('.imagePreview').css("background-image", "url("+this.result+")");
              }
          }
        
      });
  });
  
$(document).ready(function(){

  $(".toggle-password").click(function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
});



$(document).ready(function(){
// duration of scroll animation
var scrollDuration = 300;
// paddles
var leftPaddle = document.getElementsByClassName("left-paddle");
var rightPaddle = document.getElementsByClassName("right-paddle");
// get items dimensions
var itemsLength = $(".item").length;
var itemSize = $(".item").outerWidth(true);
// get some relevant size for the paddle triggering point
var paddleMargin = 20;

// get wrapper width
var getMenuWrapperSize = function () {
	return $(".menu-wrapper").outerWidth();
};
var menuWrapperSize = getMenuWrapperSize();
// the wrapper is responsive
$(window).on("resize", function () {
	menuWrapperSize = getMenuWrapperSize();
});
// size of the visible part of the menu is equal as the wrapper size
var menuVisibleSize = menuWrapperSize;

// get total width of all menu items
var getMenuSize = function () {
	return itemsLength * itemSize;
};
var menuSize = getMenuSize();
// get how much of menu is invisible
var menuInvisibleSize = menuSize - menuWrapperSize;

// get how much have we scrolled to the left
var getMenuPosition = function () {
	return $(".menu").scrollLeft();
};

// finally, what happens when we are actually scrolling the menu
$(".menu").on("scroll", function () {
	// get how much of menu is invisible
	menuInvisibleSize = menuSize - menuWrapperSize;
	// get how much have we scrolled so far
	var menuPosition = getMenuPosition();

	var menuEndOffset = menuInvisibleSize - paddleMargin;

	// show & hide the paddles
	// depending on scroll position
	if (menuPosition <= paddleMargin) {
		$(leftPaddle).addClass("hidden");
		$(rightPaddle).removeClass("hidden");
	} else if (menuPosition < menuEndOffset) {
		// show both paddles in the middle
		$(leftPaddle).removeClass("hidden");
		$(rightPaddle).removeClass("hidden");
	} else if (menuPosition >= menuEndOffset) {
		$(leftPaddle).removeClass("hidden");
		$(rightPaddle).addClass("hidden");
	}

	// print important values
	$("#print-wrapper-size span").text(menuWrapperSize);
	$("#print-menu-size span").text(menuSize);
	$("#print-menu-invisible-size span").text(menuInvisibleSize);
	$("#print-menu-position span").text(menuPosition);
});

// scroll to left
$(rightPaddle).on("click", function () {
	$(".menu").animate({ scrollLeft: menuInvisibleSize }, scrollDuration);
});

// scroll to right
$(leftPaddle).on("click", function () {
	$(".menu").animate({ scrollLeft: "0" }, scrollDuration);
});
});

$(document).ready(function(){

   $(".right-paddle").click(function(){
    $(".left-paddle").show();
    $(".right-paddle").hide();
  });
  $(".left-paddle").click(function(){
    $(".left-paddle").hide();
    $(".right-paddle").show();
  });

});

$(document).ready(function(){

  $("#email-login").click(function(){
   $("#email-login-div").show();
   $("#all-login-div").hide();
 });
 $("#back-btn2").click(function(){
   $("#email-login-div").hide();
   $("#all-login-div").show();
 });


 $("#edit-profile").click(function(){
  $("#page-edit-div").show();
  $("#edit-main-page").hide();
  $(".page-back-bttuon").show();
  
 });

 $("#back-page-main").click(function(){
  $("#page-edit-div").hide();
  $("#edit-main-page").show();
  $(".page-back-bttuon").hide();
  
 });


 $("#footer-edit").click(function(){
  $("#footer-menu-div").show();
  
 });
 

 
});

$(function () {
  $("#datepicker").datepicker({ 
        autoclose: true, 
        todayHighlight: true
  }).datepicker('update', new Date());
});


$(document).ready(function(){

var colorPalette = ['000000', 'FF9966', '6699FF', '99FF66', 'CC0000', '00CC00', '0000CC', '333333', '0066FF', 'FFFFFF'];
var forePalette = $('.fore-palette');
var backPalette = $('.back-palette');

for (var i = 0; i < colorPalette.length; i++) {
  forePalette.append('<a href="#" data-command="forecolor" data-value="' + '#' + colorPalette[i] + '" style="background-color:' + '#' + colorPalette[i] + ';" class="palette-item"></a>');
  backPalette.append('<a href="#" data-command="backcolor" data-value="' + '#' + colorPalette[i] + '" style="background-color:' + '#' + colorPalette[i] + ';" class="palette-item"></a>');
}

$('.toolbar a').click(function(e) {
  var command = $(this).data('command');
  if (command == 'h1' || command == 'h2' || command == 'p') {
    document.execCommand('formatBlock', false, command);
  }
  if (command == 'forecolor' || command == 'backcolor') {
    document.execCommand($(this).data('command'), false, $(this).data('value'));
  }
  if (command == 'createlink' || command == 'insertimage') {
    url = prompt('Enter the link here: ', 'http:\/\/');
    document.execCommand($(this).data('command'), false, url);
  } else document.execCommand($(this).data('command'), false, null);
});

});












function create_custom_dropdowns() {
  $('select').each(function(i, select) {
    if (!$(this).next().hasClass('dropdown')) {
      $(this).after('<div class="dropdown ' + ($(this).attr('class') || '') + '" tabindex="0"><span class="current"></span><div class="list"><ul></ul></div></div>');
      var dropdown = $(this).next();
      var options = $(select).find('option');
      var selected = $(this).find('option:selected');
      dropdown.find('.current').html(selected.data('display-text') || selected.text());
      options.each(function(j, o) {
        var display = $(o).data('display-text') || '';
        dropdown.find('ul').append('<li class="option ' + ($(o).is(':selected') ? 'selected' : '') + '" data-value="' + $(o).val() + '" data-display-text="' + display + '">' + $(o).text() + '</li>');
      });
    }
  });
}

// Event listeners

// Open/close
$(document).on('click', '.dropdown', function(event) {
  $('.dropdown').not($(this)).removeClass('open');
  $(this).toggleClass('open');
  if ($(this).hasClass('open')) {
    $(this).find('.option').attr('tabindex', 0);
    $(this).find('.selected').focus();
  } else {
    $(this).find('.option').removeAttr('tabindex');
    $(this).focus();
  }
});
// Close when clicking outside
$(document).on('click', function(event) {
  if ($(event.target).closest('.dropdown').length === 0) {
    $('.dropdown').removeClass('open');
    $('.dropdown .option').removeAttr('tabindex');
  }
  event.stopPropagation();
});
// Option click
$(document).on('click', '.dropdown .option', function(event) {
  $(this).closest('.list').find('.selected').removeClass('selected');
  $(this).addClass('selected');
  var text = $(this).data('display-text') || $(this).text();
  $(this).closest('.dropdown').find('.current').text(text);
  $(this).closest('.dropdown').prev('select').val($(this).data('value')).trigger('change');
});

// Keyboard events
$(document).on('keydown', '.dropdown', function(event) {
  var focused_option = $($(this).find('.list .option:focus')[0] || $(this).find('.list .option.selected')[0]);
  // Space or Enter
  if (event.keyCode == 32 || event.keyCode == 13) {
    if ($(this).hasClass('open')) {
      focused_option.trigger('click');
    } else {
      $(this).trigger('click');
    }
    return false;
    // Down
  } else if (event.keyCode == 40) {
    if (!$(this).hasClass('open')) {
      $(this).trigger('click');
    } else {
      focused_option.next().focus();
    }
    return false;
    // Up
  } else if (event.keyCode == 38) {
    if (!$(this).hasClass('open')) {
      $(this).trigger('click');
    } else {
      var focused_option = $($(this).find('.list .option:focus')[0] || $(this).find('.list .option.selected')[0]);
      focused_option.prev().focus();
    }
    return false;
  // Esc
  } else if (event.keyCode == 27) {
    if ($(this).hasClass('open')) {
      $(this).trigger('click');
    }
    return false;
  }
});

$(document).ready(function() {
  create_custom_dropdowns();
});



// pre load img


//Maruf al Bashir Reza
$(window).on('load', function() { // makes sure the whole site is loaded 
  $('.status').fadeOut(); // will first fade out the loading animation 
        $('.preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
        $('body').delay(550).css({'overflow':'visible'});
})


$(".plus-section").click(function() {
  $(this).toggleClass("icon-ps2");
  
});

$(".save-btn1").click(function() {
  $(this).toggleClass("fav-active");
  
});



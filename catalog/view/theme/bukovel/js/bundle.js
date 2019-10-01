function formatMoney (num) {
  return num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ");
}

$('body').on('click', 'button.alert__close', function () {
    $(this).parent('.alert').remove();
});

'use strict';

/*async function testAjax(product_id) {
	
  //var Promise = require("bluebird");
  
  return new Promise(function(resolve, reject) {
   ////console.log('start');
      resolve($.ajax({
		    url: '/index.php?route=modals/modalcard',
		    type: 'GET',
		    async:false,
		    data: {product_id:product_id.toString()}
  		}));
  }).then(function(data) {
    ////console.log('middle');
    return data;
  });
}

async function modalCard(product_id) {

	var data_my = '';
	var id = product_id;
	
	let data_funct = await testAjax(id);
	
	////console.log(data_funct);
	return data_funct;
}

*/

function getModalcard(product_id) {
	
  var htmlData = '';	
	
	
  $.ajax({
    url:'/index.php?route=modals/modalcard&product_id='+product_id,
    type:'GET',
    async:false,
    success: function(data){
	    
		htmlData =  data;   
      
    }
    
  });	
	
	//console.log(htmlData);
	return htmlData;
	
}




function telephoneField() {
		var modal = $('.modal');
		cardOwl = modal.find('.card-owl');
		
		$(cardOwl).find('.owl-item:not(.cloned)').each(function (index) {
			
			//console.log(index);
			
			
			});
		
		
		
		var telephone = $(cardOwl).find('.owl-item:not(.cloned) .telephone-validation');//('.owl-item:not(.cloned) .telephone-validation');
			errorMsg = $(cardOwl).find(".owl-item:not(.cloned) #error-msg"),
			validMsg = $(cardOwl).find(".owl-item:not(.cloned) #valid-msg");			
		//console.log('init tel');
		//$(errorMsg).addClass("hide");
		//console.log($(modal));
		//console.log(cardOwl);
		//console.log(telephone);	
		//console.log(errorMsg);	
		//console.log(validMsg);	
		//console.log('init tel end');
	
        telephone.each(function(){
	        //$(this).off('blur');
	        //$(this).off("keyup change");	
	        
            var telephone_countries = $(this).data('telephone_countries');

            var telephone_preferred_countries = $(this).data('telephone_preferred_countries');
            
            if (telephone_countries.length == 0){
                telephone_countries="";
            }else{
                telephone_countries=telephone_countries.split(',');
            }
            if (telephone_preferred_countries.length == 0){
                telephone_preferred_countries = "";
            } else {
                telephone_preferred_countries=telephone_preferred_countries.split(',');
            }
            
            //console.log(telephone_countries);	
            //console.log(telephone_preferred_countries);	
            
            $(this).intlTelInput({
                onlyCountries: telephone_countries,
                preferredCountries: telephone_preferred_countries,
                autoPlaceholder: true,
                autoFormat: true,
				autoHideDialCode: false,
				nationalMode: false,   
				/*initialCountry: "auto",
				geoIpLookup: function(callback) {
					$.ajax({
					  async:true,
					  url: 'https://ipinfo.io',
					  data: function() {},
					  dataType: "jsonp"
					}).always(function(resp) {
				      var countryCode = (resp && resp.country) ? resp.country : "";
				      callback(countryCode);
				    });
					
					
					
					

				  },*/				
				/*  geoIpLookup: function(callback) {
				    $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
				      var countryCode = (resp && resp.country) ? resp.country : "";
				      callback(countryCode);
				    });		
				    },	*/	             
                utilsScript: "catalog/view/theme/bukovel/js/checkout/library/phoneformat/js/utils.js"
            });
            
			var reset = function() {
				//console.log('start reset');	
				  $(this).removeClass("error");
				  $(errorMsg).addClass("hide");
				  validMsg.addClass("hide");
				  //console.log('reset');
				};            
				            
            reset();
            
            
            $(this).on("keyup change", reset());	
            
             //$(this).delegate('blur', function() {
			 $(this).blur(function() {
			 	//console.log('blur!!!');
			  reset();
			  if ($.trim($(this).val())) {
			    if ($(this).intlTelInput("isValidNumber")) {
			     // validMsg.removeClass("hide");
			      $('#button-submit').attr("disabled", false);
			    } else {
				    
					//errorMsg = $(cardOwl).find(".owl-item:not(.cloned) #error-msg"),
					//validMsg = $(cardOwl).find(".owl-item:not(.cloned) #valid-msg");				    
				    
				    
				  //console.log('erorr number');
			      $(this).addClass("error");
			      errorMsg.removeClass("hide");
			       $('#button-submit').attr("disabled", true);
			 	  //console.log($(this));
				  $(this).parent().addClass('form__field--invalid');
				  $(this).after('<span class="form__error-message">Type this field</span>');     
			      
			    }
			  }
			});           
            
            
            
        })
	
}



$('select').niceSelect();



$('.header__profile__logout').on('click', '.list li', function() {
     window.location = $(this).data('value');
 });
 

function bindForm($items, button) {
  var inputs = [];
  var notInputTypes = ':radio,:submit,:checkbox,[type=hidden],[type=file]';

  ////console.log($items, button);


  if ($items.nodeName){
    inputs = $($items).find('input:not(' + notInputTypes + ')');

  } else if ($items.length === 1 && $items[0].nodeName === 'INPUT') {

    inputs = $items.not(notInputTypes);
  } else if ($items.length > 1) {

    inputs = $items.not(notInputTypes);;
  } else {
    inputs = $items.find('input:not(' + notInputTypes + ')');

  }

  ////console.log(inputs, button);

  checkInputs(inputs, button);

  inputs.each(function () {
    $(this).off('keyup');
    $(this).keyup(function () {
	    ////console.log('keyup');
      checkInputs(inputs, button)
    });
    
    $(this).off('blur');
     $(this).blur(function () {
	     ////console.log('blur');
      checkInputs(inputs, button)
    });   
    
  });
};


function CopyLink($item, $modalDialog) {

		var $modal = $modalDialog;
		var inputs = $modal.find('.ident .owl-item.active input');
		var img = $modal.find('.ident .owl-item.active img');
		
		$modal.find('.ident .owl-item:not(.cloned, .active) input').each(function (i, el) {
        	 if ($(el).attr('type') != 'hidden') {
	        	var row = $(inputs).filter('input[name=\''+ $(el).attr('name') +'\']'); 
	        	//console.log(row);
        	 	$(el).val($(row).val());
        	 	$(el).trigger('keyup');
        	 
        	 } else {
	        	 
	        	if ($(el).attr('class') == 'card__body__avatar-input') {
		        	
		        	var row = $(inputs).filter('input[class=\''+ $(el).attr('class') +'\']'); 
		        	$(el).val($(row).val());
		        	$(el).trigger('keyup');
		        } 
	        	 
			 } 
		 });
		 
		 if (img.length) {
			 $modal.find('.ident .owl-item:not(.cloned, .active)').each(function (i, el) {
			 	$(el).find('.card__profile').addClass('avatar');
			 	$(el).find('.card__profile img').remove();
			 	var img_2 = $modal.find('.ident .owl-item.active img').clone(true);
			 	$(el).find('.card__profile').append($(img_2));
		
			 
			 });
		 }
	
	
}



function FillCustomer($item, $modalDialog) {

		var $modal = $modalDialog;
		var inputs = $modal.find('.ident .owl-item.active input');
		var selects = $modal.find('.ident .owl-item.active select');
		var img = $modal.find('.ident .owl-item.active img');
		var product_id = $modal.find('.ident .owl-item.active input[name=\'product_id\']').val();
		var $profile = $modal.find('.ident .owl-item.active');
		


		$.ajax({
		    url: '/index.php?route=modals/modalcard/getCustomer',
		    type: 'post',
		    async:false,
		    data: {product_id:product_id.toString()}
  		}).then(function(data) {
	  		
	  		//console.log(data);

		  $.each(data, function( index, value ) {
			  if (index.includes('option')) {
				
				$(inputs).filter('input[name=\''+index+'\']').val(value);
				$(inputs).filter('input[name=\''+index+'\']').trigger('keyup');
				$(selects).filter('[name=\''+index+'\']').val(value).niceSelect('update');
				$(selects).filter('[name=\''+index+'\']').trigger('keyup');
				
				//$('#myselect').val(1).niceSelect('update');
			  
			  
			    //console.log($(selects).filter('[name=\''+index+'\']'));
			  
			  }
			  
			  
			  
			  
			  if (index == 'avatar') {
				  
				$profile.find('.card__profile').addClass('avatar');
				$profile.find('.card__profile img').remove();
				$profile.find('.card__profile').append("<img src='"+ value +"' /> ");
				  
				  
			  }
			  

			  
			  
			  
			  
			  
			  
			  
			  
		  //console.log( index + ": " + value );
		});   	
    	
    	
    	
  	});

		
	/*	$modal.find('.ident .owl-item:not(.cloned, .active) input').each(function (i, el) {
        	 if ($(el).attr('type') != 'hidden') {
	        	var row = $(inputs).filter('input[name=\''+ $(el).attr('name') +'\']'); 
	        	//console.log(row);
        	 	$(el).val($(row).val());
        	 	$(el).trigger('keyup');
        	 
        	 } else {
	        	 
	        	if ($(el).attr('class') == 'card__body__avatar-input') {
		        	
		        	var row = $(inputs).filter('input[class=\''+ $(el).attr('class') +'\']'); 
		        	$(el).val($(row).val());
		        	$(el).trigger('keyup');
		        } 
	        	 
			 } 
		 });
		 
		 if (img.length) {
			 $modal.find('.ident .owl-item:not(.cloned, .active)').each(function (i, el) {
			 	$(el).find('.card__profile').addClass('avatar');
			 	$(el).find('.card__profile img').remove();
			 	var img_2 = $modal.find('.ident .owl-item.active img').clone(true);
			 	$(el).find('.card__profile').append($(img_2));
		
			 
			 });
		 }*/
	
	
}


function bindFillCustomer($items, $modalDialog) {
	
	$items.each(function () {
		$(this).off('click');
		
	    $(this).click(function () {
	      //checkInputs(inputs, button)
	      FillCustomer($(this), $modalDialog);
	      
	      
	      
	      
	      
	    });	
	
	});
		
}


function bindLinkCopy($items, $modalDialog) {
	
	$items.each(function () {
		$(this).off('click');
		
	    $(this).click(function () {
	      //checkInputs(inputs, button)
	      CopyLink($(this), $modalDialog);
	      
	      
	      
	      
	      
	    });	
	
	});
		
}


function checkInputs(inputs, button) {
  var isAnyInputInvalid = false;

  inputs.each(function () {
	  
	  

	if ($(this).hasClass('card_number')) {
	    if ((this.value === '') || (this.value.length < 29)) {
	      return isAnyInputInvalid = true;
	    }		
	} else if ( $(this).attr('type') == 'tel' ) {
		
		if ($.trim($(this).val())) {
			if ($(this).intlTelInput("isValidNumber")) {
	
				return isAnyInputInvalid = false;
				
			} else {

					 return isAnyInputInvalid = true;
			}
		}
		
		
	} else {
	    if (this.value === '') {
	      return isAnyInputInvalid = true;
	    }
    }
  });



  if (isAnyInputInvalid) {
    button.attr("disabled", true);
  } else {
    button.attr("disabled", false);
  }
};

window.disableButtonIfInvalidSlider = function ($modalDialog) {
	
 //console.log($($modalDialog));	
	
  var inputs = $modalDialog.find('.ident .owl-item:not(.cloned) input');
  
  
  
  
  
  var classList = $($modalDialog).attr('class').split(/\s+/);
  
  //console.log(classList);
  var ShowAll = true;
  
  if (classList.length = 2) {
	  
	  //console.log(classList[1]);
	  
	  if (classList[1] == 'modal__dialog--promo') {
		  
		  ShowAll = false;
		  
	  }
	  
	  
  }
  
  var button = $modalDialog.find('.buy-info__button');
  
  ////console.log($modalDialog.find('.ident .owl-item:not(.cloned)'));
  
  var copyLink =  $modalDialog.find('.ident .owl-item:not(.cloned)').find('.card .card__body #input_all_data'); 
  var fillCustomerLink = $modalDialog.find('.ident .owl-item:not(.cloned)').find('.card .card__body #use-current-user');
  
  if (copyLink.length == 1) {
	  
	////console.log('need to hide');  

		$(copyLink).parent().css({"display": "none"});
	
	  
  } else {
	if (ShowAll) {
		
		$(copyLink).parent().css({"display": ""});
		
	} else {	  
	////console.log('need to show');  
		$(copyLink).parent().css({"display": "none"});
	}
	  
  }
  
  
  //////console.log(copyLink);
  bindLinkCopy(copyLink, $modalDialog);
  bindFillCustomer(fillCustomerLink, $modalDialog);
  bindForm(inputs,button)
};

window.disableButtonIfInvalidForm = function (inputs,button) {
  bindForm(inputs,button)
};

var formBodies = $('form.form__body');
////console.log(formBodies);
if (formBodies.length) {
  for (var i = 0; i < formBodies.length; i++){
      bindForm(formBodies[i], $(formBodies[i]).find('.form__submit input:submit'));
  }
}




$('.refill--equpment-owl').owlCarousel({
 loop:true,
 nav:true,
 items: 1,
 navText: ['','']
});

$(document).ready(function(){
 $('.nav .nav-icon').click(function(){
   $(this).parent().parent().toggleClass('nav-open');
 });
});


function initOwl() {
    $('.equipments:not(.tied) .equipments-owl, .vip-cards-owl, .addresses-owl, .payments-owl').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        stagePadding: 30,

        responsive: {
            0: {
                items: 1,
                nav: false
            }
        }
    });

    $('.equipments.tied .equipments-owl').owlCarousel({
        loop:true,
        nav:true,
        items: 1,
        margin: 10,

        navText: ['','']
    });
}


/*
 function initOwl() {
   $('.equipments-owl, .vip-cards-owl, .addresses-owl, .payments-owl').owlCarousel({
     loop: true,
     margin: 10,
     responsiveClass: true,
     stagePadding: 30,
     responsive: {
       0: {
         items: 1,
         nav: false
       }
     }
   })
 }
*/

 $(document).ready(function(){
   if (window.innerWidth < 768) {
     initOwl();
   }
 });

 $( window ).resize(function() {
   if (window.innerWidth < 768) {
     initOwl();
   } else {
     $('.equipments-owl, .vip-cards-owl, .addresses-owl, .payments-owl').trigger('destroy.owl.carousel');
   }
 });

/*
 $('.option__quantity .option__plus').on('click', function(e){
   e.preventDefault();
   var input = $(this).prev();
   input.val(+(input.val()) + 1);
 });

 $('.option__quantity .option__minus').on('click', function(e){
   e.preventDefault();
   var input = $(this).next();
   if (input.val() > 1) {
     input.val(+(input.val()) - 1);
   }
 });
*/

function getModalCloseButtonHTML() {
  return '<button class="modal__close"><svg class="icon icon--close"><use xlink:href="#icon--close"></use></svg></button>';
}

function openModal(modal) {
  // Fixes scroll
  if (window.innerWidth < 768) {
    $('html').addClass('hidden-overflow');
    $('body').addClass('hidden-overflow');
  }

  modal.addClass('modal--open');

  $('.modal.modal--open').on('click', function (e) {
    if (e.target.className === 'modal modal--open') {
      closeModal();
    }
  });

  $('.modal .modal__close').on('click', function(){
    closeModal();
  });
  
  
  //telephoneField(modal);
}

function closeModal() {
  $('html').removeClass('hidden-overflow');
  $('body').removeClass('hidden-overflow');
  $('.modal.modal--open').removeClass('modal--open');
  var modalDialog = $('.modal').children('.modal__dialog');
  modalDialog.empty();
  modalDialog.removeClass();
  modalDialog.addClass('modal__dialog');
}

function initCardOwlForModal(amount, buyItemBody, cardOwl, selfData) {
  
  var buyItemData = buyItemBody.children('.buy-item__data');
    var product_id  = buyItemData.find('#product_id').val();
  var modal = $('.modal');
  var modalDialog = modal.children('.modal__dialog');  
  
  
 var myModal = getModalcard(product_id);
  
  

  //let myModal = await testAjax(product_id);
  
  
  
  
  //telephoneField(myModal);
  
  
  

  
  
  


  cardOwl.owlCarousel({
    //loop:true,
    nav:true,
    items: 1,
    margin: 20,
    //mouseDrag: false,
    //touchDrag: false,
    //pullDrag: false,
    navText: [
            '<svg class="icon icon--arrow"><use xlink:href="#icon--arrow"></use></svg>',
            '<svg class="icon icon--arrow"><use xlink:href="#icon--arrow"></use></svg>'
    ]
  });
  
  
  cardOwl.trigger('add.owl.carousel', [myModal]);
	
    //addSlidersItemCloseEvent(cardOwl, button);

    cardOwl.trigger('refresh.owl.carousel');
  
  
   //cardOwl.append(myModal);
  
  if (amount > 1) {
    buyItemBody.prepend('<div class="buy-item__amount">' + amount + '</div>');

    for (var i=2; i <= amount; i++) {
	    //let myModal = await testAjax(product_id);
		cardOwl.trigger('add.owl.carousel', [myModal]);
		//addSlidersItemCloseEvent(cardOwl, selfData, modalDialog);

		cardOwl.trigger('refresh.owl.carousel');
      //cardOwl.append(myModal);
    }
  }
  
   cardOwl.trigger('refresh.owl.carousel');
  
   var cropAvatar = new CropAvatar();
   //////console.log(cropAvatar);
   //////console.log(modalDialog);
   //////console.log(cardOwl);

   addSliderItemOnClick(cropAvatar, modalDialog, cardOwl, selfData);

   addSlidersItemCloseEvent(cardOwl, selfData, modalDialog);
   
   disableButtonIfInvalidSlider(modalDialog);
   
   telephoneField(modalDialog);
   $.applyDataMask();	
   $(modalDialog).find('select').niceSelect();

   
}

function addSliderItemOnClick(cropAvatar, modalDialog, cardOwl, button) {
  modalDialog.find(".ident__header .ident__add-card").on('click', function(e) {
	 
	
    e.preventDefault();
    
    //var crd = modalCard();
    
    ////console.log('CLICK addSliderItemOnClick');
    
    var buyItemBody = modalDialog.find('.buy-item__body');
    
	var buyItemData = buyItemBody.children('.buy-item__data');
	var product_id  = buyItemData.find('#product_id').val();   
	
	//let myModal = await testAjax(product_id);
	
	myModal = getModalcard(product_id);
	
	
	//console.log(modalDialog);
	
	

    cardOwl.trigger('add.owl.carousel', [myModal]);
	
    addSlidersItemCloseEvent(cardOwl, button);

    cardOwl.trigger('refresh.owl.carousel');
    
    
    disableButtonIfInvalidSlider(modalDialog);
    
	//var cropAvatar = new CropAvatar();

    cropAvatar.renewButtonListeners( cardOwl.find('.owl-item:not(.cloned) .card__download-photo'));
    
    
    telephoneField();
    
   
    
     $(modalDialog).find('select').niceSelect();
    $.applyDataMask();	
    //$('select').niceSelect('update');
    
    
    
    
  });
}


function minusAmountInModal(cardOwl, button) {
    var buyInfo = cardOwl.closest('.ident').prev();
    var buyItemData = buyInfo.find('.buy-item__data');

    var amount = parseInt(buyInfo.find('.buy-item__amount').text());

    if (!amount) {
        amount = 1;
    }

    updateBlockAmount(buyItemData, amount, 'minus');

    if (button) {
        var optionBuy = $(button).parents('.option__buy');
        var optionData = optionBuy.prev('.option__data');

        optionBuy.find('.option__amount').val(amount - 1);

       updateBlockAmount(optionData, amount, 'minus');
    }
}


 function addSlidersItemCloseEvent(cardOwl, button, modalDialog) {

 	
  cardOwl.find('.owl-item:not(.cloned)').each(function (index) {
    var closeButton = $(this).find('.card .card__close');
    closeButton.unbind( "click" );
	
    closeButton.bind('click', function (e) {
      if (cardOwl.find('.owl-item:not(.cloned)').length > 1) {
	     ////console.log('CLOSE EVENT index ' + index);	 
        cardOwl.trigger('remove.owl.carousel', [index]);
        cardOwl.trigger('refresh.owl.carousel');
        minusAmountInModal(cardOwl, button);
        ////console.log('DISABLE!!!');	
        disableButtonIfInvalidSlider(modalDialog);
      }
      e.preventDefault();
    });
  });
}

$('.equipment .option__cart').click( function(e){
  e.preventDefault();
  var self = this;
  var modal = $('.modal');
  var modalDialog = modal.children('.modal__dialog');
  var product_id  = $(self).parent().parent().find('#product_id').val(); 
  //var product_id  = buyItemData.find('#product_id').val();
  
  
  
  
  $.ajax({
    url:'/index.php?route=modals/actionabonements&product_id='+product_id,
    type:'GET',
    async:false,
    success: function(data){
      modalDialog.append(data);
      modalDialog.addClass('modal__dialog--skipass');
      
     /*
      modalDialog.children('.modal__header').text('Акційний скіпас на прокат спорядження')
        .append(getModalCloseButtonHTML());
     */

      var amount = $(self).prev().children('.option__amount').val();
      var buyItemBody = modal.find('.buy-item__body');
      var buyItemData = buyItemBody.children('.buy-item__data');
      var optionData = $(self).closest('.option__buy').prev();
      var headerClone = $(self).closest('.equipment__body').prev().clone();
      var cardOwl = modal.find('.card-owl');

      $('.icon', headerClone).remove();

      buyItemData.append(headerClone.html());
      buyItemData.append(optionData.html());
	  
      initCardOwlForModal(amount, buyItemBody, cardOwl, self);
	  
      

      //addSliderItemOnClick(cropAvatar, modalDialog, cardOwl);
      //addSlidersItemCloseEvent(cardOwl);
      initOptionQualityForAPromotionalModals(self, modal);
      
      
      
      openModal(modal);
      cardOwl.trigger('refresh.owl.carousel');
    }
  });
 });

$('.promo .option__cart').click( function(e){
  e.preventDefault();
  var self = this;
  var modal = $('.modal');
  var modalDialog = modal.children('.modal__dialog');
  var product_id  = $(self).parent().parent('.option').find('#product_id').val();  
  
  $.ajax({
    url:'/index.php?route=modals/actionabonements&product_id='+product_id,
    type:'GET',
    async:false,
    success: function(data){
      modalDialog.append(data);
      modalDialog.addClass('modal__dialog--promo');
      /*
      modalDialog.children('.modal__header').text('Акційний скіпас на катання')
        .append(getModalCloseButtonHTML());
	  */
      var amount = $(self).prev().children('.option__amount').val();
      var buyItemBody = modal.find('.buy-item__body');
      var buyItemData = buyItemBody.children('.buy-item__data');
      var optionData = $(self).closest('.option__buy').prev();
      var header = $(self).closest('.promo__body').prev().children('h3').clone();
      var cardOwl = modal.find('.card-owl');

      buyItemData.append(header);
      buyItemData.append(optionData.html());


      initCardOwlForModal(amount, buyItemBody, cardOwl, self);
	  
	  
	  
	  //alert('dfgdf');
	  
      //var cropAvatar = new CropAvatar();

      //addSliderItemOnClick(cropAvatar, modalDialog, cardOwl);
      //addSlidersItemCloseEvent(cardOwl);
      initOptionQualityForAPromotionalModals(self, modal);
	  
      openModal(modal);
      cardOwl.trigger('refresh.owl.carousel');
    }
  });
});


$('.vip-card .vip-card__buy .icon--cart').click(function(e){
  e.preventDefault();
  var self = this;
  var modal = $('.modal');
  var modalDialog = modal.children('.modal__dialog');
  var $loading = $('#loading');
  var vipCardType = $(self).parents('.vip-card')[0].classList[1];

  
  location.href = '/index.php?route=modals/vipcardbuy&type='+vipCardType;
  

});




$('.vip-card .vip-card__prolong .icon--cart, .vip-card .vip-card__prolong__profile .icon--cart').click(function(e){
  e.preventDefault();
  var self = this;
  
  var found = false;
  //console.log( $(self).parents('.vip-card').attr('class').split(/\s+/));
  var classList = $(self).parents('.vip-card').attr('class').split(/\s+/);
  var cardNumber = '';
  //console.log(classList);
  $.each(classList, function(index, item) {
    if (item === 'vip-card--discount') {
        //do something
        found = true;
        cardIndex = 0;
    }
    if (item === 'vip-card--golden') {
        //do something
        found = true;
        cardIndex = 1;
    }
    if (item === 'vip-card--brilliant') {
        //do something
        found = true;
        cardIndex = 2;
    }
	});
  
  
  if (!found){
  	var cardIndex = $(this).closest('.vip-card').prevAll().length;
  } else {
	  //get card number
	  var cardDiv = $(self).parents('.vip-card__body').find('.vip-card__details').children()[1];
	  cardNumber = $(cardDiv).text();
	  
	  
  }
  var modal = $('.modal');
  var modalDialog = modal.children('.modal__dialog');
  var $loading = $('#loading');
  
  
  
  
  $.ajax({
    url: '/index.php?route=modals/Contentref&cardindex='+cardIndex+'&cardNumber='+cardNumber,
    type: 'GET',
    beforeSend : function () {
	    
	    $loading.fadeIn();
	    
	    
    },
    success: function (data) {
      modalDialog.append(data);
      
            var cards = [];
            var input = modalDialog.find('input[name^=option]');
            var select = $(input).next('select');

            if (select.length) {
                select.children().each(function() {
                    cards.push($(this).text());
                });

                select.remove();
            }      
      
      
      
      modalDialog.addClass('modal__dialog--refill');
      
			$(input).autocomplete({
			    source: [cards],
			    minLength: 0,
			    delay: 500,
			    openOnFocus: true,
			    close: function( event, ui ) { 
				    							////console.log('close');
				    							 },
			}).focus(function () {
				
			    //$(this).autocomplete( "search", "" );
			    $(this).autocomplete("search");
			    ////console.log('on focus event');
			});  
			
			
			$(input).on('selected.xdsoft', function(event, item){
				 $(this).trigger('keyup');
			});

	  
	  //var vipCardType = $(self).parents('.vip-card')[0].classList[1];
	   
	  
     /* modal.find('.card').each( function () {
        var self = this;
        $(self).css('display', 'none');
      });
  		  
  		  
  		  
      var vipCardType = $(self).parents('.vip-card')[0].classList[1];
      modal.find('.' + vipCardType).css('display', 'block');	  
	  
	  var dataMy = $(self).parents('.vip-card')[0];

	  var myDiv = $(dataMy).find('.vip-card__details').find('.section-info')[0];
	  if ($(myDiv).length) {
		  
		modal.find('.' + vipCardType).find('.option__cart').parent().find('.default').val($(myDiv).text());  
		  

	  	
	  }
     



      modal.find('.' + vipCardType).find('.option__cart').removeClass('disabled');
      
      */


	  disableButtonIfInvalidForm(modalDialog.find('input'), modalDialog.find('button.option__cart'));
	  bindPayButton(modalDialog, modalDialog.find('button.option__cart'));
	  
	  
      openModal(modal);
    },

    complete : function () {
	    
	    $loading.fadeOut();
    }
  });
});

function simulateKeyPress(character) {
  jQuery.event.trigger({ type : 'keypress', which : character.charCodeAt(0) });
}


$('.refills .refills__buttons .prolang-button').click(function(e){
    e.preventDefault();
    var url = '/index.php?route=modals/cardRefillModal';
    var $modal = $('.modal');
    var $modalDialog = $modal.children('.modal__dialog');

    $.ajax({
        url: url,
        type: 'GET',
        success: function (data) {
            $modalDialog.append(data);
            var input = $modalDialog.find('input[name^=option]');

            input.each(function () {
                var cards = [];
                var select = $(this).next('select');

                if (select.length) {
                    select.children().each(function() {
                        cards.push($(this).text());
                    });

                    select.remove();
                }

				$(this).autocomplete({
				    source: [cards],
				    minLength: 0,
				    delay: 500,
				    openOnFocus: true,
				    close: function( event, ui ) { 
				    							////console.log('close');
				    							 },
				}).focus(function () {
					
				    //$(this).autocomplete( "search", "" );
				    $(this).autocomplete("search");
				    ////console.log('on focus event');
				});
                
               	$(this).on('selected.xdsoft', function(event, item){
				 	$(this).trigger('keyup');
				});



                disableButtonIfInvalidForm($(this), $(this).parent().siblings('button.option__cart'));
            });

            $modalDialog.addClass('modal__dialog--refill modal__dialog--refill-all');
            bindPayButtonThreeTypes($modalDialog, input);
            openModal($modal);
        }
    });
});



			function getCloseEvent(event, ui) {
                ////console.log('Close');
            }


$('.refill--vip-cards .option__cart').click(function(e){
  e.preventDefault();
  var self = this;
  var modal = $('.modal');
  var modalDialog = modal.children('.modal__dialog');
  
  var product_id  = $(self).closest('.option__buy').prev().find('input[name=product_id]').val();  
  
  //alert(product_id);

  $.ajax({
    url:'/index.php?route=modals/vipCardModal&product_id='+product_id,
    type:'GET',
    success: function(data){
      modalDialog.append(data);
      modalDialog.addClass('modal__dialog--ski');
       modalDialog.children('.modal__header').append(getModalCloseButtonHTML());
       
      //modalDialog.children('.modal__header').text('Поповнення VIP карти на катання')
      //  .append(getModalCloseButtonHTML());

            var cards = [];
            var input = modalDialog.find('input[name=card_number]');
            var select = $(input).next('select');

            if (select.length) {
                select.children().each(function() {
                    cards.push($(this).text());
                });
                
                //$(select).editableSelect();

                select.remove();
            }

			$(input).autocomplete({
			    source: [cards],
			    minLength: 0,
			    delay: 500,
			    openOnFocus: true,
			}).focus(function () {
			    $(this).autocomplete("search");
			});
			
			$(input).on('selected.xdsoft', function(event, item){
				 $(this).trigger('keyup');
			});

            
            var amount = $(self).prev().children('.option__amount').val();
            var buyItemBody = modal.find('.buy-item__body');
            var buyItemData = buyItemBody.children('.buy-item__data');
            var optionData = $(self).closest('.option__buy').prev();

            buyItemBody.find('.option__amount').val(amount);

            if (amount > 1) {
                buyItemBody.prepend('<div class="buy-item__amount">' + amount + '</div>');
            }

            buyItemData.append(optionData.html());          
            
			
/*
      var amount = $(self).prev().children('.option__amount').val();
      var buyItemBody = modal.find('.buy-item__body');
      var buyItemData = buyItemBody.children('.buy-item__data');
      var optionData = $(self).closest('.option__buy').prev();

      // Money Update
      // var optionDataPrice = $(self).closest('.option__buy').prev().children('.option__price').text();
      // optionDataPrice = optionDataPrice.replace(' ', '');
      // ////console.log(optionDataPrice);
      // optionDataPrice = parseInt(optionDataPrice);
      // //console.log(optionDataPrice);

      buyItemData.append(optionData.html());
      // var buyItemDataPrice = buyItemData.find('.option__price');

      if (amount > 1) {
        buyItemBody.prepend('<div class="buy-item__amount">' + amount + '</div>');
        buyItemData.next().find('.option__amount').val(amount);
        //buyItemDataPrice.text(formatMoney(optionDataPrice * amount) + ' грн')
      }

      buyItemBody.find('.option__quantity .option__plus').click( function(e){
        e.preventDefault();
        var input = $(this).prev();
        var value = +(input.val()) + 1;
        input.val(value);

        var buyItemAmount = $(this).parent().parent().find('.buy-item__amount');
        if (buyItemAmount.length) {
          buyItemAmount.text(value);
        } else {
          buyItemBody.prepend('<div class="buy-item__amount">' + value + '</div>');
        }
      });

      buyItemBody.find('.option__quantity .option__minus').click( function(e){
        e.preventDefault();
        var input = $(this).next();
        if (input.val() > 2) {
          var value = +(input.val()) - 1;
          input.val(value);
          $(this).parent().parent().find('.buy-item__amount').text(value)
        } else {
          input.val(1);
          $(this).parent().parent().find('.buy-item__amount').remove();
        }
      });
      
*/
      
/*
	    var cards = [];
	    var input = modalDialog.find('input[name^=card_number]');
	    var select = $(input).next('select');
	
	    if (select.length) {
	        select.children().each(function() {
	            cards.push($(this).text());
	        });
	
	        select.remove();
	    }      
      
      
       input.autocomplete({
	 	 source: [cards]
	  });  
*/   
	  initOptionQualityForAModal(self, modalDialog);
	  disableButtonIfInvalidForm(modalDialog.find('input'), modalDialog.find('button.buy-info__button'));
	  bindRefiilsPayButton(modalDialog, modalDialog.find('button.buy-info__button'));
	  
      openModal(modal);

    }
  });
});

$('.refill--equpment .option__cart').click(function(e){
  e.preventDefault();
  var self = this;
  var modal = $('.modal');
  var modalDialog = modal.children('.modal__dialog');
  var product_id  = $(self).closest('.option__buy').prev().find('input[name=product_id]').val();  
  $.ajax({
    url:'/index.php?route=modals/vipCardModal&product_id='+product_id,
    type:'GET',
    success: function(data){
      modalDialog.append(data);
      modalDialog.addClass('modal__dialog--equpment');
      modalDialog.children('.modal__header').append(getModalCloseButtonHTML());
/*      modalDialog.children('.modal__header').text('Поповнення VIP карти на спорядження')
        .append(getModalCloseButtonHTML());
 */       
        
        
            var cards = [];
            var input = modalDialog.find('input[name=card_number]');
            var select = $(input).next('select');

            if (select.length) {
                select.children().each(function() {
                    cards.push($(this).text());
                });

                select.remove();
            }

			$(input).autocomplete({
			    source: [cards],
			    minLength: 0,
			    delay: 500,
			    openOnFocus: true,
			}).focus(function () {
				
			    //$(this).autocomplete( "search", "" );
			    $(this).autocomplete("search");
			    //console.log('on focus event');
			});  
            
            $(input).on('selected.xdsoft', function(event, item){
				 $(this).trigger('keyup');
			});

            
               
            var amount = $(self).prev().children('.option__amount').val();
            var buyItemBody = modal.find('.buy-item__body');
            var buyItemData = buyItemBody.children('.buy-item__data');
            var optionData = $(self).closest('.option__buy').prev();
            var headerHtml = optionData.parent().parent().find('.refill__body-header').html();

            buyItemBody.find('.option__amount').val(amount);
            buyItemData.append(headerHtml);
            buyItemData.append(optionData.html());

            if (amount > 1) {
                buyItemBody.prepend('<div class="buy-item__amount">' + amount + '</div>');
            }        

  /*    var amount = $(self).prev().children('.option__amount').val();
      var buyItemBody = modal.find('.buy-item__body');
      var buyItemData = buyItemBody.children('.buy-item__data');
      var optionData = $(self).closest('.option__buy').prev();
      var headerHtml = optionData.parent().parent().find('.refill__body-header').html();

      buyItemData.append(headerHtml);
      buyItemData.append(optionData.html());

      if (amount > 1) {
        buyItemBody.prepend('<div class="buy-item__amount">' + amount + '</div>');
        buyItemData.next().find('.option__amount').val(amount);
      }
      
      
 */     

/*
      buyItemBody.find('.option__quantity .option__plus').click( function(e){
        e.preventDefault();
        var input = $(this).prev();
        var value = +(input.val()) + 1;
        input.val(value);

        var buyItemAmount = $(this).parent().parent().find('.buy-item__amount');
        if (buyItemAmount.length) {
          buyItemAmount.text(value);
        } else {
          buyItemBody.prepend('<div class="buy-item__amount">' + value + '</div>');
        }
      });
*/

/*
      buyItemBody.find('.option__quantity .option__minus').click( function(e){
        e.preventDefault();
        var input = $(this).next();
        if (input.val() > 2) {
          var value = +(input.val()) - 1;
          input.val(value);
          $(this).parent().parent().find('.buy-item__amount').text(value)
        } else {
          input.val(1);
          $(this).parent().parent().find('.buy-item__amount').remove();
        }
      });
*/
      
      
	  initOptionQualityForAModal(self, modalDialog);
	  disableButtonIfInvalidForm(modalDialog.find('input'), modalDialog.find('button.buy-info__button'));
	  bindRefiilsPayButton(modalDialog, modalDialog.find('button.buy-info__button'));
      openModal(modal);
    }
  });
});

$('.profile .profile-menu li').click(function(e) {

    var viewClass = $(this)[0].classList[0];

    $('.profile .profile-menu li').removeClass('active');
    $('.profile .profile-view').removeClass('active');

    $(this).addClass('active');
    $('.' + viewClass).addClass('active');
});

var cartService = (function () {

    var toogleMenu = $('.js-expand-menu').click(function () {
            $(this).parents('.remove-edit-actions').toggleClass('menu-expanded');
        });

  return {
    toogleMenu: toogleMenu
  };

})();

cartService.toogleMenu;

function CropAvatar() {

  this.TEMPORATY_IMAGE_PATH = ''

  this.$avatarView = $('.owl-item .card__profile');
  //this.$avatar = this.$avatarView.find('img');
  this.$avatarModal = $('.avatar-modal');
  this.$loading = $('#loading');
  this.$cardProfile = null;

  this.$avatarForm = this.$avatarModal.find('.avatar-form');
  this.$avatarUpload = this.$avatarForm.find('.avatar-upload');
  this.$avatarSrc = this.$avatarForm.find('.avatar-src');
  this.$avatarData = this.$avatarForm.find('.avatar-data');
  this.$avatarInput = this.$avatarForm.find('.avatar-input');
  this.$avatarSave = this.$avatarForm.find('.avatar-save');
  this.$avatarBtns = this.$avatarForm.find('.avatar-btns');

  this.$avatarWrapper = this.$avatarModal.find('.avatar-wrapper');
  this.$avatarPreview = this.$avatarModal.find('.avatar-preview');

  this.init();
}

CropAvatar.prototype = {
  constructor: CropAvatar,

  support: {
    fileList: !!$('<input type="file">').prop('files'),
    blobURLs: !!window.URL && URL.createObjectURL,
    formData: !!window.FormData
  },

  init: function () {
    this.support.datauri = this.support.fileList && this.support.blobURLs;

    if (!this.support.formData) {
      this.initIframe();
    }
	//console.log('INIT CROP');
    // this.initTooltip();
    // this.initModal();
    this.addListener();

    var self = this;

    this.$avatarForm.find('.close').on('click', function () {
	    
      self.stopCropper();
      self.$avatarModal.removeClass('avatar-modal--visible');
    })

  },

  renewButtonListeners: function ($lements) {
    var self = this;
	////console.log($lements);
    $lements.unbind('click');
    $lements.bind('click', function (e) {
       self.$cardProfile = $(this).parent().parent().children('.card__profile');
       
       self.$avatarModal.addClass('avatar-modal--visible');
      self.scrollToModalTop();
      e.preventDefault();
    });
  },

  scrollToModalTop: function () {
    $('.modal').animate({
      scrollTop: 0
    }, 500);
  },

  addListener: function () {

    var self = this;

    $('.owl-item .card__download-photo').bind('click', function (e) {
	    
	   try {
		   

	   	self.$cardProfile = $(this).parent().parent().children('.card__profile');
	   	//console.log(self.$cardProfile);
	   	self.$avatarModal.addClass('avatar-modal--visible');
	   	self.scrollToModalTop();
    } catch(ex) {
        alert('An error occurred and I need to write some code to handle this!');
    }    
	    
	  
	  e.preventDefault();

      
     

    });

    this.$avatarInput.on('change', $.proxy(this.change, this));
    this.$avatarForm.on('submit', $.proxy(this.submit, this));
    this.$avatarBtns.on('click', $.proxy(this.rotate, this));
  },

  // initTooltip: function () {
  //   this.$avatarView.tooltip({
  //     placement: 'bottom'
  //   });
  // },

  // initModal: function () {
  //   this.$avatarModal.modal({
  //     show: false
  //   });
  // },

  initPreview: function () {
	 
    var url = this.$avatar.attr('src');

    this.$avatarPreview.html('<img src="' + url + '">');
  },

  initIframe: function () {
	  
    var target = 'upload-iframe-' + (new Date()).getTime();
    var $iframe = $('<iframe>').attr({
      name: target,
      src: ''
    });
    var _this = this;

    // Ready ifrmae
    $iframe.one('load', function () {

      // respond response
      $iframe.on('load', function () {
        var data;

        try {
          data = $(this).contents().find('body').text();
        } catch (e) {
          //console.log(e.message);
        }

        if (data) {
          try {
            data = $.parseJSON(data);
          } catch (e) {
            //console.log(e.message);
          }

          _this.submitDone(data);
        } else {
          _this.submitFail('Image upload failed!');
        }

        _this.submitEnd();

      });
    });

    this.$iframe = $iframe;
    this.$avatarForm.attr('target', target).after($iframe.hide());
  },

  // click: function () {
  //   $('.avatar-modal').addClass('avatar-modal--visible');
  //   //this.initPreview();
  // },
  capture: function(e) {
	  e.preventDefault();
	 var canvas = document.getElementById("c");
     var width = video.offsetWidth
        , height = video.offsetHeight;	 
     canvas.width = width;
     canvas.height = height;        
	 canvas.getContext("2d").drawImage(video, 0, 0, width, height);
	 var img = canvas.toDataURL("image/png");
	 this.$avatarSrc.val(img);
	 this.url = img;//URL.createObjectURL(img);
	 var button = document.getElementById("stop");
	 $(button).trigger('click');
	 this.startCropper();
	 ////console.log(this);
  },

  change: function () {
    var files;
    var file;
	//console.log('CHANGE');
	////console.log(this);
    if (this.support.datauri) {
      files = this.$avatarInput.prop('files');

      if (files.length > 0) {
        file = files[0];

        if (this.isImageFile(file)) {
          if (this.url) {
            URL.revokeObjectURL(this.url); // Revoke the old one
          }

          this.url = URL.createObjectURL(file);
          this.startCropper();
        }
      }
    } else {
      file = this.$avatarInput.val();

      if (this.isImageFile(file)) {
        this.syncUpload();
      }
    }
  },

  submit: function () {

    if (!this.$avatarSrc.val() && !this.$avatarInput.val()) {
      return false;
    }

    if (this.support.formData) {
	    //console.log(this.support.formData)
      this.ajaxUpload();
      return false;
    }
  },

  rotate: function (e) {
    var data;

    if (this.active) {
      data = $(e.target).data();

      if (data.method) {
        this.$img.cropper(data.method, data.option);
      }
    }
  },

  isImageFile: function (file) {
    if (file.type) {
      return /^image\/\w+$/.test(file.type);
    } else {
      return /\.(jpg|jpeg|png|gif)$/.test(file);
    }
  },

  startCropper: function () {
    var _this = this;

    if (this.active) {
      this.$img.cropper('replace', this.url);
    } else {
      this.$img = $('<img src="' + this.url + '">');
      this.$avatarWrapper.empty().html(this.$img);
      this.$img.cropper({
        aspectRatio: 1,
        preview: this.$avatarPreview.selector,
        crop: function (e) {
          var json = [
            '{"x":' + e.x,
            '"y":' + e.y,
            '"height":' + e.height,
            '"width":' + e.width,
            '"rotate":' + e.rotate + '}'
          ].join();

          _this.$avatarData.val(json);
        }
      });

      this.active = true;
    }

    this.$avatarModal.one('hidden.bs.modal', function () {
      _this.$avatarPreview.empty();
      _this.stopCropper();
    });
  },

  stopCropper: function () {
    if (this.active) {
      this.$img.cropper('destroy');
      this.$img.remove();
      this.active = false;
    }
  },

  ajaxUpload: function () {
    //var url = this.$avatarForm.attr('action');
    var url = 'catalog/controller/crop/crop.php';
    var data = new FormData(this.$avatarForm[0]);
    var _this = this;

    $.ajax(url, {
      type: 'post',
      data: data,
      dataType: 'json',
      processData: false,
      contentType: false,

      beforeSend: function () {
        _this.submitStart();
      },

      success: function (data) {
	     //console.log(data);
        _this.submitDone(data);
      },

      error: function (XMLHttpRequest, textStatus, errorThrown) {
        _this.submitFail(textStatus || errorThrown);
      },

      complete: function () {
	    //console.log('COMPLETE');  
        _this.submitEnd();
      }
    });
  },

  syncUpload: function () {
    this.$avatarSave.click();
  },

  submitStart: function () {
    this.$loading.fadeIn();
  },

  submitDone: function (data) {
    if ($.isPlainObject(data) && data.state === 200) {
      if (data.result) {
        this.url = data.result;
        this.filename = data.filename;
		//console.log(data);
        if (this.support.datauri || this.uploaded) {
          this.uploaded = false;
          this.cropDone();
        } else {
          this.uploaded = true;
          this.$avatarSrc.val(this.url);
          this.startCropper();
        }

        this.$avatarInput.val('');
      } else if (data.message) {
        this.alert(data.message);
      }
    } else {
      this.alert('Failed to response');
    }
  },
  
  

  submitFail: function (msg) {
    this.alert(msg);
  },

  submitEnd: function () {
    this.$loading.fadeOut();
  },

  cropDone: function () {
    this.$avatarForm.get(0).reset();
    ////console.log(this.$cardProfile);
    this.$cardProfile.find('img').remove();
    this.$cardProfile.addClass('avatar');
    this.$cardProfile.append('<img src="'+ this.TEMPORATY_IMAGE_PATH + this.url +'" />');
    this.$cardProfile.parent().next().children('.card__body__avatar-input').val(this.url);

    this.cropSave(this);
    this.stopCropper();
    this.$avatarModal.removeClass('avatar-modal--visible');
    // set file into database
   
  },
  
  cropSave: function (data) {
	  //console.log(data);
	  var url = '/index.php?route=crop/cropsave/save';
	    $.ajax(url, {
	      type: 'post',
	      data: {filename:data.filename.toString()},
	      dataType: 'json',
	
	      beforeSend: function () {
	        //_this.submitStart();
	      },
	
	      success: function (json) {
	        //_this.submitDone(data);
	        data.$cardProfile.parent().next().children('.card__body__avatar-input').val(json['code']);
	      },
	
	      error: function (XMLHttpRequest, textStatus, errorThrown) {
	        //_this.submitFail(textStatus || errorThrown);
	      },
	
	      complete: function () {
	        //_this.submitEnd();
	      }
	    });	  
  },

  alert: function (msg) {
    var $alert = [
      '<div class="alert alert-danger avatar-alert alert-dismissable">',
      '<button type="button" class="close" data-dismiss="alert">&times;</button>',
      msg,
      '</div>'
    ].join('');

    this.$avatarUpload.after($alert);
  }
};



function CropAvatar2() {
	
	
	
	
	
  this.TEMPORATY_IMAGE_PATH = ''

  this.$avatarView = $('.user-avatar');
  //this.$avatar = this.$avatarView.find('img');
  this.$avatarModal = $('.avatar-modal');
  this.$loading = $('#loading');
  this.$cardProfile = null;

  this.$avatarForm = this.$avatarModal.find('.avatar-form');
  this.$avatarUpload = this.$avatarForm.find('.avatar-upload');
  this.$avatarSrc = this.$avatarForm.find('.avatar-src');
  this.$avatarData = this.$avatarForm.find('.avatar-data');
  this.$avatarInput = this.$avatarForm.find('.avatar-input');
  this.$avatarSave = this.$avatarForm.find('.avatar-save');
  this.$avatarBtns = this.$avatarForm.find('.avatar-btns');
  this.$avatarCapture = this.$avatarForm.find('.avatar-capture');
  this.$avatarWrapper = this.$avatarModal.find('.avatar-wrapper');
  this.$avatarPreview = this.$avatarModal.find('.avatar-preview');
  
  
  
  this.init();
}

// 2.1. Наследование



CropAvatar2.prototype = Object.create(CropAvatar.prototype, {
	
	init :  { value:  function () {
    this.support.datauri = this.support.fileList && this.support.blobURLs;

    if (!this.support.formData) {
      this.initIframe();
    }

    // this.initTooltip();
    // this.initModal();
    this.addListener();

    var self = this;

    this.$avatarForm.find('.close').on('click', function () {
	    
      self.stopCropper();
      self.$avatarModal.removeClass('avatar-modal--visible');
    })

  }
  },
	
  scrollToModalTop: {value : function () {
    $('.avatar-modal').animate({
      scrollTop: 0
    }, 500);
  }
  },	
	
	addListener : {value : function () {

    var self = this;
	//console.log(self);
    $('.upload-link').bind('click', function (e) {

	   try {
	   	//self.$cardProfile = $(this).parent().children('.user-avatar');
	   	self.$cardProfile = $(this).parent().parent().parent().children('.user-avatar');
	   	//console.log(self);
	   	//console.log($(this).parent().parent().parent().parent());	
	   	self.$avatarModal.addClass('avatar-modal--visible');
	   	self.scrollToModalTop();
    } catch(ex) {
        alert('An error occurred and I need to write some code to handle this!');
    }    
	    
	  
	  e.preventDefault();

      
     

    });

    this.$avatarInput.on('change', $.proxy(this.change, this));
    this.$avatarForm.on('submit', $.proxy(this.submit, this));
    this.$avatarBtns.on('click', $.proxy(this.rotate, this));
    this.$avatarCapture.on('click', $.proxy(this.capture, this));
  }
  },
  
cropSave: {value : function (data) {
	  ////console.log(data);
	  var url = '/index.php?route=crop/cropsave/save';
	    $.ajax(url, {
	      type: 'post',
	      data: {filename:data.filename.toString()},
	      dataType: 'json',
	
	      beforeSend: function () {
	        //_this.submitStart();
	      },
	
	      success: function (json) {
	        //_this.submitDone(data);
	        data.$cardProfile.children('.card__body__avatar-input').val(json['code']);
	      },
	
	      error: function (XMLHttpRequest, textStatus, errorThrown) {
	        //_this.submitFail(textStatus || errorThrown);
	      },
	
	      complete: function () {
	        //_this.submitEnd();
	      }
	    });	  
  }
  },  
    cropDone: {value : function () {
	
    this.$avatarForm.get(0).reset();
    ////console.log(this.$cardProfile);
    this.$cardProfile.find('img').remove();
    this.$cardProfile.addClass('avatar');
    this.$cardProfile.append('<img src="'+ this.TEMPORATY_IMAGE_PATH + this.url +'" />');
    ////console.log(this.$cardProfile.children('.card__body__avatar-input'));
    this.$cardProfile.children('.card__body__avatar-input').val(this.url).trigger('change');
    this.cropSave(this);
    this.stopCropper();
    this.$avatarModal.removeClass('avatar-modal--visible');
    // set file into database
   
  }
  }
	
	
	
});

CropAvatar2.prototype.constructor = CropAvatar2;






function CropAvatar3() {
	
	
	
	
	
  this.TEMPORATY_IMAGE_PATH = ''

  this.$avatarView = $('.user-avatar');
  //this.$avatar = this.$avatarView.find('img');
  this.$avatarModal = $('.avatar-modal');
  this.$loading = $('#loading');
  this.$cardProfile = null;

  this.$avatarForm = this.$avatarModal.find('.avatar-form');
  this.$avatarUpload = this.$avatarForm.find('.avatar-upload');
  this.$avatarSrc = this.$avatarForm.find('.avatar-src');
  this.$avatarData = this.$avatarForm.find('.avatar-data');
  this.$avatarInput = this.$avatarForm.find('.avatar-input');
  this.$avatarSave = this.$avatarForm.find('.avatar-save');
  this.$avatarBtns = this.$avatarForm.find('.avatar-btns');
  this.$avatarCapture = this.$avatarForm.find('.avatar-capture');
  this.$avatarWrapper = this.$avatarModal.find('.avatar-wrapper');
  this.$avatarPreview = this.$avatarModal.find('.avatar-preview');
  
  
  
  this.init();
}

// 2.1. Наследование



CropAvatar3.prototype = Object.create(CropAvatar.prototype, {
	
	init :  { value:  function () {
    this.support.datauri = this.support.fileList && this.support.blobURLs;

    if (!this.support.formData) {
      this.initIframe();
    }

    // this.initTooltip();
    // this.initModal();
    this.addListener();

    var self = this;

    this.$avatarForm.find('.close').on('click', function () {
	    
      self.stopCropper();
      self.$avatarModal.removeClass('avatar-modal--visible');
    })

  }
  },
	
  scrollToModalTop: {value : function () {
    $('.avatar-modal').animate({
      scrollTop: 0
    }, 500);
  }
  },	
	
	addListener : {value : function () {

    var self = this;
	//console.log(self);
    $('.upload-link').bind('click', function (e) {

	   try {
	   	//self.$cardProfile = $(this).parent().children('.user-avatar');
	   	self.$cardProfile = $(this).parent().parent().parent().parent().children('.user-avatar');
	   	//console.log(self);
	   	//console.log($(this).parent().parent().parent().parent());	
	   	self.$avatarModal.addClass('avatar-modal--visible');
	   	self.scrollToModalTop();
    } catch(ex) {
        alert('An error occurred and I need to write some code to handle this!');
    }    
	    
	  
	  e.preventDefault();

      
     

    });

    this.$avatarInput.on('change', $.proxy(this.change, this));
    this.$avatarForm.on('submit', $.proxy(this.submit, this));
    this.$avatarBtns.on('click', $.proxy(this.rotate, this));
    this.$avatarCapture.on('click', $.proxy(this.capture, this));
  }
  },
  
cropSave: {value : function (data) {
	  ////console.log(data);
	  var url = '/index.php?route=crop/cropsave/save&customer';
	    $.ajax(url, {
	      type: 'post',
	      data: {filename:data.filename.toString()},
	      dataType: 'json',
	
	      beforeSend: function () {
	        //_this.submitStart();
	      },
	
	      success: function (json) {
	        //_this.submitDone(data);
	        //console.log(json);
	        //console.log($.find('input:hidden[name^="custom_field"]'));
	        var inputData = $.find('input:hidden[name^="custom_field"]');
	        
	        $(inputData).val(json['code']);
	      },
	
	      error: function (XMLHttpRequest, textStatus, errorThrown) {
	        //_this.submitFail(textStatus || errorThrown);
	      },
	
	      complete: function () {
	        //_this.submitEnd();
	      }
	    });	  
  }
  },  
    cropDone: {value : function () {
	
    this.$avatarForm.get(0).reset();
    this.$cardProfile.find('img').remove();
    this.$cardProfile.addClass('avatar');
    this.$cardProfile.attr('src', this.TEMPORATY_IMAGE_PATH + this.url);

    this.cropSave(this);
    this.stopCropper();
    this.$avatarModal.removeClass('avatar-modal--visible');
    // set file into database
   
  }
  }
	
	
	
});

CropAvatar3.prototype.constructor = CropAvatar3;


$('.header-wrap .header__cart').on('click', function (e) {
	
	
/*
  e.stopPropagation();
  e.preventDefault();
  var cartOverlay = $('footer .cart-overlay');
  var style = {right: 0};

  if (window.innerWidth > 768) {
    style = {
      left : $(this).offset().left - 250
    }
  }

  $(this).toggleClass('header__cart--open');
  cartOverlay.find('.header__cart-items').removeAttr('style').css(style);
  cartOverlay.toggleClass('cart-overlay--open');
*/
  
  
    e.stopPropagation();
    e.preventDefault();
    var cartOverlay = $('footer .cart-overlay');
    var style = {right: 0};

    if (window.innerWidth > 768) {
        style = {
            left : $(this).offset().left - 250
        }
    }

    if ($('html').hasClass('hidden-overflow')) {
        $('html').removeClass('hidden-overflow');
        $('body').removeClass('hidden-overflow');
    } else {
        $('html').addClass('hidden-overflow');
        $('body').addClass('hidden-overflow');
    }

    $(this).toggleClass('header__cart--open');
    cartOverlay.find('.header__cart-items').removeAttr('style').css(style);
    cartOverlay.toggleClass('cart-overlay--open');  
  
  
  
  
});


$('footer .cart-overlay .header__cart-items').on('click', function (e) {
 // e.stopPropagation();
 // e.preventDefault();
});


$('footer .cart-overlay, .header').on('click', function () {
  $('.header__cart.header__cart--open').removeClass('header__cart--open');
  $('footer .cart-overlay').removeClass('cart-overlay--open');
});

$('.vip-card-content .read-more-section').click(function(e) {
  $(this).siblings('.info').addClass('expanded');

  $(this).hide();
  $(this).siblings('.show-less-section').show();
});

$('.vip-card-content .show-less-section').click(function(e) {
  $(this).siblings('.info').removeClass('expanded');

  $(this).hide();
  $(this).siblings('.read-more-section').show();
});


$('.existing-address .edit-action').click(function(e){
  e.preventDefault();
  var modal       = $('.modal'),
    modalDialog = modal.children('.modal__dialog');

  $.ajax({
    url: '/catalog/view/theme/bukovel/template/modals/orderAddressModalTpl.html',
    type: 'GET',
    success: function (data) {

      modalDialog.append(data);
      modalDialog.addClass('order-address__modal');
      modalDialog.addClass('edit');

      $(modalDialog).find('select').niceSelect();

      var nameInput = modalDialog.find('input[name="name"]'),
        surNameInput = modalDialog.find('input[name="surname"]'),
        fatherNameInput = modalDialog.find('input[name="father_name"]'),
        phoneInput = modalDialog.find('input[name="phone"]'),
        emailInput = modalDialog.find('input[name="email"]'),
        streetInput = modalDialog.find('input[name="street"]'),
        buildingNumberInput = modalDialog.find('input[name="building_number"]'),
        flatNumberInput = modalDialog.find('input[name="flat_number"]'),
        cityInput = modalDialog.find('input[name="city"]'),
        indexInput = modalDialog.find('input[name="index"]'),
        countryInput = modalDialog.find('.nice-select'),
        regionInput = modalDialog.find('input[name="region"]');

      nameInput.val('Олег');
      surNameInput.val('Мелевич');
      fatherNameInput.val('Віталійович');
      phoneInput.val('+3 (099) 286 01 09');
      emailInput.val('melevych@gmail.com');
      streetInput.val('Коновальця');
      buildingNumberInput.val('103');
      flatNumberInput.val('24');
      cityInput.val('Івано-Франківськ');
      indexInput.val('76000');
      //countryInput.find('li[data-value="ukraine"]').click();
      regionInput.val('Івано-Франківська обл.');

      modalDialog.find('.modal__header h3').text('Редагування');

      openModal(modal);
    }
  });
});






(function(){
  var Spinner = {
    showLoader: function () {
	    
	 var pathname = window.location.pathname;
	 //console.log(pathname);   
	  if (pathname != '/customer-checkout') {  
	      $('body').append(
	        '<div id="loader" aria-label="Loading" role="img" tabindex="-1">' +
	        '<div class="overlay"><div class="loader"></div></div>' +
	        '</div>'
	      );
      }
    },

    hideLoader: function () {
      $('body #loader').remove();
    },

    toggleLoader: function () {
      if ($('body #loader').length) {
        this.hideLoader();
      } else {
        this.showLoader();
      }
    },

    init: function () {
      window.toggleLoader = this.toggleLoader.bind(this);
    }
  };

    var popUp = {
        getPopUpHtml: function(headerText, bodyMassage, buttonText) {
            return '<div id="pop-up" tabindex="-1">' +
                        '<div class="overlay">' +
                            '<div class="pop-up">' +
                                '<div class="pop-up__header">' +
                                    '<h3>' + headerText + '</h3>' +
                                    '<button class="pop-up__close">' +
                                        '<svg class="icon icon--close">' +
                                            '<use xlink:href="#icon--close"></use>' +
                                        '</svg>' +
                                    '</button>' +
                                '</div>' +
                                '<div class="pop-up__body">' + bodyMassage + '</div>' +
                                '<div class="pop-up__footer">' +
                                    '<button>' + buttonText + '</button>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>';
        },

        showPopUp: function (headerText, bodyMassage, buttonText) {
            var self = this;

            $('body').append(this.getPopUpHtml(headerText, bodyMassage, buttonText));

            $('.pop-up__close').on('click', function () {
                self.closePopUp();
            });

            $('.pop-up__footer button').on('click', function () {
                self.closePopUp();
            });
        },

        closePopUp : function () {
            $('body #pop-up').remove();
        },

        init: function () {
            window.showPopUp = this.showPopUp.bind(this);
            window.closePopUp = this.closePopUp.bind(this);
        }
    };



popUp.init();
  Spinner.init();
	$(document).on({
	    ajaxStart: function() { Spinner.showLoader();   },
	    ajaxStop: function() { Spinner.hideLoader() }    
	});	  
	  
})();



	
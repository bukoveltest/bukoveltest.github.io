/*Bund form vip card prolong one type*/
function bindPayButton(modalDialog, button) {

	$(button).off('click');
	$(button).click(function () {

	      prolongVipCard(modalDialog, button);

	});	
}



function prolongVipCard(modalDialog, button) {

			var element = $(button).parent();
			var this_my = element;
			var card_code = element.find("input[name^='option[']");
			var product_id = element.find("input[name^='product_id']");
			var hasError = false;
			var modal = modalDialog;
			
			$.ajax({
				url: 'index.php?route=modals/Contentref/validate',
				type: 'post',
				dataType: 'json',
				async: false,
				data: $(card_code).attr('name')+'='+$(card_code).val()+'&'+$(product_id).attr('name')+'='+$(product_id).val(),
				beforeSend: function() {
					//$('#button-cart').button('loading');
				},
				complete: function() {
					if (!hasError) {
						closeModal(modal);
						window.location.href = 'index.php?route=common/cart_added&base='+Base64EncodeUrl('product_id=' + $(product_id).val()+'&product_qty=1&product_card_code='+$(card_code).val());
					}
				},
				success: function(json) {
					var myForm = this_my;//.find('#opt .card__body');
	
					myForm.find('.alert, .text-danger').remove();
					console.log(json);
		
					if (json['error']) {
						hasError = true;
						if (json['error']['option']) {
							
	
							
							
							for (i in json['error']['option']) {

	
								
								
								var element = myForm.find('#input-option' + i.replace('_', '-'));
								element.after('<div class="text-danger">' + json['error']['option'][i] + '</div>');
							}
						}
		
	
	
					} else if (json['bukovel_error']) {
		
						
						// var html = ;
							console.log($('.modal'));
							$('.title').html('     <div class="alert alert--danger">'
								+'        <i class ="fa fa-exclamation-circle">'
								+'            <span class="fa-exclamation-circle__icon">!</span>'
								+'        </i>'
								          + json['bukovel_error'] 
								+'        <button class="alert__close">'
								+'            <svg class="icon icon--close">'
								+'                <use xlink:href="#icon--close"></use>'
								+'            </svg>'
								+'        </button>'
								+'    </div>');

							hasError = true;
							
						} else {
						
						hasError = false;
						
					}
				},
		        error: function(xhr, ajaxOptions, thrownError) {
			        alert(2);
		            alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
		        }
			});				
			
	
}

/*Bund form vip card prolong three types*/

function bindPayButtonThreeTypes(modalDialog, button) {

	button.each(function () {
		
		$(this).parent().siblings('button.option__cart').off('click');
		
		
		$(this).parent().siblings('button.option__cart').click(function (e) {
			  e.preventDefault();	
		      prolongVipCardThreeTypes(modalDialog, $(this));
	
		});		
	
	});

}


function prolongVipCardThreeTypes(modalDialog, button) {
	
	
			var element = $(button).parent();
			var this_my = element;
			var card_code = element.find("input[name^='option[']");
			var product_id = element.find("input[name^='product_id']");
			var hasError = false;
			var modal = modalDialog;
			
			
			
			$.ajax({
				url: 'index.php?route=modals/Contentref/validate',
				type: 'post',
				dataType: 'json',
				data: $(card_code).attr('name')+'='+$(card_code).val()+'&'+$(product_id).attr('name')+'='+$(product_id).val(),
				beforeSend: function() {
					//$('#button-cart').button('loading');
				},
				complete: function() {
					if (!hasError) {
						closeModal(modal);
						window.location.href = 'index.php?route=common/cart_added&base='+Base64EncodeUrl('product_id=' + $(product_id).val()+'&product_qty=1&product_card_code='+$(card_code).val());
					}
				},
				success: function(json) {
					var myForm = this_my;//.find('#opt .card__body');
	
					myForm.find('.alert, .text-danger').remove();
					console.log(json);
		
					if (json['error']) {
						hasError = true;
						if (json['error']['option']) {
							
	
							
							
							for (i in json['error']['option']) {
								hasError = true;
								
	
								
								
								var element = myForm.find('#input-option' + i.replace('_', '-'));
								element.after('<div class="text-danger">' + json['error']['option'][i] + '</div>');
							}
						}
		
	
	
					} else if (json['bukovel_error']) {
		
						
						// var html = ;
							console.log($('.modal'));
							$('.title').html('     <div class="alert alert--danger">'
								+'        <i class ="fa fa-exclamation-circle">'
								+'            <span class="fa-exclamation-circle__icon">!</span>'
								+'        </i>'
								          + json['bukovel_error'] 
								+'        <button class="alert__close">'
								+'            <svg class="icon icon--close">'
								+'                <use xlink:href="#icon--close"></use>'
								+'            </svg>'
								+'        </button>'
								+'    </div>');
							hasError = true;
							
	
					} else {
						
						hasError = false;
						
					}
				},
		        error: function(xhr, ajaxOptions, thrownError) {
		            alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
		        }
			});		
	
}
/*Bind reffils vip cards*/

function bindRefiilsPayButton(modalDialog, button) {

	$(button).off('click');
	$(button).click(function (e) {
	      reffilsVipCards(modalDialog, button);
	});	
}

function reffilsVipCards(modalDialog, button) {
	
	var modal = $(modalDialog);
	var i = 0;
	var hasError = false;
	var product_id = modal.find('.buy-info').find("input[name='product_id']").val();
	var card_code = modal.find('.buy-info').find("input[name='card_number']").val();
	var qty = modal.find('.buy-info').find("input[name='quantity']").val();
		$.ajax({
			url: 'index.php?route=modals/vipCardModal/validate',
			type: 'post',
			data: $('.modal :input').serializeArray(),
			dataType: 'json',
		
			beforeSend: function() {
				//$('#button-cart').button('loading');
				 //Spinner.showLoader();
			},
			complete: function() {
					if (!hasError) {
						closeModal(modal);
						window.location.href = 'index.php?route=common/cart_added&base='+Base64EncodeUrl('&product_id=' + product_id.toString()+'&product_qty='+qty+'&product_card_code='+card_code);
					}
			},
			success: function(json) {
				var myForm = modal;

				myForm.find('.alert, .text-danger').remove();
				
				console.log(json);
				
				if (json['error']) {
					if (json['error']['option']) {
						
						var element = modal.find('.buy-info').find("input[name='card_number']");
						element.after('<div class="text-danger">' + json['error']['option'] + '</div>');
						
						hasError = true;
					}
	


				} else if (json['bukovel_error']) {
		
						
						// var html = ;
							console.log($('.modal'));
							$('.modal__header').after('     <br /><div class="alert alert--danger">'
								+'        <i class ="fa fa-exclamation-circle">'
								+'            <span class="fa-exclamation-circle__icon">!</span>'
								+'        </i>'
								          + json['bukovel_error'] 
								+'        <button class="alert__close">'
								+'            <svg class="icon icon--close">'
								+'                <use xlink:href="#icon--close"></use>'
								+'            </svg>'
								+'        </button>'
								+'    </div>');
							hasError = true;
							
	
					} else {
						
						hasError = false;
						
					}
	

			},
	        error: function(xhr, ajaxOptions, thrownError) {
	            alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
	        }
		});
	
}


/*bind add new cart in accout profile*/

$('#add_new_card').click(function(e){
	e.preventDefault();
	
	//alert('add cart');
	var url = '/index.php?route=modals/addVipCard';
    var $modal = $('.modal');
    var $modalDialog = $modal.children('.modal__dialog');	
    
     $.ajax({
        url: url,
        type: 'GET',
        success: function (data) {
	        
            $modalDialog.append(data);
			$modalDialog.addClass('modal__dialog--ski');
			$modalDialog.children('.modal__header').append(getModalCloseButtonHTML());            


			disableButtonIfInvalidForm($modalDialog.find('input'), $modalDialog.find('.input_submit'));
			//bindPayButton($modalDialog, $modalDialog.find('.input_submit'));
            openModal($modal);
        }
    });   
    
    

    
    
	
});




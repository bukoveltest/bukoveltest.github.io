 <!DOCTYPE html>
<!--[if IE]><![endif]-->
<!--[if IE 8 ]><html dir="LTR" lang="ru-ru" class="ie8"><![endif]-->
<!--[if IE 9 ]><html dir="LTR" lang="ru-ru" class="ie9"><![endif]-->
<!--[if (gt IE 9)|!(IE)]><!-->
<html dir="LTR" lang="ru-ru">
<!--<![endif]-->
<head>
<meta charset="UTF-8" />

<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>Вход в учетную запись</title>
<base href="https://shop.bukovel.info/" />


 <script src="catalog/view/theme/bukovel/node_modules/jquery/dist/jquery.min.js"></script>
 <script src="catalog/view/theme/bukovel/js/dropzone.js"></script>
 <script src="catalog/view/theme/bukovel/node_modules/jquery-editable-select/dist/jquery-editable-select.js"></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/bluebird/3.3.4/bluebird.min.js"></script>
 
  <link rel="stylesheet" href="catalog/view/theme/bukovel/node_modules/jquery-editable-select/dist/jquery-editable-select.css" />
 
 
 <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js" integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=" crossorigin="anonymous"></script>

 <link rel="stylesheet" href="catalog/view/theme/bukovel/node_modules/owl.carousel/dist/assets/owl.carousel.min.css" />
 <link rel="stylesheet" href="catalog/view/theme/bukovel/assets/build/styles.css">
 <link rel="stylesheet" href="catalog/view/theme/bukovel/node_modules/jquery-nice-select/css/nice-select.css" />
 <link rel="stylesheet" href="catalog/view/theme/bukovel/js/checkout/library/phoneformat/css/intlTelInput.css" />


  <script src="catalog/view/theme/bukovel/js/jquery.mask.js"></script>
 <link rel="stylesheet" href="catalog/view/theme/bukovel/node_modules/cropper/dist/cropper.min.css" />
 

  <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">

<style>
.hide {
	
	display: none;
}

#error-msg {
	
	color: #C00808;
    font-weight: 300;
    font-size: 12px;
    margin-top: 10px;
}

</style>


<link href="catalog/view/theme/default/stylesheet/d_social_login/styles.css" type="text/css" rel="stylesheet" media="screen" />



<link href="https://shop.bukovel.info/image/catalog/cart.png" rel="icon" />
<script src="catalog/view/javascript/d_social_login/spin.min.js" type="text/javascript"></script>

<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KC3QLLS');</script>
<!-- End Google Tag Manager --><script src="https://www.google.com/recaptcha/api.js" async defer></script>



</head>

<body>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KC3QLLS"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<header class="header">
  <div class="header-wrap">
    <a href="http://shop.bukovel.info/" class="logo"><img src="catalog/view/theme/bukovel/images/logo/ru-ru_logo.png"></a>
    <nav class="nav">
      <div class="nav-icon">
        <svg class="icon icon--burger">
          <use xlink:href="#icon--burger"></use>
        </svg>
        <svg class="icon icon--close">
          <use xlink:href="#icon--close"></use>
        </svg>
      </div>
      
 
 
           <ul class="nav__list">
	  		        <li class="nav__item">
	          <a href="https://shop.bukovel.info/#skiing-anchor">Катание</a>
	        </li>
			        <li class="nav__item">
	          <a href="https://shop.bukovel.info/#rental-of-ski-equipment-anchor">Прокат снаряжения</a>
	        </li>
			        <li class="nav__item">
	          <a href="https://shop.bukovel.info/#vip-cards-anchor">Клубные Карты</a>
	        </li>
			        <li class="nav__item">
	          <a href="https://shop.bukovel.info/#contacts-anchor">Контакты</a>
	        </li>
		      </ul>
	  
      

	 
	 
	 
	 
    </nav>

    <a href="#" class="header__cart">
	  
      <svg class="icon icon--cart">
        <use xlink:href="#icon--cart"></use>
      </svg>
    </a>
 

    
    <div class="header__profile">
	    <a href="https://shop.bukovel.info/login" class="header__profile">
	      <span class="text">Логин</span>
	      <svg class="icon icon--user">
	        <use xlink:href="#icon--user"></use>
	      </svg>
	    </a>
     </div>
     
       
        <select class="header__profile__logout" name="profile_logout" id="profile_id">
          <option class="text" value="https://shop.bukovel.info/login">Логин</option>
          <option class="text" value="https://shop.bukovel.info/register">Зарегистрироваться</option>
      </select>     
    
    


    <form action="https://shop.bukovel.info/index.php?route=common/language/language" method="post" enctype="multipart/form-data" id="form-language">
    <select class="header__lang" name="lang">
          	 	<option value="en-gb">EN </option>
	 	             <option value="ru-ru" selected>RU </option>
	 	      	 	<option value="uk-ua">UA</option>
	 	     </select>
  <input type="hidden" name="code" value="" />
  <input type="hidden" name="redirect" value="https://shop.bukovel.info/login?_route_=login" />
</form>    

	    <form action="https://shop.bukovel.info/index.php?route=common/currency/currency" method="post" enctype="multipart/form-data" id="form-currency">
	    <select class="header__currency" name="currency">
	     	     	       <option value="EUR">EUR</option>
	       	      	     	      <option value="UAH" selected>UAH</option>
	      	      	     	       <option value="USD">USD</option>
	       	      	    </select>
	    <input type="hidden" name="code" value="" />
		<input type="hidden" name="redirect" value="https://shop.bukovel.info/login" />
	    
	</form>

    
  </div>
</header>









<div class="content login default" role="main">
 
    	

    <div class="panel__block">
        <div class="panel__header">
            <div class="header__title">
               Вход в учетную запись
            </div>
        </div>
        <div class="panel__body">
            <div class="form clearfix">
                <form class="form__body" action="https://shop.bukovel.info/login" method="post" enctype="multipart/form-data" id="login">
                    <div class="section">
                        <div class="form-row">
                            <label class="radio right">
                                <input type="radio" class="radio__input" name="address" checked="checked"/>
                                <span class="radio__icon">
                                 <svg>
                                   <use xlink:href="#icon--radio"></use>
                                 </svg>
                                </span>
                                <span class="radio__text">
                                   Я уже зарегистрирован
                                </span>
                            </label>
                        </div>
                        <div class="form__row">
                            <input class="form__input email" type="email" name="email" value="" placeholder="E-mail">
                        </div>
                        <div class="form__row">
                            <input class="form__input password"  type="password" name="password" value="" placeholder="Пароль">
                        </div>
                        <span class="forgot-password">
                                <a href="https://shop.bukovel.info/index.php?route=account/forgotten">Забыли пароль?</a>
                            </span>
                        <div class="form__footer">
                            <input class="input_submit" type="submit" value="Войти">
                        </div>
                        
	                     <div class="registration-text">
		                    	                    </div>                       
                        
                     

                            <div class="dsl-wrap">
        <style>
                        .dsl_google_button {
                background-color: #dd4b39
            }

            .google_icon {
                background-image: url('catalog/view/theme/default/stylesheet/d_social_login/icons/google.svg');
            }

            .dsl_google_button:hover {
                background-color: #be3e2e
            }

            .dsl_google_button:active {
                background-color: #be3e2e
            }

                        .dsl_facebook_button {
                background-color: #4864b4
            }

            .facebook_icon {
                background-image: url('catalog/view/theme/default/stylesheet/d_social_login/icons/facebook.svg');
            }

            .dsl_facebook_button:hover {
                background-color: #112e97
            }

            .dsl_facebook_button:active {
                background-color: #112e97
            }

                        .dsl_linkedin_button {
                background-color: #2a72b6
            }

            .linkedin_icon {
                background-image: url('catalog/view/theme/default/stylesheet/d_social_login/icons/linkedin.svg');
            }

            .dsl_linkedin_button:hover {
                background-color: #21588d
            }

            .dsl_linkedin_button:active {
                background-color: #21588d
            }

                        .dsl_yahoo_button {
                background-color: #500095
            }

            .yahoo_icon {
                background-image: url('catalog/view/theme/default/stylesheet/d_social_login/icons/yahoo.svg');
            }

            .dsl_yahoo_button:hover {
                background-color: #3d026f
            }

            .dsl_yahoo_button:active {
                background-color: #3d026f
            }

                        /*//get values forom config*/
                        .icons .r-side, .dsl-label.icons {
                font-size: 20px;
                padding: 11px 4px            }
            .icons .l-side {
                padding:11px 4px;
                width: 40px;
            }


                        .icons .l-side {
                padding-top: 10px;
                padding-bottom: 10px;
                padding-right: 5px;
                padding-left: 5px;
                width: 40px;
            }
            .icons .r-side {
                display: none;
            }

            .icons .l-side {
                padding: 11px 4px;;
                width: 40px;
            }

                        #d_social_login .dsl-button {
            / / border-radius: 3px
            }

                                                .small .r-side, .dsl-label.small {
                font-size: 10px;
                padding: 3px            }
            .small .l-side {
                padding:3px;
                width: 25px;
            }


                                    .medium .r-side, .dsl-label.medium {
                font-size: 12px;
                padding: 6px 4px            }
            .medium .l-side {
                padding:6px 4px;
                width: 30px;
            }


                                    .large .r-side, .dsl-label.large {
                font-size: 13px;
                padding: 7px 5px            }
            .large .l-side {
                padding:7px 5px;
                width: 35px;
            }


                                    .huge .r-side, .dsl-label.huge {
                font-size: 15px;
                padding: 12px 20px 11px 20px            }
            .huge .l-side {
                padding:12px 20px 11px 20px;
                width: 40px;
            }


                                    #d_social_login > * {
                margin: 2px;
                margin-bottom: 10px;
            }

            /*into css*/
            .dsl-button:hover {
                box-shadow: inset 0 -2px 0 rgba(0, 0, 0, 0.20);
                color: #fff;
            }

            .dsl-button {
                color: #fff;
                display: flex;
                -webkit-border-radius: 3px;
                -moz-border-radius: 3px;
                border-radius: 3px;
                box-shadow: 0 1px 0 rgba(0, 0, 0, 0.10);
                -webkit-transition: all .4s ease;
                -moz-transition: all .4s ease;
                -ms-transition: all .4s ease;
                -o-transition: all .4s ease;
                transition: all .4s ease;
            }

            .l-side {
                border-right: 1px solid rgba(255, 255, 255, 0.3);
            }

            .r-side {
                align-self: center;
            }

            .dsl-icon {
                display: inline-block;
                -webkit-background-size: contain;
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
                height: 100%;
                width: 100%;

            }

            #d_social_login {
                display: flex;
                flex-wrap: wrap;
            }

        </style>
                <div id="d_social_login">
            <span class="dsl-label small"></span>
                                                                            <a class="dsl-button dsl_facebook_button small "
                       href="index.php?route=extension/module/d_social_login/login&provider=Facebook">
        <span class="l-side">   <span class="dsl-icon facebook_icon "></span>
        </span> <span class="r-side">Войти через Facebook</span></a>
                                                                                            </div>
    </div>

                        
                        
                    </div>
                    <div class="section">
                        <label class="radio right">
                            <input type="radio" class="radio__input" name="register"/>
                            <span class="radio__icon">
                                 <svg>
                                   <use xlink:href="#icon--radio"></use>
                                 </svg>
                                </span>
                            <span class="radio__text desktop">
                                     Зарегистрировать аккаунт
                                </span>
                            <div class="mobile">
                                Оформлення
                            </div>
                            <span class="radio__text mobile">
                                без облікового запису
                            </span>
                        </label>
                        <div class="no-profile-text desktop">
                            Нет возможности использовать профиль
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>  
  
  
  
  
       
        
<script>

$(window).bind("pageshow", function() {
	
	$('input[name="address"]').prop("checked", true);
	$('input[name="register"]').prop("checked", false);

});	

	
 $(document).ready(function(){  
	 
      $('input[name="register"]').click(function(e){  
		   html = '<input type="hidden" name="register" value="register" />';
		  $('#login .section:first').append(html);
 	  	$('#login').submit();
 	  	
      });  
      
     
 });
 
</script>
        
        
        
        
    </div>
</div>


<footer class="footer">
	
	
	
  <div class="connect" >

  	    <h4 class="connect__header">Обратная связь</h4>
    <form class="connect__form" id="connect">
      <input class="connect__name" name="name" placeholder="Ваше имя">
      <input class="connect__email" type="email" name="email" placeholder="E-mail">
      <textarea name="enquiry" class="connect__question" placeholder="Ваш вопрос"></textarea>
      <div class="form-row">
	      <br />
       
    
      <div class="g-recaptcha" data-sitekey="6LeZ2lcUAAAAAMHbBkKbnp2i2byTyqQ0A4cGDVaH"></div>
      
          </div>
      <input class="connect__submit" type="submit" value="ОТПРАВИТЬ">
    </form>
    
    
<script>
$(document).ready(function() {

    // process the form
    $('#connect').submit(function(event) {
		//console.log( $( this ).serialize() );
        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
        var formData = {
            'name'              : $('input[name=name]').val(),
            'email'             : $('input[name=email]').val(),
            'enquiry'    : $("textarea").val()
        };
		$('.alert, .text-danger').remove();
		
		
		
		$.ajax({
			url: 'index.php?route=information/contactform/save',
			type: 'post',
			data: $( this ).serialize(),
			dataType: 'json',
			encode          : true,
		
			beforeSend: function() {
				//$('#button-cart').button('loading');
				 //Spinner.showLoader();
			},
			complete: function() {

			},
			success: function(data) {

                console.log('DATA : ' + data); 
                
  				if (data['error']) {
				error = true;
             
                if (data['error']['warning']) {
                    $('#terms-id').prepend('<div class="alert alert-danger">' + data['error']['warning'] + '<button type="button" class="close" data-dismiss="alert">&times;</button></div>');
                }
                
				for (i in data['error']) {
                    $('[name="' + i + '"]').after('<div class="text-danger">' + data['error'][i] + '</div>');
				}
            	} else {
	            	

	            	 $('#connect').find("input[name=name], input[name=email], textarea").val("");
	            	 showPopUp("Обратная связь","Ваше сообщение отослано!",'Ok');
	            
	            }		

			},
	        error: function(xhr, ajaxOptions, thrownError) {
	            alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
	        }
		});		
		
		
		
		
		
		
		
		
		
		
		

        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
    });

});	
</script>



  </div>

  <div class="info" id="contacts-anchor">
    <div class="phones">
      <h4 class="phones__header">Телефон</h4>
      <ul class="phones__list">
        <li class="phones__item">
          <svg class="icon icon--phone">
            <use xlink:href="#icon--phone"></use>
          </svg>
          +38 (044) 500-88-18        </li>
        <li class="phones__item">0 800 212-244</li>
      </ul>
    </div>
    <span class="email">
      <svg class="icon icon--message">
         <use xlink:href="#icon--message"></use>
      </svg>
      shop_admin@bukovel.com    </span>
    <div class="location">
      <h4 class="location__header">Адресс</h4>
      <span class="location__address">
        <svg class="icon icon--pin">
         <use xlink:href="#icon--pin"></use>
        </svg>
       вул. Січових Стрільців, 23. оф. 407 м. Івано-Франківськ, 76019</span>
    </div>
  </div>

  <a class="bukovel" href=""><img src="/catalog/view/theme/bukovel/images/bukovel_logo.png"></a>
  <div class="verified"><a class="verified" href="http://tickets.bukovel.com" target="_blank">Баланс скипасса</a></div>
  
 
  <div class="verified"><a class="verified" href=" https://shop.bukovel.info/info&information_id=8">Verified by Visa</a></div>
  <div class="master-card"><a class="verified" href=" https://shop.bukovel.info/info&information_id=7">MasterCard Secure Code</a></div>
  <div class="master-card"><a class="verified" href=" https://shop.bukovel.info/info&information_id=6">Оплата и доставка</a></div>
   <div class="master-card"><a class="verified" href=" https://shop.bukovel.info/info&information_id=3">Правила покупки и использования скипассов</a></div>





  <div class="cart-overlay">
  	
    <div class="header__cart-items">
      <ul>
	              	<div class="cart-more empty">
        	    <svg class="icon icon--cart">
                    <use xlink:href="#icon--cart"></use>
                </svg>
				<div class="cart-more-cart">Ваша корзина пуста!</div>
			</div>
              </ul>
            
      

      
    </div>
 
  </div>  

  
</footer>


  <div class="modal">
    <div class="modal__dialog">
    </div>
  </div>
  
<!--   <div id="loading" aria-label="Loading" role="img" tabindex="-1"></div> -->

<script>
  (function(d) {
    // Request the sprite
    var ajax = new XMLHttpRequest();
    ajax.open("GET", 'catalog/view/theme/bukovel/assets/build/sprite.svg', true);
    ajax.onreadystatechange = function () {
      if (ajax.readyState === 4 && ajax.status === 200) {
        var div = d.createElement("div");
        div.style.display = "none";
        div.innerHTML = ajax.responseText;
        d.body.insertBefore(div, d.body.childNodes[0]);
      }
    };
    ajax.send();
  })(document);
</script>
 <link type="text/css" rel="stylesheet" href="catalog/view/theme/bukovel/node_modules/jquery-autocomplete/jquery.autocomplete.css"/>
<script src="catalog/view/theme/bukovel/node_modules/owl.carousel/dist/owl.carousel.min.js"></script>
<script src="catalog/view/theme/bukovel/node_modules/jquery-nice-select/js/jquery.nice-select.min.js"></script>
<script src="catalog/view/theme/bukovel/node_modules/cropper/dist/cropper.min.js"></script>
 <script src="catalog/view/theme/bukovel/node_modules/jquery-autocomplete/jquery.autocomplete.js"></script>
<script src="catalog/view/theme/bukovel/js/bundle.js"></script>
<script src="catalog/view/theme/bukovel/js/process.js"></script>
<script src="catalog/view/theme/bukovel/js/optionQuality.js"></script>
<script src="catalog/view/theme/bukovel/js/common.js"></script>
<script src="catalog/view/theme/bukovel/js/profile.js"></script>
  <script src="catalog/view/theme/bukovel/js/checkout/library/phoneformat/js/intlTelInput.js"></script> 



</body>
</html>
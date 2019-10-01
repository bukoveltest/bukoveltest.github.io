formatMoney = function formatMoney (num) {
    return num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ");
};

function formatDays (num) {
    var text;
    var symbol = parseInt(num.toString().slice(-1));
    var language = $('div.nice-select.header__lang').find('.current').text();
	
	//console.log(num);
	var lang = language.toLowerCase().replace(' ','');
	//console.log(lang);
    switch (lang ) {
        case 'en':
        	console.log('IN EN');
            text = ' day';
            if (num > 1) {
                text = ' days';
            }
            break;

        case 'ru':
        	console.log('IN RU');
            if ((num > 10 && num < 15)&&((symbol > 0 && symbol < 5))) {
                text = ' дней';
            }

            else if (symbol === 1) {
                text = ' день';
            }

            else if (symbol > 1 && symbol < 5) {
                text = ' дня';
            }

            else {
                text = ' дней';
            }
            break;

        case 'ua':
        	console.log('IN UA');
            if ((num > 10 && num < 15)&&((symbol > 0 && symbol < 5))) {
                text = ' днів';
            }

            else if (symbol === 1) {
                text = ' день';
            }

            else if (symbol > 1 && symbol < 5) {
                text = ' дні';
            }

            else {
                text = ' днів';
            }
            break;
        default : text = ' day';
    }
    return text;
}

var optionQuality = {
    plusType: 'plus',
    minusType: 'minus',

    updateBlockAmount: function(block, amount, type){
        var $item__body = $(block).parents('.buy-item__body');
        var $option__price = $(block).find('.option__price');
        var $option__discount = $(block).find('.option__discount');
        var $option__init = $(block).find('.option__init');

        //var price = parseInt($option__price.text().replace(/\s/g, '')) / amount;
        var price = parseFloat($option__price.text().replace(/([0-9,\s]*\.?[0-9]{0,2})?\s*([\$]|EUR|€|UAH|₴)/g, '$1').replace(' ', '')) / amount;
        //var currency = $option__price.text().replace(/\d+\s/g, '');
         var currency = $option__price.text().replace(/([0-9,\s]*\.?[0-9]{0,2})?\s*([\$]|EUR|€|UAH|₴)/g, '$2');
        var days = parseInt($option__discount.text()) / amount;
        
        var days2 =  $option__discount.text().match(/[0-9]+/g); 

		if (days2) {
        if (days2.length > 1) {
	        
	        //console.log(days2[1]);
	        //console.log(days);
	        var day2 = Number(days2[1]) / amount;
	        
	        //console.log(Number(days) + Number(days2[1]));
	        
	        //days = Number(days) + Number(days2[1]);
	       // days = days+days2[1];
	        
        }
        }
        
        var init = parseFloat($option__init.text().replace(/\s/g, '')) / amount;

		//console.log(days2);
		//console.log(currency);
		//console.log(days);
		

        if (type === this.plusType) {
            amount += 1;
        } else if (type === this.minusType){
            amount -= 1;
        }

        if (amount > 0) {

            $option__price.text(formatMoney(price * amount) + ' ' + currency);
            
            
			if (days2) {
			if (days2.length > 1) {           
            	$option__discount.text((days * amount) + ' + ' + (day2 * amount) + formatDays(days * amount));
            } else {
	            
	            $option__discount.text((days * amount) + formatDays(days * amount));
            }
            } else {
	            
	            $option__discount.text((days * amount) + formatDays(days * amount));
	            
            }
            
            $option__init.text(formatMoney(init * amount) + ' ' + currency);

            if ($item__body.length) {
                var $item__amount = $item__body.find('.buy-item__amount');

                if ($item__amount.length) {
                    $item__amount.text(amount);
                }
                else {
                    $item__body.prepend('<div class="buy-item__amount">' + amount + '</div>');
                }
            }

        }
    },

    updateAmountAndText: function (e) {
        var type = '';
        var span = $(e.target).closest('span')[0];

        if (span.className.indexOf(this.plusType) > -1) {
            type = this.plusType;
        } else if (span.className.indexOf(this.minusType) > -1) {
            type = this.minusType;
        }

        var $parent = $(span).parent().parent().parent();
        var $option__price = $parent.find('.option__price');
        var $option__discount = $parent.find('.option__discount');
        var $option__init = $parent.find('.option__init');
        var $item__body = $parent.find('.buy-item__body');
        var $input = $parent.find('.option__amount');
        var amount = + $input.val();
    
		
		
        
        //var price = parseInt($option__price.text().replace(/\s/g, '')) / amount;
        var price = parseFloat($option__price.text().replace(/([0-9,\s]*\.?[0-9]{0,2})?\s*([\$]|EUR|€|UAH|₴)/g, '$1').replace(' ', '')) / amount;
        //var currency = $option__price.text().replace(/\d+\s/g, '');
        var currency = $option__price.text().replace(/([0-9,\s]*\.?[0-9]{0,2})?\s*([\$]|EUR|€|UAH|₴)/g, '$2');
        
       
        
        var days = parseInt($option__discount.text()) / amount;
        
        var days2 =  $option__discount.text().match(/[0-9]+/g); 
        
        if (days2) {
        if (days2.length > 1) {
	        
	        //console.log(days2[1]);
	        //console.log(days);
	        
	        var day2 = Number(days2[1]) / amount;
	        //console.log(Number(days) + Number(days2[1]));
	        
	        //days = Number(days) + Number(days2[1]);
	       // days = days+days2[1];
	        
        }
        }
        
        var init = parseFloat($option__init.text().replace(/\s/g, '')) / amount;

		//console.log(days2);
		//console.log(currency);
		//console.log(days);
		//console.log(init);
		
        if (type === this.plusType) {
            amount += 1;
        } else if (type === this.minusType){
            amount -= 1;
        }

        if (amount > 0) {

            $option__price.text(formatMoney(Number(price * amount).toFixed(2)) + ' ' + currency);
            
 			if (days2) {
			if (days2.length > 1) {           
            	$option__discount.text((days * amount) + ' + ' + (day2 * amount) + formatDays(days * amount));
            } else {
	        
	        	$option__discount.text((days * amount) + formatDays(days * amount));    
            
            }
            } else {

	            $option__discount.text((days * amount) + formatDays(days * amount));
	            
            }           
            
            //$option__discount.text((days * amount) + formatDays(days * amount));
            
            
            
            
            $option__init.text(formatMoney(Number(init * amount).toFixed(2)) + ' ' + currency);

            if ($item__body.length) {
                var $item__amount = $item__body.find('.buy-item__amount');

                if ($item__amount.length) {
                    $item__amount.text(amount);
                }
                else {
                    $item__body.prepend('<div class="buy-item__amount">' + amount + '</div>');
                }
            }

            $input.val(amount);
        }
    },

    initOptionQualityForAPage: function () {
        var self = this;

        $('.option__plus, .option__minus').on('click', function (e) {
            e.preventDefault();
            self.updateAmountAndText(e);
        });

    },

    // TODO update for all modals
    initOptionQualityForAModal: function (button, modal) {
        var self = this;

        $(modal).find('.option__plus, .option__minus').on('click', function (e) {

            var span = $(button).prev('.option__quantity').find('.' + this.className);

            e.preventDefault();
            self.updateAmountAndText(e);
            self.updateAmountAndText({target: span[0].children[0]});

        });

    },


    initOptionQualityForAPromotionalModals: function (button, modal) {
        var self = this;

        $(modal).find('.ident .ident__add-card').on('click', function (e) {
            var span = $(button).prev('.option__quantity').find('.option__plus');

            var $item_data = $(modal).find('.buy-item__data')[0];
            var amount = parseInt($(modal).find('.buy-item__amount').text());

            if (!amount) {
                amount = 1;
            }

            e.preventDefault();
            self.updateBlockAmount($item_data, amount, 'plus');
            self.updateAmountAndText({target: span[0].children[0]});

        });

    },

    init: function () {
        this.initOptionQualityForAPage();

        window.initOptionQualityForAModal = this.initOptionQualityForAModal.bind(this);
        window.initOptionQualityForAPromotionalModals = this.initOptionQualityForAPromotionalModals.bind(this);
        window.updateBlockAmount = this.updateBlockAmount.bind(this);

    }
};

optionQuality.init();

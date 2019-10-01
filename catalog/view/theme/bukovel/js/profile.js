$('.existing-address .edit-action').click(function(e){
    e.preventDefault();
    var $modal       = $('.modal'),
        $modalDialog = $modal.children('.modal__dialog');

    $.ajax({
        url: '/skipass/web/modals/orderAddressModalTpl.html',
        type: 'GET',
        success: function (data) {

            $modalDialog.append(data);
            $modalDialog.addClass('order-address__modal');
            $modalDialog.addClass('edit');

            $($modalDialog).find('select').niceSelect();

            var nameInput = $modalDialog.find('input[name="name"]'),
                surNameInput = $modalDialog.find('input[name="surname"]'),
                fatherNameInput = $modalDialog.find('input[name="father_name"]'),
                phoneInput = $modalDialog.find('input[name="phone"]'),
                emailInput = $modalDialog.find('input[name="email"]'),
                streetInput = $modalDialog.find('input[name="street"]'),
                buildingNumberInput = $modalDialog.find('input[name="building_number"]'),
                flatNumberInput = $modalDialog.find('input[name="flat_number"]'),
                cityInput = $modalDialog.find('input[name="city"]'),
                indexInput = $modalDialog.find('input[name="index"]'),
                countryInput = $modalDialog.find('.nice-select'),
                regionInput = $modalDialog.find('input[name="region"]');

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

            $modalDialog.find('.modal__header h3').text('Редагування');

            disableButtonIfInvalidForm($modalDialog.find('input'), $modalDialog.find('input:submit'));
            openModal($modal);
        }
    });
});


$(".addresses").on("click", ".edit-action", function(e){
    e.preventDefault();
    var modal       = $('.modal'),
        modalDialog = modal.children('.modal__dialog');
	
	var address_id = $(this).parent().parent().find('input[name="address_id"]').val();	

  $.ajax({
    url: '/index.php?route=modals/address_edit&address_id='+address_id.toString(),
    type: 'GET',
    success: function (data) {

      modalDialog.append(data);
      modalDialog.addClass('address__modal');
      modalDialog.addClass('edit');

      $('select').niceSelect();

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

      /*nameInput.val('Олег');
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
      regionInput.val('Івано-Франківська обл.');*/

      //modalDialog.find('.modal__header h3').text('Редагування адреси');
	  disableButtonIfInvalidForm(modalDialog.find('input'), modalDialog.find('input:submit'));
      openModal(modal);

    }
  });
});

$('.addresses .new-address').click(function(e){
    e.preventDefault();
    var modal       = $('.modal'),
        modalDialog = modal.children('.modal__dialog');

      $.ajax({
        url: '/index.php?route=modals/address_edit',
        type: 'GET',
        success: function (data) {


        modalDialog.append(data);
        modalDialog.addClass('address__modal');
        modalDialog.addClass('new');

        $('select').niceSelect();
		disableButtonIfInvalidForm(modalDialog.find('input'), modalDialog.find('input:submit'));
        openModal(modal);
    }
  });
});

$('.purchases .header-actions .expand').click(function(e){
    var header = $(e.target).closest('.purchase_header');
    header.removeClass('collapsed').addClass('expanded');

});

$('.purchases .header-actions .collapse').click(function(e){
    var header = $(e.target).closest('.purchase_header');
    header.removeClass('expanded').addClass('collapsed');
});

/*
 --------------------------------
 Ajax Contact Form
 --------------------------------
 + https://github.com/pinceladasdaweb/Ajax-Contact-Form
 + A Simple Ajax Contact Form developed in PHP with HTML5 Form validation.
 + Has a fallback in jQuery for browsers that do not support HTML5 form validation.
 + version 1.0.1
 + Copyright 2014 Pedro Rogerio
 + Licensed under the MIT license
 + https://github.com/pinceladasdaweb/Ajax-Contact-Form
 */

(function ($, window, document, undefined) {
  'use strict';

  var form = $('#contact-form'),
    messageContainer = $('#message-contact'),
    messageText = $('#message-contact .message-text');


  form.submit(function (e) {


    // remove the error class
    form.find('.form-group').removeClass('error');
    messageContainer.removeClass('error');

    var errorAll = '';

    // get the form data
    var formData = {
      'name': $('input[name="form-name"]').val(),
      'email': $('input[name="form-email"]').val(),
      'message': $('textarea[name="form-message"]').val(),
      'textfield': $('input[name="text-field"]').val()
    };

    // process the form
    $.ajax({
      type: 'POST',
      url: 'php/contact-process.php',
      data: formData,
      dataType: 'json',
      encode: true
    }).done(function (data) {
      // handle errors
      if (!data.success) {

        if (data.errors.name) {
          $('#name-field').addClass('error');
          errorAll = data.errors.name;
        }

        if (data.errors.email) {
          $('#email-field').addClass('error');
          errorAll = errorAll + ' ' + data.errors.email;
        }

        if (data.errors.message) {
          $('#message-field').addClass('error');
          errorAll = errorAll + ' ' + data.errors.message;
        }
        messageContainer.addClass('error');
        messageText.html(errorAll);
      } else {
        // display success message
        messageText.html(data.confirmation);

        $('#contact-form .form-control').each(function () {
          $(this).fadeIn().val($(this).attr('placeholder'));
        });
      }
      messageContainer.slideDown('slow', 'swing');
      setTimeout(function () {
        messageContainer.slideUp('slow', 'swing');
      }, 5000);
    }).fail(function (data) {
      // for debug
      console.log(data)
    });

    e.preventDefault();
  });
}(jQuery, window, document));

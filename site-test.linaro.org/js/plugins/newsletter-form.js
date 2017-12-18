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

  var form = $('#newsletter-form'),
    messageContainer = $('#message-newsletter'),
    messageText = $('#message-newsletter .message-text');


  form.submit(function (e) {


    // remove the error class
    form.find('.input-group').removeClass('error');
        messageContainer.removeClass('error');


    var errorAll = '';

    // get the form data
    var formData = {
      'email': $('input[name="email"]').val()
    };


    // process the form
    $.ajax({
      type: 'POST',
      url: 'php/newsletter-process.php',
      data: formData,
      dataType: 'json',
      encode: true
    }).done(function (data) {
      // handle errors
      if (!data.success) {
        if (data.errors.email) {
          form.find('.input-group').addClass('error');
          messageContainer.addClass('error');
          errorAll = errorAll + ' ' + data.errors.email;
        }
        messageText.html(errorAll);
      } else {
        // display success message
        messageText.html(data.confirmation);
        form.find('.form-control').fadeIn().val('');
      }
      messageContainer.slideDown('slow', 'swing');
      setTimeout(function () {
        messageContainer.slideUp('slow', 'swing');
      }, 10000);
    }).fail(function (data) {
      // for debug
      console.log(data)
    });

    e.preventDefault();
  });
}(jQuery, window, document));


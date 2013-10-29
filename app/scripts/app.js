/*global define */
define([], function () {
    'use strict';

    $('#tab-list a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    });

    $('#navbar-toggle').click(function (e) {
      e.preventDefault()
      $('#navbar-list').collapse('toggle');
    });
});
'use strict';

angular.module('halonaApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });

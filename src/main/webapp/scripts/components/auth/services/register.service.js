'use strict';

angular.module('halonaApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });



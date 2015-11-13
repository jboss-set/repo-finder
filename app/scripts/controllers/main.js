/*
 * JBoss, Home of Professional Open Source.
 * Copyright 2015, Red Hat, Inc., and individual contributors
 * as indicated by the @author tags. See the copyright.txt file in the
 * distribution for a full listing of individual contributors.
 *
 * This is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as
 * published by the Free Software Foundation; either version 2.1 of
 * the License, or (at your option) any later version.
 *
 * This software is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this software; if not, write to the Free
 * Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA
 * 02110-1301 USA, or see the FSF site: http://www.fsf.org.
 */

'use strict';

angular.module('jbossSetApp')
  .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {

    $http.get('https://raw.githubusercontent.com/jboss-set/aphrodite/master/src/main/resources/default.streams.json').success(function (data) {
      $scope.streams = data.streams;
    });

    $scope.orderProp = 'name';

    $scope.streamChange = function () {
      var index = $scope.data.selectedStream;
      $scope.selectedStream = $scope.streams[index];
      $scope.components = $scope.selectedStream.codebases;

      var componentIndex = $scope.data.selectedComponent;
      $scope.component = $scope.components[componentIndex];

      if ($scope.component != undefined) {
        $scope.component.codebaseUrl = generateCodebaseUrl($scope);
      }
    }

    $scope.componentChange = function () {
      var index = $scope.data.selectedComponent;
      $scope.component = $scope.components[index];
      $scope.component.codebaseUrl = generateCodebaseUrl($scope);
    }

  }]);

function generateCodebaseUrl($scope) {
  var c = $scope.component;
  var baseUrl = c.repository_url;
  if (!endsWith(baseUrl, "/")) {
    baseUrl += "/";
  }
  return baseUrl + "tree/" + c.codebase;
}

function endsWith(str, suffix) {
  return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

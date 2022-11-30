var app = angular.module('myApp', ["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
        .when("/albums",{controller: "albumListController", templateUrl: "app/partials/album_list_partial.html"})
        .when("/album/:album_name",{controller: "albumViewController", templateUrl: "app/partials/album_view_partial.html"})
        .when("/album/:album_name/photos/:photo_filename",  { controller: "photoViewController", templateUrl: "/app/partials/photo_viewer_partial.html" })
        .when("/",{redirectTo: "/albums"})
        .when("/404_page",{controller: "controller404", templateUrl: "404_page_partial.html"})
        .otherwise({redirectTo: "/404_page"})
});
var app=angular.module("flickrSearch",[]);app.controller("flickrController",function(r,e){r.results=[],r.isSearching=!1,r.searchComplete=!1,r.tagSearch=function(a){r.isSearching=!0;var c="https://api.flickr.com/services/rest",o={method:"flickr.photos.search",api_key:"3abfc0179898d3ad907be5001f4b3933",tags:r.searchTag,format:"json",nojsoncallback:1};console.log(o),e({method:"GET",url:c,params:o}).success(function(e){r.results=e,r.isSearching=!1,r.searchComplete=!0}).error(function(r){})}});
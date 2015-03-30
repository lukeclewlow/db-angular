var dbApp = angular.module('dbApp', [])

dbApp.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from our assets domain.  Notice the difference between * and **.
    'https://www.youtube.com/embed/**'
  ]);
});

dbApp.controller('MainCtrl', [function() {
  var self = this;
  self.posts = [
    {id: 1, artist: 'Blah', title: 'Blah Blah', link: 'https://www.youtube.com/embed/hzqFmXZ8tOE?list=FL7wg_Gt_lNNcI8-Wxes6KGw}'},
    {id: 2, artist: 'Bblah', title: 'Who knows', link: 'https://www.youtube.com/embed/9Bmh9A8Dl1c?list=FL7wg_Gt_lNNcI8-Wxes6KGw}'},
    {id: 3, artist: 'Bblah', title: 'Who knows', link: 'https://www.youtube.com/embed/9Bmh9A8Dl1c?list=FL7wg_Gt_lNNcI8-Wxes6KGw}'},
    {id: 4, artist: 'Bbblah', title: 'Summat', link: 'https://www.youtube.com/embed/9Bmh9A8Dl1c?list=FL7wg_Gt_lNNcI8-Wxes6KGw}'}
  ];
}]);


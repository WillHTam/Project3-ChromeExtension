$(document).ready(function () {
  page.init();
  $('body').on('click', 'a', function(){
     chrome.tabs.create({url: $(this).attr('href')});
     return false;
   });
});


var page = {
  init: function () {
    // chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    //   var tabUrl = tabs[0].url;
    // });
    page.initStyling();
  },

  initStyling: function () {
    page.stash();
  },

  stash: function (event) {
  // $.ajax({
  //   type: 'POST',
  //   url: 'https://project3pockety.herokuapp.com/resources',
  //   headers: {email: 'angel@angel.com', auth_token: 'af168421-d31d-410b-a5ba-bbc6bc4a2fb8'},
  //   content: {url: 'http://edition.cnn.com/2016/08/19/sport/usain-bolt-rio-2016-olympics-legacy/index.html', tags: 'AddedWithStashr'},
  //   timeout: 999999,
  //   success: function () {
  //       $('.results').append('<p>Stashed!</p>');
  //   }
  // });
}
};

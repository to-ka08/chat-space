$(function() {
  $('#user-search-field').on('keyup', function() {
    var input = $('#user-search-field').val();
    $.ajax({
      url: '/user/index',
      type: 'GET',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(users) {
      $('#chat-group-users').empty();
      if (users.length !== 0) {
        users.forEach(function(user){
          appendUser(user);
        });
      }
      else {
        appendNoUser("一致するユーザーはいません");
      }
    })
  });
});

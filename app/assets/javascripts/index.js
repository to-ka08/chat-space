$(function() {
  $('#user-search-field').on('keyup', function() {
    var input = $('#user-search-field').val();
    $.ajax({
      url: '/user/index',
      type: 'GET',
      data: { keyword: input },
      dataType: 'json'
    })
  });
});

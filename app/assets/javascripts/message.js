$(function() {
  function buildHTML(message){
    var html = `<div class="message" data-message-id="${message.id}">
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                      ${message.user_name}
                    </div>
                    <div class="upper-message__date">
                      ${message.created_at}
                    </div>
                  </div>
                  <div class="lower-message">
                      <p class="lower-message__content">
                        ${message.text}
                      </p>
                      ${(message.image.url == null) ? "" : `<img src="${message.image.url}">`}
                  </div>
                </div>`
    return html;
  }
  $('#new_message').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.form-content__message').val('');
      $('#message_image').val('');
      $('.form-content__send').prop('disabled', false);
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
    })
    .fail(function(){
      alert('error');
      $('.form-content__send').prop('disabled', false);
    })
  })

    setInterval(function() {
    $.ajax({
      url: location.href.json
    })
    .done(function(data) {
      var insertHTML = '';
      json.messages.forEach(function(message) {
        insertHTML += buildHTML(message);
      });
      $('.messages').append(insertHTML)
    })
    .fail(function() {
      alert('自動更新に失敗しました');
    })
  // } else {
  //   clearInterval(interval);
    }, 5000 )
})

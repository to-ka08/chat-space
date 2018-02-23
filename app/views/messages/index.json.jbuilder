json.messaages @messages.each do |message|
  json.name    message.user.name
  json.date    message.created_at_time
  json.text    message.body
  json.image   message.image
  json.id      message.id
end

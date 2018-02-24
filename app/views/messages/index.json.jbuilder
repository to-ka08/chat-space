json.array! @messages do |message|
  json.user_name    message.user.name
  json.created_at    message.created_at_time
  json.text    message.body
  json.image   message.image
  json.id      message.id
end

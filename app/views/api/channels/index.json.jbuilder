@channels.each do |channel|
  json.set! channel.id, channel.filtered
end
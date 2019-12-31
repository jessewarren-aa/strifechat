@servers.each do |server|
  json.set! server.id, server.filtered
end
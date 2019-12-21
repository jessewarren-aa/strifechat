class ChangeMessagesTable < ActiveRecord::Migration[5.1]
  def change
    change_column :messages, :channel_id, :string
    change_column :messages, :server_id, :string
  end
end

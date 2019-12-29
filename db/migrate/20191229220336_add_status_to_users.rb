class AddStatusToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :current_status, :string, null: false
  end
end

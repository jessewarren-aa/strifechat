class CreateServerUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :server_users do |t|
      t.integer :server_id
      t.integer :user_id

      t.timestamps
    end

    add_index :server_users, :server_id
    add_index :server_users, :user_id
  end
end

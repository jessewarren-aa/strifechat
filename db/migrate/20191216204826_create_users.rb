class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :image_url, null: false
      t.integer :last_server_id, null: false
      t.string :friend_code, null: false

      t.timestamps
    end

    add_index :users, [:username, :email, :session_token], unique: true
  end
end

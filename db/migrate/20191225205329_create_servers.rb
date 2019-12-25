class CreateServers < ActiveRecord::Migration[5.1]
  def change
    create_table :servers do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.string :unique_id, null: false
      t.integer :owner_id, null: false
      t.string :server_icon, null: false

      t.timestamps
    end

    add_index :servers, :unique_id
    add_index :servers, :owner_id
  end
end

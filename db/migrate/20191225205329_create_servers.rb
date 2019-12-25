class CreateServers < ActiveRecord::Migration[5.1]
  def change
    create_table :servers do |t|
      t.string :name
      t.string :description
      t.string :unique_id
      t.integer :owner_id
      t.string :server_icon

      t.timestamps
    end
  end
end

class CreateChannels < ActiveRecord::Migration[5.1]
  def change
    create_table :channels do |t|
      t.integer :server_id, null: false
      t.string :unique_id, null: false
      t.string :name, null: false
      t.string :description, null: false

      t.timestamps
    end

    add_index :channels, :server_id
    add_index :channels, :unique_id
  end
end

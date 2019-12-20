class AddUniqueIdToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :unique_id, :string, null: false
    add_index :users, :unique_id
  end
end

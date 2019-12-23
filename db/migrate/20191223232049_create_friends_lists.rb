class CreateFriendsLists < ActiveRecord::Migration[5.1]
  def change
    create_table :friends_lists do |t|
      t.integer :sender_id, null: false
      t.integer :receiver_id, null: false
      t.string :status, null: false

      t.timestamps
    end

    add_index :friends_lists, :sender_id
    add_index :friends_lists, :receiver_id
  end
end

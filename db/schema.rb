# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20200102022137) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "channels", force: :cascade do |t|
    t.integer "server_id", null: false
    t.string "unique_id", null: false
    t.string "name", null: false
    t.string "description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["server_id"], name: "index_channels_on_server_id"
    t.index ["unique_id"], name: "index_channels_on_unique_id"
  end

  create_table "friends_lists", force: :cascade do |t|
    t.integer "sender_id", null: false
    t.integer "receiver_id", null: false
    t.string "status", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["receiver_id"], name: "index_friends_lists_on_receiver_id"
    t.index ["sender_id"], name: "index_friends_lists_on_sender_id"
  end

  create_table "messages", force: :cascade do |t|
    t.string "server_id", null: false
    t.string "channel_id", null: false
    t.integer "user_id", null: false
    t.text "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["channel_id"], name: "index_messages_on_channel_id"
    t.index ["server_id"], name: "index_messages_on_server_id"
    t.index ["user_id"], name: "index_messages_on_user_id"
  end

  create_table "server_users", force: :cascade do |t|
    t.integer "server_id"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["server_id"], name: "index_server_users_on_server_id"
    t.index ["user_id"], name: "index_server_users_on_user_id"
  end

  create_table "servers", force: :cascade do |t|
    t.string "name", null: false
    t.string "description", null: false
    t.string "unique_id", null: false
    t.integer "owner_id", null: false
    t.string "server_icon", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["owner_id"], name: "index_servers_on_owner_id"
    t.index ["unique_id"], name: "index_servers_on_unique_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "image_url", null: false
    t.integer "last_server_id", null: false
    t.string "friend_code", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "unique_id", null: false
    t.string "current_status", null: false
    t.index ["unique_id"], name: "index_users_on_unique_id"
    t.index ["username", "email", "session_token"], name: "index_users_on_username_and_email_and_session_token", unique: true
  end

end

require 'test_helper'

class FriendsListsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get friends_lists_index_url
    assert_response :success
  end

end

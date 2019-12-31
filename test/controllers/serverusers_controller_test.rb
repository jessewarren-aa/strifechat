require 'test_helper'

class ServerusersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get serverusers_index_url
    assert_response :success
  end

  test "should get show" do
    get serverusers_show_url
    assert_response :success
  end

  test "should get create" do
    get serverusers_create_url
    assert_response :success
  end

  test "should get destroy" do
    get serverusers_destroy_url
    assert_response :success
  end

end

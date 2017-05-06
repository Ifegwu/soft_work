require 'test_helper'

class ExpressControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get express_index_url
    assert_response :success
  end

end

require 'test_helper'

class ContactsControllerTest < ActionController::TestCase
  test "#index get contacts" do
    get 'index'
    results = JSON.parse(response.body)
    assert results['contacts'].size == 2
  end
end

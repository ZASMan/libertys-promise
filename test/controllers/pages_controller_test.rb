require 'test_helper'

class PagesControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get aboutus" do
    get :aboutus
    assert_response :success
  end

  test "should get board" do
    get :board
    assert_response :success
  end

  test "should get cebell" do
    get :cebell
    assert_response :success
  end

  test "should get civics" do
    get :civics
    assert_response :success
  end

  test "should get contact" do
    get :contact
    assert_response :success
  end

  test "should get donors" do
    get :donors
    assert_response :success
  end

  test "should get espanol" do
    get :espanol
    assert_response :success
  end

  test "should get fundraiser" do
    get :fundraiser
    assert_response :success
  end

  test "should get history" do
    get :history
    assert_response :success
  end

  test "should get host_application" do
    get :host_application
    assert_response :success
  end

  test "should get locations" do
    get :locations
    assert_response :success
  end

  test "should get map" do
    get :map
    assert_response :success
  end

  test "should get opportunities_plus" do
    get :opportunities_plus
    assert_response :success
  end

  test "should get our_impact" do
    get :our_impact
    assert_response :success
  end

  test "should get staff" do
    get :staff
    assert_response :success
  end

  test "should get volunteer" do
    get :volunteer
    assert_response :success
  end

  test "should get what_we_do" do
    get :what_we_do
    assert_response :success
  end

  test "should get what_you_can_do" do
    get :what_you_can_do
    assert_response :success
  end

end

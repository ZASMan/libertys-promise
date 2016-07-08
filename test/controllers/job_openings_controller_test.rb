require 'test_helper'

class JobOpeningsControllerTest < ActionController::TestCase
  setup do
    @job_opening = job_openings(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:job_openings)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create job_opening" do
    assert_difference('JobOpening.count') do
      post :create, job_opening: { comment: @job_opening.comment, company: @job_opening.company, location: @job_opening.location, position: @job_opening.position }
    end

    assert_redirected_to job_opening_path(assigns(:job_opening))
  end

  test "should show job_opening" do
    get :show, id: @job_opening
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @job_opening
    assert_response :success
  end

  test "should update job_opening" do
    patch :update, id: @job_opening, job_opening: { comment: @job_opening.comment, company: @job_opening.company, location: @job_opening.location, position: @job_opening.position }
    assert_redirected_to job_opening_path(assigns(:job_opening))
  end

  test "should destroy job_opening" do
    assert_difference('JobOpening.count', -1) do
      delete :destroy, id: @job_opening
    end

    assert_redirected_to job_openings_path
  end
end

require 'rails_helper'

RSpec.describe "HeartRhythms", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/heart_rhythms/index"
      expect(response).to have_http_status(:success)
    end
  end

end

# frozen_string_literal: true

require "rails_helper"

RSpec.describe "HeartRhythms" do
  describe "GET #index" do
    it "returns http success" do
      get "/heart_rhythms.json"
      expect(response).to have_http_status(:ok)
    end
  end
end

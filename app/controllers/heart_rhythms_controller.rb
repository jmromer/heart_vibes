# frozen_string_literal: true

class HeartRhythmsController < ApplicationController
  def index
    sampled_subset =
      HeartRhythm
        .between(params[:from], params[:to])
        .stratified_sample(resolution: params[:resolution])
        .map(&:as_chartable)

    respond_to do |format|
      format.json { render json: sampled_subset, layout: false }
    end
  end
end

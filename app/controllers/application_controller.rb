# frozen_string_literal: true

class ApplicationController < ActionController::Base
  def home
    @min_time, @max_time = HeartRhythm.time_bounds.map { _1.to_s(:picker) }
    @from = params[:from].presence || @min_time
    @to = params[:to].presence || @max_time
    @resolution = params[:resolution].presence || 3
  end
end

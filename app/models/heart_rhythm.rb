# frozen_string_literal: true

class HeartRhythm
  include Mongoid::Document

  field :time, type: DateTime
  field :value, type: Float

  def self.between(lower_bound = nil, upper_bound = nil)
    where(
      :time.gte => lower_bound.presence || time_bounds.first,
      :time.lte => upper_bound.presence || time_bounds.last,
    )
  end

  def self.time_bounds
    @time_bounds ||= [first, last].pluck(:time)
  end

  def self.stratified_sample(resolution: nil)
    resolution = resolution.presence&.to_i || 3
    slice_size = all.count.div(10**resolution)

    all.each_slice([slice_size, 1].max).map(&:last)
  end

  def as_chartable
    [time.to_i * 1000, value.to_f]
  end
end

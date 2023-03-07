# frozen_string_literal: true

class HeartRhythm
  include Mongoid::Document

  field :time, type: DateTime
  field :value, type: Float
end

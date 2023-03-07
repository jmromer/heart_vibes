# HeartVibes

## Setup

- If using ASDF version manager, issue `asdf install` to install the appropriate
  version of Ruby.

- Issue `bin/setup` to install project dependencies.

- Issue `bin/dev` to run the development server on port 3000.

## Core dependencies

- Web framework: Rails 7
- Data visualization: [HighCharts](https://www.highcharts.com)
- Styling: Tailwind CSS
- Data: MongoDB
- ORM: Mongoid

## Implementation

The form and chart are rendered at the root URL, with update requests handled by
a stimulus controller:

```js
// app/javascript/controllers/chart_controller.js L8-15 (8eea8310)

connect () {
  this.renderChart()
}

update (event) {
  event.preventDefault()
  this.renderChart()
}
```
<sup>[[source](https://github.com/jmromer/heart_vibes/blob/8eea8310/app/javascript/controllers/chart_controller.js#L8-L15)]</sup>

The app server responds with JSON rendered from a Rails controller:

```rb
# app/controllers/heart_rhythms_controller.rb L3-15 (a886145c)

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
```
<sup>[[source](https://github.com/jmromer/heart_vibes/blob/a886145c/app/controllers/heart_rhythms_controller.rb#L3-L15)]</sup>

Data is sourced from a time-series MongoDB collection using a Mongoid model:

```rb
# app/models/heart_rhythm.rb L3-18 (a886145c)

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
```
<sup>[[source](https://github.com/jmromer/heart_vibes/blob/a886145c/app/models/heart_rhythm.rb#L3-L18)]</sup>

The `.env` file at project root includes credentials for connecting to the the
development database.

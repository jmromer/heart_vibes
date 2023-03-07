# frozen_string_literal: true

source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.2.0"

gem "bootsnap", require: false # Reduces boot times through caching; required in config/boot.rb
gem "dotenv-rails"
gem "importmap-rails" # Use JavaScript with ESM import maps [https://github.com/rails/importmap-rails]
gem "jbuilder" # Build JSON APIs with ease [https://github.com/rails/jbuilder]
gem "mongoid", "~> 8.0.3" # MongoDB ORM
gem "pg", "~> 1.1" # Use postgresql as the database for Active Record
gem "puma", "~> 5.0" # Use the Puma web server [https://github.com/puma/puma]
gem "rails", "~> 7.0.4", ">= 7.0.4.2" # Bundle edge Rails instead: gem "rails", github: "rails/rails", branch: "main"
gem "redis", "~> 4.0" # Use Redis adapter to run Action Cable in production
gem "sprockets-rails" # The original asset pipeline for Rails [https://github.com/rails/sprockets-rails]
gem "stimulus-rails" # Hotwire's modest JavaScript framework [https://stimulus.hotwired.dev]
gem "tailwindcss-rails" # Use Tailwind CSS [https://github.com/rails/tailwindcss-rails]
gem "turbo-rails" # Hotwire's SPA-like page accelerator [https://turbo.hotwired.dev]
gem "tzinfo-data", platforms: %i[mingw mswin x64_mingw jruby] # Windows does not include zoneinfo files, so bundle the tzinfo-data gem

group :development, :test do
  gem "debug", platforms: %i[mri mingw x64_mingw] # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
end

group :development do
  gem "better_errors" # (https://github.com/BetterErrors/better_errors)
  gem "binding_of_caller"
  gem "bundler-gtags", github: "jmromer/bundler-gtags" # (https://github.com/kayhide/bundler-gtags)
  gem "letter_opener"
  gem "rack-mini-profiler" # Add speed badges [https://github.com/miniprofiler/rack-mini-profiler]
  gem "rufo" # autoformatting (https://github.com/ruby-formatter/rufo)
  gem "web-console" # Use console on exceptions pages [https://github.com/rails/web-console]
end

group :development, :test do
  gem "factory_bot_rails" # (https://github.com/thoughtbot/factory_bot_rails)
  gem "faker" # (https://github.com/faker-ruby/faker)
  gem "jazz_fingers" # (https://github.com/plribeiro3000/jazz_fingers)
  gem "pry" # (https://github.com/pry/pry)
  gem "pry-byebug"
  gem "pry-rails"
  gem "rspec_junit_formatter" # (https://github.com/sj26/rspec_junit_formatter)
  gem "rspec-rails"
  gem "rubocop"
  gem "rubocop-performance"
  gem "rubocop-rails"
  gem "rubocop-rspec"
  gem "vcr" # Record API responses (https://github.com/vcr/vcr)
  gem "webmock" # HTTP stubbing (https://github.com/bblimke/webmock)
end

group :test do
  gem "apparition" # headless chromedriver (https://github.com/twalpole/apparition)
  gem "capybara" # acceptance testing (https://github.com/teamcapybara/capybara)
  gem "database_cleaner-active_record" # (https://github.com/DatabaseCleaner/database_cleaner)
  gem "database_cleaner-redis" # (https://github.com/DatabaseCleaner/database_cleaner-redis)
  gem "pundit-matchers" # (https://github.com/chrisalley/pundit-matchers)
  gem "rails-controller-testing" # (https://github.com/rails/rails-controller-testing)
  gem "rspec-sidekiq" # (https://github.com/philostler/rspec-sidekiq)
  gem "shoulda-matchers" # (https://github.com/thoughtbot/shoulda-matchers)
  gem "simplecov", require: false # (https://github.com/simplecov-ruby/simplecov)
end

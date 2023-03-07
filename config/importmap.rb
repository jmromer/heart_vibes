# frozen_string_literal: true

# Pin npm packages by running ./bin/importmap

pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin "@hotwired/stimulus", to: "stimulus.min.js", preload: true
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js", preload: true

pin "highcharts" # @10.3.3
pin "highcharts/modules/exporting", to: "highcharts--modules--exporting.js" # @10.3.3
pin "highcharts/modules/data", to: "highcharts--modules--data.js" # @10.3.3
pin "highcharts/modules/export-data", to: "highcharts--modules--export-data.js" # @10.3.3
pin "highcharts/modules/accessibility", to: "highcharts--modules--accessibility.js" # @10.3.3

pin "application", preload: true
pin_all_from "app/javascript/controllers", under: "controllers"

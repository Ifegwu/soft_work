source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.1.0.rc1'

gem 'webpacker', github: 'rails/webpacker'

# Use sqlite3 as the database for Active Record
group :development do
    #gem 'sqlite3'
    gem 'pg'
end
#gem 'mongo'
#gem 'mongoid', '~> 6'
# Use Puma as the app server

gem 'puma', '~> 3.7'
# Use SCSS for stylesheets
gem 'sass-rails', github: "rails/sass-rails"

# Use Uglifier as compressor for JavaScript assets
#gem 'uglifier', '>= 1.3.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.2'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 3.0'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '~> 2.13.0'
  gem 'selenium-webdriver'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
    gem 'foreman'
    gem 'web-console', github: 'rails/web-console'
end

group :production do
    gem 'pg'
    gem 'redis'
    gem 'heroku-deflater', github: 'romanbsd/heroku-deflater'
end
# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
gem 'mini_racer'
gem 'uglifier'
#gem 'sprockets', '~> 4.x'
gem 'sprockets', github: 'rails/sprockets'
# For es6 react, etc
gem 'sprockets-commoner'
gem 'js-routes'
gem 'figaro'
gem 'devise'
gem 'jquery-rails'
gem 'webpacker-react', "~> 0.2.0"
gem 'browserify-rails'

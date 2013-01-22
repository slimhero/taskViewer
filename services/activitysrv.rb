#!/usr/bin/ruby
require 'rubygems'
require 'sinatra/base'
require 'json'
#require './model/user'

=begin
  GET    - Get data list
  PUT    - Replace/Update data
  POST   - Create new
  DELETE - Delete data
=end
class Activity < Sinatra::Base
  #User.raise_on_save_failure = true

  # Get user data by id
  get '/api/activity/all' do
    { :activity => [  
        {:data => "20130111", :count => 2},
        {:data => "20130112", :count => 1},
        {:data => "20130113", :count => 10},
        {:data => "20130114", :count => 0},
        {:data => "20130119", :count => 2 },
        {:data => "20130121", :count => 1} 
      ]
    }.to_json
  end

end

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
  get '/api/activity/year' do
    { :activity => [  
        {:date => "20130111", :count => 2},
        {:date => "20130112", :count => 1},
        {:date => "20130113", :count => 10},
        {:date => "20130114", :count => 0},
        {:date => "20130119", :count => 2 },
        {:date => "20130121", :count => 1} 
      ]
    }.to_json
  end

  get '/api/activity/week' do
    { :activity => 
      { :week => "last week", :count => 26 } 
    }.to_json
  end

  get '/api/activity/threedays' do
    { :activity =>
      { :start => "20130119", :finish => "20130122", :count => 3 }
    }.to_json
  end

  get '/api/activity/day' do
    { :activity => 
      { :day => "20130123", :count => 0 } 
    }.to_json
  end

end

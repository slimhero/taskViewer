#!/usr/bin/ruby
require 'rubygems'
require 'sinatra/base'
require 'json'
require './model/user'

=begin
  GET    - Get data list
  PUT    - Replace/Update data
  POST   - Create new
  DELETE - Delete data
=end
class Sessions < Sinatra::Base
  #User.raise_on_save_failure = true

  # Get user data by id
  get '/api/session' do  
    if session[:isAuth] == true 
      { 
        :session =>  {
          :name => session[:name],
          :isAuth => session[:isAuth]
        } 
      }.to_json
    else
      { :error=>"Only for authorised users" }.to_json
    end
  end

end

#!/usr/bin/ruby
require 'rubygems'
require 'sinatra/base'
require 'data_mapper'
require 'json'
require './model/user'

=begin
  GET    - Get data list
  PUT    - Replace/Update data
  POST   - Create new
  DELETE - Delete data
=end
class Auth < Sinatra::Base
  # Get user data by id
  post '/auth/user/:email/:password' do  | email, password |
    content_type :json
    user = User.all( :email=>email, :password=>password )
    { :user=> user }.to_json  
  end

  # Confirm link
  get '/auth/confirm/:sha' do | sha |
    "{result=>'it's ok #{sha}'}".to_json
    #"asd #{sha}"
  end

  # Confirm user
  post '/auth/confirm/:sha' do
    json({:result=>"it's ok"})
  end

end

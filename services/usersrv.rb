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
class Users < Sinatra::Base
  # Get user data by id
  get '/api/user/:id' do  |id|
    { :user => User.get( id ) }.to_json
  end

  get '/api/users' do
    puts 'inside'
    users = User.all
    users.to_json
    { :users => users  }.to_json
  end

  # Updata data
  put '/api/user/:id' do
    json({:result=>"it's ok"})
  end

  # Creating new
  post '/api/user/new' do
    #content_type :json
    user = User.new :name=>params[:name], :password=>params[:password], :email=>params[:email]
    user.save
    { :user => user }.to_json()
  end


  # Deleting user
  delete '/api/user/:id' do
    json({:result=>"it's ok"})
  end
end

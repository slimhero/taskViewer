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
  #User.raise_on_save_failure = true

  # Get user data by id
  get '/api/user/:id' do  |id|
    { :user => User.get( id ) }.to_json
  end

  get '/api/users' do
    users = User.all
    users.to_json
    content_type :json
    { :users => users  }.to_json
  end

  # Updata data
  put '/api/user/:id' do
    {:result=>"it's ok"}.to_json
  end

  # Creating new
  post '/api/user/new' do
    content_type :json
    user = User.new :name=>params[:name], :password=>params[:password], :email=>params[:email]
		if user.save
			{ :user => user }.to_json()
		else
      { :error => user.errors.full_messages.join(". ") }.to_json()
		end
  end


  # Deleting user
  delete '/api/user/:id' do
    {:result=>"it's ok"}.to_json()
  end
end

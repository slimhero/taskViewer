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

  post '/auth/user/:email/:password' do  | email, password |
    content_type :json
    if email.nil? or password.nil?
      if email.nil?
        { :error=> "email must be filled" }.to_json
      else
        { :error=> "password must be filled" }.to_json
      end
    else

      user = User.last( :email=>email.downcase!, :password=>password )
      puts user.to_json
      if !user.nil?
        session[ :name ] = user.name
        session[ :isAuth ] = true 
        user.to_json
      else
        { :error=> "User not found" }.to_json 
      end
    end  
  end

  # Confirm link
  get '/auth/confirm/:sha' do | sha |
    { :result=>"it's ok #{sha}" }.to_json
    #"asd #{sha}"
  end

  # Confirm user
  post '/auth/confirm/:sha' do
    { :result=>"it's ok" }.to_json
  end

end

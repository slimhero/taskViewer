#!/usr/bin/ruby
require 'rubygems'
require 'sinatra'
require 'sinatra/base'
require 'json'
require 'haml'

require 'dm-core'
require 'dm-validations'
require 'dm-timestamps'
require 'dm-migrations'
#require 'sinatra/json'

require './services/usersrv'
require './services/authsrv'

DataMapper.setup(:default, "sqlite3://#{Dir.pwd}/#{Sinatra::Application.environment}.sqlite")


class TaskViewer < Sinatra::Base
  use Users
  use Auth 
  set :port => "1111"
  set :public_folder, 'static'
  set :session, true

  
  #DataMapper.setup(:default, "sqlite3://#{Dir.pwd}/#{Sinatra::Application.environment}.sqlite")

  get '/' do
    
    #"Hello world"
    haml( :index, :layout=>true )
    #haml( :layout, :layout=>false )
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end

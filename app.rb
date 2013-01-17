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
require './services/sessionsrv'

DataMapper.setup(:default, "sqlite3://#{Dir.pwd}/#{Sinatra::Application.environment}.sqlite")


class TaskViewer < Sinatra::Base
  use Users
  use Auth
  use Sessions
  set :port => "1111"
  set :public_folder, 'static'
  set :sessions, true

  
  #DataMapper.setup(:default, "sqlite3://#{Dir.pwd}/#{Sinatra::Application.environment}.sqlite")

  get '/' do
    session[ :isAuth ] = false
    session[ :name ] = ""
    haml( :index, :layout=>true )
    #haml( :layout, :layout=>false )
  end

  # Special do for redirecting
  get '/dashboard' do
    puts session[ :isAuth ]
    if session[ :isAuth ] == true
      haml( :index, :layout=>true )
    else
      redirect to( '/' )
    end
  end

  get '/project' do
    
    if session[ :isAuth ] == true
      haml( :index, :layout=>true )
    else
      redirect to( '/' )
    end
  end

  get '/wiki' do
    if session[ :isAuth ] == true
      haml( :index, :layout=>true )
    else
      redirect to( '/' )
    end
  end

  get '/issuse' do
    if session[ :isAuth ] == true
      haml( :index, :layout=>true )
    else
      redirect to( '/' )
    end
  end

  get '/exit' do
    if session[ :isAuth ] == true
      session[ :name ] = nil
      session[ :isAuth ] = false
      redirect to( '/' )
    end
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end

#!/usr/bin/ruby
require 'rubygems'
require 'data_mapper'

class State 
  include DataMapper::Resource

  property :id,        Serial
  property :name,      String,  
    :length => 150, 
    :required => true,
		:unique => true,
    :messages => {
      :presence  => "Name must be filled",
      :is_unique => "Name is not unique"
    }
  property :constant, Integer,
    :unique => true,
    :messages => {
      #:presence  => "Name must be filled",
      :is_unique => "Field constant for state is not unique"
    }


  #has n, :user
  #has n, :attribute
  #has n, :userattr
end

#DataMapper.auto_upgrade!
#DataMapper.finalize

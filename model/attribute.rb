#!/usr/bin/ruby
require 'rubygems'
require 'data_mapper'

class Attributes 
  include DataMapper::Resource

  property :id,        Serial
  property :name,      String,  
    :length => 150, 
    :required => true, 
    :messages => {
      :presence  => "Name must be filled",
      :is_unique => "Name is not unique"
    }
  property :format,    Regexp
  property :isHistory, Boolean, :default => false
  property :isVisible, Boolean, :default => true
  property :constant,  Integer, 
    :unique  => true,
    :messages => {
      #:presence  => "Name must be filled",
      :is_unique => "Field constant for Attribute is not unique"
    }

  belongs_to :state
end

#DataMapper.finalize

#!/usr/bin/ruby
require 'rubygems'
require 'data_mapper'

class UserAttr 
  include DataMapper::Resource

  property :id,        Serial
  property :value,     String
  property :ValidFrom, Date
  property :ValidTo,   Date

  belongs_to :user, :key=>true
  belongs_to :state, :key=>true
  belongs_to :attributes, :key=>true 
end

#DataMapper.finalize

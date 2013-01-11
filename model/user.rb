#!/usr/bin/ruby
require 'rubygems'

class User 
  include DataMapper::Resource

  property :id,        Serial
  property :name,      String,  :length => 150, :required => true 
  property :email,     String,  :length => 150, :required => true
  property :password,  String,  :length => 254
  property :sha,       String,  :length => 254
  property :isconfirm, Integer#, :default => 0
  property :state,     Integer     
end

DataMapper.finalize

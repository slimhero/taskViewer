#!/usr/bin/ruby
require 'rubygems'

class User 
  include DataMapper::Resource

  property :id,        Serial
  property :name,      String,  :length => 150, :required => true, :key => true
  property :email,     String,  
		:length => 150, 
		:required => true, 
		:format => :email_address,
		:unique => true,
		:messages => {
			:presence  => "Email must be filled",
			:is_unique => "Email is not unique",
			:format    => "It's not an email address"
		}
  property :password,  String,  :length => 254
  property :sha,       String,  :length => 254
  property :isconfirm, Integer#, :default => 0
  property :state,     Integer     
end

DataMapper.finalize

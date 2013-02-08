#!/usr/bin/ruby
require 'rubygems'
require 'data_mapper'

class User 
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
  property :isconfirm, Boolean, :default => false
  belongs_to :state
end


#DataMapper.auto_upgrade!
#DataMapper.finalize

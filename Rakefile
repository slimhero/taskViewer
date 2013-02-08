require './app'
#require './model/state'

Dir["#{File.dirname(__FILE__)}/model/*.rb"].sort.each { |ext| load ext }

desc 'Migrate DataMapper database'
task :migrate do
  DataMapper.auto_migrate!
  DataMapper.finalize
end

desc 'Auto upgrade'
task :upgrade do
  #Dir["#{File.dirname(__FILE__)}/model/*.rb"].sort.each { |ext| 
  #  load ext 
  #  DataMapper.finalize.auto_upgrade!
  #}
  DataMapper.auto_upgrade!
  DataMapper.finalize
end

desc 'Default State values'
task :defstate do
  DataMapper.finalize
  DataMapper::Model.raise_on_save_failure = true

  st = State.new :name => "Created", :constant => 100
  st.save

  st = State.new :name => "In work", :constant => 101
  st.save

  st = State.new :name => "In progress", :constant => 102
  st.save

  st = State.new :name => "Not confirmed", :constant => 103
  st.save

  ass = Attributes.new :name => "Projects", :constant => 100, :format => ""
  ass.save
  ##as = Attributes.new :name => "Projects"
  ##as.save
end

desc 'Default User attributes'
task :defattr do
  DataMapper.finalize
  DataMapper::Model.raise_on_save_failure = true
 
  as = Attributes.new :name => "Projects"
  as.save

  #a = Attribute.new :name=>'Tasks', :constant=>101
  #a.save
  
  #a = Attribute.new :name=>'Messages', :constant=>102
  #a.save
  
  #a = Attribute.new :name=>'Tickets', constant=>103
  #a.save
end

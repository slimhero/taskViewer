require './app'

Dir["#{File.dirname(__FILE__)}/model/*.rb"].sort.each { |ext| load ext }

desc 'Migrate DataMapper database'
task :migrate do
  DataMapper.auto_migrate!
end

desc 'Auto upgrade'
task :upgrade do
  Dir["#{File.dirname(__FILE__)}/model/*.rb"].sort.each { |ext| 
    load ext 
    DataMapper.finalize.auto_upgrade!
  }
  #DataMapper.auto_upgrade!
end

class PlayersController < ApplicationController

  def index
    gon.players=generatePlayers()
  end


private

  #generats some faker player data
  def generatePlayers()
    puts "generatePlayers"
    res=[]
    (1..20).each do |i|
      #obj={name:Faker::Name.name, email:Faker::Internet.email, logo:Faker::Company.logo, description:Faker::Lorem.sentence}
      
      obj={id: i,name:Faker::Name.name, email:Faker::Internet.email, logo:Faker::Company.logo, description:Faker::Lorem.sentence}

      res << obj
      puts "generatePlayers:: #{obj.inspect}"
    end
    return res
  end
end

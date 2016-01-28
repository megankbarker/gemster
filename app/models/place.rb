class Place < ActiveRecord::Base
	belongs_to :user
	has_many :comments
	has_many :photos
	
	geocoded_by :address # can also be an IP address
	after_validation :geocode # auto-fetch coordinates


	validates :name, presence: true, :length => { :minimum => 4 }
	validates :address, :description, presence: true
end

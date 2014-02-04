class Contact < ActiveRecord::Base

	validates :email, presence: true
	validates :email, uniqeness: true
end

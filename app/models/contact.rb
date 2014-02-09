class Contact < ActiveRecord::Base

	validates :first, presence: true
	validates :last, presence: true
	validates :email, presence: true
	validates :email, uniqueness: true
end

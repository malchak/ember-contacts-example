class Api::V1::ContactsController < ApplicationController
	respond_to :json
	def index
		render json: Contact.all
	end

	def show
		respond_with Contact.find(params[:id])
	end

	def create
		respond_with Contact.create(contact_params) 
	end

	def update
		respond_with Contact.update(params[:id], contact_params)
	end

	def destroy
		respond_with Contact.destroy(params[:id])
	end

	private

	def contact_params
		params.require(:contact).permit(:first, :last, :email, :favorite)
	end

end

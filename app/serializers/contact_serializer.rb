class ContactSerializer < ActiveModel::Serializer
  attributes :id, :first, :last, :email, :favorite
end

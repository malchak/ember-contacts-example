class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :first
      t.string :last
      t.string :email
      t.boolean :favorite

      t.timestamps
    end
    add_index :contacts, :email, unique: true
  end
end

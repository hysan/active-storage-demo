class CreateCats < ActiveRecord::Migration[5.2]
  def change
    create_table :cats do |t|
      t.text :name

      t.timestamps
    end
  end
end

class AddCategoryToThoughts < ActiveRecord::Migration[5.1]
  def change
    add_reference :thoughts, :category, foreign_key: true
  end
end

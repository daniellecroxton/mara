class RemoveUserFromThoughts < ActiveRecord::Migration[5.1]
  def change
    remove_column :thoughts, :user, :string
  end
end

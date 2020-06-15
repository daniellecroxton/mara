class ThoughtSerializer < ActiveModel::Serializer
  # belongs_to :category
  attributes :id, :text, :category, :category_id

end

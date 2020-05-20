class ThoughtSerializer < ActiveModel::Serializer
  belongs_to :category
  attributes :id, :text, :created_at

end

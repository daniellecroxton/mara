class CategorySerializer < ActiveModel::Serializer
  # has_many :thoughts
  attributes :id, :name, :thoughts
end

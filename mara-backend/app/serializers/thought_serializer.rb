class ThoughtSerializer < ActiveModel::Serializer
  belongs_to :user
  attributes :id, :text, :user
end

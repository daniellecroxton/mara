class Thought < ApplicationRecord
    include ActiveModel::Serializers::JSON
    belongs_to :category
    attribute :text
    validates :text, presence: true


end

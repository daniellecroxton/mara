class Thought < ApplicationRecord
    include ActiveModel::Serializers::JSON
    # belongs_to :user
    attribute :text
    validates :text, presence: true


end

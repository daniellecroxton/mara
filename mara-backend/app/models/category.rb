class Category < ApplicationRecord
    include ActiveModel::Serializers::JSON
    has_many :thoughts
end

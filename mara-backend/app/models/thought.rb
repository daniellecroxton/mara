class Thought < ApplicationRecord
    belongs_to :user
    attributes :id, :text, :user
end

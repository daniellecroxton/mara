class ThoughtSerializer < ActiveModel::Serializer
  # belongs_to :user
  attributes :id, :text, :created_at

  def serializable_hash(adapter_options = nil, options = {}, adapter_instance = self.class.serialization_adapter_instance)
    hash = super
    hash.each { |key, value| hash.delete(key) if value.nil? }
    hash
  end
end

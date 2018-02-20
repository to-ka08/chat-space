class Message < ApplicationRecord
  belongs_to :group
  belongs_to :user

  validates :body, presence: true, unless: :image?

  mount_uploader :image, ImageUploader

  def created_at_time
    created_at.strftime('%Y/%m/%d/ %H:%M')
  end

end

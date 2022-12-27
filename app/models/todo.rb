class Todo < ApplicationRecord
  validates :title, presence: true, length: { maximum: 80 }
  validates :content, presence: true, allow_blank: true
  validates :date, presence: true, allow_blank: true
  validates :time, presence: true, allow_blank: true
end
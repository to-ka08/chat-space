FactoryGirl.define do
  factory :message do
    body Faker::Lorem.sentence
    image File.open("#{Rails.root}/public/uploads/message/image/7/ダウンロード.png")
    user
    group
  end
end

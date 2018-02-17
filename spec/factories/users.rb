FactoryGirl.define do
  factory :user do
    name Faker::Name.name
    email Faker::Internet.email
    password = Faker::Internet.password(8)
    password password
    password_confirmation password
  end
end

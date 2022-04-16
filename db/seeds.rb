# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Destroying old seeds"

Train.destroy_all


puts "All old seeds destroyed"
puts "Seeding data"

t1 = Train.create(train_name: "1")
t2 = Train.create(train_name: "2")
t3 = Train.create(train_name: "3")
t4 = Train.create(train_name: "4")
t5 = Train.create(train_name: "5")
t6 = Train.create(train_name: "6")
t7 = Train.create(train_name: "7")
t8 = Train.create(train_name: "A")
t9 = Train.create(train_name: "B")
t10 = Train.create(train_name: "C")
t11 = Train.create(train_name: "D")
t12 = Train.create(train_name: "E")
t13 = Train.create(train_name: "F")
t14 = Train.create(train_name: "G")
t15 = Train.create(train_name: "J")
t16 = Train.create(train_name: "L")
t17 = Train.create(train_name: "M")
t18 = Train.create(train_name: "N")
t19 = Train.create(train_name: "Q")
t20 = Train.create(train_name: "R")
t21 = Train.create(train_name: "W")
t22 = Train.create(train_name: "Z")

puts "finished seeding"
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

question = Category.create(name: "Question")
worry = Category.create(name: "Worry")
to_do = Category.create(name: "To Do")

test_thoughts = [
    {text: 'What will happen if I lose my job?', category_id: 2},
    {text: "I need to get groceries.", category_id: 3},
    {text: 'Working from home will drive me crazy.', category_id: 2},
    {text: "Activity List for Kids", category_id: 3},
    {text: 'How do I make bread?', category_id: 1},
    {text: "I need to exercise", category_id: 3},
    {text: 'My health is waning', category_id: 2},
    {text: 'Is it okay to go swimming?', category_id: 1}
]

test_thoughts.each do | thought |
    Thought.create(thought)
end
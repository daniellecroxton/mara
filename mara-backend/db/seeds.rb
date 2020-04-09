# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

test_thoughts = [
    'What will happen if I lose my job?',
    "I'm afraid this won't work out.",
    'Working from home will drive me crazy.',
    "I can't take another day of homeschooling my kids!",
    'What if I get sick?',
    "I hate that my body doesn't work like it used to",
    'I just want to eat candy!!!!',
    'I am unhappy. :('
]

test_thoughts.each do | thought |
    Thought.create(text: thought)
end
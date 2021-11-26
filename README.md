# atVenu take home assessment - product inventory

## Features

- Set beginnng inventory count
- Add more inventory to count
- Track comped inventory
- Track end inventory count
- Calculate gross sales
- Display quantity remaining
- Add a poster description and display on mouse over of the poster

## Lessons Learned/Challenges

What did you learn while building this project?

Learned a bit more about React Hooks
Leaned how to use React Bootstrap

What challenges did you face and how did you overcome them?

Using hooks was the biggest challenge. I used video tutorials and StackOverflow to help problem solve

The input fields aren't all displaying the information needed. The total inventory field does not include the previous value when calculating the new total. So if a user had an initial count of 10, then added 3 the form will add to 13 but if a user added 1 more then count would then say 11 and not 14. I would need to figure out how to add onto the previous count to ensure accurate count

Using React Bootstrap was also a challenge. Again I used video tutorials as well as the official documentation to use the components

For the poster text I struggled with displaying the text. The text should display on hover after the textdescription state has been updated (after clicking the "submit" button in the popup menu) but the text currently displays on mouseover without needing to push the submit button.  The current mouseoover event needs to display text only after the submit buton is pressed

While the popup menu can receive the updated price I was unable to get the poster price to updated. The price is dynamically updated via a prop and I was unable to figure out how to update the price value in the parent component via a change in a child component

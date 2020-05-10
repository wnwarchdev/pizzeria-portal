# dashboard

'/'
  -daily order stats (local + take away)
  -event and reservation list for present day

# login

'/login'
  -login and password inputs
  -log-in button (as simple link)

# table availability views

'/tables'
  -date and hour picker
  -reservation list array:
    +column per table
    +row is 30 minute interval
    +should match google calendar week layout - tables instead of days in columns
    +on click at reservation/event, should redirect to corresponding pages

'/tables/booking/:id'
  -has all info on particular reservation
  -allows edit and save of updates

'/tables/booking/new'
  -allows edit and save of new reservation

'/tables/events/:id'
  -has all info on particular event
  -allows edit and save of updates

'/tables/events/new'
    -allows edit and save of new event

# waiter views

'/waiter'
  -rows for tables
  -columns for info per table
  -aviable actios per table in last column

'/waiter/order/new'
  -table number (editable)
  -menu of products
  -option per each product
  -total price

'/waiter/order/:id'
  -table number (editable)
  -menu of products
  -option per each product
  -total price

# kitchen views

'/kitchen'
  -list of orders from earliest to last with:
    +table number
    +full info on ordered products
    +"ready" button

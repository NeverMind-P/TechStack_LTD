## Testing backend part

# "GET" http://localhost:5000/apartments 
return all apartments and details about it.
#
# "GET" http://localhost:3000/apartments/id 
return one special apartment and details about it.
#
# "GET" http://localhost:3000/apartments?price={desc/asc}&room={number} 
return one filtered apartments and details about it.
- price: string, two values: asc/desc
- rooms: number
#
# "POST" http://localhost:3000/apartments/
Add one special apartment.
You should add body, in which you will write all data about apartment, that you need
Body example:
{
    "rooms": 3,
    "name: "Amazing room near tower bridge",
    "price": 1650,
    "description": "This Room is located opposite Shadwell DLR station."
}
In case the body is invalid, User will see a response with a "400" status code.
#
# "Delete" http://localhost:3000/apartments/id 
Delete special apartment by Id



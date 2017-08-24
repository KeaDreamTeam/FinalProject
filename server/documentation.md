D# API Documentation

#### Authors

* Ania Podhajska
* Usha MacDonald
* Magda Gierg

## Summary

API for use with the What's For Lunch app project.

##### The API can:
| Task | Method | Requires authentication? |
| ------ | -------- | -------- |
| [Return a list of all restaurants](#Return-a-list-of-all-restaurants) | GET | no |
| [Return all comments on a specified restaurant](#Get-all-comments-on-a-specified-restaurant) | GET | no |
| [Return all comment entries by a specific user](#Return-all-comment-entries-by-a-specific-user) | GET | no |
| [Add a new comment to a specified restaurant](#add-a-new-comment-to-an-entry) | POST | yes |
| [Create a new user](#) | POST | no |
| [Log in as a user](#) | POST | yes |

### Return a list of all restaurants
| Method | Endpoint | Usage | Returns |
| ------ | -------- | ----- | ------- |
| GET   | `/api/restaurants` | get a list of all restaurants| restaurants |

This route get will return an array of objects associated with restaurants. The restaurants will be arranged in an ascending order, meaning the last index will be the latest restaurant.

#### Response
##### Status Codes:
* If the comments exist and the comments are retrieved, the HTTP status code is 200 ('Ok').
* If the restaurant_id given does not match any entries in the database, the HTTP status code in the response header is 400 ('Bad Request').
* In case of server error, the header status code is a 5xx error code and the response body contains an error object.

The server will return an object structured as following

    [
      {
        restaurant_id: 1,
        net_rating: 5,
        pricing: "$$",
        restaurant_name: "Dream Team Restaurant",
        restaurant_url: "www.dream-team-restaurant.com",
        image_url: "www.dream-team-restaurant.com/photo",
        address: "275 Cuba St, Te Aro, Wellington 6023",
        description: "Dine with the best",
        is_meat: true,
        is_vegan: true,
        is_breakfast: true,
        is_dinner: true,
        is_dinein: true,
        is_takeaway: true
      },
      {
        restaurant_id: 2 ,
        net_rating: 5,
        pricing: "$$",
        restaurant_name: "Vegeterian Feast",
        restaurant_url: "www.vegeterian-feast.com",
        image_url: "www.vegeterian-feast.com/photo",
        address: "20 Mills St, Te Aro, Wellington 6023",
        description: "We serve vegeterian meals",
        is_meat: false,
        is_vegan: true,
        is_breakfast: true,
        is_dinner: true,
        is_dinein: true,
        is_takeaway: true
      },      
      ]

### Get all comments on a specified restaurant

| Method | Endpoint | Usage | Returns |
| ------ | -------- | ----- | ------- |
| GET   | `/api/restaurants/:restaurant_id/comments` | get all comments on a restaurant| comments |

This route get will return an array of the comment objects associated to the specified restaurant. The comments will be arranged in a descending order, meaning the first index will be the latest comment.
The :comment_id parameter in the request url is the id of the restaurant you wish to retrieve the comments of.

#### Response
##### Status Codes:
* If the comments exist and the comments are retrieved, the HTTP status code is 200 ('Ok').
* If the restaurant_id given does not match any entries in the database, the server will return an empty array [].

The server will return an object structured as following

    [
      {
        comment_id: 1,
        user_id: 1,
        restaurant_id: 1,
        content: "good price and great food",
        is_pos: true,
        is_fair: true,
        created_at: "2017-08-23 22:52:12"
        },
        {
        comment_id: 4,
        user_id: 3,
        restaurant_id: 1,
        content: "not too good price and average food",
        is_pos: false,
        is_fair: false,
        created_at: "2017-08-20 22:52:12"
        }
      ]

### Return all comment entries by a specific user

| Method | Endpoint | Usage | Returns |
| ------ | -------- | ----- | ------- |
| GET   | `/api/users/:user_id/comments` | get all comments created by a specific user| user comments |

This route get will return an array of the comment objects associated to the specified user. The comments will be arranged in a ascending order, meaning the latest index will be the latest comment.
The :user_id parameter in the request url is the id of the user you wish to retrieve the comments of.

### Response
##### Status Codes:
* If the comments exist and the comments are retrieved, the HTTP status code is 200 ('Ok').
* If the user_id given does not match any comments in the database, the server will return an empty array [].

The server will return an object structured as following

    [
      {
      user_id: 1,
      comment_id: 2,
      restaurant_id: 1,
      content: "good price and great food",
      is_pos: true,
      is_fair: true,
      created_at: "2017-08-23 22:52:12"
      }
    ]

### Add a new comment to a specified restaurant

| Method | Endpoint | Usage | Returns |
| ------ | -------- | ----- | ------- |
| POST   | `/api/comments` | post a comment for a specific restaurant| add comment |

This post creates a new comment in the comments table, associating the user who posted it to the restaurant it was posted on. The submission is an object containing the entry id & user id and the comment string to be posted e.g.:

  {
    user_id: 1,
    restaurant_id: 1,
    content: "good price and great food",
    is_pos: true,
    is_fair: true,
    created_at: "2017-08-23 22:52:12"
  }

  #### Response
  ##### Status Codes:
  * If the comment is posted, the HTTP status code in the response header is 201 ('Created').
  * If the object provided is incorrectly formatted, the HTTP status code in the response header is 400 ('Bad Request').
  * If the user is not authenticated (requires login), the HTTP status code in the response header is 401 ("Unauthorized")
  * In case of server error, the header status code is a 5xx error code and the response body contains an error object.


### Create new user

| Method | Endpoint | Usage | Returns |
| ------ | -------- | ----- | ------- |
| POST    | `/api/users/signup` | Create a user | boolean |

The post object must take the form:

    {
      "user_name": "Bob",
      "password": "Bob1234",
      "email": "bob@gmail.com"
    }

#### Response
##### Status Codes:

  * On success, the HTTP status code in the response header is 201 ('Created').
  * If the data passed in is incorrect, a 400 'Bad Response' HTTP status code will be returned.
  * In case of server error, the header status code is a 5xx error code and the response body contains an error object.

The post request will add a new user row to the user table based on the form inputs. It will reject the request if the username is already taken, and return "false". The password will be hashed, and the database stores only this hashed version. If the user creation is successful, that user's ID will be returned, e.g.:

    { user_id: 15 }

([back to summary](#summary))  

### Login as user

| Method | Endpoint | Usage | Returns |
| ------ | -------- | ----- | ------- |
| POST    | `/api/users/login` | Authenticate a user | user |

The post object must take the form:

    {
      "user_name": "Bob",
      "password": "Bob1234"
    }

#### Response

##### Status Codes:
  * On success, the HTTP status code in the response header is 200 ('OK').
  * If the login information is invalid (username doesn't exist / password is incorrect), a 401 'Unauthorized' HTTP status code will be returned.
  * If the data passed in is incorrect, a 400 'Bad Response' HTTP status code will be returned.
  * In case of server error, the header status code is a 5xx error code and the response body contains an error object.

The post request will compare the username to the users table for a match. A user session is created upon success.

    {
      "user": {
        "user_name": "Bob",
        "user_id": 7,
      }
    }

([back to summary](#summary))  

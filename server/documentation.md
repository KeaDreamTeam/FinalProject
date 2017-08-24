# API Documentation

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
| [Like or dislike a specific restaurant](#Like-or-dislike-a-specific-restaurant) | POST | yes |
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
| GET   | `/api/comments/:restaurant_id` | get all comments on a restaurant| comments |

This route get will return an array of the comment objects associated to the specified restaurant. The comments will be arranged in a descending order, meaning the first index will be the latest comment.
The :comment_id parameter in the request url is the id of the restaurant you wish to retrieve the comments of.

#### Response
##### Status Codes:
* If the comments exist and the comments are retrieved, the HTTP status code is 200 ('Created').
* If the restaurant_id given does not match any entries in the database, the HTTP status code in the response header is 400 ('Bad Request').
* In case of server error, the header status code is a 5xx error code and the response body contains an error object.

The server will return an object structured as following

    [
      {
        comment_id: 1,
        user_id: 1,
        restaurant_id: 1,
        content: "good price and great food",
        is_pos: 1,
        is_fair: 1,
        created_at: "2017-08-23 22:52:12"
        },
        {
        comment_id: 4,
        user_id: 3,
        restaurant_id: 1,
        content: "good price and great food",
        is_pos: 1,
        is_fair: 1,
        created_at: "2017-08-23 22:52:12"
        }
      ]

### Return all comment entries by a specific user

| Method | Endpoint | Usage | Returns |
| ------ | -------- | ----- | ------- |
| GET   | `/api/comments/:user_id` | get all comments created by a specific user| user comments |

This route get will return an array of the comment objects associated to the specified user. The comments will be arranged in a ascending order, meaning the latest index will be the latest comment.
The :user_id parameter in the request url is the id of the user you wish to retrieve the comments of.

### Response
##### Status Codes:
* If the comments exist and the comments are retrieved, the HTTP status code is 200 ('Ok').
* If the user_id given does not match any comments in the database, the HTTP status code in the response header is 400 ('Bad Request').
* In case of server error, the header status code is a 5xx error code and the response body contains an error object.

The server will return an object structured as following

    [
      {
      user_id: 1,
      comment_id: 2,
      restaurant_id: 1,
      content: "good price and great food",
      is_pos: 1,
      is_fair: 1,
      created_at: "2017-08-23 22:52:12"
      }
    ]

### Like or dislike a specific restaurant

| Method | Endpoint | Usage | Returns |
| ------ | -------- | ----- | ------- |
| GET   | `/api/comments` | post a comment for a specific restaurant| add comment |

This post creates a new comment in the comments table, associating the user who posted it to the restaurant it was posted on. It will also increment the commentCount column of the entries table for the given entry.
The submission is an object containing the entry id & user id and the comment string to be posted e.g.:

    {
  
    }


([back to summary](#summary))

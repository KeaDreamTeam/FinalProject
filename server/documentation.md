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
| [Return a list of all restaurants](#) | GET | no |
| [Return all comment entries by a specific user](#) | GET | no |
| [Return all comments on a specified restaurant](#) | GET | no |
| [Like or dislike a specific restaurant](#) | POST | yes |
| [Add a new comment to a specified restaurant](#add-a-new-comment-to-an-entry) | POST | yes |
| [Create a new user](#) | POST | no |
| [Log in as a user](#) | POST | yes |


### Return a list of all restaurants
| Method | Endpoint | Usage | Returns |
| ------ | -------- | ----- | ------- |
| GET   | `/api/restaurants` | get a list of all restaurants| restaurants |

This route get will return an array of objects. Each object represents restaurant details 


### Get all comments on a specified restaurant

| Method | Endpoint | Usage | Returns |
| ------ | -------- | ----- | ------- |
| GET   | `/api/comments/:restaurant_id` | get all comments on a restaurant| comments |

This route get will return an array of the comment objects associated to the specified restaurant. The comments will be arranged in a descending order, meaning the first index will be the latest comment.
The :comment_id parameter in the request url is the id of the entry you wish to retrieve the comments of

#### Response
##### Status Codes:
* If the restaurant exists and the comments are retrieved, the HTTP status code is 200 ('Created').
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

([back to summary](#summary))

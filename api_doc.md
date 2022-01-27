# TipsyTips API Documentation

## Endpoints :

List of available endpoints:

- `POST /account/register`
- `POST /account/login`
- `GET /transaction`
- `GET /auction`
- `PATCH /auction/:id`
- `POST /auction/payment/:id`
- `GET /auctio/orderHistory`
- `GET /favorite`
- `POST /addtofavo`
  &nbsp;

## 1. POST /account/register
Desciption:

- Register an user with email and set role as admin

Request:

- body:

```json
{
  "email": "email (required)",
  "username": "username (required)",
  "password": "string (required)"
}
```

_Response (201 - create)_

```json
{
  "message": "<registered id>, <registered email>"
}
```

_Response (400 - bad request)_

```json
{
  "message": "Email cannot be empty !"
}
OR
{
  "message": "Password cannot be empty !"
}
OR
{
  "message": "Password can't be shorter than 5 characters"
}
```

&nbsp;

## 2. POST /account/register

Desciption:

- login with email

Request:

- body:

```json
{
  "email": email,
  "password": string
}
```

_Response (200 - OK)_

```json
{
  "access_token": token,
  "data": {
    "id": <user id>,
    "email": <user email>,
    "role": <user role>
  }
}
```

&nbsp;

# 3. GET /transaction

# 4. GET /auction

Description: 
- Get all data from auction

_Response (200 - OK)_
```
[
    {
        "id": 1,
        "title": "Sine Qua Non E Rose",
        "description": "Removed from a temperature and humidity controlled wine storage unit; Purchased upon release",
        "imageUrl": "https://www.winebid.com/Photo/Medium2x/1553324",
        "year": 2002,
        "basePrice": 600000,
        "currentBid": 1000000,
        "CurrentBidUserId": 5,
        "buyNow": 2000000,
        "dueDate": "2022-01-27T17:00:00.000Z",
        "status": "active",
        "createdAt": "2022-01-26T23:32:02.199Z",
        "updatedAt": "2022-01-27T17:47:34.929Z"
    },
    {
        "id": 2,
        "title": "Denis Mortet Mazis-Chambertin",
        "description": "France Direct wines are sourced from individual cellars in France. They ship directly to our Napa warehouse each quarter.",
        "imageUrl": "https://www.winebid.com/Photo/Medium2x/1520108",
        "year": 2017,
        "basePrice": 2500000,
        "currentBid": 6000000,
        "CurrentBidUserId": 5,
        "buyNow": 7000000,
        "dueDate": "2021-01-30T17:00:00.000Z",
        "status": "active",
        "createdAt": "2022-01-26T23:30:34.694Z",
        "updatedAt": "2022-01-27T17:51:01.046Z"
    }
]
```

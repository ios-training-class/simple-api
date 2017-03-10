# simple-api

## Installation

   $ npm install

Or using [Yarn](https://yarnpkg.com)

   $ yarn

## How to run

  $ npm run dev
  
## API:

### Get string by GET method

`GET /hello`

```
hello world
```

### Get string by POST method

`POST /hello`

```
hello world from post method
```

### Get JSON object by GET method

`GET /hello1`

```
{
  "hello": "world"
}
```

### Return 403 status code

`GET /403`

```
Status: Forbidden
```

### Get random quote

`GET /quotes`

```
{
  "ID": 1020,
  "title": "Jan Michl",
  "content": "<p>Design is redesign.  </p>\n",
  "link": "https://quotesondesign.com/jan-michl/",
  "custom_meta": {
    "Source": "<a href=\"http://www.designaddict.com/essais/michl.html\">arcticle</a>"
  }
}
```

### Get quote by Id

`GET /quotes/709`

```
{
  "ID": 709,
  "title": "Mirko Ilic",
  "content": "<p>Think 8 hours, work 2 hours.  </p>\n",
  "link": "https://quotesondesign.com/mirko-ilic/"
}
```


## Deploy

### Heroku

[https://tube-simple.herokuapp.com/](https://tube-simple.herokuapp.com/)

# simple-api

## Installation

   $ npm install

## How to run

  $ npm start
  
## API:

### Get string by GET method

http://0.0.0.0:3000/api/v1/quotes/hello

```
hello world
```

### Get string by POST method

http://0.0.0.0:3000/api/v1/quotes/hello

```
hello world from post method
```

### Get JSON object by GET method

http://0.0.0.0:3000/api/v1/quotes/hello1

```
{
  "hello": "world"
}
```

### Return 403 status code

http://0.0.0.0:3000/api/v1/quotes/403

```
Status: Forbidden
```

### Get random quote

http://0.0.0.0:3000/api/v1/quotes

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

http://0.0.0.0:3000/api/v1/quotes/709

```
{
  "ID": 709,
  "title": "Mirko Ilic",
  "content": "<p>Think 8 hours, work 2 hours.  </p>\n",
  "link": "https://quotesondesign.com/mirko-ilic/"
}
```

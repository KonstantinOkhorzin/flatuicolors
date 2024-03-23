# flatuicolors-server

## API base URL
```
https://flatuicolors-server.onrender.com/
```

* ### Get all palettes

    __Request__
    ```
    GET api/palettes
    ```

    __Success response__
    ```
    Status: 200 OK
    Content-Type: application/json
    ResponseBody: [
    {
        _id: string,
        paletteName: string,
        emoji: string,
        colors: [
            {
                name: string
                color: string
                _id: string
            },
            {
                name: string
                color: string
                _id: string
            },
            ...
        ]
    },
    {
        _id: string,
        paletteName: string,
        emoji: string,
        colors: [
            {
                name: string
                color: string
                _id: string
            },
            {
                name: string
                color: string
                _id: string
            },
            ...
        ]
    },
    ...
    ]
    ```

    __Failure response__

    ```
    Status: 404 Not Found
    Content-Type: application/json
    ResponseBody: {
    "message": string
    }
    ```

*   ### Get palette by id

    __Request__
    ```
    GET api/palettes/id
    ```
    __Success response__
    ```
    Status: 200 OK
    Content-Type: application/json
    ResponseBody: 
        {
            _id: string,
            paletteName: string,
            emoji: string,
            colors: [
                {
                    name: string
                    color: string
                    _id: string
                },
                {
                    name: string
                    color: string
                    _id: string
                },
                ...
            ]
        }
    ```
    __Failure response__

    ```
    Status: 400 Bad Request
    Content-Type: application/json
    ResponseBody: {
        "message": string
    }
    ```
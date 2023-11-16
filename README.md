## Installation

Install dependency

```
npm install
```

Run

```
npm start
```

## Folder Structure

```
/src
  /assets
    /fonts
    /images
    /icons
  /components
    Button.js           # global component use with various file
  /context              # use context for share global state
    authContext.js
  /enums                # any enums and types
    roleEnums.js
  /pages
    /admin              # pages for admin
    /user               # pages for user
    login.js            # everyone can access this page
    resetpassword.js
  /routes               # control any route
    AuthRoute.js        # Protected route, can access when login
    Routes.js           # Add new route here, recommend to use AuthRoute.js
  /services             # use for third party service | external service
    axios.js
  /utils                # pure function | any function that share with various file
```

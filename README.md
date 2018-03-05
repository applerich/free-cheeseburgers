# free-cheeseburgers

Free Cheeseburger script for "The Habit". Proxies needed.

## How to install:
```
cd desktop
git clone https://github.com/logan-io/free-cheeseburgers.git
cd free-cheeseburgers
npm install # sudo npm install if you're on macOS

```
## After Installing

Open config.json and paste proxies and catchall

**Proper proxy format is important**
**Examples**
  
  With User and password:
  ```
  "http://user:password@ip:port"
  "http://logan:pass1234@127.121.115.3:23082"
  ```
  **Without** User and Password:
  ```
  "http://ip:port"
  "http://127.121.114.3:23082"
  ```
  **_Each proxy MUST be followed by a comma, EXCEPT the last one_**
  
  **Example Config File**
  ```
  {
    "proxies": [
          "http://127.121.114.3:23082",
          "http://127.121.114.3:23082",
          "http://127.121.114.3:23082",
          "http://127.121.114.3:23082",
          "http://127.121.114.3:23082",
          "http://127.121.114.3:23082"
    ],
    "catchall": "freeburg.com"

}
```

## Starting Script

Cd into folder
```
node index
```
  

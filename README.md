## Clothing App API

Can be tested using html template or cURL.  

Can accept file, save it to filesystem under uploads folder and returns json data containing info about the file for now.  

### Steps to setup environment

- Git clone repository.
- Navigate to clothing-app-api directory:
```$ cd clothing-app-api/ ```

#### Using setup script

- If the script doesn't have executable permission run `$ chmod +x setup` from inside the project directory.
- Then run `$ ./setup` ( python3-venv package should be installed to run this !! )
- Run `$ source env/bin/activate` to get activate virutalenv. You're ready to go.

#### Manually

``` 
$ npm i
$ python3 -m venv env
$ source env/bin/activate
$ pip install -r requirements.txt

```

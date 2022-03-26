# Folder App

You can find a deployed version [here](https://folderappxg.herokuapp.com/).

The app is displaying the file tree inside the folder "exposedFileSystem".

For changing the root folder you must be put the name of the folder or folders in the url, for instance:

```
https://folderappxg.herokuapp.com/folder3
```

To download or preview a file use the mouse righ click over the file

**Warning**: This page was not tested for a mobile or tablet devices.

## Run app locally

- Install dependencies
  ```
  npm install
  ```
- Execute this command:
  ```
  npm run dev
  ```

## Run the build version

- Install dependencies
  ```
  npm install
  ```
- Build the app
  ```
  npm run build
  ```
- Run the server
  ```
  npm start
  ```

## Testing

There are only a test for the INode component.

- Run jest tests

  ```
  npm test
  ```

- See coverage
  ```
  npm test -- --coverage
  ```

## End to End tests

Cypress is used for the e2e tests. The version installed [here](https://folderappxg.herokuapp.com/) is the oan that sill be used for the e2e tests

### Run locally

- Change to e2e folder
  ```
  cd e2e
  ```
- Run cypress
  ```
  cypress run
  ```
- Or you can also open cypress
  ```
  cypress open
  ```

### Run with docker

- Change to e2e folder
  ```
  cd e2e
  ```
- Run the script (there are a windows and a linux version)
  ```
  .\run-e2e-with-docker.cmd
  ```

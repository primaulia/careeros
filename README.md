# CareerOS Assignment

This project is to mock up the `Quest` container of the CareerOS site.

## Stack

- **create-react-app** runs on `Typescript`
- Mock server running with [json-server](https://github.com/typicode/json-server)

## Setup

Here are the steps to run the site locally.

### Mock JSON Server

```sh
cd careeros
npx json-server mock.json
```

Once you run this, your JSON data should be accesible at `localhost:3000/quests`

### React client

```sh
npm install
npm start
```

The terminal will prompt you to run the site on a different port. Type `y` and your site should run on `localhost:3001`.

**Happy Questing!!**

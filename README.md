# CareerOS Assignment

This project is to mock up the `Quest` container of the CareerOS site.

![Screenshot 2024-06-15 at 3 07 40 AM](https://github.com/primaulia/careeros/assets/1294303/571dc900-b32c-4c51-bae0-a757d4225213)

## Stacks

- **create-react-app** runs on `Typescript`
- Mock server running with [json-server](https://github.com/typicode/json-server)

## Setup

Here are the steps to run the site locally.

### Mock JSON Server

```sh
cd careeros
npx json-server mock.json
```

Once you run this, your JSON data should be accessible at `localhost:3000/quests`

### React client

```sh
npm install
npm start
```

The terminal will prompt you to run the site on a different port. Type `y` and your site should run on `localhost:3001`.

**Happy Questing!!**

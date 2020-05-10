# Github Note Taker [![Dependabot Status](https://badgen.net/dependabot/katebeavis/react-native-github-finder/260267900?icon=dependabot)](https://app.dependabot.com/accounts/katebeavis/repos/260267900)

A React Native app CRUD app that allows the user to search for Github users via their username, view profile information, view repositories and add/edit/delete notes about that user.

Uses Typescript, GraphQL, Apollo and Prisma to store data.

## To setup

```
$ git clone git@github.com:katebeavis/react-native-github-finder.git && cd react-native-github-finder
$ yarn all
$ touch server/.env
```

### Setting up a Prisma db

Sign up for an account at https://app.prisma.io/signup

```
$ npm install -g prisma
$ cd server && prisma init
```

You will be asked to login, choose demo server, a region & name of your choosing, dev for stage and Prisma TypeScript Client for programming language.

In `server/prisma.yml` add a post deploy hook

```
# Deploy hook
hooks:
  post-deploy:
    - graphql get-schema -p prisma
```

Replace contents of `server/datamodel.prisma` with

```
type Note {
  id: ID! @id
  createdAt: DateTime! @createdAt
  content: String!
  username: String!
}
```

Create a `server/.graphqlconfig.yml`

```
projects:
  app:
    schemaPath: './src/schema.graphql'
    extensions:
      endpoints:
        default: 'http://localhost:4444/graphql'
  prisma:
    schemaPath: 'src/generated/prisma-client/prisma.graphql'
    extensions:
      prisma: prisma.yml

```

Now you can deploy to your db

`$ yarn deploy`

You can see your db in the Prisma console at https://app.prisma.io/

In `server/.env`

```
PORT=4444
PRISMA_URL=YOUR_PRISMA_DB_GOES_HERE
PRISMA_SECRET='secret'
PLAYGROUND_URL="http://localhost:3000"
GITHUB_TOKEN=YOUR_GITHUB_TOKEN_GOES_HERE
BASE_URL='http://localhost:4444'
```

For `PRISMA_URL` replace with your http endpoint which can be found in your Prisma console or in `server/prisma.yml`

For the `GITHUB_TOKEN` follow the steps here https://developer.github.com/v4/guides/forming-calls/#authenticating-with-graphql Select the `repo, user` scopes.

### Setting up expo

You will need to set up expo

`$ npm install --global expo-cli`

If you want to run the app on your phone you will need to download the expo app.

## Running the app

`$ yarn dev`

You can now visit the app on the ios simulator or on your phone by using the expo app. Some of the features (displaying images and scroll) don't work on the ios simulator. This is a known issue.

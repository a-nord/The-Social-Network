<div align="center">

  <!-- Add badges using the following format: -->
  <!-- ![Name](urlToShieldHere)(urlToGithubHere) -->

[![License: MIT](https://img.shields.io/badge/License-MIT-pink.svg)](https://opensource.org/licenses/MIT)
[![Issues](https://img.shields.io/github/issues/a-nord/the-social-network.svg?style=plastic&logo=appveyor)](https://github.com/a-nord/the-social-network/issues)
[![LinkedIn](https://img.shields.io/badge/-LinkedIn-black.svg?style=plastic&logo=appveyor&logo=linkedin&colorB=555)](https://linkedin.com/in/ashleynord)

</div>

<!-- PROJECT LOGO -->

<div align="center">

  <h3 align="center">The Social Network</h3>

  <p align="center">
    <a href="https://github.com/a-nord/the-social-network"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="#usage">View Demo Video</a>
    ·
    <a href="https://github.com/a-nord/the-social-network/issues">Report Bug</a>
    ·
    <a href="https://github.com/a-nord/the-social-network/issues">Request Feature</a>

  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<!-- Add screenshots using the following format: -->
<!-- ![Screenshot alt description](directPathOfScreenshots) -->

This project was built with MongoDB and is a social network api that has users inputting their thoughts.

### Built With

<div align="center">

[![Javascript](https://img.shields.io/badge/Language-JavaScript-ff0000?style=plastic&logo=JavaScript&logoWidth=10)](https://javascript.info/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-80ff00?style=plastic&logo=MongoDB&logoWidth=10)](https://www.mongodb.com/home)
[![Node.js](https://img.shields.io/badge/Framework-Node.js-ff0000?style=plastic&logo=Node.js&logoWidth=10)](https://nodejs.org/en/)
[![Express](https://img.shields.io/badge/Framework-Express-80ff00?style=plastic&logo=Express&logoWidth=10)](https://expressjs.com/)
[![npm](https://img.shields.io/badge/Tools-npm-ff0000?style=plastic&logo=npm&logoWidth=10)](https://www.npmjs.com/)
[![VS Code](https://img.shields.io/badge/IDE-VSCode-ff0000?style=plastic&logo=VisualStudioCode&logoWidth=10)](https://code.visualstudio.com/docs)

</div>

<!-- GETTING STARTED -->

## Getting Started

Once completely built, this application will function as a social media backend that can be tested locally.

### Local Installation / Testing

1. Clone the rep

```
git clone https://github.com/a-nord/the-social-network.git
```

2. Install dependencies

```
npm run install
```

3. Seed the database

```
npm run seed
```

4. Launch the app in development environment

```
npm run start
```

5. Visit:

[http://localhost:3001/api/](http://localhost:3001/api/)

<!-- USAGE EXAMPLES -->

## Usage

<a href="https://www.loom.com/share/eaaf81c6b92c442b825b406e75483ce2?sid=235d8f72-ae27-4194-b3b7-854c3560b030"><strong>CLICK TO WATCH THE DEMO VIDEO</strong></a>

### Available Routes

#### User Routes

/api/users - Get all users, create user
/api/users/:userId - Get single user, update user, delete user

#### Friend Routes

/api/users/:usertId/friends/:friendId - Add friend, delete friend

#### Thought Routes

/api/thoughts/ - Get all thoughts, create thought
/api/thoughts/:thoughtId - Get single thought, update thought, delete thought

#### Reaction Routes

/api/thoughts/:thoughtId/reactions - Create reaction
/api/thoughts/:thoughtId/reactions/:reactionId - Delete reaction

<!-- ROADMAP -->

## Roadmap

#### MVP

- [x] Back End
  - [x] Skeleton
  - [x] Seeds
  - [x] Read Routes
  - [x] Create Routes
  - [x] Update Routes
  - [x] Delete Routes

#### Future Development

- [ ] Add front end

See the [open issues](https://github.com/a-nord/the-social-network/issues) for a full list of proposed features (and known issues).

<!-- LICENSE -->

## License

This project is licensed under the MIT license.

See LICENSE.txt for more information.

<!-- CONTACT -->

## Contact

[Ashley Nord](https://github.com/a-nord/) - anord99@yahoo.com

Project Link:

[Github Repository](https://github.com/a-nord/the-social-network)

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

I would like to give a big shoutout to our TA, Mary E.  Without her I'd be lost in the middle of the ocean!

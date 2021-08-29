# Devtalk

A devtalk application build with React. Using API [dev-talk-api](https://github.com/jerome-karabenli/dev-talk-REST) created by [Jérome Karabenli](https://github.com/jerome-karabenli) in collaboration with [Benjamin Choron](https://github.com/BenjaminChoron).

> [Nodejs](https://nodejs.org/en/download) with version `>=12.0.0` is **required** to run this project

---

## Content

- [Stack](#stack)
- [Getting started](#getting-started)
  - [Clone repository](#clone-repository)
  - [Install dependencies](#install-dependencies)
  - [Run project](#run-project)
  - [Build project](#build-project)
- [Dependencies](#dependencies)
- [Dev dependencies](#dev-dependencies)
- [Todo](#todo)
- [Contributing](#contributing)
  - [Code of conduct](#code-of-conduct)
  - [Contributing guide](#contributing-guide)
- [License](#license)

---

## Getting started

### Clone repository

```bash
git clone git@github.com:GermainMichaud/devtalk.git
```

### Install dependencies

```bash
cd ./devtalk

npm i
# or
yarn
```

### Run project (development)

```bash
npm run dev
# or
yarn dev
```

### Build project

It will build application in folder `dist`

```bash
npm run build
# or
yarn build
```

---

## Dependencies

| Package           | Version  | Link                                                                                    |
| ----------------- | -------- | --------------------------------------------------------------------------------------- |
| react             | `17.0.2` | [Github](https://github.com/facebook/react)                                             |
| react-dom         | `17.0.2` | [Github](https://github.com/facebook/react/tree/main/packages/react-dom)                |
| react-router-dom  | `5.2.0`  | [Github](https://github.com/remix-run/react-router/tree/main/packages/react-router-dom) |
| react-query       | `3.21.0` | [Github](https://github.com/tannerlinsley/react-query)                                  |
| zustand           | `3.5.10` | [Github](https://github.com/pmndrs/zustand)                                             |
| styled-components | `5.3.1`  | [Github](https://github.com/styled-components/styled-components)                        |
| framer-motion     | `4.1.17` | [Github](https://github.com/framer/motion)                                              |

---

## Dev dependencies

| Package                      | Version | Link                                                                                 |
| ---------------------------- | ------- | ------------------------------------------------------------------------------------ |
| vite                         | `2.5.1` | [Github](https://github.com/vitejs/vite)                                             |
| @vitejs/plugin-react-refresh | `1.3.6` | [NPM](https://github.com/vitejs/vite/tree/main/packages/plugin-react-refresh#readme) |

---

## Todo

- [ ] MVP
  - [x] Initialize project
  - [ ] Create components
    - [x] Login
    - [x] Register
    - [x] Navigation
    - [ ] User Profile
    - [ ] Talks
    - [ ] Comment
    - [ ] ...
  - [x] Add routing
  - [x] Add authentication
  - [ ] Add styling
  - [ ] ...

---

## Contributing

### Code of conduct

### Controbuting guide

---

## License

MIT

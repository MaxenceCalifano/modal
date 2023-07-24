# React Modal

A simple modal build with React

![Static Badge](https://img.shields.io/badge/react-white?style=for-the-badge&logo=react&logoColor=61DAFB&color=181717)


## Features

- Display custom text in a modal
- Close when clicked outside

## Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):

    $ npm install my-modal-maxencec
    $ yarn add my-modal-maxencec

### Usage

The component needs two props: 

|   Props                       |  Types                            | Required             | Default        | Description                               |
|   --------------------------  |  -------------------------------  | --------------------:| -------------: | -----------------------------------------:|
| isOpen                   |  Boolean                   | ✅                   |                | Indicates if the modal shoould be open or closed |
| SetIsOpen                         | Function        |          ✅            |                | Change isOpen state |
| text                         | String        |          ✅            |                | Text displayed by the modal |




```jsx
import { Modal } from "my-modal-maxencec"
import "my-modal-maxencec/dist/style.css"

function App() {

  return (
    <div className="App">
      <Modal isOpen={modalIsOpen} setIsOpen={setModalIsOpen} text="User created!" />
    </div>
  )
}

export default App

```


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://portfolio-maxencecalifano.vercel.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/maxence-califano/)



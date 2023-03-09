export const Data = [
  {
    id: "useState",
    name: "useState( )",
    img: require("../photos/hook_photos/useState_photo.png"),
    short_dec:
      "Components often need to change whats on the screen as a result of an interaction. Typing into a form, adding an item to your cart, even changing from day to night mode should update the result.",
    long_dec:
      " useState is a React hook that allows you to create state variables in functional components 1. Hooks can be used only within functional components, not with class components 12. By using useState in a component, it allows that component to have a dedicated state of its own 1. useState takes an initial state value as an argument and returns an array with two values: the current state and a function to update it 34. The function to update the state can be called with a new value or a function that returns a new value based on the previous state 4. Whenever the setter function is called, React re-renders the component with the updated state value3. Unlike class components, useState can store any type of value, such as string, number, Boolean, array, object, function or custom data types 3. You can also use multiple useState hooks in one component to manage different pieces of state independently 4.",
    codeExample: `
  import logo from "../photos/Logo.png";
  import reactLogo from "../photos react_3d_logo.png";
  import { Link, useParams } from "react-router-dom";

  import SyntaxHighlighter from "react-syntax-highlighter";
  import { docco } from "react-syntax-highlighter/dist/esm styles/hljs";

  export function Details({ Data }) {
  const { id } = useParams();
  const pageInfo = Data.fin((element) => element.id === id);

  const codeString = "(num) => num + 1";

}
  `,
  },
  {
    id: "useEffect",
    name: "useEffect( )",
    img: require("../photos/hook_photos/useEffect_photo.png"),
    short_dec:
      "Components often need to change whats on the screen as a result of an interaction. Typing into the form should update the input field.",
    long_dec:
      " useState is a React hook that allows you to create state variables in functional components 1. Hooks can be used only within functional components, not with class components 12. By using useState in a component, it allows that component to have a dedicated state of its own 1. useState takes an initial state value as an argument and returns an array with two values: the current state and a function to update it 34. The function to update the state can be called with a new value or a function that returns a new value based on the previous state 4. Whenever the setter function is called, React re-renders the component with the updated state value3. Unlike class components, useState can store any type of value, such as string, number, Boolean, array, object, function or custom data types 3. You can also use multiple useState hooks in one component to manage different pieces of state independently 4.",
  },
  {
    id: "useContext",
    name: "useContext( )",
    img: require("../photos/hook_photos/useContext_photo.png"),
    short_dec:
      "Components often need to change whats on the screen as a result of an interaction. Typing into the form should update the input field.",
    long_dec:
      " useState is a React hook that allows you to create state variables in functional components 1. Hooks can be used only within functional components, not with class components 12. By using useState in a component, it allows that component to have a dedicated state of its own 1. useState takes an initial state value as an argument and returns an array with two values: the current state and a function to update it 34. The function to update the state can be called with a new value or a function that returns a new value based on the previous state 4. Whenever the setter function is called, React re-renders the component with the updated state value3. Unlike class components, useState can store any type of value, such as string, number, Boolean, array, object, function or custom data types 3. You can also use multiple useState hooks in one component to manage different pieces of state independently 4.",
  },
];

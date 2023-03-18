import { UseStateHook } from "../components/examples/useState/UseStateHook";

export const Data = [
  {
    id: "useState",
    name: "useState( )",
    img: require("../photos/hook_photos/useState_photo.png"),
    shortDec:
      "Components often need to change whats on the screen as a result of an interaction. Typing into a form, adding an item to your cart, even changing from day to night mode should update the result.",
    dec1: " useState is one of the most important and often used hook",
    dec2: " This handles reactive data, any data that changes in the application is called state, and when the state changes you want React to update the UI so that the latest changes are reflected to the end user.",
    dec3: "useState takes in one optional argument which is the default state. The function then returns an array that you can use within your component. The reason that they are returned in an array is so that we can destructor them with JS to easily assign the values to local variables that we can name whatever we want. ",
    dec4: "The first value is the reactive data (state), if we then reference it in the UI and the state changes, React will automatically update the UI accordingly to show the latest value. ",
    HowDoWe: `How do we update the UI:`,
    HowDoWeExp: `
We can do this by using the setter ( the second value in the array), a simple example of this is shown below:`,

    codeExample: `
export function UseStateHook() {
  const [currentNumber, setCurrentNumber] = useState(0);

  function handelIncrement() {
    setCurrentNumber((prevNumber) => prevNumber + 1);
  }
  function handelDecrement() {
    setCurrentNumber((prevNumber) => prevNumber - 1);
  }
  
  return (
    <div className="useState_container">

      <button className="useState_button" onClick={handelIncrement}>
        <ion-icon name="add-outline"></ion-icon>
      </button>

      <h1 className="useState_number">{currentNumber}</h1>

      <button className="useState_button" onClick={handelDecrement}>
        <ion-icon name="remove-outline"></ion-icon>
      </button>

    </div>
  );
}

  `,
    hookExample: <UseStateHook />,
  },
  {
    id: "useEffect",
    name: "useEffect( )",
    img: require("../photos/hook_photos/useEffect_photo.png"),
    shortDec:
      "Components often need to change whats on the screen as a result of an interaction. Typing into the form should update the input field.",
    long_dec:
      " useState is a React hook that allows you to create state variables in functional components 1. Hooks can be used only within functional components, not with class components 12. By using useState in a component, it allows that component to have a dedicated state of its own 1. useState takes an initial state value as an argument and returns an array with two values: the current state and a function to update it 34. The function to update the state can be called with a new value or a function that returns a new value based on the previous state 4. Whenever the setter function is called, React re-renders the component with the updated state value3. Unlike class components, useState can store any type of value, such as string, number, Boolean, array, object, function or custom data types 3. You can also use multiple useState hooks in one component to manage different pieces of state independently 4.",
  },
  {
    id: "useContext",
    name: "useContext( )",
    img: require("../photos/hook_photos/useContext_photo.png"),
    shortDec:
      "Components often need to change whats on the screen as a result of an interaction. Typing into the form should update the input field.",
    long_dec:
      " useState is a React hook that allows you to create state variables in functional components 1. Hooks can be used only within functional components, not with class components 12. By using useState in a component, it allows that component to have a dedicated state of its own 1. useState takes an initial state value as an argument and returns an array with two values: the current state and a function to update it 34. The function to update the state can be called with a new value or a function that returns a new value based on the previous state 4. Whenever the setter function is called, React re-renders the component with the updated state value3. Unlike class components, useState can store any type of value, such as string, number, Boolean, array, object, function or custom data types 3. You can also use multiple useState hooks in one component to manage different pieces of state independently 4.",
  },
  {
    id: "useRef",
    name: "useRef( )",
    img: require("../photos/hook_photos/useContext_photo.png"),
    shortDec:
      "Components often need to change whats on the screen as a result of an interaction. Typing into the form should update the input field.",
    long_dec:
      " useState is a React hook that allows you to create state variables in functional components 1. Hooks can be used only within functional components, not with class components 12. By using useState in a component, it allows that component to have a dedicated state of its own 1. useState takes an initial state value as an argument and returns an array with two values: the current state and a function to update it 34. The function to update the state can be called with a new value or a function that returns a new value based on the previous state 4. Whenever the setter function is called, React re-renders the component with the updated state value3. Unlike class components, useState can store any type of value, such as string, number, Boolean, array, object, function or custom data types 3. You can also use multiple useState hooks in one component to manage different pieces of state independently 4.",
  },
  {
    id: "useReducer",
    name: "useReducer( )",
    img: require("../photos/hook_photos/useContext_photo.png"),
    shortDec:
      "Components often need to change whats on the screen as a result of an interaction. Typing into the form should update the input field.",
    long_dec:
      " useState is a React hook that allows you to create state variables in functional components 1. Hooks can be used only within functional components, not with class components 12. By using useState in a component, it allows that component to have a dedicated state of its own 1. useState takes an initial state value as an argument and returns an array with two values: the current state and a function to update it 34. The function to update the state can be called with a new value or a function that returns a new value based on the previous state 4. Whenever the setter function is called, React re-renders the component with the updated state value3. Unlike class components, useState can store any type of value, such as string, number, Boolean, array, object, function or custom data types 3. You can also use multiple useState hooks in one component to manage different pieces of state independently 4.",
  },
  {
    id: "useMemo",
    name: "useMemo( )",
    img: require("../photos/hook_photos/useContext_photo.png"),
    shortDec:
      "Components often need to change whats on the screen as a result of an interaction. Typing into the form should update the input field.",
    long_dec:
      " useState is a React hook that allows you to create state variables in functional components 1. Hooks can be used only within functional components, not with class components 12. By using useState in a component, it allows that component to have a dedicated state of its own 1. useState takes an initial state value as an argument and returns an array with two values: the current state and a function to update it 34. The function to update the state can be called with a new value or a function that returns a new value based on the previous state 4. Whenever the setter function is called, React re-renders the component with the updated state value3. Unlike class components, useState can store any type of value, such as string, number, Boolean, array, object, function or custom data types 3. You can also use multiple useState hooks in one component to manage different pieces of state independently 4.",
  },
  {
    id: "useCallback",
    name: "useCallback( )",
    img: require("../photos/hook_photos/useContext_photo.png"),
    shortDec:
      "Components often need to change whats on the screen as a result of an interaction. Typing into the form should update the input field.",
    long_dec:
      " useState is a React hook that allows you to create state variables in functional components 1. Hooks can be used only within functional components, not with class components 12. By using useState in a component, it allows that component to have a dedicated state of its own 1. useState takes an initial state value as an argument and returns an array with two values: the current state and a function to update it 34. The function to update the state can be called with a new value or a function that returns a new value based on the previous state 4. Whenever the setter function is called, React re-renders the component with the updated state value3. Unlike class components, useState can store any type of value, such as string, number, Boolean, array, object, function or custom data types 3. You can also use multiple useState hooks in one component to manage different pieces of state independently 4.",
  },
  {
    id: "useLayoutEffect",
    name: "useLayoutEffect( )",
    img: require("../photos/hook_photos/useContext_photo.png"),
    shortDec:
      "Components often need to change whats on the screen as a result of an interaction. Typing into the form should update the input field.",
    long_dec:
      " useState is a React hook that allows you to create state variables in functional components 1. Hooks can be used only within functional components, not with class components 12. By using useState in a component, it allows that component to have a dedicated state of its own 1. useState takes an initial state value as an argument and returns an array with two values: the current state and a function to update it 34. The function to update the state can be called with a new value or a function that returns a new value based on the previous state 4. Whenever the setter function is called, React re-renders the component with the updated state value3. Unlike class components, useState can store any type of value, such as string, number, Boolean, array, object, function or custom data types 3. You can also use multiple useState hooks in one component to manage different pieces of state independently 4.",
  },
  {
    id: "useDebugValue",
    name: "useDebugValue( )",
    img: require("../photos/hook_photos/useContext_photo.png"),
    shortDec:
      "Components often need to change whats on the screen as a result of an interaction. Typing into the form should update the input field.",
    long_dec:
      " useState is a React hook that allows you to create state variables in functional components 1. Hooks can be used only within functional components, not with class components 12. By using useState in a component, it allows that component to have a dedicated state of its own 1. useState takes an initial state value as an argument and returns an array with two values: the current state and a function to update it 34. The function to update the state can be called with a new value or a function that returns a new value based on the previous state 4. Whenever the setter function is called, React re-renders the component with the updated state value3. Unlike class components, useState can store any type of value, such as string, number, Boolean, array, object, function or custom data types 3. You can also use multiple useState hooks in one component to manage different pieces of state independently 4.",
  },
];

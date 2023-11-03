import "./App.css";
import ChatBot from "react-simple-chatbot";
// import { ThemeProvider } from "styled-components";

// const steps = [
//   {
//     id: "0",
//     message: "Hey Geek!",

//     // This calls the next id
//     // i.e. id 1 in this case
//     trigger: "1",
//   },
//   {
//     id: "1",

//     // This message appears in
//     // the bot chat bubble
//     message: "Please write your username",
//     trigger: "2",
//   },
//   {
//     id: "2",

//     // Here we want the user
//     // to enter input
//     user: true,
//     trigger: "3",
//   },
//   {
//     id: "3",
//     message: " hi {previousValue}, how can I help you?",
//     trigger: 4,
//   },
//   {
//     id: "4",
//     options: [
//       // When we need to show a number of
//       // options to choose we create a list
//       // like this
//       { value: 1, label: "View Courses" },
//       { value: 2, label: "Read Articles" },
//     ],
//     end: true,
//   },
// ];

// // Creating our own theme
// const theme = {
//   background: "#C9FF8F",
//   headerBgColor: "#197B22",
//   headerFontSize: "20px",
//   botBubbleColor: "#0F3789",
//   headerFontColor: "white",
//   botFontColor: "white",
//   userBubbleColor: "#FF5733",
//   userFontColor: "white",
// };

// // Set some properties of the bot
// const config = {
//   botAvatar: "img.png",
//   floating: true,
// };

function App() {
  // const greetingTrigger = {
  //   id: "0",
  //   // message: "heeeeey",
  //   options: [
  //     { value: "hello", label: "Hello", trigger: "greetingMessage" },
  //     { value: "hi", label: "Hi", trigger: "greetingMessage" },
  //     { value: "hey", label: "Hey", trigger: "greetingMessage" },
  //   ],
  //   // trigger: "greetingMessage",
  // };

  const steps = [
    {
      id: "start",
      options: [
        { value: "hello", label: "Hello", trigger: "1" },
        { value: "hi", label: "Hi", trigger: "1" },
        { value: "hey", label: "Hey", trigger: "1" },
      ],
    },

    {
      id: "1",
      message: "Please write your username",
      trigger: "2",
    },
    {
      id: "2",
      user: true,
      trigger: "3",
    },
    {
      id: "3",
      message: " Hi {previousValue}, how can I help you?",
      trigger: "4",
    },
    {
      id: "4",
      options: [
        { value: 1, label: "View Courses", trigger: 5 },
        { value: 2, label: "Read Articles", trigger: 6 },
      ],
    },
    {
      id: "5",
      message: "Here are the available courses: 4",
      trigger: "end",
    },
    {
      id: "6",
      message: "Here are the available courses: 5",
      trigger: "end",
    },
    {
      id: "end",
      message: "Thank you for using my chatbot!",
      end: true,
    },
  ];

  // const greetingMessage = {
  //   id: "greetingMessage",
  //   message: "Hi there!",
  //   end: true,
  //   trigger: "flightBookingTrigger",
  // };

  // const flightBookingTrigger = {
  //   id: "flightBooking",
  //   trigger: "flightBookingMessage",
  //   options: [
  //     {
  //       value: "book a flight",
  //       label: "Book a flight",
  //       trigger: "flightBookingMessage",
  //     },
  //   ],
  // };

  // const flightBookingMessage = {
  //   id: "flightBookingMessage",
  //   message: "Great, let's get started with your flight booking!",
  //   end: true,
  //   // Implement logic to show a flight booking form here
  // };

  // const fallbackTrigger = {
  //   id: "fallback",
  //   trigger: "fallbackMessage",
  //   options: [
  //     { value: "fallback", label: "Fallback", trigger: "fallbackMessage" },
  //   ],
  // };

  // const fallbackMessage = {
  //   id: "fallbackMessage",
  //   message: "I'm sorry, I don't understand. Can you try again?",
  //   end: true,
  // };

  // const steps = [
  //   greetingTrigger,
  //   greetingMessage,
  //   flightBookingTrigger,
  //   flightBookingMessage,
  //   fallbackTrigger,
  //   fallbackMessage,
  // ];

  return (
    <ChatBot
      steps={steps}
      floating={true}
      headerTitle="CIIT"
      recognitionEnable={true}
      placeholder="Type your message here..."
    />

    // <div className="App">
    //   <ThemeProvider theme={theme}>
    //     <ChatBot
    //       // This appears as the header
    //       // text for the chat bot
    //       headerTitle="GeekBot"
    //       steps={steps}
    //       {...config}
    //     />
    //   </ThemeProvider>
    // </div>
  );
}

export default App;

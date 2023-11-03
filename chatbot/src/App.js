import "./App.css";
import ChatBot from "react-simple-chatbot";

function App() {
  const steps = [
    {
      id: "0",
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
      delay: 500,
      trigger: "end",
    },
    {
      id: "end",
      message: "Thank you for using my chatbot!",
      end: true,
    },
  ];

  return (
    <ChatBot
      steps={steps}
      floating={true}
      headerTitle="CIIT"
      recognitionEnable={true}
      placeholder="Type your message here..."
    />
  );
}

export default App;

import MessageBubble from "./MessageBubble";

const demoMessages = [
  {
    sender: "assistant",
    message:
      "Hello! 🌸 I'm your AI Women's Health Assistant. Ask me anything related to women's health.",
  },
];

export default function ChatWindow() {
  return (
    <div className="bg-pink-50 rounded-3xl p-6 mt-6 space-y-4 h-[450px] overflow-y-auto">
      {demoMessages.map((msg, index) => (
        <MessageBubble
          key={index}
          sender={msg.sender}
          message={msg.message}
        />
      ))}
    </div>
  );
}
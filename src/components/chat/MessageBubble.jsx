export default function MessageBubble({
  sender,
  message,
}) {
  const isUser = sender === "user";

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-xl px-5 py-4 rounded-3xl shadow-sm ${
          isUser
            ? "bg-pink-500 text-white"
            : "bg-white"
        }`}
      >
        {message}
      </div>
    </div>
  );
}
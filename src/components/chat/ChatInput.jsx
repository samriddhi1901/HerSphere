import { Send, Mic } from "lucide-react";

export default function ChatInput() {
  return (
    <div className="mt-6 bg-white rounded-2xl shadow-sm flex items-center p-3 gap-3">
      <input
        type="text"
        placeholder="Ask your health question..."
        className="flex-1 outline-none px-3"
      />

      <button className="p-2 rounded-full hover:bg-gray-100">
        <Mic />
      </button>

      <button className="bg-pink-500 text-white p-3 rounded-xl hover:bg-pink-600 transition">
        <Send size={18} />
      </button>
    </div>
  );
}
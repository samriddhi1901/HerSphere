import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

import ChatHeader from "../components/chat/ChatHeader";
import SuggestedQuestions from "../components/chat/SuggestedQuestions";
import ChatWindow from "../components/chat/ChatWindow";
import ChatInput from "../components/chat/ChatInput";

export default function Chat() {
  return (
    <div className="min-h-screen bg-pink-50 flex">

      <Sidebar />

      <main className="flex-1 p-8">

        <Topbar />

        <div className="mt-8">

          <ChatHeader />

          <SuggestedQuestions />

          <ChatWindow />

          <ChatInput />

        </div>

      </main>

    </div>
  );
}
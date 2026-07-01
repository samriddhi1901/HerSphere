import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import StatsCards from "../components/dashboard/StatsCards";
import AIRecommendation from "../components/dashboard/AIRecommendation";
import HealthChecklist from "../components/dashboard/HealthChecklist";
import WaterTracker from "../components/dashboard/WaterTracker";
import ReminderCard from "../components/dashboard/ReminderCard";
import RecentActivity from "../components/dashboard/RecentActivity";
export default function Dashboard() {
  return (
    <div className="min-h-screen flex bg-pink-50">

      <Sidebar />

      <main className="flex-1 p-8">

        <Topbar />

        <div className="space-y-6 mt-8">

          <WelcomeBanner />

          <StatsCards />

          <AIRecommendation />

          <div className="grid lg:grid-cols-2 gap-6">

            <HealthChecklist />

            <WaterTracker />
            </div>
          <div className="grid lg:grid-cols-2 gap-6">
         <ReminderCard />
         <RecentActivity />
          </div>

        </div>

      </main>

    </div>
  );
}
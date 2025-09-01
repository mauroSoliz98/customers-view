import { IntroSection, Header, CostumersSection, MetricCard } from "./components/costumers-components";
import { BiRocket, BiCheckShield, BiBarChartAlt } from "react-icons/bi"
import { hrProfetionals, hiringManagers } from "./const";

function App() {

  return (
    <div className="min-h-screen w-full flex flex-col dark:bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-gray-900 dark:text-gray-300 transition-colors duration-500">
      <Header />
      <main className="flex-1 overflow-hidden">
        <div className="h-full container mx-auto px-4 flex items-center">
          <div className="max-w-4xl mx-auto py-8">
            <IntroSection />
            <div className="flex gap-4">
              <MetricCard
                title="Average Savings per Hire"
                value="$1,200+"
                icon={<BiBarChartAlt/>}
                color="blue"
              />
              <MetricCard
                title="Faster Hiring Speed"
                value="2.5x faster"
                icon={<BiRocket />}
                color="purple"
              />
              <MetricCard
                title="Bias-Free Evaluation"
                value="100%"
                icon={<BiCheckShield />}
                color="green"
              />
            </div>
            <CostumersSection title="HR Professionals" img_path={hrProfetionals} />
            <CostumersSection title="Hiring Managers" img_path={hiringManagers} />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App

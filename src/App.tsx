import { useEffect, useState } from "react";
import { Quest } from "./components/Quest";
import type { QuestType } from "./types/QuestType";

function App() {
  const [quests, setQuests] = useState<QuestType[]>();
  useEffect(() => {
    const fetchQuests = async () => {
      const response = await fetch("http://localhost:3000/quests");
      const data = await response.json();

      setQuests(data);
    };

    fetchQuests();
  }, []);

  return (
    <div className="container">
      <div className="quest">
        <h1 className="quest__title">Quest</h1>

        <div className="quest__wrapper">
          {quests?.map((quest) => (
            <Quest quest={quest} key={quest.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

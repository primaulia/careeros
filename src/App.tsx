import { useEffect, useState } from "react";
import "./App.scss";
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
      <h1>Quest</h1>

      <ul>
        {quests?.map((quest) => (
          <Quest quest={quest} key={quest.id} />
        ))}
      </ul>
    </div>
  );
}

export default App;

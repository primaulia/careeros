import { QuestType } from "../types/QuestType";

export const Quest = ({ quest }: { quest: QuestType }) => {
  return (
    <div className="quest">
      <h1>{quest.type}</h1>
    </div>
  );
};

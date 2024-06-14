import { QuestType } from "../types/QuestType";
import "./Quest.scss";

export const Quest = ({ quest }: { quest: QuestType }) => {
  return (
    <div className="card">
      <div>
        <h3 className="card__title">{quest.type}</h3>
        <p className="card__description">
          Unlock the superpowers of CareerOS with our Chrome Extension. This
          plugin lets you save companies, contacts, and jobs from Linkedin and
          other job boards. It also lets you access our messaging template and
          send Linkedin messages directly from CareerOS.
        </p>
      </div>
    </div>
  );
};

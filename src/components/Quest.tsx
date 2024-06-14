import { QuestType } from "../types/QuestType";
import "./Quest.scss";

import install_extension from "../images/install_extension.png";
import todo from "../images/todo.png";

const ActionButton = ({ type }: { type: string }) => {
  if (type.includes("install")) {
    return (
      <button className="card__action card__action--install">Install </button>
    );
  }

  return (
    <a
      onClick={() => {
        console.log("click todo link");
      }}
    >
      <img
        className="card__action card__action--todolink"
        src={todo}
        alt="Todo link"
      />
    </a>
  );
};

export const Quest = ({ quest }: { quest: QuestType }) => {
  return (
    <div className="card">
      <img className="card__icon" src={install_extension} alt="Test" />
      <div>
        <h3 className="card__title">{quest.type}</h3>
        <p className="card__description">
          Unlock the superpowers of CareerOS with our Chrome Extension. This
          plugin lets you save companies, contacts, and jobs from Linkedin and
          other job boards. It also lets you access our messaging template and
          send Linkedin messages directly from CareerOS.
        </p>
      </div>
      <ActionButton type={quest.type} />
    </div>
  );
};

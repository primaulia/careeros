import { QuestType } from "../types/QuestType";
import "./Quest.scss";

import todo from "../images/todo.png";
import installIcon from "../images/installIcon.png";
import { parser } from "../utils/dataParser";

const ActionButton = ({ type, link }: { type: string; link: string }) => {
  if (type.includes("install")) {
    return (
      <button className="card__action card__action--install">
        Install{" "}
        <img
          className="card__action--installIcon"
          src={installIcon}
          alt="install icon"
        />
      </button>
    );
  }

  return (
    <a href={link}>
      <img src={todo} alt="Todo link" />
    </a>
  );
};

export const Quest = ({ quest }: { quest: QuestType }) => {
  const parsedData = parser(quest);

  return (
    <div className="card">
      <img className="card__icon" src={parsedData!.icon} alt="Test" />
      <div className="card__content">
        <h3 className="card__title">{parsedData!.title}</h3>
        <p className="card__description">{parsedData!.description}</p>
      </div>
      <ActionButton type={quest.type} link={parsedData!.link} />
    </div>
  );
};

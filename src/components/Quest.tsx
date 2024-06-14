import { QuestType } from "../types/QuestType";
import "./Quest.scss";

import todo from "../images/todo.png";
import installIcon from "../images/installIcon.png";
import check from "../images/check.png";
import cross from "../images/cross.png";

import { parser } from "../utils/dataParser";

const NavigationButtons = () => {
  return (
    <div className="card__nav-buttons">
      <img
        src={check}
        alt="check icon"
        className="card__nav-button card__nav-button--check"
      />
      <img src={cross} alt="cross icon" className="card__nav-button" />
    </div>
  );
};

const ActionButton = ({ type, link }: { type: string; link: string }) => {
  if (type.includes("install")) {
    return (
      <a href={link} className="card__action card__action--install">
        Install{" "}
        <img
          className="card__action--installIcon"
          src={installIcon}
          alt="install icon"
        />
      </a>
    );
  }

  return (
    <a href={link}>
      <img src={todo} alt="Todo link" className="card__action--linkIcon" />
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
      <div>
        <NavigationButtons />
        <ActionButton type={quest.type} link={parsedData!.link} />
      </div>
    </div>
  );
};

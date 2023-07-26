/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import "./App.css";

import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        // projectId={import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID}
        projectId={"36100285-ed0f-4b51-b704-3b27a598708c"}
        username={props.user.username}
        secret={props.user.secret}
        style={{ font: 'Kollektif'}}
      />
    </div>
  );
};

export default ChatsPage;
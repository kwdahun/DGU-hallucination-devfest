import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as S from "./GameMainPage.styles";
import InfoModal from "../../components/gameMain/Modal/InfoModal";
import GuideModal from "../../components/gameMain/Modal/GuideModal";
import ChoiceModal from "../../components/gameMain/Modal/ChoiceModal";
import AgentProfile from "../../components/common/AgentProfile/AgentProfile";
import ResultModal from "../../components/gameMain/Modal/ResultModal";
import { updateChat, clearChat, updateZIndex } from "../../redux/gameSlice";

function GameMainPage() {
  const dispatch = useDispatch();
  const agents = useSelector((state) => state.game.agents);
  const currentRound = useSelector((state) => state.game.currentRound);
  const category = useSelector((state) => state.game.category);
  const remainingChats = useSelector((state) => state.game.remainingChats);

  const [infoModalState, setInfoModalState] = useState(true);
  const [choiceModalState, setChoiceModalState] = useState(false);
  const [selectedAgentName, setSelectedAgentName] = useState("");
  const [resultModalState, setResultModalState] = useState(false);

  const agentPick = () => {
    setChoiceModalState(false);
    setResultModalState(true);
  };
  const handleAgentClick = (agentId) => {
    dispatch(updateZIndex({ agentId }));
    dispatch(updateChat({ agentId, message: "test123" }));

    setTimeout(() => {
      dispatch(clearChat({ agentId }));
    }, 3000);
  };

  return (
    <>
      <S.Container>
        {infoModalState && (
          <InfoModal
            modalState={infoModalState}
            setModalState={setInfoModalState}
          />
        )}
        <S.TopLayout>
          <S.Title>Round {currentRound}</S.Title>
          <S.Subtitle>카테고리: {category}</S.Subtitle>
        </S.TopLayout>
        <S.Description>
          모든 캐릭터의 소개를 듣고 누가 거짓말을 하고 있는 <br />
          라이전트인지 맞혀보세요!
        </S.Description>
        <S.GridWrapper>
          <S.GridLayout>
            {agents.map((agent, idx) => (
              <AgentProfile
                key={agent.id}
                agentName={agent.name}
                imgSrc={agent.image}
                // onClick={() => {
                //   setChoiceModalState(true);
                //   setSelectedAgentName(agent.name);
                // }}
                currentChat={agent.currentChat}
                agentIdx={idx}
                onClick={() => handleAgentClick(agent.id)}
                zIndex={agent.zIndex}
              />
            ))}
          </S.GridLayout>
        </S.GridWrapper>
        {choiceModalState && (
          <ChoiceModal
            modalState={choiceModalState}
            setModalState={setChoiceModalState}
            onPick={agentPick}
            name={selectedAgentName}
          />
        )}
        {resultModalState && (
          <ResultModal
            modalState={resultModalState}
            setModalState={setResultModalState}
            result="success"
            name={selectedAgentName}
          />
        )}

        <S.BottomLayout>
          <S.BottomContent>채팅 횟수: {remainingChats}회</S.BottomContent>
          <S.InfoIcon
            src="/infoIcon.svg"
            alt="info"
            onClick={() => setInfoModalState(true)}
          />
        </S.BottomLayout>
      </S.Container>
    </>
  );
}

export default GameMainPage;

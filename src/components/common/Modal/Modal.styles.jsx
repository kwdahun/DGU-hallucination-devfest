import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  display: flex;
  padding: 26px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  max-width: 300px;
  border-radius: 10px;
  position: relative;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Title = styled.h1`
  color: black;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  word-break: keep-all;
`;

export const Content = styled.div`
  text-align: center;
  line-height: 150%;
  word-break: keep-all;
  font-size: 16px;
`;

export const Button = styled.button`
  display: flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.indigo1};
  border: none;
  color: white;
`;

export const SpecialTitle = styled.h1`
  font-size: 22px;
  font-weight: bold;
  font-family: "Press Start 2P";
  border: 5px;
  border-color: black;
  color: #ffde5b;
  text-shadow: -2.5px -2.5px 0 black, 2.5px -2.5px 0 black, -2.5px 2.5px 0 black,
    2.5px 2.5px 0 black;
`;

export const CloseButton = styled.img`
  position: absolute;
  top: 10px;
  right: 12px;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

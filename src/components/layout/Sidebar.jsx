import { useState } from "react";
import styled from "styled-components";

const Wrap = styled.aside`
  width: 140px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
`;

const Item = styled.button`
  width: 120px;
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;
  gap: 15px;

  border-radius: 30px;
  border: none;

  background: ${({ $active }) => ($active ? "#6DD49E" : "transparent")};
  cursor: pointer;

  transition: background 180ms ease;

  &:hover {
    background: ${({ $active }) =>
      $active ? "#6DD49E" : "rgba(109, 212, 158, 0.2)"};
  }
`;

const StepContainer = styled.div`
  width: 98px;
  height: 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 24px;

  font-family: "Noto Sans KR", sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;

  color: ${({ $active }) => ($active ? "#FFFFFF" : "#DCD4CF")};
`;

const items = [
  { id: "step1", left: "STEP.1", right: "홈" },
  { id: "step2", left: "STEP.2", right: "신청" },
  { id: "step3", left: "STEP.3", right: "이벤트" },
  { id: "step4", left: "STEP.4", right: "상품" },
  { id: "step5", left: "STEP.5", right: "약관" },
];

export default function Sidebar() {
  const [activeId, setActiveId] = useState("step1");

  return (
    <Wrap>
      {items.map((it) => (
        <Item
          $active={activeId === it.id}
          onClick={() => setActiveId(it.id)}
          >
          <StepContainer>
              <ItemText $active={activeId === it.id}>
              {it.left}
              </ItemText>
              <ItemText $active={activeId === it.id}>
              {it.right}
              </ItemText>
          </StepContainer>
        </Item>
      ))}
    </Wrap>
  )
}
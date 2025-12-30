import { useState } from "react";
import styled from "styled-components";

import Notice from "@/components/icons/Notice";
import Note from "@/components/icons/Note";
import People from "@/components/icons/People";
import Setting from "@/components/icons/Setting";

const Wrap = styled.aside`
  width: 140px;
  height: 562px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 10px;
  gap: 10px;

  border-radius: 0 10px 0 0;
`;

const Item = styled.button`
  width: 120px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px;
  gap: 15px;

  border-radius: 30px;
  border: none;

  background: ${({ $active }) =>
    $active ? "#6DD49E" : "transparent"};

  cursor: pointer;
  transition: background 0.18s ease;

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

const Text = styled.span`
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: ${({ $active }) =>
    $active ? "#FFFFFF" : "#DCD4CF"};

  transition: color 0.18s ease;
`;

const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg path {
    fill: ${({ $active }) =>
      $active ? "#FFFFFF" : "#DCD4CF"};
    transition: fill 0.18s ease;
  }
`;

const Spacer = styled.div`
  height: 20px;
`;

const Line = styled.div`
  width: 100px;
  height: 1px;
  background: #d9d9d9;
  border-radius: 50px;
`;

const steps = [
  { id: "step1", left: "STEP.1", right: "홈" },
  { id: "step2", left: "STEP.2", right: "신청" },
  { id: "step3", left: "STEP.3", right: "이벤트" },
  { id: "step4", left: "STEP.4", right: "상품" },
  { id: "step5", left: "STEP.5", right: "약관" },
];

const iconItems = [
  { id: "people", label: "인원", icon: People },
  { id: "note", label: "노트", icon: Note },
  { id: "notice", label: "공지", icon: Notice },
  { id: "setting", label: "설정", icon: Setting },
];

/* ---------------- component ---------------- */

export default function Sidebar() {
  const [activeId, setActiveId] = useState("step1");

  return (
    <Wrap>
      {/* STEP 영역 */}
      {steps.map((it) => (
        <Item
          key={it.id}
          $active={activeId === it.id}
          onClick={() => setActiveId(it.id)}
        >
          <StepContainer>
            <Text $active={activeId === it.id}>{it.left}</Text>
            <Text $active={activeId === it.id}>{it.right}</Text>
          </StepContainer>
        </Item>
      ))}

      {/* spacer */}
      <Spacer />
      <Line />
      <Spacer />

      {/* ICON 영역 */}
      {iconItems.map((it) => {
        const Icon = it.icon;
        const active = activeId === it.id;

        return (
          <Item
            key={it.id}
            $active={active}
            onClick={() => setActiveId(it.id)}
          >
            <IconWrap $active={active}>
              <Icon />
            </IconWrap>
            <Text $active={active}>{it.label}</Text>
          </Item>
        );
      })}
    </Wrap>
  );
}

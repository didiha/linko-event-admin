import { useState } from "react";
import {
  Wrapper,
  TabBar,
  TabItem,
  IndicatorBar,
  Indicator,
  BottomPadding,
} from "./EventContentTab.styles";

export default function EventContentTab() {
  const [active, setActive] = useState("apply"); // apply | content

  return (
    <Wrapper>
      <TabBar>
        <TabItem
          active={active === "apply"}
          onClick={() => setActive("apply")}
        >
          참가 신청
        </TabItem>

        <TabItem
          active={active === "content"}
          onClick={() => setActive("content")}
        >
          대회 내용
        </TabItem>
      </TabBar>

      <IndicatorBar>
        <Indicator active={active === "apply"} />
        <Indicator active={active === "content"} />
      </IndicatorBar>

      <BottomPadding />
    </Wrapper>
  );
}

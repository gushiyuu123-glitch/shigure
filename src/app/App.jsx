import { useState } from "react";
import useSeason from "./useSeason";
import SeasonBackground from "../components/SeasonBackground";

/* =====================
   Sections
===================== */
import PcNav from "../sections/PcNav";
import Hero from "../sections/Hero";
import Concept from "../sections/Concept";
import Stay from "../sections/Stay";
import Cuisine from "../sections/Cuisine";
import Onsen from "../sections/Onsen";
import Location from "../sections/Location";
import Closing from "../sections/Closing";
import Reservation from "../sections/Reservation";
import Footer from "../sections/Footer";


/* =====================
   Spacers
===================== */
import SectionSpacer from "../components/SectionSpacer";
import SpacerY from "../components/SpacerY.jsx";

export default function App() {
  const [season, setSeason] = useState("spring");
  useSeason(setSeason);

  return (
    <>
    <PcNav />
      {/* =====================
          Hero｜導入
      ===================== */}
      <Hero />

      {/* Hero直後の余韻（重要） */}
      {/* <SpacerY size="sm" /> */}

      {/* 四季の背景（全体レイヤー） */}
      <SeasonBackground season={season} />

      {/* =====================
          Concept｜春
      ===================== */}
      <SectionSpacer
        title="この宿について"
        variant="strong"
        direction="horizontal"
      />

      <SpacerY size="sm" />
      <Concept />

      {/* =====================
          Stay｜夏
      ===================== */}
      <SectionSpacer
        title="客室"
        variant="strong"
        direction="horizontal"
      />

      <SpacerY size="md" />
      <Stay data-season="summer" />

      {/* =====================
          Cuisine｜秋
      ===================== */}
      <SectionSpacer
        title="食事"
        variant="strong"
        direction="horizontal"
      />

      <SpacerY size="lg" />
      <Cuisine data-season="autumn" />

      {/* =====================
          Onsen｜秋〜冬（最重要）
      ===================== */}
      <SectionSpacer
        title="温泉"
        variant="strong"
        direction="horizontal"
      />

      {/* 無音ゾーンを作ってから入る */}
      <SpacerY size="lg" />
      <Onsen data-season="autumn" />

      {/* ▼ Onsen後の余韻逃がし（超重要） */}
      <div className="h-[18vh] md:h-[26vh]" />

      {/* =====================
          Location｜冬（世界の再提示）
      ===================== */}
      <SectionSpacer
        title="場所"
        variant="strong"
        direction="horizontal"
      />

      {/* 帯直後の呼吸 */}
      <div className="h-[14vh] md:h-[18vh]" />

      <SpacerY size="lg" />
      <Location data-season="winter" />

      {/* =====================
          Closing & Reservation
      ===================== */}
      <Closing data-season="winter" />
      <Reservation />


      <Footer />
    </>
  );
}

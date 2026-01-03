import { useState } from "react";
import useSeason from "./useSeason";
import SeasonBackgroundSp from "../components/SeasonBackgroundSp";

/* =====================
   Sections（SP）
===================== */
import NavSp from "../sections/NavSp";
import HeroSp from "../sections/HeroSp";
import ConceptSp from "../sections/ConceptSp";
import StaySp from "../sections/StaySp";
import CuisineSp from "../sections/CuisineSp";
import OnsenSp from "../sections/OnsenSp";
import LocationSp from "../sections/LocationSp";
import ClosingSp from "../sections/ClosingSp";
import ReservationSp from "../sections/ReservationSp";
import FooterSp from "../sections/FooterSp";

/* =====================
   Spacers（SP用に軽量化）
===================== */
import SectionSpacerSp from "../components/SectionSpacerSp";
import SpacerY from "../components/SpacerY.jsx";



export default function AppSp() {
  const [season, setSeason] = useState("spring");
  useSeason(setSeason);

  return (
    <>
       <NavSp />
      {/* =====================
          Hero｜導入（SP）
      ===================== */}
      <HeroSp />

      {/* 四季の背景（全体レイヤー） */}
      <SeasonBackgroundSp season={season} />

      {/* =====================
          Concept｜春
      ===================== */}
      <SectionSpacerSp title="この宿について" />

      <SpacerY size="sm" />
      <ConceptSp />

      {/* =====================
          Stay｜夏
      ===================== */}
      <SectionSpacerSp title="客室" />

      <SpacerY size="md" />
      <StaySp data-season="summer" />

      {/* =====================
          Cuisine｜秋
      ===================== */}
      <SectionSpacerSp title="食事" />

      <SpacerY size="md" />
      <CuisineSp data-season="autumn" />

      {/* =====================
          Onsen｜秋〜冬（最重要）
      ===================== */}
      <SectionSpacerSp title="温泉" />

      {/* 無音ゾーン */}
      <SpacerY size="lg" />
      <OnsenSp data-season="autumn" />

      {/* 余韻逃がし（SPは短め） */}
      <div className="h-[14vh]" />

      {/* =====================
          Location｜冬
      ===================== */}
      <SectionSpacerSp title="場所" />

      <SpacerY size="md" />
      <LocationSp data-season="winter" />

      {/* =====================
          Closing & Reservation
      ===================== */}
      <ClosingSp data-season="winter" />
      <ReservationSp />

      <FooterSp />
    </>
  );
}

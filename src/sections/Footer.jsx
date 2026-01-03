export default function Footer() {
  return (
    <footer
      className="
        relative
        px-[6vw]
        py-[12vh]
        text-center
      "
    >
      {/* 区切り */}
      <div className="mb-[6vh] h-[1px] bg-[rgba(0,0,0,0.08)] mx-auto w-[4rem]" />

      {/* 宿名 */}
      <p
        className="
          text-[0.8rem]
          tracking-[0.36em]
          text-[rgba(26,26,26,0.75)]
          mb-[1.6rem]
        "
      >
        時雨
      </p>

      {/* 基本情報 */}
      <p
        className="
          text-[0.65rem]
          leading-[2.4]
          tracking-[0.22em]
          text-[rgba(26,26,26,0.55)]
        "
      >
        〒000-0000<br />
        ◯◯県◯◯市◯◯町 1-2-3<br />
        TEL 000-0000-0000
      </p>

      {/* コピーライト */}
      <p
        className="
          mt-[6vh]
          text-[0.55rem]
          tracking-[0.28em]
          text-[rgba(26,26,26,0.4)]
        "
      >
        © SHIGURE
      </p>

      {/* 制作クレジット（ほぼ不可視） */}
      <p
        className="
          mt-[2.2rem]
          text-[0.5rem]
          tracking-[0.22em]
          text-[rgba(26,26,26,0.25)]
        "
      >
        <a
          href="https://gushikendesign.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            transition-opacity
            hover:opacity-60
          "
        >
          crafted quietly by GUSHIKEN DESIGN
        </a>
      </p>
    </footer>
  );
}

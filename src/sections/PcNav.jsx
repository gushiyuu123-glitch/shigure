export default function PcNav() {
  return (
    <div
      className="
        fixed
        bottom-[6vh]
        right-[6vw]
        z-40
        hidden md:block
      "
    >
      <a
        href="/reserve"
        className="
          font-serif
          text-[0.65rem]
          tracking-[0.32em]
          text-[rgba(40,40,40,0.55)]
          transition-opacity
          hover:opacity-80
        "
      >
        日程を確認する
      </a>
    </div>
  );
}

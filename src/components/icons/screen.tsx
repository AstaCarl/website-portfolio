type ScreenProps = {
  screenshot: string;
  alt?: string;
};

export default function Screen({ screenshot, alt }: ScreenProps) {
  return (
    <div style={{ position: "relative", width: "746px", }}>
      <img
        src={screenshot}
        alt={alt}
        style={{
          position: "absolute",
          top: "2%",
          left: "1%",
          width: "98%",
          height: "70%",
          objectFit: "cover",
          borderRadius: "8px",
          zIndex: 0,
        }}
      />
      <svg
        className="h-fit"
        width="746"
        height="613.72"
        viewBox="0 0 485 399"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "relative", zIndex: 1 }}
      >
        <rect
          x="3"
          y="3"
          width="479"
          height="312"
          rx="7"
          stroke="#404254"
          stroke-width="6"
        />
        <path
          d="M0 287H485V308C485 313.523 480.523 318 475 318H10C4.47715 318 0 313.523 0 308V287Z"
          fill="#404254"
        />
        <path d="M233.5 318H270.5L278 376H226L233.5 318Z" fill="#404254" />
        <path
          d="M184 386C184 380.477 188.477 376 194 376H311C316.523 376 321 380.477 321 386V397C321 398.105 320.105 399 319 399H186C184.895 399 184 398.105 184 397V386Z"
          fill="var(--color-dark-blue)"
        />
      </svg>
    </div>
  );
}

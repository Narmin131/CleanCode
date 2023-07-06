import { useEffect, useState } from "react";
const TopToBtn = () => {
  const [visible, SetVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        SetVisible(true);
      } else {
        SetVisible(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <button
        style={{
          display: visible ? "block" : "none",
          position: "fixed",
          right: "20px",
          bottom: "20px",
        }}
        onClick={scrollToTop}
      >
        Yuxari
      </button>
    </div>
  );
};

export default TopToBtn;

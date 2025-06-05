import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react"; // You can use the same Lucide icon

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when the user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true); // Show the button when scrolled 200px
      } else {
        setIsVisible(false); // Hide the button when at the top
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll animation
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 cursor-pointer right-6 p-3 bg-[#0A9642] rounded-full text-white shadow-lg transition-opacity duration-300  hover:opacity-90"
        >
          <ArrowUp  size={24} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;

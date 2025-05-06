'use client';
import { ChevronsDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ScrollToBottomButton() {
  const [isVisible, setIsVisible] = useState(false);

  const checkScrollPosition = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;
    const atBottom = scrollTop + windowHeight >= documentHeight - 50;
    setIsVisible(!atBottom);
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);
    return () => window.removeEventListener('scroll', checkScrollPosition);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToBottom}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 rounded-full  shadow-xl text-[#ABA7A7] text-5xl p-4 hover:bg-white/20 transition-all duration-300 group"
        >
          <ChevronsDown className="w-6 h-6 text-6xl group-hover:translate-y-1 transition-transform duration-300" />
        </button>
      )}
    </>
  );
}

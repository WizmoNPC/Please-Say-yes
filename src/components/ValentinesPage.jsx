import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

export default function ValentinesPage() {
  const [noClickCount, setNoClickCount] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [floatingHearts, setFloatingHearts] = useState([]);

  // Initialize floating hearts on mount
  useEffect(() => {
    const hearts = Array.from({ length: 15 }).map(() => ({
      id: Math.random(),
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 30 + 15,
      rotation: Math.random() * 360,
      delay: Math.random() * 2,
    }));
    setFloatingHearts(hearts);
  }, []);

  const handleNoClick = () => {
    const newCount = noClickCount + 1;
    setNoClickCount(newCount);

    if (newCount === 1) {
      // First click - start moving the button
      moveNoButton();
    } else {
      // Subsequent clicks - move the button
      moveNoButton();
    }
  };

  const moveNoButton = () => {
    const padding = 50;
    const minX = 150;
    const maxX = window.innerWidth / 2 - 80 - padding;
    const minY = -window.innerHeight / 2 + 80 + padding + 200;
    const maxY = window.innerHeight / 2 - 80 - padding;

    const randomX = Math.random() * (maxX - minX) + minX;
    const randomY = Math.random() * (maxY - minY) + minY;

    setNoPosition({ x: randomX, y: randomY });
  };

  const handleYesClick = () => {
    setShowSuccess(true);
  };

  // Calculate button sizes based on click count
  const yesSize = 140 + noClickCount * 35;
  const yesFontSize = 24 + noClickCount * 5;
  const noSize = Math.max(80 - noClickCount * 10, 25);
  const noFontSize = Math.max(18 - noClickCount * 2, 10);

  // Get "No" button text based on click count
  const getNoButtonText = () => {
    const texts = ['No', 'Not sure?', 'Really? 🥺', 'But why? 💔', 'Please? 🥹', 'Noo!'];
    return texts[Math.min(noClickCount, texts.length - 1)];
  };

  // Get progress message based on click count
  const getProgressMessage = () => {
    if (noClickCount >= 4) {
      return "I promise to make you smile every day! 😊✨";
    }
    if (noClickCount >= 2) {
      return "The 'Yes' button is growing bigger! 👀💖";
    }
    if (noClickCount >= 1) {
      return "Please say yes... 🥺💝";
    }
    return null;
  };

  if (showSuccess) {
    const celebrationHearts = Array.from({ length: 20 }).map(() => ({
      id: Math.random(),
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 40 + 20,
      delay: Math.random() * 2,
    }));

    return (
      <div className="fixed inset-0 bg-gradient-to-br from-pink-200 via-red-200 to-rose-300 overflow-hidden flex items-center justify-center px-4">
        {/* Floating Hearts */}
        {celebrationHearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute text-red-400 opacity-20 pointer-events-none animate-pulse"
            style={{
              left: `${heart.left}%`,
              top: `${heart.top}%`,
              fontSize: `${heart.size}px`,
              animationDelay: `${heart.delay}s`,
            }}
          >
            <Heart fill="currentColor" size={heart.size} />
          </div>
        ))}

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center relative z-10 animate-[bounce_1s_ease-in-out_3]">
          {/* Main Heart with Ping Effect */}
          <div className="relative mb-6">
            <Heart className="w-40 h-40 text-red-500 animate-pulse" fill="currentColor" />
            <Heart
              className="w-40 h-40 text-pink-400 absolute inset-0 opacity-30 animate-ping"
              fill="currentColor"
            />
          </div>

          {/* Success Heading */}
          <h1 className="text-7xl font-bold bg-gradient-to-r from-pink-600 via-red-500 to-rose-600 bg-clip-text text-transparent mb-6">
            Yayyyy! 💕
          </h1>

          {/* Secondary Texts */}
          <p className="text-3xl font-semibold text-rose-800 mb-4">
            I knew you'd say yes!
          </p>
          <p className="text-2xl text-rose-700 mb-6">
            You've made me the happiest! 💖✨
          </p>

          {/* Click Counter Message */}
          {noClickCount > 0 && (
            <p className="text-lg text-rose-600 italic mt-6">
              (Even though you clicked "No" {noClickCount} time{noClickCount !== 1 ? 's' : ''}... but who's counting? 😄💕)
            </p>
          )}

          {/* Celebration Emojis */}
          <div className="text-6xl animate-bounce mt-8">
            🎉 💑 🎉
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 pb-8 text-center text-pink-500 text-sm italic">
          💌 Happy Valentine's Day! 💌
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 overflow-hidden flex flex-col items-center justify-center px-4">
      {/* Floating Hearts Background */}
      {floatingHearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-pink-300 opacity-20 pointer-events-none"
          style={{
            left: `${heart.left}%`,
            top: `${heart.top}%`,
            fontSize: `${heart.size}px`,
            transform: `rotate(${heart.rotation}deg)`,
          }}
        >
          <Heart fill="currentColor" size={heart.size} />
        </div>
      ))}

      {/* Top Decorative Hearts */}
      <div className="flex gap-4 mb-12 absolute top-8 z-20">
        <Heart className="w-12 h-12 text-pink-500 animate-pulse" fill="currentColor" />
        <Heart
          className="w-16 h-16 text-red-500 animate-pulse"
          fill="currentColor"
          style={{ animationDelay: '0.3s' }}
        />
        <Heart
          className="w-12 h-12 text-pink-500 animate-pulse"
          fill="currentColor"
          style={{ animationDelay: '0.6s' }}
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center relative z-10">
        {/* Heading */}
        {noClickCount === 0 ? (
          <>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-red-500 to-rose-600 bg-clip-text text-transparent">
              Will you be my
            </h1>
            <h2 className="text-7xl font-bold mb-12 bg-gradient-to-r from-pink-600 via-red-500 to-rose-600 bg-clip-text text-transparent">
              Valentine? 💖
            </h2>
          </>
        ) : (
          <>
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-pink-600 via-red-500 to-rose-600 bg-clip-text text-transparent">
              I know you will say 'No' to me
            </h1>
            <h2 className="text-5xl font-bold mb-2 bg-gradient-to-r from-pink-600 via-red-500 to-rose-600 bg-clip-text text-transparent">
              But I am dith... 🥰
            </h2>
            <h3 className="text-3xl font-semibold text-rose-600 mb-12">
              You know me very well! 💖
            </h3>
          </>
        )}

        {/* Buttons Container */}
        <div className="relative flex gap-8 items-center justify-center min-h-[200px]">
          {/* Yes Button */}
          <button
            onClick={handleYesClick}
            className="relative transition-all duration-300 font-bold text-white border-4 border-white rounded-full bg-gradient-to-r from-pink-500 to-rose-500 shadow-2xl hover:shadow-pink-400/50 hover:scale-110 active:scale-95"
            style={{
              width: `${yesSize}px`,
              height: `${yesSize}px`,
              fontSize: `${yesFontSize}px`,
            }}
          >
            Yes! 💕
          </button>

          {/* No Button */}
          <button
            onClick={handleNoClick}
            className="font-bold text-white border-2 border-white rounded-full bg-gradient-to-r from-gray-400 to-gray-500 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
            style={{
              width: `${noSize}px`,
              height: `${noSize}px`,
              fontSize: `${noFontSize}px`,
              ...(noClickCount > 0 && {
                position: 'absolute',
                left: `${noPosition.x}px`,
                top: `${noPosition.y}px`,
                transition: 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
              }),
            }}
          >
            {getNoButtonText()}
          </button>
        </div>

        {/* Progress Messages */}
        {noClickCount >= 1 && (
          <div className="flex flex-col items-center mt-12">
            <p className="text-rose-600 text-2xl font-semibold animate-pulse">
              Please say yes... 🥺💝
            </p>
            {noClickCount >= 2 && (
              <p className="text-pink-600 text-xl italic animate-bounce mt-4">
                The 'Yes' button is growing bigger! 👀💖
              </p>
            )}
            {noClickCount >= 4 && (
              <p className="text-rose-700 text-lg font-medium mt-4">
                I promise to make you smile every day! 😊✨
              </p>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 pb-8 text-center text-pink-500 text-sm italic">
        💌 Happy Valentine's Day! 💌
      </div>
    </div>
  );
}
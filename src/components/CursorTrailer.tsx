import { useEffect, useRef, useState } from 'react';

export default function CursorTrailer() {
  const trailerRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const mousePos = useRef({ x: 0, y: 0 });
  const trailerPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check if the user is on a touch device (no mouse pointer)
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    setIsVisible(true);

    // Track mouse coordinates
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    };

    // Track if mouse is hovering over interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const interactive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.value-card') ||
        target.closest('.tm-card') ||
        target.closest('.service-nav-btn') ||
        target.closest('.mega-menu-item') ||
        target.closest('.tm-mega-item') ||
        target.closest('.btn') ||
        target.closest('.tm-btn');

      setIsHovered(!!interactive);
    };

    const handleMouseLeaveWindow = () => {
      if (trailerRef.current) {
        trailerRef.current.style.opacity = '0';
      }
    };

    const handleMouseEnterWindow = () => {
      if (trailerRef.current) {
        trailerRef.current.style.opacity = '1';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);

    // Easing loop using requestAnimationFrame
    let animationFrameId: number;
    const updatePosition = () => {
      const ease = 0.12; // Easing factor (0.12 is very smooth)
      
      const dx = mousePos.current.x - trailerPos.current.x;
      const dy = mousePos.current.y - trailerPos.current.y;
      
      // Interpolate position
      trailerPos.current.x += dx * ease;
      trailerPos.current.y += dy * ease;
      
      if (trailerRef.current) {
        const speed = Math.hypot(dx, dy);
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        
        // Dynamic squashing and stretching based on movement velocity
        const stretch = Math.min(speed * 0.006, 0.35);
        const scaleX = 1 + stretch;
        const scaleY = 1 - stretch;
        
        // Scale down slightly when stationary, expand when hovered
        const hoverScale = isHovered ? 1.5 : 1.0;
        
        trailerRef.current.style.transform = `translate3d(${trailerPos.current.x - 16}px, ${trailerPos.current.y - 16}px, 0) rotate(${angle}deg) scale(${scaleX * hoverScale}, ${scaleY * hoverScale})`;
      }
      
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered]);

  if (!isVisible) return null;

  return (
    <div 
      ref={trailerRef} 
      className={`cursor-trailer-container ${isHovered ? 'hovered' : ''}`}
    >
      <div className="cursor-trailer-spark">
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          className="cursor-trailer-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* High-tech orbital ring */}
          <circle 
            cx="12" 
            cy="12" 
            r="9" 
            stroke="var(--secondary)" 
            strokeWidth="0.75" 
            strokeDasharray="2 2" 
            className="orbital-ring" 
          />
          {/* Four-pointed solar star flare */}
          <polygon 
            points="12,2 15,9 22,12 15,15 12,22 9,15 2,12 9,9" 
            fill="var(--secondary)" 
            className="spark-star"
          />
          {/* Intense glowing white core */}
          <circle 
            cx="12" 
            cy="12" 
            r="2.5" 
            fill="#ffffff" 
          />
        </svg>
        {/* Underlay glow shadow */}
        <div className="cursor-trailer-glow"></div>
      </div>
    </div>
  );
}

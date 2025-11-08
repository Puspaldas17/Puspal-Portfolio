import { useEffect, useState } from 'react';
import { useCursor } from '@/hooks/use-cursor';

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

export function CursorEffects() {
  const { position, isPointer, isHidden } = useCursor();
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if touch device
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const trailPoint: TrailPoint = {
      x: position.x,
      y: position.y,
      id: Date.now(),
    };

    setTrail((prev) => [...prev, trailPoint].slice(-8));

    const timeout = setTimeout(() => {
      setTrail((prev) => prev.filter((p) => p.id !== trailPoint.id));
    }, 600);

    return () => clearTimeout(timeout);
  }, [position, isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Main cursor */}
      <div
        className={`fixed pointer-events-none z-[9999] transition-all duration-200 ${
          isHidden ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`rounded-full border-2 border-primary transition-all duration-200 ${
            isPointer ? 'w-12 h-12 bg-primary/10' : 'w-6 h-6 bg-primary/20'
          }`}
        />
      </div>

      {/* Inner dot */}
      <div
        className={`fixed pointer-events-none z-[9999] transition-opacity duration-200 ${
          isHidden ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className={`w-2 h-2 rounded-full bg-primary ${isPointer ? 'scale-0' : 'scale-100'} transition-transform duration-200`} />
      </div>

      {/* Trail effect */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none z-[9998] animate-fade-out"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            transform: 'translate(-50%, -50%)',
            opacity: (index + 1) / trail.length,
          }}
        >
          <div
            className="w-1.5 h-1.5 rounded-full bg-primary/40"
            style={{
              transform: `scale(${(index + 1) / trail.length})`,
            }}
          />
        </div>
      ))}
    </>
  );
}

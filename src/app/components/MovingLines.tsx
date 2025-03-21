import { useEffect, useRef } from "react";

const MovingLines = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    const gridSize = 10;
    let lines: any[] = [];

    const createLine = () => {
      const isHorizontal = Math.random() > 0.5;
      const length = 75 + Math.random() * 6 - 3;
      const x = Math.floor(Math.random() * canvas.width / gridSize) * gridSize;
      const y = Math.floor(Math.random() * canvas.height / gridSize) * gridSize;
      const speedFactor = 0.15 + Math.random() * 0.3;
      const speed = Math.random() < 0.5 ? gridSize * speedFactor : -gridSize * speedFactor;

      return { x, y, length, isHorizontal, speed };
    };

    // Initialize lines
    for (let i = 0; i < 7; i++) {
      lines.push(createLine());
    }

    const animateLines = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      lines.forEach((line) => {
        let gradient;

        if (line.isHorizontal) {
          gradient =
            line.speed > 0
              ? ctx.createLinearGradient(line.x + line.length, line.y, line.x, line.y)
              : ctx.createLinearGradient(line.x, line.y, line.x + line.length, line.y);
        } else {
          gradient =
            line.speed > 0
              ? ctx.createLinearGradient(line.x, line.y + line.length, line.x, line.y)
              : ctx.createLinearGradient(line.x, line.y, line.x, line.y + line.length);
        }

        gradient.addColorStop(0, "rgba(114, 255, 114, 0.8)");
        gradient.addColorStop(1, "rgba(114, 255, 114, 0.2)");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.lineCap = "round";

        ctx.beginPath();
        ctx.moveTo(line.x, line.y);

        if (line.isHorizontal) {
          ctx.lineTo(line.x + line.length, line.y);
        } else {
          ctx.lineTo(line.x, line.y + line.length);
        }

        ctx.stroke();

        // Move the line
        if (line.isHorizontal) {
          line.x += line.speed;
        } else {
          line.y += line.speed;
        }

        // Reset line if out of bounds
        if (line.isHorizontal && (line.x > canvas.width || line.x < 0)) {
          Object.assign(line, createLine());
        } else if (!line.isHorizontal && (line.y > canvas.height || line.y < 0)) {
          Object.assign(line, createLine());
        }
      });

      requestAnimationFrame(animateLines);
    };

    animateLines();

    // Handle window resize
    const handleResize = () => {
      setCanvasSize();
      lines = [];
      for (let i = 0; i < 7; i++) {
        lines.push(createLine());
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-0">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default MovingLines;

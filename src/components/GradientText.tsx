
interface GradientTextProps {
    text: string;
    fontSize?: number; 
    strokeWidth?: number; 
    gradientColors?: [string, string, string]; 
    maxWidth?: string; 
  }
  
  export default function GradientText({
    text,
    fontSize = 150,
    strokeWidth = 4,
    gradientColors = ['#D4FFEC', '#57F2CC', '#4596FB'],
    maxWidth = '600px',
  }: GradientTextProps) {
    return (
      <div style={{ maxWidth }} className="w-full h-auto">
 <svg viewBox="0 0 600 150" className="w-full h-auto">
            <defs>
            <linearGradient id="gradient-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={gradientColors[0]} />
              <stop offset="50%" stopColor={gradientColors[1]} />
              <stop offset="100%" stopColor={gradientColors[2]} />
            </linearGradient>
          </defs>
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontFamily="Montserrat, sans-serif"
            fontSize={fontSize}
            fill="transparent"
            stroke="url(#gradient-stroke)"
            strokeWidth={strokeWidth}
          >
            {text}
          </text>
        </svg>
      </div>
    );
  }
  
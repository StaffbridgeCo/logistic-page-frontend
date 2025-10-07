// src/components/VideoTextMask.tsx
interface VideoTextMaskProps {
  videoSrc: string;
  topText: string;
  bottomText: string;
}

export default function VideoTextMask({
  videoSrc,
  topText,
  bottomText,
}: VideoTextMaskProps) {
  return (
    <div className="relative w-full h-[50vh] flex items-center justify-center bg-white overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 400"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Definición de máscara */}
        <defs>
          <mask id="text-mask" x="0" y="0" width="100%" height="100%">
            {/* Fondo negro (oculto por defecto) */}
            <rect width="100%" height="100%" fill="black" />

            {/* Texto superior */}
            <text
              x="50%"
              y="40%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="130"
              fontWeight="900"
              fill="white"
            >
              {topText}
            </text>

            {/* Texto inferior */}
            <text
              x="50%"
              y="70%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="130"
              fontWeight="900"
              fill="white"
            >
              {bottomText}
            </text>
          </mask>
        </defs>

        {/* Video con máscara */}
        <foreignObject width="100%" height="100%" mask="url(#text-mask)">
          <video
            autoPlay
            loop
            muted
            playsInline
            src={videoSrc}
            className="w-full h-full object-cover"
          />
        </foreignObject>
      </svg>
    </div>
  );
}

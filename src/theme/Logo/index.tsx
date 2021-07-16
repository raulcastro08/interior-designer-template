import React from "react";

interface LogoProps {
  size?: "small" | "large";
}

type SizeType = "small" | "large";

type Size = {
  [key in SizeType]: {
    width: number;
    height: number;
  };
};

const sizes: Size = {
  small: {
    width: 96,
    height: 24,
  },
  large: {
    width: 390,
    height: 75,
  },
};

export const Logo: React.FC<LogoProps> = ({ size }) => {
  const { width, height } = sizes[size] || sizes.small;
  return (
    <svg
      width={width}
      height={height}
      version="1.1"
      viewBox="0 0 269.88 188.38"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="m80.074 153.95c-3.375-8.9e-4 -6.7666-1.4036-9.2045-4.2838l-64.18-75.823c-5.5419-6.5467-2.7771-16.654 5.3147-19.426l139.91-47.935c1.3706-0.46963 2.7177-0.68598 4.0166-0.68598 8.8758 0 15.383 10.121 10.193 18.601l-75.731 123.76c-2.3391 3.8212-6.3181 5.7948-10.321 5.7948"
          fill="#c2d0cf"
        />
        <path
          d="m105.15 172.27c-8.7639 0-15.307-9.8948-10.322-18.402l75.066-128.1c2.3199-3.9584 6.3706-5.9944 10.44-5.9944 3.5446 0 7.1022 1.5434 9.5445 4.7042l60.759 78.624c5.0463 6.53 2.2937 16.113-5.4361 18.928l-135.82 49.473c-1.4388 0.52415-2.861 0.7651-4.2272 0.7651"
          fill="#c2d0cf"
        />
        <g transform="matrix(.35278 0 0 -.35278 6.5655 91.781)">
          <text
            transform="scale(.99696 -1.003)"
            x="367.84286"
            y="-29.11755"
            fill="#040606"
            fontFamily="Viga"
            fontSize="96.686px"
            strokeWidth="2.4854"
            text-align="center"
            textAnchor="middle"
          >
            <tspan
              x="367.84286"
              y="-29.11755"
              fontFamily="Viga"
              fontWeight="bold"
              text-align="center"
            >
              D E C O R E
            </tspan>
            <tspan x="367.84286" y="94.159187" text-align="center">
              ABIENTES
            </tspan>
          </text>
          <text
            transform="matrix(1.9258 0 0 -2.0774 -49.727 -308.02)"
            x="163.72739"
            y="-157.5381"
            fill="#040606"
            fontFamily="UniSansDemo"
            fontSize="31.997px"
            fontWeight="100"
            inline-size="168.743"
            line-height="0"
            white-space="pre"
            xmlSpace="preserve"
          />
          <text
            transform="matrix(.75 0 0 -.75 -18.611 260.17)"
            fill="#000000"
            fontFamily="sans-serif"
            fontSize="40px"
            line-height="1.25"
            shape-inside="url(#rect106231)"
            white-space="pre"
            xmlSpace="preserve"
          />
        </g>
        <text
          x="309.63809"
          y="78.744171"
          fill="#000000"
          fontFamily="sans-serif"
          fontSize="10.583px"
          strokeWidth=".26458"
          line-height="1.25"
          xmlSpace="preserve"
        >
          <tspan x="309.63809" y="78.744171" strokeWidth=".26458" />
        </text>
      </g>
    </svg>
  );
};

"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

interface ImagePortalProps {
  imageSrc: string | StaticImageData;
  alt: string;
  imageSize?: number;
}

const ImagePortal: React.FC<ImagePortalProps> = ({
  imageSrc,
  alt,
  imageSize = 180,
}) => {
  return (
    <div className="portal-container">
      <style jsx>{`
        .portal-container {
          position: relative;
          width: 20vmin;
          height: 20vmin;
          max-width: 150px;
          max-height: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .portal-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 3em;
          height: 3em;
          font-size: 9vmin;
          border-radius: 90% 95% 85% 105%;
          background: #0f0;
          mix-blend-mode: screen;
          filter: hue-rotate(0deg);
          box-shadow: 0 0 0.5em 0.2em #000 inset, 0 0 0.15em 0 #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Tablet and up (md: 768px) */
        @media (min-width: 768px) {
          .portal-container {
            width: 20vmin;
            height: 20vmin;
            max-width: 150px;
            max-height: 150px;
          }

          .portal-ring {
            font-size: 9vmin;
          }
        }

        /* Desktop and up (lg: 1024px) */
        @media (min-width: 1024px) {
          .portal-container {
            width: 30vmin;
            height: 30vmin;
            max-width: 250px;
            max-height: 250px;
          }

          .portal-ring {
            font-size: 12vmin;
          }
        }

        .portal-ring:nth-child(1) {
          transform: translate(-53%, -53%) rotate(0deg);
          transform-origin: 53% 53%;
          animation: wobble1 5.55s linear infinite;
        }

        .portal-ring:nth-child(2) {
          transform: translate(-47%, -52%) rotate(0deg);
          transform-origin: 47% 52%;
          animation: wobble2 8.7s linear infinite;
        }

        .portal-ring:nth-child(3) {
          transform: translate(-45%, -50%) rotate(0deg);
          transform-origin: 45% 50%;
          animation: wobble3 6.9s linear infinite;
        }

        .portal-ring:nth-child(4) {
          transform: translate(-53%, -45%) rotate(0deg);
          transform-origin: 53% 45%;
          animation: wobble4 10.8s linear infinite;
        }

        .portal-ring:nth-child(5) {
          transform: translate(-55%, -45%) rotate(0deg);
          transform-origin: 55% 45%;
          animation: wobble5 9.3s linear infinite;
        }

        @keyframes wobble1 {
          to {
            filter: hue-rotate(360deg);
            transform: translate(-53%, -53%) rotate(360deg);
          }
        }

        @keyframes wobble2 {
          to {
            filter: hue-rotate(360deg);
            transform: translate(-47%, -52%) rotate(360deg);
          }
        }

        @keyframes wobble3 {
          to {
            filter: hue-rotate(360deg);
            transform: translate(-45%, -50%) rotate(360deg);
          }
        }

        @keyframes wobble4 {
          to {
            filter: hue-rotate(360deg);
            transform: translate(-53%, -45%) rotate(360deg);
          }
        }

        @keyframes wobble5 {
          to {
            filter: hue-rotate(360deg);
            transform: translate(-55%, -45%) rotate(360deg);
          }
        }

        .portal-image-wrapper {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>

      <div className="portal-ring"></div>
      <div className="portal-ring"></div>
      <div className="portal-ring"></div>
      <div className="portal-ring"></div>
      <div className="portal-ring"></div>

      <div className="portal-image-wrapper">
        <Image
          src={imageSrc}
          alt={alt}
          width={imageSize}
          height={imageSize}
          className="rounded-full object-cover border-4 border-white/20 shadow-[0_0_30px_rgba(0,255,0,0.3)]"
          unoptimized
        />
      </div>
    </div>
  );
};

export default ImagePortal;

import { ReactLenis } from "lenis/react";
import 'lenis/dist/lenis.css'

export default function SmoothScroll({ children }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08, 
        duration: 1.2,
        smoothWheel: true,
        smoothTouch: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
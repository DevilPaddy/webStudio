import { ReactLenis } from "lenis/react";
import 'lenis/dist/lenis.css'

export default function SmoothScroll({ children }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 0.6, 
        easing: (t) => 1 - Math.pow(1 - t, 3), 
        smooth: true,
        smoothTouch: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
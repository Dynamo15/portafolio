import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const CoverParticles = () => {

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
    id="tsparticles"
    init={particlesInit}
    options={{
      fullScreen: {
        enable: true,
        zIndex: -1 // 👈 esto es CLAVE
      },
      particles: {
        number: { value: 100 },
        color: { value: "#ffffff" },
        size: { value: 2 },
        move: { enable: true }
      }
    }}
  />
  );
};

export default CoverParticles;
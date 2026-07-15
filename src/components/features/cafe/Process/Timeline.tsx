type Props = {
  activeStep: number | null;
  totalSteps: number;
};

export default function Timeline({
  activeStep,
  totalSteps,
}: Props) {
  const width =
    activeStep === null
      ? "0%"
      : `${(activeStep / (totalSteps - 1)) * 100}%`;

  return (
    <div className="absolute left-[12%] right-[12%] top-[10px] hidden xl:block">

      {/* Línea base */}

      <div className="relative h-[3px] w-full rounded-full bg-stone-200">

        {/* Línea activa */}

        <div
          className="
            absolute
            left-0
            top-0
            h-full
            rounded-full
            bg-[#D9B56D]
            shadow-[0_0_18px_rgba(217,181,109,1.7)]
            transition-all
            duration-700
            ease-out
          "
          style={{ width }}
        />

      </div>

    </div>
  );
}
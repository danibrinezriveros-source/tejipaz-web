export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2">
      <div className="flex flex-col items-center gap-3 text-white">

        <span className="text-xs uppercase tracking-[0.3em]">
        
        </span>

        <div className="h-10 w-6 rounded-full border border-white">
          <div className="mx-auto mt-2 h-2 w-2 rounded-full bg-white animate-bounce" />
        </div>

      </div>
    </div>
  );
}
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

export default function Toast({ message, show, onClose }) {
  if (!show) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[100] anim-fade-in-up">
      <div className="bg-white/70 backdrop-blur-2xl border border-white/80 rounded-2xl px-6 py-4 shadow-2xl flex items-center gap-3">
        <div className="w-8 h-8 bg-emerald-400/20 rounded-full flex items-center justify-center">
          <CheckIcon sx={{ fontSize: 16 }} className="text-emerald-500" />
        </div>
        <span className="text-sm font-medium text-stone-800">{message}</span>
        <button
          type="button"
          onClick={onClose}
          className="ml-2 text-stone-400 hover:text-stone-600 transition-colors"
          aria-label="Dismiss notification"
        >
          <CloseIcon sx={{ fontSize: 14 }} />
        </button>
      </div>
    </div>
  );
}
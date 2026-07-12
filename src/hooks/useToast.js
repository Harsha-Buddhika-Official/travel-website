import { useState, useCallback, useRef, useEffect } from "react";

const TOAST_DURATION_MS = 4000;

/**
 * Centralizes toast state so any section can trigger a notification
 * without prop-drilling setState through the tree.
 */
export function useToast(duration = TOAST_DURATION_MS) {
  const [toast, setToast] = useState({ show: false, message: "" });
  const timerRef = useRef(null);

  const showToast = useCallback(
    (message) => {
      setToast({ show: true, message });
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setToast({ show: false, message: "" }), duration);
    },
    [duration]
  );

  const hideToast = useCallback(() => {
    setToast({ show: false, message: "" });
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  return { toast, showToast, hideToast };
}
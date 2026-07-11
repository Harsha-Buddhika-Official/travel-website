export default function Toast({ message, type = 'info', onDismiss }) {
  return (
    <div className={`toast toast-${type}`} role="status" aria-live="polite">
      <p>{message}</p>
      {onDismiss ? (
        <button type="button" onClick={onDismiss} aria-label="Dismiss notification">
          Close
        </button>
      ) : null}
    </div>
  )
}

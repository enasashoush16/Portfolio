import { useRef } from 'react';
import { useCounter } from '../../hooks/useCounter.js';

export default function StatCard({ label, value, suffix }) {
  const ref = useRef(null);
  const count = useCounter(ref, value);

  return (
    <div className="stat-card" ref={ref}>
      <strong>
        {count}
        {suffix}
      </strong>
      <span>{label}</span>
    </div>
  );
}

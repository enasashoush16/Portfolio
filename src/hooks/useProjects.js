import { useEffect, useState } from 'react';
import { getProjects } from '../services/projects.js';

export function useProjects() {
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    getProjects({ signal: controller.signal })
      .then((data) => {
        setProjects(data);
        setStatus('success');
      })
      .catch((requestError) => {
        if (requestError.name !== 'AbortError') {
          setError(requestError.message);
          setStatus('error');
        }
      });

    return () => controller.abort();
  }, []);

  return { projects, status, error };
}

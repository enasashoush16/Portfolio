export async function getProjects({ signal } = {}) {
  const response = await fetch('/projects.json', { signal });

  if (!response.ok) {
    throw new Error('Unable to load projects.');
  }

  return response.json();
}

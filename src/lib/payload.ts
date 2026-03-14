const API_URL = import.meta.env.VITE_CMS_URL || 'http://localhost:3000';

interface PayloadResponse<T> {
  docs: T[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export async function fetchPayload<T>(
  path: string,
  params?: Record<string, string>,
): Promise<PayloadResponse<T>> {
  const url = new URL(`/api/${path}`, API_URL);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
  }

  const res = await fetch(url.toString());

  if (!res.ok) {
    throw new Error(`Error fetching ${path}: ${res.status}`);
  }

  return res.json();
}

export async function fetchPayloadById<T>(
  collection: string,
  id: string,
): Promise<T> {
  const url = new URL(`/api/${collection}/${id}`, API_URL);

  const res = await fetch(url.toString());

  if (!res.ok) {
    throw new Error(`Error fetching ${collection}/${id}: ${res.status}`);
  }

  return res.json();
}

export async function createPayload<T>(
  collection: string,
  data: Record<string, unknown>,
): Promise<T> {
  const url = new URL(`/api/${collection}`, API_URL);

  const res = await fetch(url.toString(), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error?.errors?.[0]?.message || `Error creating ${collection}: ${res.status}`);
  }

  return res.json();
}

export function mediaUrl(path: string | null | undefined): string | null {
  if (!path) return null;
  if (path.startsWith('http')) return path;
  return `${API_URL}${path}`;
}
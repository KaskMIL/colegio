import { useMutation, useQuery } from '@tanstack/react-query';

import { createPayload, fetchPayload, fetchPayloadById } from '../lib/payload';

// ─── Types ───────────────────────────────────────────────

export interface PayloadMedia {
  id: string;
  url: string;
  alt?: string;
  width?: number;
  height?: number;
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle?: string;
  image: PayloadMedia;
  order: number;
  active: boolean;
}

export interface Noticia {
  id: string;
  title: string;
  tag: string;
  date: string;
  excerpt: string;
  content?: unknown;
  image?: PayloadMedia;
  author?: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface GalleryImage {
  id: string;
  image: PayloadMedia;
  caption: string;
  category: string;
  year?: number;
}

export interface ContactMessage {
  nombre: string;
  email: string;
  telefono: string;
  nivel: string;
  mensaje: string;
}

// ─── Hooks ───────────────────────────────────────────────

export function useHeroSlides() {
  return useQuery({
    queryKey: ['hero-slides'],
    queryFn: () =>
      fetchPayload<HeroSlide>('hero-slides', {
        'where[active][equals]': 'true',
        sort: 'order',
        limit: '10',
      }),
    select: (data) => data.docs,
    staleTime: 1000 * 60 * 5,
  });
}

export function useNoticias(limit = 3) {
  return useQuery({
    queryKey: ['noticias', limit],
    queryFn: () =>
      fetchPayload<Noticia>('noticias', {
        'where[published][equals]': 'true',
        sort: '-date',
        limit: String(limit),
      }),
    select: (data) => data.docs,
    staleTime: 1000 * 60 * 5,
  });
}

export function useAllNoticias() {
  return useQuery({
    queryKey: ['noticias', 'all'],
    queryFn: () =>
      fetchPayload<Noticia>('noticias', {
        'where[published][equals]': 'true',
        sort: '-date',
        limit: '50',
      }),
    select: (data) => data.docs,
    staleTime: 1000 * 60 * 5,
  });
}

export function useNoticia(id: string) {
  return useQuery({
    queryKey: ['noticia', id],
    queryFn: () => fetchPayloadById<Noticia>('noticias', id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
}

export function useGalleryImages(category?: string) {
  return useQuery({
    queryKey: ['gallery-images', category],
    queryFn: () =>
      fetchPayload<GalleryImage>('gallery-images', {
        sort: '-createdAt',
        limit: '50',
        ...(category ? { 'where[category][equals]': category } : {}),
      }),
    select: (data) => data.docs,
    staleTime: 1000 * 60 * 5,
  });
}

export function useSubmitContact() {
  return useMutation({
    mutationFn: (data: ContactMessage) =>
      createPayload<ContactMessage>('contact-messages', data),
  });
}
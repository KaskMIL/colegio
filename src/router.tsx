import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  {
    path: '/',
    lazy: lazyComponent(import('./under-construction/under-construction-route')),
  },
  {
    path: '/site',
    lazy: lazyComponent(import('./home/home-route')),
  },
]);

function lazyComponent<T>(module: Promise<ModuleWithDefault<T>>) {
  return async () => {
    const { default: Component } = await module;
    return { Component };
  };
}

interface ModuleWithDefault<T> {
  default: T;
}

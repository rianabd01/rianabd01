import type { AsyncData, AsyncDataOptions } from '#app'

export function useCachedAsyncData<T>(
  key: string,
  handler: () => Promise<T> | T,
  options: AsyncDataOptions<T> = {}
): Promise<AsyncData<T, any>> {
  const nuxtApp = useNuxtApp()

  return useAsyncData<T>(key, handler, {
    server: options.server ?? true,
    lazy: options.lazy ?? false,
    getCachedData: options.getCachedData ?? ((cacheKey) => {
      const payload = nuxtApp.payload.data?.[cacheKey]
      if (payload !== undefined) {
        return payload as T
      }

      const staticData = nuxtApp.static?.data as Record<string, unknown> | undefined
      if (staticData && cacheKey in staticData) {
        return staticData[cacheKey] as T
      }

      return undefined
    }),
    ...options,
  })
}

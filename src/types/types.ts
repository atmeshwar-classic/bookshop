export type DefaultLoadingStatus = 'not loaded' | 'loading' | 'loaded' | 'error';

export type DefaultLoadingState = {
  loading: DefaultLoadingStatus;
  error?: string;
}
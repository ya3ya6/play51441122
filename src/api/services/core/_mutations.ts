import { useMutation } from 'react-query';
import { CoreServiceFetcher } from './_restApi';

// ====================== Language ======================

export const useLanguageMutation = () => useMutation(CoreServiceFetcher.putLanguageAPI);

export const useNewsLetterMutation = () => useMutation(CoreServiceFetcher.postNewsLetterAPI);

export const useReadNotificationsMutation = () =>
  useMutation(CoreServiceFetcher.postReadNotificationsAPI);

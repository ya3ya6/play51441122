import { format as formatJalali } from 'date-fns-jalali';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import { UseFormSetError } from 'react-hook-form';

export const persianDigits = (str: string | number) => {
  return str.toString().replace(/[0-9]/g, w => {
    return String.fromCharCode(w.charCodeAt(0) + 1728);
  });
};

export const numberOrDefault = (num: any, defaultNum: number) => {
  return Number.isNaN(num) ? defaultNum : Number(num ?? defaultNum);
};

export const useDate = () => {
  const router = useRouter();

  const selectedFormat = router.locale === 'fa' ? formatJalali : format;

  return {
    date: (dateStr: string) => selectedFormat(new Date(dateStr), 'd MMMM yyyy'),
    dateTime: (dateStr: string) => selectedFormat(new Date(dateStr), 'd MMMM yyyy hh:mm:ss'),
  };
};

export const errorHandler = <T extends Record<string, string[]>>(
  errors: T,
  setter: UseFormSetError<any>,
  toast: (message: string) => void,
) => {
  if (errors.non_field_errors) {
    errors.non_field_errors.forEach(error => {
      toast(error);
    });
  }

  Object.entries(errors ?? {}).forEach(([name, messages]) => {
    if (name === 'non_field_errors') {
      return;
    }

    messages.forEach(err => {
      // @ts-ignore
      setter(name, {
        type: 'manual',
        message: err,
      });
    });
  });
};

export const toFormData = (data: Record<string, FileList | File | string | number | null>) => {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    if (value instanceof FileList) {
      formData.append(key, value[0] ?? '');
    }

    if (value instanceof File) {
      formData.append(key, value);
    }

    if (typeof value === 'string') {
      formData.append(key, value);
    }

    if (typeof value === 'number') {
      formData.append(key, value.toString());
    }

    if (value === null) {
      formData.append(key, '');
    }
  });

  return formData;
};

export const copyToClipboard = (text: string, successCallBack: () => void): void => {
  navigator.clipboard.writeText(text).then(() => {
    successCallBack();
  });
};

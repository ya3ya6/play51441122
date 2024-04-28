import {
  LandingChartIcon,
  LandingCheckedIcon,
  LandingHeartIcon,
  LandingMonyIcon,
  LandingSpeedIcon,
  LandingStarChartIcon,
  LandingStarIcon,
} from '@/common/icons';
import { LandingModel } from '@/model/LandingPage';

export const ALEX_DATA: LandingModel = {
  headerSvg: {
    startColor: '#FC694F',
    endColor: '#EB4A59',
  },
  color: '#EB4A59',
  gradient: 'linear-gradient(92.46deg, #E43F5D 2.6%, #FC694F 96.64%);',
  image: {
    src: '/images/landing/alex.webp',
    alt: 'Alexandrite Gravity',
  },
  hero: {
    InternacionalTitle: {
      primaryTitle: 'Gravity',
      secondaryTitle: 'Alexandrite',
    },
    LocaleTitleBox: {
      primaryTitle: 'این یک گرویتی است',
      secondaryTitle: 'لیزر الکساندرایت',
    },
  },
  introduction: {
    title: 'معرفی لیزر الکساندرایت',
    description: `جهش در تولید امری ذاتی و استراتژی اصلی شرکت دانش بنیان پرنیان گستر پرتو سنج بوده
    و با توکل به خداوند منان، در سال 1393 با تکیه بر دانش بومی و استفاده از ظرفیت های داخلی
    بر آن خواهیم شد که به عنوان تنها تولیدکننده دستگاه هایفو صورت و تولید کننده برتر لیزر دایود
    و لیزر الکساندرایت حذف موهای زائد، گامی مهم در راستای خواسته مشتریان عزیز در حوزه پوست
    و مو برداریم و با استفاده از تیم تخصصی و کادری مجرب، باکیفیت‌ترین محصولات روز دنیا را با
    بهترین قیمت، شرایط فروش و خدمات پس از فروش در کشور عرضه نماییم.`,
  },
  attribute: [
    {
      id: '1',
      title: 'سرعت کار بالا',
      text: `   بزرگترینSpot Size بدون افت انرژی
        در این لیزر وجود دارد. هندپیس های
        15، 18، 20، 22 و 24 میلی‌متر 
       .از عمده قابلیت های دستگاه است`,
      icon: LandingSpeedIcon,
    },
    {
      id: '2',
      title: 'بیشترین سطح رضایت',
      text: `در این تکنولوژی رضایت مشتریان
        اولویت اول را به خود اختصاص داده
        و از این رو بیشترین سطح 
        رضایت را در بین مشتریان دارد`,
      icon: LandingStarIcon,
    },
    {
      id: '3',
      title: 'بهترین سطح نتایج',
      text: `برخلاف سایر لیزر های موجود در 
        بازار، این لیزر از جهت میزان عملکردی
        و سطح کیفیت از رده های بالایی
        در انواع لیزر ها را دارد`,
      icon: LandingStarChartIcon,
    },
    {
      id: '4',
      title: 'کمترین سطح عوارض',
      text: `میزان سطح عوارض  در این لیزر با توجه به
        سطح تماس با پوست میتوان گفت کمترین
        سطح عوارض دارد شامل می‌شود و از این جهت
        کمترین اسیب را دارد`,
      icon: LandingHeartIcon,
    },
  ],
  detials: {
    detialsList: [
      {
        id: '1',
        icon: LandingCheckedIcon,
        text: `لیزر الکساندرایت گرویتی علاوه بر مجوز اداره کل 
            تجهیزات و ملزومات پزشکی کشور دارای
             تاییدیه CE اتحادیه اروپا نیز می باشد.`,
      },
      {
        id: '2',
        icon: LandingChartIcon,
        text: `تکنولوژی Smart Pulse درد را تا حدی پایین می­آورد 
            که عملاً بدون کولینگ خارجی نیز می‌توان کارکرد
             و برای پوست های تیره و نواحی تیره بدن بهترین
             پاسخ را بدون سوختگی ایجاد می‌کند.`,
      },
      {
        id: '3',
        icon: LandingMonyIcon,
        text: ` هزینه خرید و هزینه های ایجاد شده برای 
            بیمار به مراتب کمتر از دیگر لیزرها می باشد 
            و به علت محدوده وسیع تنظیمات طول پالس و
             انرژی کاربردهای وسیعی داشته و قابلیت استفاده
             در پوستهای تیره را نیز میسر می سازد و همچنین
            سرعت شات بسیار بالا در آنها برای استفاده در
             مساحت های بزرگ بسیار مناسبند.`,
      },
    ],
    detialsImage: '/images/landing/alexDetails.png',
  },
  factors: [
    {
      id: '1',
      image: {
        src: 'https://parniangostar.com/media/filer_public/11/4c/114c9b89-250b-416f-9642-c56e42f3709b/bottom-surface-size.jpg',
        alt: 'سطح مقطع بزرگ',
      },
      title: 'سطح مقطع بزرگ',
      description:
        'بزرگترین Spot Size بدون افت انرژی در این لیزر وجود دارد. هندپیس های 15، 18، 20، 22 و 24 میلی‌متر از عمده قابلیت های دستگاه است.',
    },
    {
      id: '2',
      image: {
        src: 'https://parniangostar.com/media/filer_public/51/78/5178d083-543b-4b66-adfe-5c2c15da4c94/license-parniangostar.jpg',
        alt: 'مجوز ها و تاییدیه ها',
      },
      title: 'مجوز ها و تاییدیه ها',
      description:
        'لیزر الکساندرایت گرویتی علاوه بر مجوز اداره کل تجهیزات و ملزومات پزشکی کشور دارای تاییدیه CE اتحادیه اروپا نیز می باشد.',
    },
    {
      id: '3',
      image: {
        src: 'https://parniangostar.com/media/filer_public/4b/e2/4be28e8a-1fa3-4a9b-868f-a525671052f8/a4.jpg',
        alt: 'Smart Pulse system',
      },
      title: 'Smart Pulse system',
      description:
        'تکنولوژی Smart Pulse درد را تا حدی پایین می­آورد که عملاً بدون کولینگ خارجی نیز می‌توان کارکرد و برای پوست های تیره و نواحی تیره بدن بهترین پاسخ را بدون سوختگی ایجاد می‌کند.  ',
    },
    {
      id: '4',
      image: {
        src: 'https://parniangostar.com/media/filer_public/4b/e2/4be28e8a-1fa3-4a9b-868f-a525671052f8/a4.jpg',
        alt: 'سیستم 8 پالسی (عامل کاهش درد)',
      },
      title: 'سیستم 8 پالسی (عامل کاهش درد)',
      description: `با استفاده از تکنولوژی Smart Pulse یک قطار از پالس روی پوست ایجاد می­شود. برخلاف لیزرهای رایج که از یک پالس و یا حداکثر چهار پالس استفاده می­شود، این لیزر هشت پالس با یک Duty Cycle به صورت smart ایجاد می‌کند که عرض هر پالس از یک میلی ثانیه کمتر است.
      در فاصله بین پالس‌ها، پوست استراحت می‌کند و سیستم کولینگ باعث می‌شود گرمای حاصل با سرعت بیشتری دفع گردد. این لیزر حتی در مد ۳ و ۵ میلی ثانیه نیز به ترتیب از یک قطار ۲ و ۴ پالس استفاده می‌کند. این تکنولوژی به صورت انحصاری در لیزر گرویتی وجود دارد.`,
    },
  ],
  videos: [
    {
      id: '1',
      src: 'https://www.aparat.com/v/4fDTz',
    },
    {
      id: '2',
      src: 'https://www.aparat.com/v/BQTNd',
    },
    {
      id: '3',
      src: 'https://www.aparat.com/v/nsbDH',
    },
  ],
};

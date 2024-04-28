export type LandingModel = {
  headerSvg: {
    startColor: string;
    endColor: string;
  };
  color: string;
  gradient: string;
  image: {
    src: string;
    alt: string;
  };
  hero: {
    InternacionalTitle: {
      primaryTitle: string;
      secondaryTitle: string;
    };
    LocaleTitleBox: {
      primaryTitle: string;
      secondaryTitle: string;
    };
  };
  introduction: {
    title: string;
    description: string;
  };
  attribute: {
    id: string;
    title: string;
    text: string;
    icon: () => JSX.Element;
  }[];
  detials: {
    detialsList: {
      id: string;
      icon: () => JSX.Element;
      text: string;
    }[];
    detialsImage: string;
  };
  factors: {
    id: string;
    image: {
      src: string;
      alt: string;
    };
    title: string;
    description: string;
  }[];
  videos: {
    id: string;
    src: string;
  }[];
};

import Collection from '../icons/collection';
import EmojiHappy from '../icons/emoji-happy';
import QuestionMarkCircle from '../icons/question-mark-circle';
import Refresh from '../icons/refresh';

export const BRAND_IMAGES = [
  '/images/brands/image-1.png',
  '/images/brands/image-2.png',
  '/images/brands/image-3.png',
  '/images/brands/image-4.png',
  '/images/brands/image-5.png'
];

export const CTA_CARD = {
  title: 'Real-Time Employee Experience Analysis',
  description:
    'aXtool is a project that aims to analyze employee experiences using a standardized and measurable tool. It has the potential to be a successful export project both domestically and internationally. aXtool provides a real-time platform for measuring customer satisfaction. It also includes features for analyzing and reporting on employee engagement across different employee classes or parameters.'
};

export const TOP_ROW = [
  {
    icon: (
      <QuestionMarkCircle className="absolute bottom-[12.5%] left-[12.5%] right-[12.5%] top-[12.5%]" />
    ),
    title: 'Personalized question sets',
    description:
      'A question pool prepared by an expert in the field of management and organization will be used to create personalized question sets for individuals.'
  },
  {
    icon: <EmojiHappy className="absolute bottom-[10%] left-[10%] right-[10%] top-[10%]" />,
    title: 'Employee mood analyses',
    description:
      'Analyses will be conducted to determine employee mood in certain special situations.'
  }
];

export const BOTTOM_ROW = [
  {
    icon: <Refresh className="absolute bottom-[10%] left-[15%] right-[15%] top-[10%]" />,
    title: 'Real-time customer satisfaction platform',
    description: 'A software that can provide a real-time customer satisfaction platform.'
  },
  {
    icon: <Collection className="absolute bottom-[15%] left-[10%] right-[10%] top-[15%]" />,
    title: 'Multi-functional structure',
    description:
      'It is aimed to have a multi-functional structure by integrating with other human resources management projects in which finance and marketing units are also authorized.'
  }
];

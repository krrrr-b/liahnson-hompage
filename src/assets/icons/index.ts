import React from 'react';
import { ReactComponent as ChevronDown } from 'assets/icons/chevron-down.svg';
import { ReactComponent as ArrowRight } from 'assets/icons/arrow-right.svg';
import { ReactComponent as ArrowLeft } from 'assets/icons/arrow-left.svg';
import { ReactComponent as FaceBook } from 'assets/icons/facebook.svg';
import { ReactComponent as LinkedIn } from 'assets/icons/linked-in.svg';
import { ReactComponent as Remember } from 'assets/icons/remember.svg';
import { ReactComponent as Plus } from 'assets/icons/plus.svg';
import { ReactComponent as RememberFilled } from 'assets/icons/remember-filled.svg';
import { ReactComponent as Vision } from 'assets/icons/vision.svg';
import { ReactComponent as Target } from 'assets/icons/target.svg';
import { ReactComponent as Light } from 'assets/icons/light.svg';
import { ReactComponent as Chat } from 'assets/icons/chat.svg';
import { ReactComponent as Language } from 'assets/icons/language.svg';
import { ReactComponent as Document } from 'assets/icons/document.svg';
import { ReactComponent as Check } from 'assets/icons/check.svg';
import { ReactComponent as Equal } from 'assets/icons/equal.svg';
import { ReactComponent as Cross } from 'assets/icons/cross.svg';
import { ReactComponent as Reward } from 'assets/icons/reward.svg';
import { ReactComponent as Communication } from 'assets/icons/communication.svg';
import { ReactComponent as Decision } from 'assets/icons/decision.svg';
import { ReactComponent as ArrowTop } from 'assets/icons/arrow-top.svg';
import { ReactComponent as ArrowTopLarge } from 'assets/icons/arrow-top-large.svg';

const Icon: {
  [key in IconNameType]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
} = {
  ChevronDown,
  ArrowRight,
  ArrowLeft,
  FaceBook,
  LinkedIn,
  Remember,
  Plus,
  RememberFilled,
  Vision,
  Target,
  Light,
  Chat,
  Language,
  Document,
  Check,
  Cross,
  Equal,
  Reward,
  Communication,
  Decision,
  ArrowTop,
  ArrowTopLarge,
};

export const IconName = {
  ChevronDown: 'ChevronDown',
  ArrowRight: 'ArrowRight',
  ArrowLeft: 'ArrowLeft',
  FaceBook: 'FaceBook',
  LinkedIn: 'LinkedIn',
  Remember: 'Remember',
  RememberFilled: 'RememberFilled',
  Plus: 'Plus',
  Vision: 'Vision',
  Target: 'Target',
  Light: 'Light',
  Chat: 'Chat',
  Language: 'Language',
  Document: 'Document',
  Check: 'Check',
  Cross: 'Cross',
  Equal: 'Equal',
  Reward: 'Reward',
  Communication: 'Communication',
  Decision: 'Decision',
  ArrowTop: 'ArrowTop',
  ArrowTopLarge: 'ArrowTopLarge',
} as const;

export type IconNameType = (typeof IconName)[keyof typeof IconName];

export default Icon;

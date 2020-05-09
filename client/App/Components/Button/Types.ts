import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { ActionType } from '../../Types/Types';

export type ButtonStylingMapping = {
  [key in ActionType]: string;
};

export type ButtonIconMapping = {
  [key in ActionType]: IconDefinition;
};

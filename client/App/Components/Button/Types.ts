import { IconDefinition } from '@fortawesome/fontawesome-common-types';

export enum ButtonType {
  DELETE = 'delete',
  EDIT = 'edit',
}

export type ButtonStylingMapping = {
  [key in ButtonType]: string;
};

export type ButtonIconMapping = {
  [key in ButtonType]: IconDefinition;
};

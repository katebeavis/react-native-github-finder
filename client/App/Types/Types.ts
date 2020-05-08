import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ApolloError } from 'apollo-boost';

export interface IUser {
  avatarUrl: string;
  name: string;
  login: string;
  company: string;
  location: string;
  following: {
    totalCount: number;
  };
  followers: {
    totalCount: number;
  };
  email: string;
  bio: string;
  repositories: IRepositories;
}

export interface IRepositories {
  totalCount: number;
  nodes: IRepo[];
}

export interface IRepo {
  name: string;
  description: string;
  stargazers: {
    totalCount: number;
  };
  url: string;
}

export interface INotes {
  notes: INote[];
}

export interface INote {
  id: string;
  content: string;
}

export interface IUserContext {
  user: IUser | null;
  getUser: (arg: { variables: { username: string } }) => void;
  userNotFound: boolean;
  setUserNotFound: (arg: boolean) => void;
  loading: boolean;
  error: ApolloError | undefined;
}

export interface Error {
  locations: { column: number; line: number }[];
  message: string;
  path: string[];
  type: string;
}

type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Browser: { uri: string; name: string };
  Overview: undefined;
  RepositoryOverview: undefined;
  Notes: undefined;
};

type BrowserScreenRouteProp = RouteProp<RootStackParamList, 'Browser'>;

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Profile'
>;
type BrowserScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Browser'
>;
type OverviewSScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Overview'
>;
type RepositoriesScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'RepositoryOverview'
>;
type NotesScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Notes'
>;

export interface NavigationProps {
  route: BrowserScreenRouteProp;
  navigation:
    | HomeScreenNavigationProp
    | ProfileScreenNavigationProp
    | BrowserScreenNavigationProp
    | OverviewSScreenNavigationProp
    | RepositoriesScreenNavigationProp
    | NotesScreenNavigationProp;
}

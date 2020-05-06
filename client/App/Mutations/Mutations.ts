import gql from 'graphql-tag';

export const CreateNoteMutation = gql`
  mutation CreateNoteMutation($data: NoteCreateInput!) {
    createNote(data: $data) {
      content
    }
  }
`;

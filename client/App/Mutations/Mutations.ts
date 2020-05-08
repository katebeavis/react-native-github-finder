import gql from 'graphql-tag';

export const CreateNoteMutation = gql`
  mutation CreateNoteMutation($data: NoteCreateInput!) {
    createNote(data: $data) {
      content
      username
    }
  }
`;

export const DeleteNoteMutation = gql`
  mutation DeleteNoteMutation($id: ID!) {
    deleteNote(where: { id: $id }) {
      content
    }
  }
`;

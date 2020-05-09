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

export const UpdateNoteMutation = gql`
  mutation UpdateNoteMutation($data: NoteUpdateInput!, $id: ID!) {
    updateNote(data: $data, where: { id: $id }) {
      content
    }
  }
`;

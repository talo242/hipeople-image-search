import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

const Form = styled.form`
    width: 100%;
    display: flex;
    max-width: 640px;
`;

const StyledInput = styled.input`
  font-family: 'Work Sans', sans-serif;
  height: 40px;
  padding: 0 8px;
  border: 1px solid #fcfcfc;
  border-radius: 10px;
  flex: 1;
  margin-right: 16px;

  &:focus {
    border-color: #96e2b6;
    outline: #96e2b6;
  }
`;

interface InputProps {
  searchImage: (query: string) => void;
  setQuery: (query: string) => void;
  query: string;
}

const Input: React.FC<InputProps> = (props) => {
  const { setQuery, query, searchImage } = props;

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => (
    setQuery(e.target.value)
  );

  const handleSubmitForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (query !== '') {
      searchImage(query)
    }
  }

  return (
    <Form onSubmit={handleSubmitForm}>
      <StyledInput placeholder="Search image" onChange={handleChangeInput} value={query} />
      <Button disabled={query === ''}>Search</Button>
    </Form>
  )
};

export default Input;

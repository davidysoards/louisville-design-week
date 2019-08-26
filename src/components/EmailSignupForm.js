import React from 'react';
import styled from '@emotion/styled';

export default function EmailSignupForm() {
  return (
    <Container>
      <form
        action="https://aiga.us3.list-manage.com/subscribe/post"
        method="POST"
      >
        <input type="hidden" name="u" value="751e598f443a47697e8b78cb9" />
        <input type="hidden" name="id" value="5d69ce0d98" />

        <label htmlFor="MERGE0">
          Email Address <span className="req asterisk">*</span>
          <input
            type="email"
            autoCapitalize="off"
            autoCorrect="off"
            name="MERGE0"
            id="MERGE0"
            size="25"
            defaultValue=""
            required
          />
        </label>

        <label htmlFor="MERGE1">
          First Name <span className="req asterisk">*</span>
          <input
            type="text"
            name="MERGE1"
            id="MERGE1"
            size="25"
            defaultValue=""
            required
          />
        </label>

        <label htmlFor="MERGE2">
          Last Name <span className="req asterisk">*</span>
          <input
            type="text"
            name="MERGE2"
            id="MERGE2"
            size="25"
            defaultValue=""
            required
          />
        </label>

        <input
          type="submit"
          className="formEmailButton"
          name="submit"
          value="Subscribe"
        />
      </form>
    </Container>
  );
}

const Container = styled.div`
  form {
    margin-bottom: 20px;
  }
  input {
    width: 100%;
    margin: 5px 0 15px;
    &[type='text'],
    &[type='email'] {
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 5px 10px;
    }
    &[type='submit'] {
      padding: 5px;
      background: none;
      color: #994cc3;
      color: var(--color-text);
      border: 2px solid #994cc3;
      border: 2px solid var(--color-text);
      border-radius: 4px;
      font-size: 1rem;
      letter-spacing: 1px;
      font-weight: 700;
      text-transform: uppercase;
      cursor: pointer;
      transition: background 0.5s, color 0.5s, border-color 0.5s;
      &:hover {
        background: #994cc3;
        background: var(--color-text);
        color: #f0f0f0;
        color: var(--color-bg);
      }
    }
  }
`;

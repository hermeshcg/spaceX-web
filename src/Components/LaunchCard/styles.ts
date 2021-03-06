import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  background: #cdcdcd;
  border-radius: 8px;
  padding: 16px;
  margin: 32px 0;
  h1 {
    font-size: 22px;
  }
  .photos {
    margin: 16px;
    border-right: 1px solid #1f1f1f;
    padding-right: 8px;
    ul {
      list-style-type: none;
    }
    li {
      padding: 4px 0;
      a {
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
    }
  }
`;

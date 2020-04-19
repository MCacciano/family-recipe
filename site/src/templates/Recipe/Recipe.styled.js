import styled from 'styled-components';

export const StyledRecipe = styled.div`
  display: grid;
  grid-template-rows: 50vh 1fr;
  height: 90vh;
  margin: 10px;
`;

export const HeroCopy = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const HeroCopyTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: max-content;
  font-family: 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 2rem;
  margin: 1rem;
  border-bottom: 2px solid #a64452;
`;
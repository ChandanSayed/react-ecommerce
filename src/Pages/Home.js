import styled from 'styled-components';

const Home = () => {
  return (
    <Wrapper>
      <h2>Home</h2>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.bg};
`;

export default Home;

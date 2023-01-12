import { Container, Text, Button } from "./style";

const WithStyledComponentExample = () => {
  return (
    <Container>
      <Text style={{ color: "red" }}>
        Hello I'm from With Out Styled Component Example
      </Text>
      <div>
        <Button>Normal</Button>
        <Button p>Primary</Button>
      </div>
    </Container>
  );
};

export default WithStyledComponentExample;

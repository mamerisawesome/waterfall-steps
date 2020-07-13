import React, { ChangeEvent } from "react";
import { Title, Text, Button, Input } from "../components/htmlAtoms";

export const Sandbox = () => {
  return (
    <>
      <Title.H1>Heading 1</Title.H1>
      <Title.H2>Heading 2</Title.H2>
      <Title.H3>Heading 3</Title.H3>
      <Title.H4>Heading 4</Title.H4>
      <Title.H5>Heading 5</Title.H5>
      <Title.H6>Heading 6</Title.H6>
      <Text.Span>Span</Text.Span>
      <Text.Paragraph>Paragraph</Text.Paragraph>
      <Input.Text label="Regular type text" placeholder="hello" />
      <Input.Text
        inputRule={(e: ChangeEvent<HTMLInputElement>) => {
          return e.target.value && e.target.value !== "I'm bad!"
        }}
        label="Error if value is `I'm bad!`"
        placeholder="hello"
      />
      <Input.Text placeholder="hello" />
      <Input.Number placeholder="hello"/>
      <Button.Primary>Primary</Button.Primary>
      <Button.Success>Success</Button.Success>
      <Button.Warning>Warning</Button.Warning>
      <Button.Error>Error</Button.Error>
      <Button.Primary disabled={true}>Disabled</Button.Primary>
    </>
  );
};

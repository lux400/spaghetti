import * as React from 'react';
import styled from 'styled-components';

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}

const Container = styled('div')`
  margin-bottom: 15px;
`;

const Label = styled('div')``;

const StyledInput = styled('input')`
  outline: 0;
  border: 0;
  padding: ${props => `${props.theme.space}px ${props.theme.space * 2}px`};
`;

export class Input extends React.PureComponent<Props> {
  render() {
    const { label, ...inputProps } = this.props;
    return (
      <Container>
        <Label>{label}</Label>
        <StyledInput {...inputProps as any} />
      </Container>
    );
  }
}

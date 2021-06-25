/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import styled from "styled-components";
import { TypographyType } from "@ninjas/theme/typographyVariants";

import Text, { Tags, TextProps } from "../../foundation/Text";

const TextFieldWrapper = styled.div`
  margin-bottom: 5px;
`;

const Input = styled(Text)`
  width: 100%;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary.main.color};
  padding: 12px 16px;
  outline: 0;
`;

type TextFieldDefaultProps = {
  variant?: TypographyType;
};

type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> &
  TextFieldDefaultProps;

const TextField: React.FC<
  (TextFieldProps & { tag: "input" }) | (TextProps & { tag: Tags })
> = ({ ...props }) => {
  if (props.tag === "input") {
    return (
      <TextFieldWrapper>
        <Input as="input" variant={props.variant} {...props} />
      </TextFieldWrapper>
    );
  }

  return (
    <TextFieldWrapper>
      <Input tag={props.tag} variant={props.variant} {...props} />
    </TextFieldWrapper>
  );
};

export default TextField;

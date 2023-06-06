import styled from '@emotion/styled';

export const FilterLabel = styled.label`
  margin-bottom: 10px;
  font-size: 20px;
  color: ${p => p.theme.colors.white};
  text-shadow: -1px -1px ${p => p.theme.colors.darkViolet},
    0 1px 0 ${p => p.theme.colors.greyViolet};
`;

export const FilterInput = styled.input`
  flex: 1;
  margin-top: 15px;
  padding: 12px 32px;
  border: 0;
  width: 300px;
  box-sizing: border-box;
  color: ${p => p.theme.colors.white};
  font-size: 16px;
  font-family: 'Courgette', cursive;
  text-shadow: ${p => p.theme.colors.textShadow};
  border-radius: 25px;
  background: ${p => p.theme.colors.greyBlue};
  caret-color: ${p => p.theme.colors.white};

  background: linear-gradient(
    to bottom,
    ${p => p.theme.colors.greyBlue} 0%,
    ${p => p.theme.colors.paleGrey} 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=${p =>
    p.theme.colors.greyBlue}, endColorstr=${p =>
    p.theme.colors.paleGrey}, GradientType=0 );
  transition: transform ${p => p.theme.colors.cubicBezier};

  &:hover,
  &:focus {
    outline: none;
    transform: scale(1.02);
  }

  &::placeholder {
    font-family: 'Courgette', cursive;
    color: ${p => p.theme.colors.placeholderColor};
  }
`;

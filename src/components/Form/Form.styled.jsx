import styled from '@emotion/styled';

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  width: 350px;

  padding: 20px;
  position: relative;
  border-radius: 3px;
  border: 1px solid ${p => p.theme.colors.borderRed};
  -webkit-box-shadow: 0px 7px 16px -3px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 7px 16px -3px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 7px 16px -3px rgba(0, 0, 0, 0.5);
  background: ${p => p.theme.colors.red};

  background: linear-gradient(
    to right,
    ${p => p.theme.colors.red} 0%,
    ${p => p.theme.colors.gradientRed} 29%,
    ${p => p.theme.colors.gradientRed} 50%,
    ${p => p.theme.colors.gradientRed} 71%,
    ${p => p.theme.colors.red} 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=${p =>
    p.theme.colors.red}, endColorstr=${p =>
    p.theme.colors.red}, GradientType=1 );

  &:before {
    content: '';
    position: absolute;
    top: -2px;
    left: 0;
    height: 2px;
    width: 100%;
  }
`;

export const ContactInput = styled.input`
  flex: 1;
  padding: 12px 32px;
  border: 0;
  width: 100%;
  box-sizing: border-box;
  color: ${p => p.theme.colors.white};
  font-size: 16px;
  font-family: 'Courgette', cursive;
  text-shadow: ${p => p.theme.colors.textShadow};
  border-radius: 25px;
  background: ${p => p.theme.colors.red};
  caret-color: ${p => p.theme.colors.white};

  background: linear-gradient(
    to bottom,
    ${p => p.theme.colors.red} 0%,
    ${p => p.theme.colors.lightRed} 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=${p =>
    p.theme.colors.red}, endColorstr=${p =>
    p.theme.colors.lightRed}, GradientType=0 );
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

export const SubmitBtn = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 8px;
  width: 250px;

  box-shadow: 0px 7px 16px -3px rgba(0, 0, 0, 0.5);
  background: ${p => p.theme.colors.yellow};
  background: linear-gradient(
    to bottom,
    ${p => p.theme.colors.yellow} 0%,
    ${p => p.theme.colors.darkYellow} 100%
  );

  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=${p =>
    p.theme.colors.yellow}, endColorstr=${p =>
    p.theme.colors.darkYellow}, GradientType=0 );
  border: 0;
  border-radius: 30px;
  color: ${p => p.theme.colors.white};
  margin-top: 50px;
  cursor: pointer;
  font-family: inherit;
  font-size: 20px;
  font-weight: 500;
  text-shadow: -1px -1px ${p => p.theme.colors.darkOrange},
    0 1px 0 ${p => p.theme.colors.lightOrange};
  transition: transform ${p => p.theme.colors.cubicBezier};

  &:hover,
  &:focus {
    outline: none;
    transform: scale(0.95);
  }
`;

export const Label = styled.label`
  font-size: 22px;
  color: ${p => p.theme.colors.white};
  text-shadow: -1px -2px ${p => p.theme.colors.brightRed},
    0 1px 0 ${p => p.theme.colors.paleRed};
`;

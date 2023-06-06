import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 20px;
  text-shadow: -1px -1px ${p => p.theme.colors.darkViolet},
    0 1px 0 ${p => p.theme.colors.greyViolet};
`;

export const Name = styled.span`
  width: 150px;
  font-size: 18px;
  color: ${p => p.theme.colors.white};
  border-bottom: 1px solid ${p => p.theme.colors.borderLine};
`;

export const Number = styled.span`
  width: 150px;
  font-size: 18px;
  color: ${p => p.theme.colors.white};
  border-bottom: 1px solid ${p => p.theme.colors.borderLine};
`;

export const RemoveBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 8px;
  width: 40px;
  /* height: 35px; */
  text-align: center;
  font-family: inherit;
  font-weight: 500;
  font-size: 18px;
  color: ${p => p.theme.colors.white};
  cursor: pointer;
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
  /* border-radius: 50%; */

  text-shadow: -1px -1px ${p => p.theme.colors.darkOrange},
    0 1px 0 var ${p => p.theme.colors.lightOrange};
  transition: transform ${p => p.theme.colors.cubicBezier};

  &:hover,
  &:focus {
    outline: none;

    transform: scale(0.92);
  }
`;

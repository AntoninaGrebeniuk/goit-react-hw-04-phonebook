import styled from '@emotion/styled';

export const Container = styled.div`
  height: '100vh';
  text-align: center;
  padding: 30px;
  font-size: 40;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 15px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  width: 450px;

  padding: 20px;
  position: relative;
  border-radius: 3px;
  border: 1px solid ${p => p.theme.colors.greyBlue};
  -webkit-box-shadow: 0px 7px 16px -3px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 7px 16px -3px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 7px 16px -3px rgba(0, 0, 0, 0.5);
  background: ${p => p.theme.colors.greyBlue};

  background: linear-gradient(
    to right,
    ${p => p.theme.colors.greyBlue} 0%,
    ${p => p.theme.colors.lightGreyBlue} 29%,
    ${p => p.theme.colors.lightGreyBlue} 50%,
    ${p => p.theme.colors.lightGreyBlue} 71%,
    ${p => p.theme.colors.greyBlue} 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=${p =>
    p.theme.colors.greyBlue}, endColorstr=${p =>
    p.theme.colors.lightGreyBlue}, GradientType=1 );

  &:before {
    content: '';
    position: absolute;
    top: -2px;
    left: 0;
    height: 2px;
    width: 100%;
  }
`;

export const Phonebook = styled.h1`
  margin-bottom: 10px;
  color: ${p => p.theme.colors.white};
  text-shadow: -2px -2px ${p => p.theme.colors.darkViolet},
    0 2px 0 ${p => p.theme.colors.greyViolet};
`;

export const Contacts = styled.h2`
  margin-bottom: 10px;
  font-size: 26px;
  color: ${p => p.theme.colors.white};
  text-shadow: -2px -2px ${p => p.theme.colors.darkViolet},
    0 2px 0 ${p => p.theme.colors.greyViolet};
`;

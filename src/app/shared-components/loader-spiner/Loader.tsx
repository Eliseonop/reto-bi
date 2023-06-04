import {
  SpinnerContainer,
  DotContainer,
  Dot
} from './loader.styles';


export const LoaderSpinner = () => {
  return (
    <SpinnerContainer>
      <DotContainer>
        <Dot />
        <Dot />
        <Dot />
      </DotContainer>
    </SpinnerContainer>
  );
};



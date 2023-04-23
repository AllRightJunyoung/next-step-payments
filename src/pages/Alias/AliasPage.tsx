import * as Styled from './AliasPage.styles';
import useAliasPage from '../../hooks/pages/useAliasPage';
import { getCardCompnayColor } from '../../utils/Card';
import { PrimaryCard, Text, Button, FormInput } from '../../components/UI';

const AliasPage = () => {
  const { handleSubmit, handleInput, currentCard, inputRef, inputLength } = useAliasPage();

  if (!currentCard) {
    return <div>존재하지 않은 카드입니다.</div>;
  }

  return (
    <Styled.Layout>
      <Styled.TextWrapper>
        {!currentCard.alias.length ? (
          <Text fontSize="lg" weight="bold" label="카드 등록이 완료되었습니다."></Text>
        ) : (
          <Text fontSize="lg" weight="bold" label="카드 별칭 수정"></Text>
        )}
      </Styled.TextWrapper>
      <Styled.CardWrapper>
        <PrimaryCard
          size="big"
          color={getCardCompnayColor(currentCard.company)}
          company={currentCard.company}
          number={currentCard.cardNumbers}
          expireMonth={currentCard.expireDate.month}
          expireYear={currentCard.expireDate.year}
          ownerName={currentCard.ownerName}
        />
      </Styled.CardWrapper>
      <Styled.Box>
        <FormInput
          type="text"
          placeholder="카드의 별칭 (선택) "
          theme="underline"
          active={true}
          ref={inputRef}
          onChange={handleInput}
        />
        <Text fontSize="s" weight="normal" label={`${inputLength}/10`} />
      </Styled.Box>
      <Styled.ButtonWrapper>
        <Button fontSize="lg" label="Next" onClick={handleSubmit} />
      </Styled.ButtonWrapper>
    </Styled.Layout>
  );
};

export default AliasPage;

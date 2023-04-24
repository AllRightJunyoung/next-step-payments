import * as Styled from './AliasPage.styles';
import useAliasPage from '../../hooks/pages/useAliasPage';
import { getCardCompnayColor } from '../../utils/Card';
import { PrimaryCard, Text, Button, FormInput } from '../../components/UI';

const AliasPage = () => {
  const { handleSubmit, handleInput, myCard, inputRef, inputLength } = useAliasPage();

  return (
    <Styled.Layout>
      <Styled.TextWrapper>
        {!myCard.alias.length ? (
          <Text fontSize="lg" weight="bold" label="카드 등록이 완료되었습니다."></Text>
        ) : (
          <Text fontSize="lg" weight="bold" label="카드 별칭 수정"></Text>
        )}
      </Styled.TextWrapper>
      <Styled.CardWrapper>
        <PrimaryCard
          size="big"
          color={getCardCompnayColor(myCard.company)}
          company={myCard.company}
          number={myCard.cardNumbers}
          expireMonth={myCard.expireDate.month}
          expireYear={myCard.expireDate.year}
          ownerName={myCard.ownerName}
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

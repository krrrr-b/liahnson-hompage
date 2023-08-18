import S from 'pages/Compliance/style';
import { Container, Inner } from 'components/shared';
import i18n from "languages/i18n";
import React, { useEffect, useState } from 'react';

export default function Compliance(): ReturnType<React.FunctionComponent> {
  const [language, setLanguage] = useState<string>(i18n.language);
  const isKoKR = language === "ko";

  useEffect(() => {
    setInterval(() => {
      if (i18n.language != language) {
        setLanguage(i18n.language);
      }
    }, 1000);
  }, [i18n.language]);

  const koreanCompliance = <S.DescriptionWrapper>
    <S.Description>
      <h4>소개</h4>
      <br />
      이안손은 전문가 네트워크 관련 컴플라이언스 기준의 수립 및 개발을 최우선으로 생각하고 있습니다.
      안정적이고 고도화된 컴플라이언스 체계를 통해 고객사는 안심하고 전문가로부터 인사이트를 확보할 수 있습니다.
      <br /><br />
      이안손 고객사는 전문가가 갖춘 경험과 지식을 존중하며, 전문가가 공유 가능한 정보에는 제약이 있다는 사실을 인지하고 있습니다.
      규정된 컴플라이언스를 통해 고객과 전문가 사이의 잠재적인 이해충돌에 대응하고 사전에 방지할 수 있습니다.
    </S.Description>

    <S.Description>
      <h4>전문가</h4>
      <br />

      <h4>1. 계약</h4>
      <p>
        이안손을 통해 자문을 진행하기 위해서는 전문가는 이안손 Terms & Conditions를 서명하고 하기사항에 동의해야 합니다.
        <br />
        a) 고객사에서 중요한 대외비를 포함하는 질문이 있을 경우 비밀 정보를 제공하지 않습니다.
        <br />
        b) 자문 시작 직후 논의 불가한 내용으로 갑작스레 변경될 경우 자문을 중단해야 합니다.
        <br />
        c) 자문 간 인지한 고객사의 모든 정보는 기밀사항으로 인지하고 외부로 공개하지 않습니다.
      </p>
      <br />
      <h4>2. 이해충돌 관리</h4>
      <p>
        전문가 입장에서 이해가 충돌되는 상황이 발생할 가능성이 있습니다.
        이안손은 적극적으로 전문가 입장에서 문제가 없는지 파악하기 위해 노력하고 있으며, 부적합하다고 판단되는 프로젝트에는 전문가가 참여하지 않도록 중재하고 있습니다.
        이안손은 고객 요청사항의 사전 질문을 활용하여 전문가의 이해충돌 가능성을 미리 확인하고 전문가의 역량을 판단합니다.
        자문 진행에 있어서 예상하지 못한 문제가 발생하는 경우 즉각적으로 자문 중단을 요청 드리고 있습니다.
      </p>
      <br />

      <h4>고객</h4>
      <br />
      이안손은 컴플라이언스를 통해 기밀 정보가 유출되는 위험을 줄이고 고객사를 보호하고 있습니다. 사전에 전문가를 검증하고 관리하여 이해충돌 문제가 발생할 수 있거나 고용주로부터 자문이 제한된 전문가는 고객사를 연결하지 않도록 합니다.
      <br /><br />
      컴플라이언스와 관련해서 문의사항이 있으신 경우, <b><a href="mailto:contact@liahnson.com">contact@liahnson.com</a></b> 으로 연락바랍니다.
    </S.Description>
  </S.DescriptionWrapper>

  const englishCompliance = <S.DescriptionWrapper>
    <S.Description>
      [About our Compliance]
      <br />
      Liahnson considers a top priority the establishment and development of compliance standards in relation to
      expert network operations. Through a stable and sophisticated compliance system, clients can secure insights
      from experts with peace of mind.
      Liahnson’s clients respect the experience and knowledge possessed by experts, and are aware that there are
      limitations to the information that experts can share. By complying with established compliance regulations,
      potential conflicts of understanding between clients and experts can be addressed and prevented in advance.
    </S.Description>
    <S.Description>
      [Experts]
      <br />
      - Contract : To conduct consultations through Liahnson, experts must sign Liahnson`s Terms & Conditions and agree to the
      following:
      a. If a client asks questions that include important trade secrets, the expert will not disclose confidential
      information.
      b. If there is a sudden change in the consultation topics and such topics cannot be discussed immediately after
      the consultation starts, the consultation must be discontinued.
      c. All information learned about the client during the consultation is considered confidential and will not be
      disclosed by the expert to third parties.
      <br /><br />
      - Managing Conflicts of Interest : There is a possibility that there may be conflicts of interest from the expert’s point of view. Liahnson actively
      seeks to identify and resolve any potential issues from the expert’s perspective and mediates to prevent
      experts from participating in projects that are deemed inappropriate for them. Liahnson assesses the expert’s
      competence and potential conflicts of interest in advance by making use of the client’s pre-consultation
      questions. If unexpected problems arise during the consultation, Liahnson requests that the consultation be
      immediately stopped.
    </S.Description>
  </S.DescriptionWrapper>;

  return (
    <S.Wrapper>
      <Container>
        <Inner>
          <S.TitleWrapper>
            <S.Title>{isKoKR ? '컴플라이언스' : 'Compliance'}</S.Title>
          </S.TitleWrapper>
          {isKoKR ? koreanCompliance : englishCompliance}
        </Inner>
      </Container>
    </S.Wrapper>
  );
}

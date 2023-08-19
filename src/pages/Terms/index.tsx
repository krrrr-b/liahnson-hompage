import S from 'pages/Terms/style';
import { Container, Inner } from 'components/shared';
import i18n from "languages/i18n";
import React, { useEffect, useState } from 'react';

export default function Terms(): ReturnType<React.FunctionComponent> {
  const [language, setLanguage] = useState<string>(i18n.language);
  const isKoKR = language === "ko";

  useEffect(() => {
    setInterval(() => {
      if (i18n.language != language) {
        setLanguage(i18n.language);
      }
    }, 1000);
  }, [i18n.language]);

  const koreanTerms = <S.DescriptionWrapper>
    <S.Description>
      귀하와 주식회사 이안손앤컴퍼니 (이하 “이안손”) 사이에 법적 구속력이 있는 본 이용약관을 주의 깊게 검토하여 주시기 바랍니다. 본 이용 약관은 이안손 및 고객 (아래 정의 됨)과의 관계를 규정합니다.
    </S.Description>

    <S.Description>
      <h4>이안손 소개</h4>
      <br />
      이안손은 다양한 업계의 전문가 (“고문“) 에게 이안손 전문가 구성원으로 등록하여 이안손 및 고객 (“통칭하여 “고객”) 에게 자문 서비스를 제공할 수 있는 기회를 제공합니다. 자문 서비스 항목에는 전화 자문, 대면 미팅, 컨퍼런스 콜, 리포트 작성, 서베이, 비즈니스 투어, 워크샵 및 기타 리서치 서비스 (“컨설팅 서비스”) 이 있습니다.
    </S.Description>

    <S.Description>
      <h4>이안손 전문가의 권리</h4>
      <br />
      이안손 전문가 구성원으로서, 귀하는 자유롭게 자문 서비스 제안을 수락하거나 거절할 수 있습니다. 각각의 이안손 전문가는 시간당 자문료를 자유롭게 정할 수 있습니다. 자문료 지급을 받기 위해서는 이안손에 정확한 은행 계좌 정보와 고객과의 자문 소요 시간이 포함된 인보이스 양식을 제출하여야 합니다. 이안손으로부터 사전 서면 승인을 받은 경우가 아니라면 자문에 대한 어떠한 준비시간, 자문 후추가 자문 서비스 등에 대한 보상을 받지 않습니다. 고객에게는 그러한 추가 작업에 대한 승인을할 권리가 없습니다. 추가로 이안손은 이안손를 통해 연결 되었거나 이안손에 의해 서면 형식으로 사전 승인된 자문 서비스에 대해서만 보상 합니다. 컨설팅 비용 지급은 통상적으로 이안손에 인보이스 제출 후 15일 이내에 지불되나, 자문 과정 중에 이안손의 자문활동 준수 사항이나 규칙 절차 등을 위반이 있을 경우에는 비용지급은 되지 않습니다. 귀하는 해당법률에 의거하여 이안손로부터 지불 받은 비용에 대한 귀하의 관할 지역에서 적용 가능한 세금 납부 할 책임이 있으며, 이안손의 요청이 있을 경우 그러한 세금 납부의 증거를 제공하는 것에 동의 합니다.
    </S.Description>

    <S.Description>
      <h4>전문가 회원 행동 수칙</h4>
      <br />
      이안손은 기본적으로 전문가가 이안손 및 클라이언트와의 컨설팅 활동에 최대한 전문성과 예의를가지고 행동 할 것으로 기대합니다. 따라서, 이안손 전문가는 비공개 및 독점 정보, 상업적 비밀 및 귀하가 당사자인 기밀유지 계약서에 적용되는 모든 정보와 같은 기밀 정보를 공개해서는 안됩니다 (예, 현재 또는 이전의 고용관계, 이사직, 컨설팅 계약, 비공개 계약 등) 기밀 정보 공개를 피하기 위하여 자문 서비스를 종료해야 할 필요가 있다고 판단되면, 이안손은 귀하가 자문에 참여한 시간에 대한 비용을 지불합니다.
      귀하는 또한 하기 사항에 동의 합니다.
      귀하는 현재 고용주 또는 이전 고용주에 대한 기밀 정보가 포함된 자문 서비스에 참여하지 않습니다. 정부 기관에 고용되어 있는 경우, 비공개 기밀 정책이 포함 된 산업이나 단체에 대한 자문 서비스에 참여하지 않을 것에 동의합니다. 이안손 전문가로서 귀하는 정부 공무원 (정부 소유 기업의 직원 또는 대표를 말함) 또는 기타 개인이나 단체에게 이안손 고객에게 이득이 되는 것을 바라는 불공정 거래의 대가로 어떤 가치 있는 것을 제공하거나 받는 것을 금지 합니다. 또한 미국 해외 부패 방지법 (FCPA) 및 영국 뇌물 수수 방지법 (FCPA)를 포함한 국제 뇌물 방지법 및 규정을 숙지하고 준수해야 합니다. 의료 전문가로서 임상 시험에 참여하고 있는 경우 공개적인 정보 제공이 허락 되지 않는 한 환자에 관한 정보 또는 임상 시험 정보를 논의해서는 안됩니다. 데이터 안전 모니터링 이사회 멤버, 과학 자문위원 및 임상시험 스폰서 직원은 진행중인 과제 또는 미공개 정보와 관련된 자문 서비스에 참여할 수 없습니다. 귀하가 변호사 또는 감사 업무를 담당하는 경우 귀하 또는 귀하 회사의 현재 고객이나 기밀 유지 의무가 있는 고객에 관한 자문 서비스에 참여하지 않아야 합니다. 귀하는 녹음기록이나 데이터 기록 사본을 만들지 않으며, 제 3자가 (이안손의 사전 승인을 얻은 경우를 제외하고) 이안손 자문 서비스에 참여하는 것을 승인하지 않습니다. 자문 서비스 과정 도중 본 이용 약관에 위반되거나 이해관계가 상충 될 수 있다고 판단되는 경우에는 즉시 자문 서비스에 대한 귀하의 참여를 종료하고 이안손에 통보하여야 합니다. 만일 이안손이 귀하가 기밀 정보를 공개했다는 것을 알게 됐을 경우에는, 당사는 귀하와의 관계를 즉시 종료하고 해당 자문 건에 대한 지불을 보류 할 것이며, 당사가 적절하다고 판단하는다른 조치를 취할 수도 있습니다. 이안손 전문가로서 귀하는 (a) 모든 관련 법률, 규칙 및 규정 (b) 귀하와 관련된 모든 계약 관계 또는 신탁 의무를 준수 할 책임이 있습니다. 상기 내용에 국한되지 않고, 귀하는 법률이 일반적으로 기밀 정보의 도용, 사용, 보급 및 공개를 금지한다는 것을 인정합니다. 이안손 전문가로서 귀하는 귀하의 학력, 경력, 고용관계 및 귀하가 받을 수 있는 계약상의 의무 또는 기타 의무와 관련하여 정확한 현재 및 과거의 개인 정보 (여기에 정의 된대로)를 이안손에 제공 할 것에 동의하며, 관련 정보에 변동이 있는 경우 이안손에 해당 정보를 업데이트 하며, 모든 컨설팅 자문 서비스를 제공하기 전에 그러한 정보가 최신인지 확인해야 합니다. 귀하는 이안손과 고객에게 어떠한 거짓된 정보와 오류를 포함할 수 있는 정보를 제공하지 않는 것에 동의합니다.
    </S.Description>

    <S.Description>
      <h4>이안손과 고객정보의 기밀유지</h4>
      <br />
      귀하가 이안손 전문가로 활동하는 기간과 활동 종료 이후에도, 귀하는 이안손 자문 서비스 도중 귀하에게 공개된 고객 관련 정보와 공개가 제한된 정보 (아래 정의 된)를 외부에 공개하거나 사용하려고 시도하거나 개인적 이익을 위해 사용하지 않을 것에 동의합니다. 다음 내용은 엄격하게 기밀로 간주 됩니다: (1) 고객의 신원 (예 : 귀하의 이력서 또는 웹 사이트에 고객에 관한 내용을 기재하지 않음). (2) 자문 서비스에 대한 정보; (3) 실제 진행 중인 또는 잠재적 사업 내용에 대한 정보, 투자 또는 거래 결정사항, 또는 고객의 거래에 관한 정보; 또는 (4) 이안손 또는 고객의 비공개 또는 독점 정보 (총칭하여 `제한된 정보`). 기밀 유지 및 공유가 제한된 정보와 관련된 본 조항의 의무는 본 계약의 해지 또는 만료 후에도 효력을 유지합니다.
    </S.Description>

    <S.Description>
      <h4>당사자간의 관계</h4>
      <br />
      귀하는 이안손의 독립적인 계약자로서 자문 서비스에 참여할 것이며, 따라서 이안손이 귀하에게 지불한 모든 컨설팅 서비스 관련 원천 과세 및 보고에 관한 의무 준수를 할 것을 인정하고 동의 합니다. 서면을 통해 명시적으로 동의한 경우를 제외하고, 귀하는 이안손을 대리하여 어떠한 계약과 협상 또는 의무를 부담하거나, 이안손 혹은 고객을 대표하여 어떠한 형태의 보증이나 진술을 할 권리나 권한이 없습니다. 이안손 전문가 회원 자격은 귀하와 이안손 또는 고객간에 세금 목적 또는 기타 목적으로 고용, 대행사, 파트너십, 합작투자 또는 기타 형태의 협회를 창설하지 않습니다. 또한 귀하는 이안손의 이름을 무단으로 사용하지 않을 것 을 인정합니다. 귀하는 자문 서비스를 수행하는 고객이 본 이용 약관의 의도 된 제 3의 수혜자이며 본 계약에 따른 귀하의 진술, 보증 및 약정에 대한 귀하의위반과 관련하여 이안손과 동일한 권리와 기대를 가짐을 인정합니다. 또한 귀하가 이안손 전문가로 활동하는 동안 이안손는 귀하의 전문가 등록 과정에 제공된 정보나 웹사이트의 전체 혹은 일부 내용을 마케팅 자료로 사용 또는 활용 할 수 있는 권리를 갖습니다. 귀하는 또한 이안손의 요청에 따라 이안손 및 그 계열사와 모든 클레임 또는 소송에 대한 변호 또는 기소에 전적으로 협조한다는 데 동의합니다.
    </S.Description>

    <S.Description>
      <h4>자문료</h4>
      <br />
      자문료 자문이 종료된 후 귀하가 이안손에 제공하는 증빙자료는 귀사의 지급일(매달 15일, 말일)에 지급됩니다. 귀하가 제공한 컨설팅 서비스는 진행 시간에 비례하여 지급됨을 인지합니다.
    </S.Description>

    <S.Description>
      <h4>전직 권유 금지</h4>
      <br />
      귀하는 이안손의 고객은 이안손의 중요한 사업 자산임을 인지합니다. 귀하가 이안손 고객에게 컨설팅 관계를 제공하거나 고용 기회 등을 제공하기 위해서는 사전에 이안손의 서면 승인이 필요하고, 이는 해당 고객과 마지막 컨설팅 서비스 후 6개월이 지나야 합니다.
    </S.Description>

    <S.Description>
      <h4>계약종료</h4>
      <br />
      귀하가 현재 진행중인 자문 서비스를 종료 해야하는 의무에 따라, 귀하는 언제든지 이안손에 통보 후 이안손 전문가 활동을 종료할 수 있습니다.
    </S.Description>
  </S.DescriptionWrapper>

  const englishTerms = <S.DescriptionWrapper>
    <S.Description>
      <h4>ADVISOR COMPLIANCE</h4>
      <br />
      Please read these Terms and Conditions carefully as this is a legally binding contract between you
      and Liahnson & Company, Inc. (“Liahnson”) and sign by entering your name and the date.
      These Terms and Conditions govern your relationship with Liahnson and its Clients (defined below).
    </S.Description>

    <S.Description>
      <h4>INTRODUCTION OF LIAHNSON</h4>
      <br />
      Liahnson offers professionals(“Advisors”) from various industries the opportunity to register as
      Liahnson Advisor Members and provide advisory services to Liahnson and/or its clients (collectively, Clients).
      These advisory services may include phone consultations, face-to-face meetings, conference calls,
      reports, surveys, business tours, workshops or other research services (“Consulting Services”).
    </S.Description>

    <S.Description>
      <h4>RIGHTS OF LIAHNSON ADVISOR MEMBER</h4>
      <br />
      As a Liahnson Advisor Member, you are free to accept or decline any offer to provide Advisory
      Services in your discretion.
      Each Liahnson Advisor Member is free to set an hourly rate.
      To receive payment, you must provide Liahnson with your accurate bank account information and
      invoice containing the time spent consulting with Clients.
      Unless you have received prior written confirmation from Liahnson, you will not be compensated for
      any time in preparation of, or in follow-up to, Advisory Services.
      Clients are not authorized to approve such additional work.
      In addition, Liahnson will compensate you only for Advisory Services that are either arranged by
      Liahnson, through its systems, or pre-approved in written format by Liahnson.
      You can expect to receive payment within 15 business days of receipt by Liahnson of a proper
      invoice, provided, however, that if Liahnson determines, in its sole discretion, that you violated these
      Terms and Conditions or other Liahnson compliance rules or procedures then you will not be eligible
      for payment.
      You agree that you are responsible for paying any applicable taxes in your jurisdiction on payments
      you receive from Liahnson, in accordance with applicable law and, if applicable, you agree to provide
      Liahnson evidence of such tax payments upon Liahnson’s request.
    </S.Description>

    <S.Description>
      <h4>LIAHNSON ADVISOR MEMBER CONDUCT</h4>
      <br />
      As a guiding principle, Liahnson expects that Liahnson Advisor Members will act with the utmost
      professionalism and courtesy in their activities with Liahnson and its Clients.
      Therefore, as a Liahnson Advisor Member, you must not disclose any confidential information,
      including, for example, any material non-public and proprietary information, commercial secrets, and
      any information covered by any nondisclosure agreement(s) to which you are a party, regardless of its
      source (i.e., present or previous employment relationships, directorships, consulting engagements,
      nondisclosure agreement, etc.)
      Further, if you determine it is necessary to end your participation in any Consulting Services to avoid
      disclosing such information, Liahnson will pay you for the time you spent participating in such
      Consulting Services.
      You also agree to the following:
      You will not participate in any Advisory Services that contain confidential information about your
      current employer or former employer. You will only participate in any Advisory Services if you have no limiting clauses with your current employer. You are responsible for ensuring that you are not forbidden from participating in any Advisory Services by your current employer. If your current employer has any restrictions regarding any activities related to Advisory Services, you are required to submit evidence of permission from your current employer before engaging in any Advisory Services. If you are employed by a government, you agree not to participate in any Advisory Services about any
      industries or entities that contain confidential non-public policies.
      As a Liahnson Advisor Member you are prohibited from providing and/or receiving anything of value to
      or from any government official (including any employee or representative of a government-owned
      entity), or any other person or entity, in return for an unfair business advantage, any type of favorable
      treatment, to induce or reward the improper performance of a function or activity, or other improper
      benefit to Liahnson or its Clients.
      You must be aware of, and comply with, the international anti-bribery laws and regulations, including,
      but not limited to, the U.S. Foreign Corrupt Practices Act (FCPA) and the U.K. Bribery Act.
      If you are a healthcare professional and participating in any trials you must not discuss patient specific
      information or trial information not yet publicly available.
      Data Safety Monitoring Board Members, Scientific Advisory Board members, and trial sponsor
      employees are not permitted to participate in Advisory Services about ongoing trials or unpublished
      information.
      If you are an attorney or auditor you shall not participate in any Advisory Services that are about
      current clients or any clients to whom you or your firm owes a duty of confidentiality.
      You will not record or transcribe, or permit any third party to join (except with prior approval from
      Liahnson), your Advisory Services with clients.
      If you determine at any time that your participation in any Advisory Services could result in a violation
      of any of these terms and conditions or may otherwise present a conflict of interest, you must
      immediately terminate your participation in such Advisory Services and notify Liahnson.
      If Liahnson learns that you have disclosed confidential information, we will immediately terminate our
      relationship with you and withhold payment for such consultation, and we may also take such other
      action as we deem appropriate.
      As a Liahnson Advisor Member, you are responsible for compliance with (a) all applicable laws, rules
      and regulations, and (b) any contractual relationships or fiduciary duties that are binding on you.
      Without limiting the foregoing, you acknowledge that laws generally prohibit the misappropriation, use,
      dissemination, and disclosure of confidential information.
      As a Liahnson Advisor Member, you agree that you will provide Liahnson with accurate current and
      historical Personal Information (as defined herein) regarding your education, experience, employment
      and any contractual or other obligations you may be subject to, and you agree to update this
      information in a timely manner with Liahnson in the event this information changes, and to ensure that
      such information is up to date prior to providing any Advisory Services.
      You agree that you will not provide any false or misleading information of any kind to Liahnson, its
      clients.
    </S.Description>

    <S.Description>
      <h4>CONFIDENTIALITY OF LIAHNSON AND CLIENT INFORMATION</h4>
      <br />
      While you are a Liahnson Advisor Member and thereafter, you agree not to disclose or to attempt to
      use or personally benefit from any Restricted Information (as defined below) that is disclosed to or
      known by you because of your participation in the Liahnson Advisory Services.
      The following should be considered strictly confidential:(1) the identity of Clients (e.g., do not list
      Clients on your resume or website); (2) information about Advisory Services; (3) information about any
      actual or potential business, investment or trading decisions, or transactions of any Client; or (4) any
      other nonpublic or proprietary information of Liahnson or its Clients (collectively, “Restricted
      Information”).
      The obligations of this Section with respect to Restricted Information shall survive any termination or
      expiration of this Agreement.
    </S.Description>

    <S.Description>
      <h4>RELATIONSHIP OF PARTIES</h4>
      <br />
      You acknowledge and agree that you will participate in Advisory Services as an independent
      contractor of Liahnson and, as a result, you agree to comply with all applicable tax withholding and/or
      reporting obligations arising from any payments made by Liahnson to you.
      Except as expressly agreed in writing, you will not have any right or authority to negotiate any
      agreement or otherwise incur any obligation on behalf of Liahnson or to make any representation or
      warranty on behalf of Liahnson or any Client.
      Your status as a Liahnson Advisor Member does not create an employment, agency, partnership, joint
      venture or any other form of association, for tax purposes or otherwise, between you and Liahnson or
      any Client.
      Additionally, you agree that you will not make any unauthorized use of Liahnson`s name.
      You hereby acknowledge that any Client for whom you perform Advisory Services hereunder is an
      intended third party beneficiary of these Terms and Conditions and has the same rights and
      expectations as Liahnson with respect to any breach by you of your representations, warranties and
      covenants hereunder.
      You also agree that while you are participating as a Liahnson Advisor Member, Liahnson will have the
      right to utilize and publish, in whole or in part, information you provide during and after the registration
      process in its marketing materials, whether contained on its website or elsewhere.
      You further agree that, at Liahnson’s request, you will cooperate fully with Liahnson and its affiliates in
      connection with any inquiry or investigation (whether formal or informal), and any defense or
      prosecution of any claims or actions.
    </S.Description>

    <S.Description>
      <h4>COMPENSATION</h4>
      <br />
      Invoices submitted by the Consultant to Liahnson are due upon payment date which is every 15th and
      last day of each month.
      The Consultant will be entitled to pro rata payment of the Compensation to the payment date provided
      that there has been no breach of contract on the part of Consultant.
    </S.Description>

    <S.Description>
      <h4>NON-SOLICITATION</h4>
      <br />
      You acknowledge that Liahnson Clients are a valuable business asset to Liahnson.
      Written approval from Liahnson is required before you offer employment or an engagement for the
      services of, or otherwise hire, engage the services of, solicit from or propose any advisory(consulting)
      relationship to any Client of Liahnson`s to whom we have introduced you under this Agreement, and
      for a period of six months following the most recent Consulting Services with that Client.
    </S.Description>

    <S.Description>
      <h4>TERMINATION</h4>
      <br />
      Subject to your obligation to complete Advisory Services for which you are engaged, you have the
      right to withdraw from the Liahnson at any time upon notice to Liahnson.
    </S.Description>

    <S.Description>
      <h4>ENTIRE AGREEMENT</h4>
      <br />
      It is agreed that there is no representation, warranty, collateral agreement or condition affecting this Agreement except as expressively provided in this Agreement.
      <br/><br/>
      End of Terms & Conditions © 2023 Liahnson & Company, Inc. All rights reserved.
    </S.Description>
  </S.DescriptionWrapper>

  return (
    <S.Wrapper>
      <Container>
        <Inner>
          <S.TitleWrapper>
            <S.Title>  {isKoKR ? '이용약관' : 'Terms & Conditions'}</S.Title>
          </S.TitleWrapper>
          {isKoKR ? koreanTerms : englishTerms}
        </Inner>
      </Container>
    </S.Wrapper>
  );
}

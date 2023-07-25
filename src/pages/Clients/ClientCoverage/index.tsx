import FullDropdownList, {
  FullDropdownListItemType,
} from 'components/base/Dropdown/FullDropdownList';
import { Container, Inner } from 'components/shared';
import S from 'pages/Clients/ClientCoverage/styles';
import { useTranslation } from "react-i18next";
import i18n from "languages/i18n";

export default function ClientCoverage(): ReturnType<React.FunctionComponent> {
  const { t } = useTranslation()

  const isKoKR = i18n.language === "ko";
  const dropdownItems: FullDropdownListItemType[] = [
    {
      title: t('consulting_firms'),
      description: isKoKR ? '경영컨설팅, 전략컨설팅, 운영컨설팅, 인사컨설팅 등. 연간 5,000건 이상 프로젝트 수행' : 'Management Consulting, Strategy Consulting, Operation Consulting, HR Consulting, etc.',
      score: '',
      unit: isKoKR ? '' : '',
      children: {
        title: isKoKR ? '프로젝트 케이스' : 'Project Case',
        descriptionTitle: isKoKR ? '선진사례 벤치마킹:' : 'Best Practices Benchmarking: ',
        descriptionContent: isKoKR ? '핵심 인력 관리 및 기술 유출 방지 사례조사' : 'Case Study on Key Staff Management and Technology Leaking Prevention',
        content: [
          {
            title: isKoKR ? '배경' : 'Background',
            content: isKoKR ? [
              '고객사는 원청기업의 요청으로 Globalize된 각 산업군 별 글로벌 선도 기업들의 핵심 인력 관리 및 기술 유출 방지 및 대처 방안에 대한 사례 조사 진행이 필요했음.',
            ] : [
              'Our consulting firm client wanted to learn how global leading companies from various industries managed their key staff and prevented technology leaking, as well as the countermeasures they took in such cases.'
            ],
          },
          {
            title: isKoKR ? '솔루션' : 'Solution',
            content: isKoKR ? [
              '고객사에서 지정한 IT, 자동차, 화학, 제약, 소비재 제조 기업군 별 각각 5곳 선도 업체에 대한 사례 조사를 위해 유관 경력 보유 전문가 확보 작업 진행, 총 55명의 적합 경력자 참여 의사 확보',
              '그 중 내부 Compliance 요건이 충족되는 전문가 필터링 과정을 거쳐 총 35명의 전문가와 고객사 간의 화상 Q&A 세션 Arrange를 통해 각 기업들의 선진 관리 사례에 대한 벤치마킹을 성공적으로 지원',
              'Q&A 세션 진행 완료한 전문가 중 내한이 가능했던 3명의 전문가를 초빙하여 자료 발표를 동반한 Workshop 진행까지 수행됨',
            ] : [
              'We secured experts with highly relevant experience to conduct case studies on 5 leading companies in each of the following industries as requested by client: IT, automotive, chemical, pharmaceutical, and consumer goods manufacturing. A total of 55 qualified candidates were recruited for this project.',
              'After filtering for internal compliance requirements, a total of 35 experts were selected to participate in videoconference Q&A sessions arranged between the client and the experts. Thanks to these sessions, our client was able to successfully benchmark advanced management practices across all companies.',
              'Three of the experts who participated in the Q&A sessions and were able to travel were invited to present their findings and conduct a workshop. The workshop was successfully conducted with accompanying materials included.'
            ],
          },
        ],
      },
    },
    {
      title: t('research_firms'),
      description:
      isKoKR ? '소비자리서치, 마케팅리서치, 산업리서치 등 연간 1,500건 이상 프로젝트 수행' : 'Consumer Research, Market Research, Industry Research, etc.',
      score: '',
      unit: isKoKR ? '' : '',
      children: {
        title: isKoKR ? '프로젝트 케이스' : 'Project Case',
        descriptionTitle: isKoKR ? '권역별 시장 분석:' : 'Regional Market Analysis: ',
        descriptionContent: isKoKR ? '국내/일본 의료용 렌즈 시장 동향 및 수요 조사' : 'Survey on Demand and Market Trends for Medical Lens in Korea and Japan',
        content: [
          {
            title: isKoKR ? '배경' : 'Background',
            content: isKoKR ? [
              '고객사는 유아용 근시 각막교정 전용 렌즈에 대한 각국 별 시장조사 용역을 수행하던 중 본격적인 제픔 런칭 전 한국과 일본 시장을 테스팅 마켓으로 고려하여 사전 시장조사를 의뢰함.',
            ] : [
              'Our research firm client was conducting a market research on myopia-correcting lenses for children in various countries and requested a pre-market survey for the Korean and Japanese markets, considering them as potential testing markets before launching the product.'
            ],
          },
          {
            title: isKoKR ? '솔루션' : 'Solution',
            content: isKoKR ? [
              '한국과 일본의 유아용 근시 각막교정 전용 렌즈 처방해본 경험을 보유한 Top tire 병원 출신 전문의 각각 10명에게 선호 제품, 처방 후 기대 치료 효과 등에 대한 서면 설문 진행 + 설문 결과를 바탕으로 한 Follow up 인터뷰 진행 Arrange',
              '각국별 해당 상품의 주요 마켓리더와 유통업체에서 근무한 경력을 보유한 전문가 5명과의 In-depth Interview 진행을 통해 시장 동향 및 향후 전망에 대한 Insight 제공',
            ] : [
              'A written survey was conducted on the preferred product and expected therapeutic effects after prescription to 10 specialists each from Korea and Japan who had vast experience prescribing myopia-correcting lenses for children from top-tier hospitals. After the survey answers were collected, follow-up consultation calls also were arranged with these specialists based on their survey results.',
              'In addition, in-depth consultations were conducted with 5 experts who had worked for major market leaders and distributors of these products in each country to provide expert insights into market trends and future prospects.'
            ],
          },
        ],
      },
    },
    {
      title: t('investment_firms'),
      description:
        isKoKR ? '사모펀드, 벤처케피탈, 투자은행, 기금운용사 등 매년 2,000건 이상 프로젝트 수행' : 'Private Equity Funds, Venture Capital, Investment Banking, Fund Management, etc.',
      score: '',
      unit: isKoKR ? '' : '',
      children: {
        title: isKoKR ? '프로젝트 케이스' : 'Project Case',
        descriptionTitle: isKoKR ? '투자 대상에 대한 심층 분석: ' : 'In-Depth Analysis on Investment Target: ',
        descriptionContent: isKoKR ? 'Bio-tech 기업에 대한 제품/기술 평가 및 평판 조사' : 'Product/Technology Evaluation and Reputation Survey of a Target Bio-Tech Company’s',
        content: [
          {
            title: isKoKR ? '배경' : 'Background',
            content: isKoKR ? [
              '고객사는 사모 펀드로서 국내 유일의 제품과 기술을 보유한 신생 Bio-tech 기업에 대한 투자를 고려 중이나 해당 기업이 보유중인 제품/기술에 대한 검증 및 핵심 인원들에 대한 검증 작업이 필요했음',
            ] : [
              'Our private equity fund client was considering investing in a newly established bio-tech company’s that owned a unique product and technology in the domestic market. However, they needed to validate the company’s products/technologies and key staff before executing the investment operation.'
            ],
          },
          {
            title: isKoKR ? '솔루션' : 'Solution',
            content: isKoKR ? [
              '해당 기업의 주력 제품 및 기술에 대한 확실한 검증을 위해 해당 제품군의 글로벌 선진기업 임원 출신 10명과 국내 Bio 업계 Senior 저명인사 5명을 확보하여 화상 Q&A세션 진행을 통해 검증/평판 확인 작업을 지원.',
              '상기 세션 진행 완료 후 보다 심층적인 분석을 위해 글로벌 선진기업 임원 출신 참여자 중 1명을 지정하여 기술/시장 전망에 대한 50페이지 내외의 추가 보고서 작성 작업을 Arrange함',
            ] : [
              'To ensure a qualitative verification of the target company’s main products and technologies, 10 executive-level experts from global leading companies in the corresponding product category and 5 senior experts from the domestic bio-industry were recruited, and a videoconference Q&A session was arranged with each of these experts and our client to support our client’s verification and reputation confirmation process.',
              'After completing all the above Q&A sessions, one expert from the executives of global leading companies was chosen to write an additional report of approximately 50 pages on technology and market prospects for a more in-depth analysis.'
            ],
          },
        ],
      },
    },
    {
      title: t('corporate_clients'),
      description:
        isKoKR ? '대기업, 중견기업, 중소기업 등 매년 3,500건 이상 프로젝트 수행' : 'Multinational Companies, Big Companies, Medium-sized Companies, Small Companies',
      score: '',
      unit: isKoKR ? '' : '',
      children: {
        title: isKoKR ? '프로젝트 케이스' : 'Project Case',
        descriptionTitle: isKoKR ? '해외 진출 검토: ' : 'Evaluating Overseas Expansion: ',
        descriptionContent: isKoKR ? '유럽 SaaS 시장 GTM 전략 수립' : 'Establishing a GTM Strategy for the European SaaS Market',
        content: [
          {
            title: isKoKR ? '배경' : 'Background',
            content: isKoKR ? [
              '고객사는 기업용 SaaS 솔루션 개발 기업으로서 안정적인 국내 기반을 바탕으로 해외시장 진출을 모색 중이었음.',
              '내부 검토 결과 해외 진출의 1 차 목표로 미국, 프랑스, 일본을 선정, 시장 조사 통한 시장 이해 제고 + 진입 계획 수립을 위한 솔루션이 필요했음.'
            ] : [
              'Our client was a company’s that develops enterprise SaaS solutions and was exploring an expansion to overseas markets after establishing a solid position in the domestic market.',
              'After internal review, they selected the US, France, and Japan as the primary targets for overseas expansion. However, they needed a solution to improve their understanding of these markets and to establish an entry plan.'
            ],
          },
          {
            title: isKoKR ? '솔루션' : 'Solution',
            content: isKoKR ? [
              '각국별 기업용 SaaS 업계 전문가 인터뷰를 통한 시장 현황 파악 : 각 국가별 5 명, 총 15명의 업계 주요 Player 출신 전문가와의 화상 Q&A 세션 및 출장 중 현지 대면미팅 진행 Arrange를 통해 현지 시장 동향에 대한 최신 정보 획득을 지원',
              '잠재적 고객 후보군 기업들의 CIO/CTO 대상 설문 조사 : 각 국가별 30 건(직원 수 500명 이하 기업 15 곳 / 500명 이상 기업 15 곳), 총 90건의 서면 설문 + 설문 결과를 바탕으로 한 Follow up 인터뷰 진행 Arrange를 통해 기존 제품군 선호도 및 고객사 베타 버전에 대한 품평 피드백 획득을 지원',
              '상기 시장 검토 프로젝트에서 참여한 전문가 중 국가별 1명이 현지 진출을 위한 본격적인 Operation에 기여할 Advisory Role로 고용되어 수개월간 참여',
            ] : [
              'We helped our corporate client better understand the market conditions by recruiting industry-leading experts from each country’s B2B SaaS industry. In total, we arranged videoconference Q&A sessions and on-site meetings with a total of 15 experts from the major players in each country’s industry (5 experts from each country’s) to help our client obtain the latest information on local market trends.',
              'We also executed a survey of CIO/CTOs of potential customer companies. In total, we conducted written surveys of 30 companies (15 with less than 500 employees and 15 with more than 500 employees) in each country’s, for a total of 90 surveys. Then, follow-up consultations were conducted based on the survey results to obtain detailed feedback on the preference for existing product offerings and beta versions of the client’s solutions.',
              'Among all experts who participated in this market research project, one expert from each country’s was selected and employed to an advisory role to contribute to the actual operation of local expansion of our corporate client for several months.'
            ],
          },
        ],
      },
    },
    {
      title: t('startup_clients'),
      description:
      isKoKR ? '임직원 50명 이상의 스타트업 등. 매년 100건 이상 프로젝트 수행' : 'Startups with more than 50 employees',
      score: '',
      unit: isKoKR ? '' : '',
      children: {
        title: isKoKR ? '프로젝트 케이스' : 'Project Case',
        descriptionTitle: isKoKR ? '서비스 수용도 조사: ' : 'Service Adoption Survey: ',
        descriptionContent: isKoKR ? '멤버십 데이터 분석 기반 부가 서비스 수용도 및 선진 사례 조사배경' : 'Discovering Adoption Trends and Best Practices of Value-Added Services That Are Based on Membership Data Analysis',
        content: [
          {
            title: isKoKR ? '배경' : 'Background',
            content: isKoKR ? [
              '고객사는 멤버십 데이터 분석을 기반으로 마케팅 서비스를 제공하는 스타트업으로 국내 각종 산업군 마케팅 부서들의 멤버십 데이터 분석 기반 마케팅 Tool 서비스 수용도 및 가격 민감도 조사 니즈가 발생하였음',
              '데이터 기반 부가 가치 서비스, 특히 국내외 Data-Driven Marketing 선진 사례 벤치마킹 필요성이 대두되었음',
            ] : [
              'Our client was a startup that provides marketing services based on membership data analysis, and they needed to survey the adoption and price sensitivity of marketing tool services that are based on membership data analysis for various industries‘s marketing departments in Korea.',
              'They also needed to do a benchmarking of best practices from industry leaders regarding data-based value-added services, especially regarding data-driven marketing, for both the domestic market and global market.'
            ],
          },
          {
            title: isKoKR ? '솔루션' : 'Solution',
            content: isKoKR ? [
              '고객과의 협의에 따라 데이터 기반 서비스 런칭 시 잠재적 고객이 될 수 있을 것으로 보이는 업체 리스트를 선정하여 해당 업체 출신의 마케터 섭외 후 전화, 서면 인터뷰를 동시에 진행 (총30개 기업 대상)',
              '멤버십 데이터를 활용한 부가 서비스 선진 사례 업체 출신 전문가 인터뷰를 통한 각 업체 별 운영 현황, Pain Point, 향후 방향성에 대한 조사 진행 (총 5명)'
            ] : [
              'After discussing with our client, we set a list of potential customers for our client’s launch of data-based services, and then recruited marketers from these companies for both videoconference consultations and written consultations. In total, we covered 30 companies.',
              'Additionally, we recruited multiple senior experts from companies that are major providers of value-added services based on membership data and arranged a total of 5 consultations with them for our client. Thanks to these consultations, our client was able to learn from the experts what is the operational status, pain points, and future directions of those major value-added services.'
            ],
          },
        ],
      },
    },
  ];

  return (
    <S.Coverage>
      <Container>
        <Inner>
          <S.Title>Client Coverage</S.Title>
          <S.Description style={{wordBreak: 'keep-all'}}>
            {t('service_dozen_of_consultations_1')}
          </S.Description>
        </Inner>
      </Container>
      <FullDropdownList dropdownItems={dropdownItems} />
    </S.Coverage>
  );
}

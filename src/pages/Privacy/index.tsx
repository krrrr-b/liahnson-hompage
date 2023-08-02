import S from 'pages/Compliance/style';
import { Container, Inner } from 'components/shared';
import i18n from "languages/i18n";

export default function Privacy(): ReturnType<React.FunctionComponent> {
  const isKoKR = i18n.language === "ko";

  const onClick = (e: React.MouseEvent) => {
    if ((e.ctrlKey || e.metaKey)) {
      window.open('/compliance-additional', '_blank');
      return;
    }
  };

  const koreanPrivacy = <><S.TitleWrapper><S.Title>개인정보 처리방침</S.Title></S.TitleWrapper><S.DescriptionWrapper>
    <S.Description>
      주식회사 이안손앤컴퍼니(이하 ‘회사’라 함)는 개인정보 보호법 제 30 조에 따라
      정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수
      있도록 하기 위해 최선을 다하고 있습니다.<br /><br />
      본 개인정보 처리방침에서 사용하는 용어의 의미는 관련 법령 및 회사의 이용약관에서
      정한 바에 따르며, 그 밖의 사항은 일반적인 상관례에 따릅니다.<br />
      <br />
      ※ 회사는 만 14 세 미만 아동의 개인정보는 수집하지 않습니다.
      <br /><br />
      <h4>제 1 조(개인정보의 처리 목적)</h4>
      <br />
      회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의
      목적 이외의 용도로는 이용되지 않으며 이용 목적이 변경되는 경우에는 개인정보 보호법
      제 18 조에 따라 별도의 동의를 받는 등 필요한 조치를 수행할 예정입니다.<br /><br />
      1. 전문가 가입 의사 확인, 전문가 자격 유지 및 관리 목적으로 개인정보를
      처리합니다.<br />
      2. 전문가 pool 및 클라이언트 등록, 전문가 서비스 이용, 전문가 서비스 상담
      목적으로 개인정보를 처리합니다.<br />
      3. 전문가 서비스 제공에 따른 자문료 과금 및 지급 목적으로 개인정보를
      처리합니다.<br />
      4. 법령 및 이용약관을 위반하는 회원에 대한 이용 제한 조치, 부정 이용 행위를
      포함하여 서비스의 원활한 운영에 지장을 주는 행위에 대한 방지 및 제재,
      계정도용 방지, 약관 개정 등의 고지사항 전달, 분쟁조정을 위한 기록 보존,
      고객 문의 처리 등 회원 보호 및 서비스 운영 목적으로 개인정보를
      처리합니다.<br /><br />

      <h4>제 2 조(개인정보의 처리 및 보유 기간)</h4>
      <br />
      회사는 원칙적으로 회원탈퇴 시 정보주체의 개인정보를 지체없이 파기하고 있으며,
      법령에 따른 개인정보의 보유 및 이용 기간 또는 정보주체로부터 개인정보를 수집 시에
      동의 받은 개인정보 보유 및 이용 기간 내에서 개인정보를 처리 및 보유합니다.<br /><br />
      각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.<br />
      <br />
      1. 전문가 서비스와 관련한 개인정보는 수집 및 이용에 관한 동의일로부터 회원
      탈퇴 시까지 보유 및 이용됩니다.<br /><br />
      단, 관계 법령 위반에 따른 수사·조사 등이 진행 중인 경우에는 해당 수사·조사
      종료 시까지 보유 및 이용됩니다.<br /><br />
      2. 내부 방침에 의한 부정 이용 방지를 위해 회원 탈퇴 후 1 년간 보관됩니다.<br />
      3. 관계 법령에 의한 보관<br />
      &nbsp;&nbsp;&nbsp;&nbsp;1) 계약 또는 청약철회 등에 관한 기록 : 5 년<br />
      &nbsp;&nbsp;&nbsp;&nbsp;2) 대금결제 및 재화 등의 공급에 관한 기록 : 5 년<br />
      &nbsp;&nbsp;&nbsp;&nbsp;3) 소비자의 불만 또는 분쟁처리에 관한 기록 : 3 년<br />
      &nbsp;&nbsp;&nbsp;&nbsp;4) 소득세법에 따른 과세에 관한 기록 : 5 년<br />
      <br />
      <h4>제 3 조(처리하는 개인정보의 항목)</h4><br />
      회사는 다음의 개인정보 항목을 처리하고 있습니다.<br /><br />
      ● 필수항목<br /><br />
      1. 전문가 pool 등록 시에는 이름, 이메일, 전화번호, 회사, 직책.<br />
      2. 클라이언트 등록 시에는 이름, 이메일, 전화번호, 회사명.<br />
      3. 고객센터를 통한 문의 시에는 이메일.<br />
      4. 서비스 이용 과정에서 IP 정보, 쿠키, 접속 로그, 서비스 이용 기록.<br />

      <br />
      <button onClick={e => { onClick(e); }}>별도 동의 후, 개인정보를 추가 수집하는 경우</button>
      <br />
      <br />
      <h4>제 4 조(개인정보의 제 3 자 제공에 관한 사항)</h4><br />
      회사는 개인정보를 제 1 조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며,
      정보주체의 동의, 법률의 특별한 규정 등 개인정보보호법 제 17 조 및 제 18 조에
      해당하는 경우에만 개인정보를 제 3 자에게 제공합니다.<br /><br />
      <h4>제 5 조(개인정보처리의 위탁에 관한 사항)</h4><br />
      1. 회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를
      위탁하고 있습니다.<br /><br />
      <table>
        <th>&nbsp;&nbsp;&nbsp;&nbsp;위탁받는 자&nbsp;&nbsp;&nbsp;&nbsp;</th>
        <th>위탁하는 업무 내용</th>
        <th>위탁기간</th>
        <tr>
          <td>Exlink</td>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;서비스 시스템, 인프라 개발 및 운영&nbsp;&nbsp;&nbsp;&nbsp;</td>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;회원 탈퇴 시 또는 위탁 계약 종료 시 까지&nbsp;&nbsp;&nbsp;&nbsp;</td>
        </tr>
      </table>
      <br />
      2. 회사는 회원의 개인정보를 국외의 다른 사업자에게 제공하지 않습니다. 다만,
      서비스 시스템 및 인프라의 운영과 데이터 보관 등을 위해 아래와 같이
      위탁하고 있습니다.<br /><br />
      <table>
        <th>&nbsp;&nbsp;&nbsp;&nbsp;위탁받는 자&nbsp;&nbsp;&nbsp;&nbsp;</th>
        <th>&nbsp;&nbsp;&nbsp;&nbsp;Exlink&nbsp;&nbsp;&nbsp;&nbsp;</th>
        <tr>
          <td>이전되는 개인정보 항목 </td>
          <td>회사에서 수집 및 보관하는 개인정보를 포함하는 데이터 일체</td>
        </tr>
        <tr>
          <td>개인정보가 이전되는 국가 </td>
          <td>영국</td>
        </tr>
        <tr>
          <td>개인정보 이전 일시 전문가</td>
          <td>전문가 pool, 클라이언트 등록 시점</td>
        </tr>
        <tr>
          <td>개인정보 이전 방법 </td>
          <td>암호화 된 채널을 이용한 원격지 전송</td>
        </tr>
        <tr>
          <td>개인정보를 이전 받는자의 성명 </td>
          <td>Exlink</td>
        </tr>
        <tr>
          <td>정보관리책임자 연락처 </td>
          <td><a href="mailto:privacy@exlink.in">privacy@exlink.in</a></td>
        </tr>
        <tr>
          <td>개인정보를 이전 받는자의 개인정보 이용목적  </td>
          <td>서비스 시스템 및 인프라 운영과 데이터 운영</td>
        </tr>
        <tr>
          <td>개인정보를 이전 받는자의 개인정보 보유 및 이용기간 </td>
          <td>본 개인정보 처리방침에 규정된 보관기간과 일치함</td>
        </tr>
      </table>
      <br />
      3. 회사는 위탁계약 체결 시 개인정보 보호법 제 26 조에 따라 위탁업무 수행목적
      외 개인정보 처리금지, 기술적·관리적 보호조치, 재위탁 제한, 수탁자에 대한
      관리·감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고,
      수탁자가 개인정보를 안전하게 처리하는지 감독하고 있습니다.<br /><br />
      4. 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본 개인정보
      처리방침을 통하여 공개하도록 하겠습니다.<br /><br />
      <h4>제 6 조(개인정보의 파기절차 및 파기방법)</h4><br />
      1. 회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게
      되었을 때에는 지체없이 해당 개인정보를 파기합니다.<br />
      2. 정보주체로부터 동의 받은 개인정보 보유기간이 경과하거나 처리목적이
      달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는
      경우에는 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관장소를
      달리하여 보존합니다.<br />
      3. 개인정보 파기의 절차 및 방법은 다음과 같습니다.<br />
      &nbsp;&nbsp;&nbsp;&nbsp;1) 파기절차<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;회사는 파기 사유가 발생한 개인정보를 선정하고, 회사의 개인정보
      보호책임자의 승인을 받아 개인정보를 파기합니다.<br />
      &nbsp;&nbsp;&nbsp;&nbsp;2) 파기방법<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기하며,
      전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을
      사용합니다.<br /><br />
      <h4>제 7 조(정보주체와 법정대리인의 권리·의무 및 그 행사방법에 관한 사항)</h4><br />
      1. 정보주체는 회사에 언제든지 개인정보 열람, 정정, 삭제, 처리정지 요구 등의
      권리를 행사할 수 있습니다.<br />
      2. 정보주체의 권리 행사는 회사에 대해 개인정보 보호법 시행령 제 41 조제 1 항에
      따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 회사는 이에
      대해 지체 없이 조치하겠습니다.<br />
      3. 정보주체의 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등
      대리인을 통하여 하실 수 있습니다. 이 경우 ‘개인정보 처리 방법에 관한
      고시(제 2020-7 호)’ 별지 제 11 호 서식에 따른 위임장을 제출하셔야 합니다.<br />
      4. 개인정보 열람 및 처리정지 요구는 개인정보 보호법 제 35 조 제 4 항, 제 37 조
      제 2 항에 의하여 정보주체의 권리가 제한될 수 있습니다.<br />
      5. 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로
      명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.<br />
      6. 회사는 정보주체 권리에 따른 열람의 요구, 정정, 삭제의 요구, 처리정지의 요구
      시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지 확인합니다.<br /><br />
      <h4>제 8 조(개인정보의 안전성 확보조치에 관한 사항)</h4><br />
      <h4>회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.</h4><br />
      1. 내부관리계획의 수립 및 시행<br />
      개인정보의 안전한 처리를 위하여 내부관리계획을 수립하고 시행하고 있습니다.<br />
      2. 개인정보 취급 직원의 최소화 및 교육<br />
      개인정보를 취급하는 직원을 지정하고 담당자를 한정시켜 최소화하여<br />
      개인정보를 관리하는 대책을 시행하고 있습니다.<br />
      3. 정기적인 자체 감사 실시<br />
      개인정보 취급 관련 안정성 확보를 위해 정기적으로 자체 감사를 실시하고
      있습니다.<br />
      4. 개인정보에 대한 접근 제한<br />
      개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부여, 변경, 말소를
      통하여 개인정보에 대한 접근통제를 위하여 필요한 조치를 하고 있으며
      침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있습니다.<br />
      5. 접속기록의 보관 및 위변조 방지<br />
      개인정보처리시스템에 접속한 기록을 최소 1 년 이상 보관 및 관리하고
      있습니다. 또한 접속기록이 위변조 및 도난, 분실되지 않도록 보안기능을
      사용하고 있습니다.<br />
      6. 개인정보의 암호화<br />
      이용자의 개인정보와 비밀번호는 암호화되어 저장 및 관리되고 있어, 본인만이
      알 수 있으며 중요한 데이터는 파일 및 전송 데이터를 암호화하거나 파일 잠금
      기능을 사용하는 등의 별도 보안기능을 사용하고 있습니다.<br />
      7. 해킹 등에 대비한 기술적 대책<br />
      회사는 해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 막이
      위하여 보안프로그램을 설치하고 주기적인 갱신 및 점검을 하며, 외부로부터
      접근이 통제된 구역에 시스템을 설치하고, 기술적·물리적으로 감시 및 차단하고
      있습니다.<br />
      8. 비인가자에 대한 출입 통제<br />
      개인정보를 보관하고 있는 물리적 보관 장소를 별도로 두고 이에 대해 출입통제
      절차를 수립 및 운영하고 있습니다.<br />
      9. 문서보안을 위한 잠금장치 사용<br />
      개인정보가 포함된 서류, 보조저장매체 등을 잠금장치가 있는 안전한 장소에
      보관하고 있습니다.<br /><br />
      <h4>제 9 조(개인정보를 자동으로 수집하는 장치의 설치·운영 및 그 거부에 관한 사항)</h4><br />
      1. 회사는 이용자에게 개별적인 서비스를 제공하기 위해 이용정보를 저장하고
      수시로 불러오는 `쿠키(cookie)`를 사용합니다.<br />
      2. 쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 컴퓨터
      브라우저에게 보내는 소량의 정보이며 이용자들의 PC 컴퓨터 내의 하드디스크에
      저장되기도 합니다.<br />
      &nbsp;&nbsp;&nbsp;&nbsp;1) 쿠키의 사용 목적 : 이용자가 방문한 웹 사이트들에 대한 방문 및 이용형태,
      보안접속 여부 등을 파악하여 이용자에게 최적화된 정보 제공을 위해
      사용됩니다.<br />
      &nbsp;&nbsp;&nbsp;&nbsp;2) 쿠키의 설치·운영 및 거부 : 웹 브라우저 상단의 도구&gt;인터넷 옵션&gt;개인정보
      메뉴의 옵션 설정을 통해 쿠키 저장을 거부할 수 있습니다.<br />
      &nbsp;&nbsp;&nbsp;&nbsp;3) 쿠키 저장을 거부할 경우 개별적인 서비스 이용에 어려움이 발생할 수
      있습니다.<br /><br />
      <h4>제 10 조(행태정보의 수집·이용·제공 및 거부 등에 관한 사항)</h4><br />
      1. 회사는 온라인 맞춤형 광고 등을 위한 행태정보를 수집·이용·제공하지 않습니다.<br /><br />
      <h4>제 11 조(추가적인 이용·제공 판단기준)</h4><br />
      회사는 개인정보 보호법 제 15 조 제 3 항 및 제 17 조 제 4 항에 따라 개인정보 보호법
      시행령 제 14 조의 2 에 따른 사항을 고려하여 정보주체의 동의 없이 개인정보를
      추가적으로 이용 및 제공할 수 있습니다.<br /><br />
      단, 회사는 위 내용에도 불구하고 제 1 조(개인정보의 처리 목적)에서 명시한 범위
      내에서만 처리하며, 개인정보를 추가적으로 이용 및 제공하지 않습니다.<br /><br />
      <h4>제 12 조 (개인정보 보호책임자에 관한 사항)</h4><br />
      1. 회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와
      관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보
      보호책임자를 지정하고 있습니다.<br /><br />
      &nbsp;&nbsp;&nbsp;&nbsp;● 개인정보 보호책임자<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◼ 성명 : 손영호<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◼ 직책 : 개인정보 보호책임자<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◼ 직급 : CEO<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◼ 연락처 : 02-6731-0701, <a href="mailto:contact@liahnson.com">contact@liahnson.com</a><br /><br />
      &nbsp;&nbsp;&nbsp;&nbsp;● 개인정보 보호 담당부서<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◼ 부서명 : 개인정보 보호 담당<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◼ 담당자 : 윤희석<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◼ 연락처 : 02-6731-0701, <a href="mailto:contact@liahnson.com">contact@liahnson.com</a><br /><br />
      2. 정보주체는 회사의 서비스 또는 사업을 이용하시면서 발생한 모든 개인정보
      보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및
      담당부서로 문의하실 수 있습니다. 회사는 정보주체의 문의에 대해 지체 없이
      답변 및 처리해드릴 것입니다.<br /><br />
      <h4>제 13 조(개인정보의 열람청구를 접수·처리하는 부서)</h4><br />
      정보주체는 ｢개인정보 보호법｣ 제 35 조에 따른 개인정보의 열람 청구를 아래의 부서에
      할 수 있습니다.<br />
      회사는 정보주체의 개인정보 열람청구가 신속하게 처리되도록 노력하겠습니다.<br /><br />
      &nbsp;&nbsp;&nbsp;&nbsp;● 개인정보 열람청구 접수 및 처리 부서<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◼ 부서명 : 개인정보 보호 담당<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◼ 담당자 : 윤희석<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;◼ 연락처 : 02-6731-0701, <a href="mailto:contact@liahnson.com">contact@liahnson.com</a><br /><br />
      <h4>제 16 조(정보주체의 권익침해에 대한 구제방법)</h4><br />
      정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회,
      한국인터넷진흥원 개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수
      있습니다. 이 밖에 기타 개인정보침해의 신고, 상담에 대하여는 아래의 기관에
      문의하시기 바랍니다.<br /><br />
      1. 개인정보분쟁조정위원회 : (국번없이) 1833-6972 (<a href="www.kopico.go.kr">www.kopico.go.kr</a>)<br />
      2. 개인정보침해신고센터 : (국번없이) 118 (<a href="privacy.kisa.or.kr">privacy.kisa.or.kr</a>)<br />
      3. 대검찰청 : (국번없이) 1301 (<a href="www.spo.go.kr">www.spo.go.kr</a>)<br />
      4. 경찰청 : (국번없이) 182 (<a href="ecrm.cyber.go.kr">ecrm.cyber.go.kr</a>)<br /><br />
      「개인정보보호법」제 35 조(개인정보의 열람), 제 36 조(개인정보의 정정·삭제),
      제 37 조(개인정보의 처리정지 등)의 규정에 의한 요구에 대 하여 공공기관의 장이 행한
      처분 또는 부작위로 인하여 권리 또는 이익의 침해를 받은 자는 행정심판법이 정하는
      바에 따라 행정심판을 청구할 수 있습니다.<br /><br />
      &nbsp;&nbsp;&nbsp;&nbsp;● 행정심판에 대해 자세한 사항은 중앙행정심판위원회(<a href="www.simpan.go.kr">www.simpan.go.kr</a>)
      홈페이지를 참고하시기 바랍니다.<br /><br />
      <h4>제 18 조(개인정보 처리방침 변경)</h4><br />
      1. 이 개인정보 처리방침은 2023 년 9 월 14 부터 적용됩니다.<br />
      2. 이전의 개인정보 처리방침은 아래에서 확인하실 수 있습니다.<br />
      <a href="">변경 전, 개인정보 처리방침 보기</a>
    </S.Description>
  </S.DescriptionWrapper></>

  const englishPrivacy = <><S.TitleWrapper><S.Title>Privacy Policy</S.Title></S.TitleWrapper><S.DescriptionWrapper>
    <S.Description>
      <h4>TERMS OF PRIVACY</h4>
      <br />
      Liahnson (the “Company”) is committed to maintaining robust privacy protections for our users.
      Our Privacy Policy (“Privacy Policy”) is designed to help you understand how we collect, use and
      safeguard the information you provide to us and to assist you in making informed decisions when
      using our Service.
      For purposes of this Agreement, “Service” refers to the Company’s service which can be accessed via
      our website at www.liahnson.com. The terms “we”, “us” and “our” refer to the Company.
      “You” refers to you, as a user of Service.
      “Projects” include consultation, survey and written works.
      “Clients” refers to the organizations that contract with the Company’s service.
      Site” refers to our website.
      By accepting our Privacy Policy, you consent to our collection, storage, use and disclosure of your
      Personal Information as described in this Privacy Policy.
    </S.Description>
    <S.Description>
      <h4>INFORMATION WE COLLECT</h4>
      <br />
      We collect “Non-Personal Information” and “Personal Information.”
      Non-Personal Information includes information that cannot be used to personally identify you, such as
      anonymous usage data, general demographic information we may collect, referring/exit pages and
      URLs, platform types, preferences you submit and preferences that are generated based on the data
      you submit and number of clicks.
      Personal Information includes name, contact details, expertise, professional profile, which you submit
      to us through the registration process at the Site or via email.
    </S.Description>
    <S.Description>
      <h4>INFORMATION COLLECTED VIA TECHNOLOGY</h4>
      <br />
      To activate the Service you do not need to submit any Personal Information other than your email
      address.
      To use the Service thereafter, you need to submit further Personal Information.
      In an effort to improve the quality of the Service, we track information provided to us by your browser
      or by our software application when you view or use the Service, such as the website you came from
      (known as the “referring URL”), the type of browser you use, the device from which you connected to
      the Service, the time and date of access, and other information that does not personally identify you.
      We track this information using cookies, or small text files which include an anonymous unique
      identifier.
      Cookies are sent to a user’s browser from our servers and are stored on the user’s computer hard
      drive. Sending a cookie to a user’s browser enables us to collect Non-Personal information about that
      user and keep a record of the user’s preferences when utilizing our services, both on an individual
      and aggregate basis.
    </S.Description>
    <S.Description>
      <h4>INFORMATION YOU PROVIDE US BY REGISTERING FOR AN ACCOUNT</h4>
      <br />
      In addition to the information provided automatically by your browser when you visit the Site, to
      become a subscriber to the Service you will need to create a personal profile.
      You can create a profile by registering with the Service and entering your Personal Information.
      By registering, you are authorizing us to collect, store and use your Personal Information in
      accordance with this Privacy Policy.
    </S.Description>
    <S.Description>
      <h4>HOW WE USE INFORMATION</h4>
      <br />
      Personal Information
      We use your information to facilitate and process your participation in Projects and to contact you
      about past, current and potential future Projects.
      In general, the Personal Information you provide to us is used to help us communicate with you and
      Clients.
      For example, we use Personal Information to contact users in response to questions, solicit feedback,
      provide technical support, and inform users about business offers, services provided by the Company,
      payment details for Projects.
      We may also disclose your Personal Information to Clients for on-going Projects or non-Clients third
      parties for the purpose of promoting our business.
      Non-Personal Information
      In general, we use Non-Personal Information to help us improve and customize the user experience.
      We also aggregate Non-Personal Information in order to track trends and analyze use patterns on the
      Site.
      This Privacy Policy does not limit in any way our use or disclosure of Non-Personal Information and
      we reserve the right to use and disclose such Non-Personal Information to our partners, advertisers
      and other third parties at our discretion.
      In the event we undergo a business transaction such as a merger, acquisition by another company, or
      sale of all or a portion of our assets, your Personal Information may be among the assets transferred.
      You acknowledge and consent that such transfers may occur and are permitted by this Privacy Policy,
      and that any acquirer of our assets may continue to process your Personal Information as set forth in
      this Privacy Policy.
      If our information practices change at any time in the future, we will post the policy changes to the Site
      so that you may opt out of the new information practices.
      We suggest that you check the Site periodically if you are concerned about how your information is
      used.
    </S.Description>
    <S.Description>
      <h4>HOW WE PROTECT INFORMATION</h4>
      <br />
      We implement security measures designed to protect your information from unauthorized access.
      Your account is protected by your account password and we urge you to take steps to keep your
      personal information safe by not disclosing your password and by logging out of your account after
      each use.
      We further protect your information from potential security breaches by implementing certain
      technological security measures including encryption, firewalls and secure socket layer technology.
      However, these measures do not guarantee that your information will not be accessed, disclosed,
      altered or destroyed by breach of such firewalls and secure server software.
      By using our Service, you acknowledge that you understand and agree to assume these risks.
    </S.Description>
    <S.Description>
      <h4>YOUR RIGHTS REGARDING THE USE OF YOUR PERSONAL INFORMATION</h4>
      <br />
      As a subscriber, you are required to update your professional profile and employment information,
      which you agree to be true and up to date.
      You may review the information you have provided and update such information at any time by
      logging on to your account on the Site or contact our employees via email.
      You have the right at any time to unsubscribe from our Service by emailing to privacy@liahnson.com.
      Unless agreed otherwise, subscribers who have unsubscribed may no longer use the Site or any of
      the Service provided by us.
      We will cease contacting users who have unsubscribed, but will retain their information for a
      reasonable period or as long as required by applicable legislation.
      You should also note that we may require retention of certain information to prevent fraud or for any
      legitimate purposes subject to any and all such retained information continuing to be subject to this
      Privacy Policy you have previously agreed to.
    </S.Description>
    <S.Description>
      <h4>LINKS TO OTHER WEBSITES</h4>
      <br />
      As part of the Service, we may provide links to or compatibility with other websites or applications.
      However, we are not responsible for the privacy practices employed by those websites or the
      information or content they contain.
      This Privacy Policy applies solely to information collected by us through the Site and the Service.
      Therefore, this Privacy Policy does not apply to your use of a third party website accessed by
      selecting a link on our Site or via our Service.
      To the extent that you access or use the Service through or on another website or application, then
      the privacy policy of that other website or application will apply to your access or use of that site or
      application.
      We encourage our users to read the privacy statements of other websites before proceeding to use
      them.
    </S.Description>
    <S.Description>
      <h4>CHANGES TO OUR PRIVACY POLICY</h4>
      <br />
      The Company reserves the right to change this policy and our Terms of Service at any time.
      We will notify you of significant changes to our Privacy Policy by sending a notice to the primary email
      address specified in your account or by placing a prominent notice on our site.
      Significant changes will go into effect 30 days following such notification.
      Non-material changes or clarifications will take effect immediately.
      You should periodically check the Site and this privacy page for updates.
    </S.Description>
    <S.Description>
      <h4>CONTACT US</h4>
      <br />
      If you have any questions regarding this Privacy Policy or the practices of this Site, please contact us
      by sending an email to privacy@liahnson.com
    </S.Description>
  </S.DescriptionWrapper></>;

  return (
    <S.Wrapper>
      <Container>
        <Inner>
          {isKoKR ? koreanPrivacy : englishPrivacy}
        </Inner>
      </Container>
    </S.Wrapper>
  );
}

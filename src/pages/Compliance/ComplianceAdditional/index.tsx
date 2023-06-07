import S from 'pages/Compliance/style';
import { Container, Inner } from 'components/shared';

export default function ComplianceAdditional(): ReturnType<React.FunctionComponent> {
    return (
        <S.Wrapper>
            <Container>
                <Inner>
                    <S.Description>
                        <h2>별도 동의 후 개인정보를 추가 수집하는 경우</h2><br />
                        <b>‘별도 동의 후 개인정보 추가 수집’</b>이란, <b>전문가 서비스를 이용하는 과정에서 전문가
                            pool 및 클라이언트 등록 시 수집하지 않았던 개인정보를 추가 수집할 경우 정보주체에
                            게 별도 고지하고 동의를 받는 경우</b>를 말합니다.
                        <br /><br />
                        <table>
                            <th>&nbsp;&nbsp;&nbsp;&nbsp;구분&nbsp;&nbsp;&nbsp;&nbsp;</th>
                            <th>&nbsp;&nbsp;&nbsp;&nbsp;추가 수집하는 개인정보 항목&nbsp;&nbsp;&nbsp;&nbsp;</th>
                            <tr>
                                <td>&nbsp;&nbsp;&nbsp;&nbsp;전문가 자문료 지급&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                <td>&nbsp;&nbsp;&nbsp;&nbsp;[필수] 이름(계좌주명), 은행명, 계좌번호, 연락처&nbsp;&nbsp;&nbsp;&nbsp;</td>
                            </tr>
                        </table>
                        <br />
                        <table>
                            <th>&nbsp;&nbsp;&nbsp;&nbsp;구분&nbsp;&nbsp;&nbsp;&nbsp;</th>
                            <th>&nbsp;&nbsp;&nbsp;&nbsp;추가 수집하는 고유식별정보 항목&nbsp;&nbsp;&nbsp;&nbsp;</th>
                            <tr>
                                <td>&nbsp;&nbsp;&nbsp;&nbsp;전문가 자문료 지급&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[필수] 주민등록번호&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                            </tr>
                        </table>
                        <b>※ 주민등록번호는 소득세법에 따른 거래사실과 관련한 과세신고를 위해 수집합니다</b>
                    </S.Description>
                </Inner>
            </Container>
        </S.Wrapper>
    );
}

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

  const koreanPrivacy = <S.DescriptionWrapper>
    <S.Description>
      <br />
      <h1>쿠키 정책</h1>
      <br />
      <h3>소개</h3>
      이 문서는 쿠키를 어떻게 사용하고 왜 사용하는지에 대해 알려줍니다. 또한 사용하는 쿠키와 웹 사이트에 쿠키를 배치하는 타사에 대한 일부 정보도 제공합니다.
      <br /><br />
      <h3>쿠키란 무엇인가요?</h3>
      쿠키는 장치에 저장되는 작은 텍스트 파일로, 우리가 제공하는 서비스를 개선하고 더 효율적으로 사용할 수 있게 합니다. 장치와 브라우저를 인식하고, 서비스 개선에 중요한 정보를 저장할 수 있도록 합니다.
      <br /><br />
      <h3>쿠키의 종류 </h3>
      세션 쿠키와 지속 쿠키<br />
      - 세션 쿠키는 웹사이트를 방문하는 동안 장치의 메모리에 일시적으로 저장되며, 브라우저를 닫으면 지워집니다.<br />
      - 지속 쿠키는 일정 기간 동안 저장되며, 기간은 쿠키마다 다릅니다. 세션 쿠키보다는 더 오래 지속되지만, 몇 개월 후에는 만료됩니다. 이를 통해 이전에 웹사이트나 비슷한 사이트를 방문한 적이 있는지 알 수 있습니다.<br />
      <br />
      1자 쿠키와 3자 쿠키<br />
      - 1자 쿠키는 웹사이트나 웹사이트의 하위 도메인에서 직접 설정됩니다.<br />
      - 3자 쿠키는 저희가 관리하지 않는 웹사이트, 우리의 하청업체 또는 기술 파트너가 설정하는 쿠키입니다.<br />
      <br />
      <h3>쿠키를 어떻게 사용하나요? </h3>
      웹사이트에서 로그인하는 옵션: 웹사이트에서 인증을 받아 로그인 세션을 유지하고 로그인 정보를 저장합니다. <br />
      탭 정보: 웹사이트의 탭 또는 특정 부분을 추적합니다. <br />
      지역별 콘텐츠: 지역에 맞는 콘텐츠를 제공하고 시간대 설정을 기록합니다. <br />
      언어 설정: 표시되는 콘텐츠의 언어를 선택하고 기억합니다. <br />
      기기 기능: 사용 중인 브라우저 기기에 따라 다양한 콘텐츠를 제공할 수 있는 기능입니다.<br />
      <br />
      <h3>어떤 쿠키를 사용하나요? </h3>
      <b>필수 쿠키</b><br />
      필수 쿠키 서비스 제공을 가능하게 하기 위해 필요한 경우 기기에 쿠키를 저장할 수 있습니다. 웹사이트와 웹 애플리케이션을 탐색하고 사용 가능한 모든 기능을 활용하는 데 필요합니다. 이러한 쿠키는 끌 수 없으며, 로그인, 양식 및 시간대 또는 언어와 같은 웹사이트의 기본 옵션에 대한 설정으로 설정됩니다.<br />
      <br />
      <b>분석 쿠키</b><br />
      분석 쿠키 이러한 쿠키는 웹사이트의 사용 가능한 옵션과의 상호작용 방식, 가장 많이 사용하는 부분, 그리고 서비스에 대한 상호작용 방식을 이해하는 데 도움을 줍니다. 이는 우리의 웹사이트 사용량 및 사용 시간에 대한 통계를 생성하여 웹사이트와 제공하는 서비스를 개선하는 데 도움이 됩니다.<br />
      <br />
      <b>기능성 쿠키</b><br />
      기능성 쿠키 이러한 쿠키는 웹사이트와 서비스의 기능을 개선하고 개인화하는 데 도움이 됩니다. 이는 쿠키 정책을 수락할 때 명시적으로 동의한 타사 제공업체가 설정할 수도 있습니다. 이러한 쿠키를 차단할 수 있지만, 그렇게 하면 웹사이트의 일부 기능이 원래의 목적대로 작동하지 않을 수 있습니다.<br />
      <br />
      <b>소셜 미디어 쿠키</b><br />
      소셜 미디어 쿠키 이러한 쿠키는 소셜 미디어 서비스를 위해 설정됩니다. 친구 및 네트워크와 함께 웹사이트의 일부를 소셜 미디어에 공유할 수 있게 해줍니다. 이는 일부 동작을 추적하여 귀하의 관심에 대한 프로필 작성에 도움을 줍니다.<br />
      <br />
      <b>타겟팅 또는 광고 쿠키</b><br />
      타겟팅 또는 광고 쿠키 이러한 쿠키는 귀하가 인터넷에서 브라우징하는 동안 귀하에게 관련성이 있거나 흥미로운 광고를 제공하기 위해 사용됩니다. 이는 대부분 타사가 웹사이트에서 해당 콘텐츠와 상호작용할 때 설정됩니다.<br />
      <br />
      <b>관심 기반 광고</b><br />
      관심 기반 광고 관심 기반 광고는 귀하의 관심과 선호도에 대한 정보 수집을 위해 쿠키를 사용합니다. 이는 귀하의 추론된 취향과 필요에 맞는 제품 및 서비스에 대한 제안을 보내기 위한 것입니다. 이러한 쿠키를 끄실 수 있지만, 그렇게 하면 여전히 링크와 온라인 광고를 받게 될 것이며, 특정하게 귀하에게 맞춤화되지는 않습니다.<br />
      <br />
      <b>쿠키 차단하는 방법</b><br />
      쿠키 차단하는 방법 쿠키 및 기타 추적 기술(픽셀 태그 등)의 배치를 중지하거나 제한할 수 있습니다. 이는 기기에서 차단하거나 삭제하고 브라우저의 기본 설정을 조정함으로써 수행할 수 있습니다. 이는 기기 및 브라우저에따라 달라질 수 있습니다. 아래 링크에서 가장 인기 있는 브라우저의 웹 브라우저 설정을 수정하는 방법에 대한안내를 참조하세요:<br />
      <br />
      Microsoft Edge <br />
      Internet Explorer <br />
      Mozilla Firefox <br />
      Google Chrome <br />
      Apple Safari <br />
      Opera <br />
      Netscape<br />
      <br />
      쿠키를 올바르게 브라우저에서 차단하면 웹사이트의 일부가 사용할 수 없거나 제대로 작동하지 않을 수 있습니다.<br />
      <br />
      <h3>타사 쿠키 및 타겟팅 광고 거부하는 방법</h3>
      타사 쿠키 및 타겟팅 광고 거부하는 방법 Google이 배치한 추적 분석을 거부하려면 이 양식을 사용하여 거부할수 있습니다. 이는 Google의 서비스를 사용하여 분석 데이터를 추적하는 모든 웹사이트에서 작동합니다.
      <br /><br />
      관심 기반 광고를 가능하게 하는 쿠키를 이해하고 책임 있게 관리하려면 Digital Advertising Alliance (DAA) 또는 Network Advertising Initiative (NAI) 웹사이트를 방문하는 것을 권장합니다. 자세한 내용은 <a href="https://youradchoices.com/">https://youradchoices.com/</a> 를 참조하세요. 귀사의 서비스에서 귀하에게 관심 기반 광고를 제공하는 많은 타사 서비스 제공업체가 Network Advertising Initiative (NAI)의 회원이거나 DAA의 온라인 행동 광고에 대한 자기 규제 프로그램 참여 업체입니다.<br />
      <br />
      <h3>이 정책의 변경사항</h3>
      이 정책의 변경사항 이 쿠키 정책은 변경될 수 있습니다. 변경사항이 있으면 웹사이트에 게시하고 최신 버전의 쿠키 정책을 확인할 수 있도록 합니다.
      <br /><br />
      <b>
        연락처<br />
        주식회사 이안손앤컴퍼니<br />
        전화번호: 02-6731-0701<br />
        이메일: <a href="mailto:contact@liahnson.com">contact@liahnson.com</a><br />
        주소: 서울 중구 청계천로 100 시그니처타워 서관 11층</b> <br /><br />
    </S.Description>
  </S.DescriptionWrapper>

  const englishPrivacy = <S.DescriptionWrapper>
    <S.Description>
      <br />
      <h1>Cookie Policy</h1>
      <br />
      <h3>Introduction</h3>
      This document will inform you about how and why we use cookies. We will also tell you
      which cookies we use and some information about third parties which also place cookies on
      our website.
      <br /><br />
      <h3>What is a cookie?</h3>
      Cookies are small text files that are stored on your device and which let us make your
      experience better and more efficient. They allow us to recognize your device and browser,
      and store information which we deem of importance for the improvement of our services.
      <br /><br />
      <h3>Types of cookies.</h3>
      <br />
      Session Cookies and Persistent Cookies<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Session cookies are stored temporarily on the memory of your devices while
      you are visiting the website and are erased once you close your browser.<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Persistent Cookies are stored for a predetermined amount of time, which
      varies from cookie to cookie. It is longer than the session cookies; however
      they also expire after some months. They aid us to understand whether you
      have previously visited our website or similar sites in the past.<br /><br />
      First Party and Third Party Cookies<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- First Party cookies are set directly by the website or by any of the subdomains
      of the website.<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Third Party cookies are set by websites not managed by us, such as our
      subprocessores or other technology partners.<br /><br />

      <h3>How do we use cookies?</h3>
      options for logging in that will authenticate you on the website, keep your login
      session active, and remember how you prefer to store your login information;<br />
      tabbed information that keeps track of the tab or specific part of the website you are
      looking at;<br />
      regional content to deliver material specific to a region and keep track of time zone
      settings;<br />
      language preferences to choose and remember the language in which material is
      shown;<br />
      the capability of the device to deliver various content depending on the browser
      device being used;<br /><br />

      <h3>What cookies do we use?</h3><br />
      Essential cookies<br />
      We may store cookies on your device if they are necessary to enable us to offer and provide
      our services. They are also required for you to navigate through the website and web
      application and benefit from all the available functions. These cookies cannot be switched
      off and are set for very basic options on the website, such as logging in, forms and set
      preferences such as timezone or languages.<br /><br />
      Analytical cookies<br />
      These cookies are placed to aid us in understanding how you interact with the available
      options on the website, which parts you use the most, and how you engage with our
      services. This helps us create statistics of usage and the amount of time you spend on the
      website. These statistics will ultimately help us to improve our website and any services we
      offer on it.<br /><br />
      Functional Cookies<br />
      These cookies are placed by us to help us to provide you with better functionality of the
      website and our services and to make them more personalized to you. They can also be
      placed by third-party providers you specifically consent to when you accept this cookie
      policy. You may block these cookies, but if you do, it may be that parts of the website do
      not function the way we intended.<br /><br />
      Social Media Cookies<br />
      These cookies are set for social media services. They enable you to share parts of the
      website on social media with friends and networks. These can track some of your actions
      which then helps to build up a profile of your interests.<br /><br />
      Targeting or Advertising Cookies<br />
      These cookies are used to serve you with advertisements that may be relevant or of interest
      to you when you are browsing on the internet. They are mostly placed by third parties
      whenever you interact with their content on our website.<br /><br />
      <h3>Interest-based ads</h3>
      Interest-Based Advertising – Cookies are also used to collect information about your
      interests and preferences for the purposes of what is called “interest-based advertising”. It is
      for companies to send you offers about products and services tailored to your inferred taste
      and needs. You may turn off these cookies; however, you may still receive advertisements,
      with the difference of these not being specifically tailored to you.<br /><br />
      <h3>How to block cookies.</h3>
      You may stop or restrict the placement of cookies and other tracking technologies, such as
      pixel tags. You do this by blocking them on your device or by removing them and adjusting
      preferences on your browser. This may vary from device to device and from browser to
      browser.
      Please see the links below for guidance on how to modify your web browser’s settings on
      the most popular browsers:<br /><br />
      <a href="https://allaboutcookies.org/how-to-clear-cookies-microsoft-edge">Microsoft Edge</a><br />
      <a href="https://allaboutcookies.org/how-to-clear-cookies-microsoft-edge">Internet Explorer</a><br />
      <a href="https://allaboutcookies.org/how-to-clear-cookies-firefox">Mozilla Firefox</a><br />
      <a href="https://allaboutcookies.org/how-to-clear-cookies-chrome">Google Chrome</a><br />
      <a href="https://allaboutcookies.org/how-to-clear-cookies-safari">Apple Safari</a><br />
      <a href="https://allaboutcookies.org/how-to-clear-cookies-opera">Opera</a><br />
      <a href="https://allaboutcookies.org/how-to-clear-cookies-netscape">Netscape</a><br /><br />
      Once you correctly block cookies on your browser, parts of the website may become
      unavailable to you or may otherwise not function properly.<br /><br />
      <h3>How to opt-out of third-party cookies and targeted ads.</h3>
      To opt out of tracking analytics placed by Google, you can opt out by using <a href="https://tools.google.com/dlpage/gaoptout/">this form</a>. This
      works for all websites that use Google’s services to track and gather analytics data.<br /><br />
      To understand and responsibly manage cookies that enable interested-based ads we
      strongly recommend that you go to the website of the <a href="https://digitaladvertisingalliance.org/">Digital Advertising Alliance (DAA)</a> or
      to the website of the <a href="https://thenai.org/">Network Advertising Initiative (NAI)</a>.<br /><br />
      To learn more, please visit <a href="https://youradchoices.com/">https://youradchoices.com/</a> . Many of our third-party service
      providers that serve interest-based advertisements to you across our services are members
      of the Network Advertising Initiative (NAI), or they follow the DAA’s Self-Regulatory
      Principles for Online Behavioral Advertising. You can choose to opt-out directly from these
      third parties by visiting their opt-out pages on the NAI website
      (<a href="https://optout.networkadvertising.org/?c=1">http://www.networkadvertising.org/choices/</a>) and DAA website
      (<a href="https://optout.aboutads.info/?c=2&lang=EN">http://www.aboutads.info/choices/</a>). However, please note that if you “opt-out” you will
      keep seeing links and online advertisements; however, they will not be specifically targeted
      to you or tailored to your interests.<br /><br />
      <h3>Changes to this Policy.</h3>
      More detail on how we and/or other companies use cookies is available at&nbsp;
      <a href="https://www.cookiesandyou.com/">www.cookiesandyou.com</a> .<br /><br />
      If you have any queries regarding this Cookie Policy please contact us, we will be happy to
      answer any questions you may have about this Cookie Policy.<br /><br />
      <h3>Contact Us</h3>
      Liahnson & Company, Inc.<br />
      Phone Number: +82-2-6731-0701<br />
      Email Address: <a href="mailto:contact@liahnson.com">contact@liahnson.com</a><br />
      HQ Address: 11F, West Building, 100, Cheonggyecheon-ro, Jung-gu, Seoul, Republic of
      Korea<br />
    </S.Description>
  </S.DescriptionWrapper>;

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

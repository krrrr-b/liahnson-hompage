export function initializeScreen() {
    const UserAgent = navigator.userAgent;
	const isMobile = UserAgent.match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null

    // console.log("isMobile: " + isMobile);

    const params = getUrlParams();
    const path = location.pathname.replace("/", "");
    const lang = params['lang'];

    let url = "";
    if (path !== "" && path !== undefined) {
        url += ("path=" + path);
    }

    if (lang !== "" && lang !== undefined) {
        url += (url != "" ? ("&lang=" + lang) : "lang=" + lang);
    }

    if (url !== "") {
        const redirectUrl = "?" + url;
        if (redirectUrl !== window.parent.location.search) {
            console.log(redirectUrl);
            // window.parent.location.href = 'http://www.liahnson.com/test.html' + redirectUrl;
        }
    }
    
    function getUrlParams() {     
        var params = {};  
        location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, 
            function(str, key, value) { 
                params[key] = value; 
            }
        );     
        return params; 
    }

    if (isMobile) {
        // 모바일의 경우 브라우저 크기를 조절하지 않는다
        return;
    }

    const innerWidth = window.innerWidth;

    let scale = 1;
    if (innerWidth <= "1024") {
        scale = 0.7;
    } else if (innerWidth <= "1240") {
        scale = 0.75;
    } else if (innerWidth <= "1480") {
        scale = 0.8;
    } else if (innerWidth <= "1700") {
        scale = 0.85;
    }

    document.body.style.zoom = scale;
}

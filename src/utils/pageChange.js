let currentUrl = "";
export function pageChange(langParam = "", pathParam = "") {
    const params = getUrlParams();
    const path = pathParam != "" ? pathParam.toLowerCase() : location.pathname.replace("/", "");
    const lang = langParam !== "" ? langParam : params['lang'];

    let url = "";
    if ((path !== "" && path !== "main") && path !== undefined) {
        url += path;
    }

    if (lang !== "" && lang !== undefined) {
        url += (url != "" ? ("&lang=" + lang) : "lang=" + lang);
    }

    if (url != "") {
        const redirectUrl = "?" + url;
        if (currentUrl != redirectUrl) {
            setCookie("page", redirectUrl, 1);
            window.parent.postMessage(redirectUrl, '*');
        }
        currentUrl = redirectUrl;
    } else if (url == "lang=ko") {
        const redirectUrl = "?" + url;
        if (currentUrl != redirectUrl) {
            setCookie("page", redirectUrl, 1);
            window.parent.postMessage(redirectUrl, '*');
        }
        currentUrl = redirectUrl;
    } else {
        currentUrl = "/";
        setCookie("page", "?", 1);
        window.parent.postMessage('/', '*');
    }

    function setCookie(cName, cValue, cDay) {
        // console.log(cValue);

        var expire = new Date();
        expire.setDate(expire.getDate() + cDay);
        var cookies = cName + '=' + escape(cValue) + '; path=/ '; // 한글 깨짐을 막기위해 escape(cValue)를 합니다.
        if (typeof cDay != 'undefined') cookies += ';expires=' + expire.toGMTString() + ';';
        document.cookie = cookies;
    }

    function getUrlParams() {
        var params = {};
        location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,
            function (str, key, value) {
                params[key] = value;
            }
        );
        return params;
    }
}
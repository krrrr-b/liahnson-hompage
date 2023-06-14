let currentUrl = "";
export function pageChange(langParam = "", pathParam = "") {
    const params = getUrlParams();
    const path = pathParam != "" ? pathParam.toLowerCase() : location.pathname.replace("/", "");
    const lang = langParam !== "" ? langParam : params['lang'];

    let url = "";
    if (path !== "" && path !== undefined) {
        url += ("path=" + path);
    }

    if (lang !== "" && lang !== undefined) {
        url += (url != "" ? ("&lang=" + lang) : "lang=" + lang);
    }

    if (url !== "") {
        const redirectUrl = "?" + url;
        if (currentUrl == redirectUrl) {
            return;
        }

        currentUrl = redirectUrl;
        console.log(redirectUrl);
        // window.parent.location.href = 'http://www.liahnson.com/test.html' + redirectUrl;
    } else {
        if (currentUrl == url) {
            return;
        }

        currentUrl = url;
        console.log(url);
        // window.parent.location.href = 'http://www.liahnson.com/test.html';
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
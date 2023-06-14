let currentUrl = "";
export function pageChange(langParam = "", pathParam = "") {
    const params = getUrlParams();
    const path = pathParam != "" ? pathParam.toLowerCase() : location.pathname.replace("/", "");
    const lang = langParam !== "" ? langParam : params['lang'];

    let url = "";
    if ((path !== "" && path !== "main") && path !== undefined) {
        url += ("path=" + path);
    }

    if (lang !== "" && lang !== undefined) {
        url += (url != "" ? ("&lang=" + lang) : "lang=" + lang);
    }

    if (url != "" && url != "lang=ko") {
        const redirectUrl = "?" + url;
        // console.log(redirectUrl);
        window.parent.location.href = '/test.html' + redirectUrl;
    } else {
        console.log(url);
        window.parent.location.href = "/";
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
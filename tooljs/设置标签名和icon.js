/*
 * @Descripttion: 
 * @Author: denghuawen3<denghuawen3@jd.com>
 * @Date: 2021-12-06 11:02:24
 */
const origin = document.querySelector('link[rel="icon"]');
if (origin) {
    origin.href="/baidu";
} else {
    const link = document.createElement('link');
    link.rel = "icon";
    link.href = "baidu.com";
    document.head.appendChild(link);
}
document.title = 'test';
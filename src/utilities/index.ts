import Cookies from 'js-cookie';

// Cookie Attributes
const cookieConfig: any = {
    expires: new Date(new Date().getTime() + 5 * 60 * 1000), // Set an expiration time (5mins)
    secure: true, // Require HTTPS connection for the cookie
    sameSite: 'strict', // Enforce same-site cookie policy (recent browser default: 'Lax')
    // httpOnly: true, // Make the cookie HTTP-onlycook to prevent client-side access
};

/** 
 * Sets Cookie with js-cookie library (https://github.com/js-cookie/js-cookie/tree/latest#readme)
 * sameSite: 'strict' = High security, cookies are sent only in same-site requests.
 * sameSite: 'lax' = Balanced security and user experience, cookies are sent in same-site GET requests and top-level navigations initiated by the user.
 * sameSite: 'none' = Cross-site cookies allowed, but requires HTTPS and should be used with caution for specific use cases like third-party integrations.
 * More config options found in documentation
 * @param cookieName Name of cookie to set
 * @param cookieValue Value of cookie to set 
*/
export const setCookie = async (cookieName: string, cookieValue: string) => {
    Cookies.set(cookieName, cookieValue, { ...cookieConfig });
};

/**
 * Removes the cookie with js-cookie library (https://github.com/js-cookie/js-cookie/tree/latest#readme)
 * Since setCookie func has config options, the SAME config options need to be used with the remove() func.
 * @param cookieName Name of cookie to remove
 */
export const removeCookie = (cookieName: string) => {
    Cookies.remove(cookieName, { ...cookieConfig });
};

/**
 * Retrieves a cookie's value.
 * @param cookieName Name of requested cookie.
 * @returns Value of cookie.
 */
export const getCookie = (cookieName: string) => {
    return Cookies.get(cookieName);
}
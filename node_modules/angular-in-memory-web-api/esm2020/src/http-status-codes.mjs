/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export const STATUS = {
    CONTINUE: 100,
    SWITCHING_PROTOCOLS: 101,
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NON_AUTHORITATIVE_INFORMATION: 203,
    NO_CONTENT: 204,
    RESET_CONTENT: 205,
    PARTIAL_CONTENT: 206,
    MULTIPLE_CHOICES: 300,
    MOVED_PERMANTENTLY: 301,
    FOUND: 302,
    SEE_OTHER: 303,
    NOT_MODIFIED: 304,
    USE_PROXY: 305,
    TEMPORARY_REDIRECT: 307,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    PAYMENT_REQUIRED: 402,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    NOT_ACCEPTABLE: 406,
    PROXY_AUTHENTICATION_REQUIRED: 407,
    REQUEST_TIMEOUT: 408,
    CONFLICT: 409,
    GONE: 410,
    LENGTH_REQUIRED: 411,
    PRECONDITION_FAILED: 412,
    PAYLOAD_TO_LARGE: 413,
    URI_TOO_LONG: 414,
    UNSUPPORTED_MEDIA_TYPE: 415,
    RANGE_NOT_SATISFIABLE: 416,
    EXPECTATION_FAILED: 417,
    IM_A_TEAPOT: 418,
    UPGRADE_REQUIRED: 426,
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
    HTTP_VERSION_NOT_SUPPORTED: 505,
    PROCESSING: 102,
    MULTI_STATUS: 207,
    IM_USED: 226,
    PERMANENT_REDIRECT: 308,
    UNPROCESSABLE_ENTRY: 422,
    LOCKED: 423,
    FAILED_DEPENDENCY: 424,
    PRECONDITION_REQUIRED: 428,
    TOO_MANY_REQUESTS: 429,
    REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
    UNAVAILABLE_FOR_LEGAL_REASONS: 451,
    VARIANT_ALSO_NEGOTIATES: 506,
    INSUFFICIENT_STORAGE: 507,
    NETWORK_AUTHENTICATION_REQUIRED: 511
};
export const STATUS_CODE_INFO = {
    '100': {
        'code': 100,
        'text': 'Continue',
        'description': '\"The initial part of a request has been received and has not yet been rejected by the server.\"',
        'spec_title': 'RFC7231#6.2.1',
        'spec_href': 'https://tools.ietf.org/html/rfc7231#section-6.2.1'
    },
    '101': {
        'code': 101,
        'text': 'Switching Protocols',
        'description': '\"The server understands and is willing to comply with the client\'s request, via the Upgrade header field, for a change in the application protocol being used on this connection.\"',
        'spec_title': 'RFC7231#6.2.2',
        'spec_href': 'https://tools.ietf.org/html/rfc7231#section-6.2.2'
    },
    '200': {
        'code': 200,
        'text': 'OK',
        'description': '\"The request has succeeded.\"',
        'spec_title': 'RFC7231#6.3.1',
        'spec_href': 'https://tools.ietf.org/html/rfc7231#section-6.3.1'
    },
    '201': {
        'code': 201,
        'text': 'Created',
        'description': '\"The request has been fulfilled and has resulted in one or more new resources being created.\"',
        'spec_title': 'RFC7231#6.3.2',
        'spec_href': 'https://tools.ietf.org/html/rfc7231#section-6.3.2'
    },
    '202': {
        'code': 202,
        'text': 'Accepted',
        'description': '\"The request has been accepted for processing, but the processing has not been completed.\"',
        'spec_title': 'RFC7231#6.3.3',
        'spec_href': 'https://tools.ietf.org/html/rfc7231#section-6.3.3'
    },
    '203': {
        'code': 203,
        'text': 'Non-Authoritative Information',
        'description': '\"The request was successful but the enclosed payload has been modified from that of the origin server\'s 200 (OK) response by a transforming proxy.\"',
        'spec_title': 'RFC7231#6.3.4',
        'spec_href': 'https://tools.ietf.org/html/rfc7231#section-6.3.4'
    },
    '204': {
        'code': 204,
        'text': 'No Content',
        'description': '\"The server has successfully fulfilled the request and that there is no additional content to send in the response payload body.\"',
        'spec_title': 'RFC7231#6.3.5',
        'spec_href': 'https://tools.ietf.org/html/rfc7231#section-6.3.5'
    },
    '205': {
        'code': 205,
        'text': 'Reset Content',
        'description': '\"The server has fulfilled the request and desires that the user agent reset the \"document view\", which caused the request to be sent, to its original state as received from the origin server.\"',
        'spec_title': 'RFC7231#6.3.6',
        'spec_href': 'https://tools.ietf.org/html/rfc7231#section-6.3.6'
    },
    '206': {
        'code': 206,
        'text': 'Partial Content',
        'description': '\"The server is successfully fulfilling a range request for the target resource by transferring one or more parts of the selected representation that correspond to the satisfiable ranges found in the requests\'s Range header field.\"',
        'spec_title': 'RFC7233#4.1',
        'spec_href': 'https://tools.ietf.org/html/rfc7233#section-4.1'
    },
    '300': {
        'code': 300,
        'text': 'Multiple Choices',
        'description': '\"The target resource has more than one representation, each with its own more specific identifier, and information about the alternatives is being provided so that the user (or user agent) can select a preferred representation by redirecting its request to one or more of those identifiers.\"',
        'spec_title': 'RFC7231#6.4.1',
        'spec_href': 'https://tools.ietf.org/html/rfc7231#section-6.4.1'
    },
    '301': {
        'code': 301,
        'text': 'Moved Permanently',
        'description': '\"The target resource has been assigned a new permanent URI and any future references to this resource ought to use one of the enclosed URIs.\"',
        'spec_title': 'RFC7231#6.4.2',
        'spec_href': 'https://tools.ietf.org/html/rfc7231#section-6.4.2'
    },
    '302': {
        'code': 302,
        'text': 'Found',
        'description': '\"The target resource resides temporarily under a different URI.\"',
        'spec_title': 'RFC7231#6.4.3',
        'spec_href': 'https://tools.ietf.org/html/rfc7231#section-6.4.3'
    },
    '303': {
        'code': 303,
        'text': 'See Other',
        'description': '\"The server is redirecting the user agent to a different resource, as indicated by a URI in the Location header field, that is intended to provide an indirect response to the original request.\"',
        'spec_title': 'RFC7231#6.4.4',
        'spec_href': 'https://tools.ietf.org/html/rfc7231#section-6.4.4'
    },
    '304': {
        'code': 304,
        'text': 'Not Modified',
        'description': '\"A conditional GET request has been received and would have resulted in a 200 (OK) response if it were not for the fact that the condition has evaluated to false.\"',
        'spec_title': 'RFC7232#4.1',
        'spec_href': 'https://tools.ietf.org/html/rfc7232#section-4.1'
    },
    '305': {
        'code': 305,
        'text': 'Use Proxy',
        'description': '*deprecated*',
        'spec_title': 'RFC7231#6.4.5',
        'spec_href': 'https://tools.ietf.org/html/rfc7231#section-6.4.5'
    },
    '307': {
        'code': 307,
        'text': 'Temporary Redirect',
        'description': '\"The target resource resides temporarily under a different URI and the user agent MUST NOT change the request method if it performs an automatic redirection to that URI.\"',
        'spec_title': 'RFC7231#6.4.7',
        'spec_href': 'https://tools.ietf.org/html/rfc7231#section-6.4.7'
    },
    '400': {
        'code': 400,
        'text': 'Bad Request',
        'description': '\"The server cannot or will not process the request because the received syntax is invalid, nonsensical, or exceeds some limitation on what the server is willing to process.\"',
        'spec_title': 'RFC7231#6.5.1',
        'spec_href': 'https://tools.ietf.org/html/rfc7231#section-6.5.1'
    },
    '401': {
        'code': 401,
        'text': 'Unauthorized',
        'description': '\"The request has not been applied because it lacks valid authentication credentials for the target resource.\"',
        'spec_title': 'RFC7235#6.3.1',
        'spec_href': 'https://tools.ietf.org/html/rfc7235#section-3.1'
    },
    '402': {
        'code': 402,
        'text': 'Payment Required',
        'description': '*reserved*',
        'spec_title': 'RFC7231#6.5.2',
        'spec_href': 'https://tools.ietf.org/html/rfc7231#section-6.5.2'
    },
    '403': {
        'code': 403,
        'text': 'Forbidden',
        'description': '\"The server understood the request but refuses to authorize it.\"',
        'spec_title': 'RFC7231#6.5.3',
        'spec_href': 'https://tools.ietf.org/html/rfc7231#section-6.5.3'
    },
    '404': {
        'code': 404,
        'text': 'Not Found',
        'description': '\"The origin server did not find a current representation for the target resource or is not willing to disclose that one exists.\"',
        'spec_title': 'RFC7231#6.5.4',
        'spec_href': 'https://tools.ietf.org/html/rfc7231#section-6.5.4'
    },
    '405': {
        'code': 405,
        'text': 'Method Not Allowed',
        'description': '\"The method specified in the request-line is known by the origin server but not supported by the target resource.\"',
        'spec_title': 'RFC7231#6.5.5',
        'spec_href': 'https://tools.ietf.org/html/rfc7231#section-6.5.5'
    },
    '406': {
        'code': 406,
        'text': 'Not Acceptable',
        'description': '\"The target resource does not have a current representation that would be acceptable to the user agent, according to the proactive negotiation header fields received in the request, and the server is unwilling to supply a default representation.\"',
        'spec_title': 'RFC7231#6.5.6',
        'spec_href': 'https://tools.ietf.org/html/rfc7231#section-6.5.6'
    },
    '407': {
        'code': 407,
        'text': 'Proxy Authentication Required',
        'description': '\"The client needs to authenticate itself in order to use a proxy.\"',
        'spec_title': 'RFC7231#6.3.2',
        'spec_href': 'https://tools.ietf.org/html/rfc7231#section-6.3.2'
    },
    '408': {
        'code': 408,
        'text': 'Request Timeout',
        'description': '\"The server did not receive a complete request message within the time that it was prepared to wait.\"',
        'spec_title': 'RFC7231#6.5.7',
        'spec_href': 'https://tools.ietf.org/html/rfc7231#section-6.5.7'
    },
    '409': {
        'code': 409,
        'text': 'Conflict',
        'description': '\"The request could not be completed due to a conflict with the current state of the resource.\"',
        'spec_title': 'RFC7231#6.5.8',
        'spec_href': 'https://tools.ietf.org/html/rfc7231#section-6.5.8'
    },
    '410': {
        'code': 410,
        'text': 'Gone',
        'description': '\"Access to the target resource is no longer available at the origin server and that this condition is likely to be permanent.\"',
        'spec_title': 'RFC7231#6.5.9',
        'spec_href': 'https://tools.ietf.org/html/rfc7231#section-6.5.9'
    },
    '411': {
        'code': 411,
        'text': 'Length Required',
        'description': '\"The server refuses to accept the request without a defined Content-Length.\"',
        'spec_title': 'RFC7231#6.5.10',
        'spec_href': 'https://tools.ietf.org/html/rfc7231#section-6.5.10'
    },
    '412': {
        'code': 412,
        'text': 'Precondition Failed',
        'description': '\"One or more preconditions given in the request header fields evaluated to false when tested on the server.\"',
        'spec_title': 'RFC7232#4.2',
        'spec_href': 'https://tools.ietf.org/html/rfc7232#section-4.2'
    },
    '413': {
        'code': 413,
        'text': 'Payload Too Large',
        'description': '\"The server is refusing to process a request because the request payload is larger than the server is willing or able to process.\"',
        'spec_title': 'RFC7231#6.5.11',
        'spec_href': 'https://tools.ietf.org/html/rfc7231#section-6.5.11'
    },
    '414': {
        'code': 414,
        'text': 'URI Too Long',
        'description': '\"The server is refusing to service the request because the request-target is longer than the server is willing to interpret.\"',
        'spec_title': 'RFC7231#6.5.12',
        'spec_href': 'https://tools.ietf.org/html/rfc7231#section-6.5.12'
    },
    '415': {
        'code': 415,
        'text': 'Unsupported Media Type',
        'description': '\"The origin server is refusing to service the request because the payload is in a format not supported by the target resource for this method.\"',
        'spec_title': 'RFC7231#6.5.13',
        'spec_href': 'https://tools.ietf.org/html/rfc7231#section-6.5.13'
    },
    '416': {
        'code': 416,
        'text': 'Range Not Satisfiable',
        'description': '\"None of the ranges in the request\'s Range header field overlap the current extent of the selected resource or that the set of ranges requested has been rejected due to invalid ranges or an excessive request of small or overlapping ranges.\"',
        'spec_title': 'RFC7233#4.4',
        'spec_href': 'https://tools.ietf.org/html/rfc7233#section-4.4'
    },
    '417': {
        'code': 417,
        'text': 'Expectation Failed',
        'description': '\"The expectation given in the request\'s Expect header field could not be met by at least one of the inbound servers.\"',
        'spec_title': 'RFC7231#6.5.14',
        'spec_href': 'https://tools.ietf.org/html/rfc7231#section-6.5.14'
    },
    '418': {
        'code': 418,
        'text': 'I\'m a teapot',
        'description': '\"1988 April Fools Joke. Returned by tea pots requested to brew coffee.\"',
        'spec_title': 'RFC 2324',
        'spec_href': 'https://tools.ietf.org/html/rfc2324'
    },
    '426': {
        'code': 426,
        'text': 'Upgrade Required',
        'description': '\"The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.\"',
        'spec_title': 'RFC7231#6.5.15',
        'spec_href': 'https://tools.ietf.org/html/rfc7231#section-6.5.15'
    },
    '500': {
        'code': 500,
        'text': 'Internal Server Error',
        'description': '\"The server encountered an unexpected condition that prevented it from fulfilling the request.\"',
        'spec_title': 'RFC7231#6.6.1',
        'spec_href': 'https://tools.ietf.org/html/rfc7231#section-6.6.1'
    },
    '501': {
        'code': 501,
        'text': 'Not Implemented',
        'description': '\"The server does not support the functionality required to fulfill the request.\"',
        'spec_title': 'RFC7231#6.6.2',
        'spec_href': 'https://tools.ietf.org/html/rfc7231#section-6.6.2'
    },
    '502': {
        'code': 502,
        'text': 'Bad Gateway',
        'description': '\"The server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while attempting to fulfill the request.\"',
        'spec_title': 'RFC7231#6.6.3',
        'spec_href': 'https://tools.ietf.org/html/rfc7231#section-6.6.3'
    },
    '503': {
        'code': 503,
        'text': 'Service Unavailable',
        'description': '\"The server is currently unable to handle the request due to a temporary overload or scheduled maintenance, which will likely be alleviated after some delay.\"',
        'spec_title': 'RFC7231#6.6.4',
        'spec_href': 'https://tools.ietf.org/html/rfc7231#section-6.6.4'
    },
    '504': {
        'code': 504,
        'text': 'Gateway Time-out',
        'description': '\"The server, while acting as a gateway or proxy, did not receive a timely response from an upstream server it needed to access in order to complete the request.\"',
        'spec_title': 'RFC7231#6.6.5',
        'spec_href': 'https://tools.ietf.org/html/rfc7231#section-6.6.5'
    },
    '505': {
        'code': 505,
        'text': 'HTTP Version Not Supported',
        'description': '\"The server does not support, or refuses to support, the protocol version that was used in the request message.\"',
        'spec_title': 'RFC7231#6.6.6',
        'spec_href': 'https://tools.ietf.org/html/rfc7231#section-6.6.6'
    },
    '102': {
        'code': 102,
        'text': 'Processing',
        'description': '\"An interim response to inform the client that the server has accepted the complete request, but has not yet completed it.\"',
        'spec_title': 'RFC5218#10.1',
        'spec_href': 'https://tools.ietf.org/html/rfc2518#section-10.1'
    },
    '207': {
        'code': 207,
        'text': 'Multi-Status',
        'description': '\"Status for multiple independent operations.\"',
        'spec_title': 'RFC5218#10.2',
        'spec_href': 'https://tools.ietf.org/html/rfc2518#section-10.2'
    },
    '226': {
        'code': 226,
        'text': 'IM Used',
        'description': '\"The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.\"',
        'spec_title': 'RFC3229#10.4.1',
        'spec_href': 'https://tools.ietf.org/html/rfc3229#section-10.4.1'
    },
    '308': {
        'code': 308,
        'text': 'Permanent Redirect',
        'description': '\"The target resource has been assigned a new permanent URI and any future references to this resource SHOULD use one of the returned URIs. [...] This status code is similar to 301 Moved Permanently (Section 7.3.2 of rfc7231), except that it does not allow rewriting the request method from POST to GET.\"',
        'spec_title': 'RFC7238',
        'spec_href': 'https://tools.ietf.org/html/rfc7238'
    },
    '422': {
        'code': 422,
        'text': 'Unprocessable Entity',
        'description': '\"The server understands the content type of the request entity (hence a 415(Unsupported Media Type) status code is inappropriate), and the syntax of the request entity is correct (thus a 400 (Bad Request) status code is inappropriate) but was unable to process the contained instructions.\"',
        'spec_title': 'RFC5218#10.3',
        'spec_href': 'https://tools.ietf.org/html/rfc2518#section-10.3'
    },
    '423': {
        'code': 423,
        'text': 'Locked',
        'description': '\"The source or destination resource of a method is locked.\"',
        'spec_title': 'RFC5218#10.4',
        'spec_href': 'https://tools.ietf.org/html/rfc2518#section-10.4'
    },
    '424': {
        'code': 424,
        'text': 'Failed Dependency',
        'description': '\"The method could not be performed on the resource because the requested action depended on another action and that action failed.\"',
        'spec_title': 'RFC5218#10.5',
        'spec_href': 'https://tools.ietf.org/html/rfc2518#section-10.5'
    },
    '428': {
        'code': 428,
        'text': 'Precondition Required',
        'description': '\"The origin server requires the request to be conditional.\"',
        'spec_title': 'RFC6585#3',
        'spec_href': 'https://tools.ietf.org/html/rfc6585#section-3'
    },
    '429': {
        'code': 429,
        'text': 'Too Many Requests',
        'description': '\"The user has sent too many requests in a given amount of time (\"rate limiting\").\"',
        'spec_title': 'RFC6585#4',
        'spec_href': 'https://tools.ietf.org/html/rfc6585#section-4'
    },
    '431': {
        'code': 431,
        'text': 'Request Header Fields Too Large',
        'description': '\"The server is unwilling to process the request because its header fields are too large.\"',
        'spec_title': 'RFC6585#5',
        'spec_href': 'https://tools.ietf.org/html/rfc6585#section-5'
    },
    '451': {
        'code': 451,
        'text': 'Unavailable For Legal Reasons',
        'description': '\"The server is denying access to the resource in response to a legal demand.\"',
        'spec_title': 'draft-ietf-httpbis-legally-restricted-status',
        'spec_href': 'https://tools.ietf.org/html/draft-ietf-httpbis-legally-restricted-status'
    },
    '506': {
        'code': 506,
        'text': 'Variant Also Negotiates',
        'description': '\"The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.\"',
        'spec_title': 'RFC2295#8.1',
        'spec_href': 'https://tools.ietf.org/html/rfc2295#section-8.1'
    },
    '507': {
        'code': 507,
        'text': 'Insufficient Storage',
        'description': '\The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.\"',
        'spec_title': 'RFC5218#10.6',
        'spec_href': 'https://tools.ietf.org/html/rfc2518#section-10.6'
    },
    '511': {
        'code': 511,
        'text': 'Network Authentication Required',
        'description': '\"The client needs to authenticate to gain network access.\"',
        'spec_title': 'RFC6585#6',
        'spec_href': 'https://tools.ietf.org/html/rfc6585#section-6'
    }
};
/**
 * get the status text from StatusCode
 */
export function getStatusText(code) {
    return STATUS_CODE_INFO[code + ''].text || 'Unknown Status';
}
/**
 * Returns true if the Http Status Code is 200-299 (success)
 */
export function isSuccess(status) {
    return status >= 200 && status < 300;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1zdGF0dXMtY29kZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9taXNjL2FuZ3VsYXItaW4tbWVtb3J5LXdlYi1hcGkvc3JjL2h0dHAtc3RhdHVzLWNvZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBRztJQUNwQixRQUFRLEVBQUUsR0FBRztJQUNiLG1CQUFtQixFQUFFLEdBQUc7SUFDeEIsRUFBRSxFQUFFLEdBQUc7SUFDUCxPQUFPLEVBQUUsR0FBRztJQUNaLFFBQVEsRUFBRSxHQUFHO0lBQ2IsNkJBQTZCLEVBQUUsR0FBRztJQUNsQyxVQUFVLEVBQUUsR0FBRztJQUNmLGFBQWEsRUFBRSxHQUFHO0lBQ2xCLGVBQWUsRUFBRSxHQUFHO0lBQ3BCLGdCQUFnQixFQUFFLEdBQUc7SUFDckIsa0JBQWtCLEVBQUUsR0FBRztJQUN2QixLQUFLLEVBQUUsR0FBRztJQUNWLFNBQVMsRUFBRSxHQUFHO0lBQ2QsWUFBWSxFQUFFLEdBQUc7SUFDakIsU0FBUyxFQUFFLEdBQUc7SUFDZCxrQkFBa0IsRUFBRSxHQUFHO0lBQ3ZCLFdBQVcsRUFBRSxHQUFHO0lBQ2hCLFlBQVksRUFBRSxHQUFHO0lBQ2pCLGdCQUFnQixFQUFFLEdBQUc7SUFDckIsU0FBUyxFQUFFLEdBQUc7SUFDZCxTQUFTLEVBQUUsR0FBRztJQUNkLGtCQUFrQixFQUFFLEdBQUc7SUFDdkIsY0FBYyxFQUFFLEdBQUc7SUFDbkIsNkJBQTZCLEVBQUUsR0FBRztJQUNsQyxlQUFlLEVBQUUsR0FBRztJQUNwQixRQUFRLEVBQUUsR0FBRztJQUNiLElBQUksRUFBRSxHQUFHO0lBQ1QsZUFBZSxFQUFFLEdBQUc7SUFDcEIsbUJBQW1CLEVBQUUsR0FBRztJQUN4QixnQkFBZ0IsRUFBRSxHQUFHO0lBQ3JCLFlBQVksRUFBRSxHQUFHO0lBQ2pCLHNCQUFzQixF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XG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuZXhwb3J0IGNvbnN0IFNUQVRVUyA9IHtcbiAgQ09OVElOVUU6IDEwMCxcbiAgU1dJVENISU5HX1BST1RPQ09MUzogMTAxLFxuICBPSzogMjAwLFxuICBDUkVBVEVEOiAyMDEsXG4gIEFDQ0VQVEVEOiAyMDIsXG4gIE5PTl9BVVRIT1JJVEFUSVZFX0lORk9STUFUSU9OOiAyMDMsXG4gIE5PX0NPTlRFTlQ6IDIwNCxcbiAgUkVTRVRfQ09OVEVOVDogMjA1LFxuICBQQVJUSUFMX0NPTlRFTlQ6IDIwNixcbiAgTVVMVElQTEVfQ0hPSUNFUzogMzAwLFxuICBNT1ZFRF9QRVJNQU5URU5UTFk6IDMwMSxcbiAgRk9VTkQ6IDMwMixcbiAgU0VFX09USEVSOiAzMDMsXG4gIE5PVF9NT0RJRklFRDogMzA0LFxuICBVU0VfUFJPWFk6IDMwNSxcbiAgVEVNUE9SQVJZX1JFRElSRUNUOiAzMDcsXG4gIEJBRF9SRVFVRVNUOiA0MDAsXG4gIFVOQVVUSE9SSVpFRDogNDAxLFxuICBQQVlNRU5UX1JFUVVJUkVEOiA0MDIsXG4gIEZPUkJJRERFTjogNDAzLFxuICBOT1RfRk9VTkQ6IDQwNCxcbiAgTUVUSE9EX05PVF9BTExPV0VEOiA0MDUsXG4gIE5PVF9BQ0NFUFRBQkxFOiA0MDYsXG4gIFBST1hZX0FVVEhFTlRJQ0FUSU9OX1JFUVVJUkVEOiA0MDcsXG4gIFJFUVVFU1RfVElNRU9VVDogNDA4LFxuICBDT05GTElDVDogNDA5LFxuICBHT05FOiA0MTAsXG4gIExFTkdUSF9SRVFVSVJFRDogNDExLFxuICBQUkVDT05ESVRJT05fRkFJTEVEOiA0MTIsXG4gIFBBWUxPQURfVE9fTEFSR0U6IDQxMyxcbiAgVVJJX1RPT19MT05HOiA0MTQsXG4gIFVOU1VQUE9SVEVEX01FRElBX1RZUEU6IDQxNSxcbiAgUkFOR0VfTk9UX1NBVElTRklBQkxFOiA0MTYsXG4gIEVYUEVDVEFUSU9OX0ZBSUxFRDogNDE3LFxuICBJTV9BX1RFQVBPVDogNDE4LFxuICBVUEdSQURFX1JFUVVJUkVEOiA0MjYsXG4gIElOVEVSTkFMX1NFUlZFUl9FUlJPUjogNTAwLFxuICBOT1RfSU1QTEVNRU5URUQ6IDUwMSxcbiAgQkFEX0dBVEVXQVk6IDUwMixcbiAgU0VSVklDRV9VTkFWQUlMQUJMRTogNTAzLFxuICBHQVRFV0FZX1RJTUVPVVQ6IDUwNCxcbiAgSFRUUF9WRVJTSU9OX05PVF9TVVBQT1JURUQ6IDUwNSxcbiAgUFJPQ0VTU0lORzogMTAyLFxuICBNVUxUSV9TVEFUVVM6IDIwNyxcbiAgSU1fVVNFRDogMjI2LFxuICBQRVJNQU5FTlRfUkVESVJFQ1Q6IDMwOCxcbiAgVU5QUk9DRVNTQUJMRV9FTlRSWTogNDIyLFxuICBMT0NLRUQ6IDQyMyxcbiAgRkFJTEVEX0RFUEVOREVOQ1k6IDQyNCxcbiAgUFJFQ09ORElUSU9OX1JFUVVJUkVEOiA0MjgsXG4gIFRPT19NQU5ZX1JFUVVFU1RTOiA0MjksXG4gIFJFUVVFU1RfSEVBREVSX0ZJRUxEU19UT09fTEFSR0U6IDQzMSxcbiAgVU5BVkFJTEFCTEVfRk9SX0xFR0FMX1JFQVNPTlM6IDQ1MSxcbiAgVkFSSUFOVF9BTFNPX05FR09USUFURVM6IDUwNixcbiAgSU5TVUZGSUNJRU5UX1NUT1JBR0U6IDUwNyxcbiAgTkVUV09SS19BVVRIRU5USUNBVElPTl9SRVFVSVJFRDogNTExXG59O1xuXG5leHBvcnQgY29uc3QgU1RBVFVTX0NPREVfSU5GTzoge1xuICBba2V5OiBzdHJpbmddOlxuICAgICAge2NvZGU6IG51bWJlcjsgdGV4dDogc3RyaW5nOyBkZXNjcmlwdGlvbjogc3RyaW5nOyBzcGVjX3RpdGxlOiBzdHJpbmc7IHNwZWNfaHJlZjogc3RyaW5nO31cbn0gPSB7XG4gICcxMDAnOiB7XG4gICAgJ2NvZGUnOiAxMDAsXG4gICAgJ3RleHQnOiAnQ29udGludWUnLFxuICAgICdkZXNjcmlwdGlvbic6XG4gICAgICAgICdcXFwiVGhlIGluaXRpYWwgcGFydCBvZiBhIHJlcXVlc3QgaGFzIGJlZW4gcmVjZWl2ZWQgYW5kIGhhcyBub3QgeWV0IGJlZW4gcmVqZWN0ZWQgYnkgdGhlIHNlcnZlci5cXFwiJyxcbiAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuMi4xJyxcbiAgICAnc3BlY19ocmVmJzogJ2h0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi4yLjEnXG4gIH0sXG4gICcxMDEnOiB7XG4gICAgJ2NvZGUnOiAxMDEsXG4gICAgJ3RleHQnOiAnU3dpdGNoaW5nIFByb3RvY29scycsXG4gICAgJ2Rlc2NyaXB0aW9uJzpcbiAgICAgICAgJ1xcXCJUaGUgc2VydmVyIHVuZGVyc3RhbmRzIGFuZCBpcyB3aWxsaW5nIHRvIGNvbXBseSB3aXRoIHRoZSBjbGllbnRcXCdzIHJlcXVlc3QsIHZpYSB0aGUgVXBncmFkZSBoZWFkZXIgZmllbGQsIGZvciBhIGNoYW5nZSBpbiB0aGUgYXBwbGljYXRpb24gcHJvdG9jb2wgYmVpbmcgdXNlZCBvbiB0aGlzIGNvbm5lY3Rpb24uXFxcIicsXG4gICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjIuMicsXG4gICAgJ3NwZWNfaHJlZic6ICdodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMi4yJ1xuICB9LFxuICAnMjAwJzoge1xuICAgICdjb2RlJzogMjAwLFxuICAgICd0ZXh0JzogJ09LJyxcbiAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSByZXF1ZXN0IGhhcyBzdWNjZWVkZWQuXFxcIicsXG4gICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjMuMScsXG4gICAgJ3NwZWNfaHJlZic6ICdodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMy4xJ1xuICB9LFxuICAnMjAxJzoge1xuICAgICdjb2RlJzogMjAxLFxuICAgICd0ZXh0JzogJ0NyZWF0ZWQnLFxuICAgICdkZXNjcmlwdGlvbic6XG4gICAgICAgICdcXFwiVGhlIHJlcXVlc3QgaGFzIGJlZW4gZnVsZmlsbGVkIGFuZCBoYXMgcmVzdWx0ZWQgaW4gb25lIG9yIG1vcmUgbmV3IHJlc291cmNlcyBiZWluZyBjcmVhdGVkLlxcXCInLFxuICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi4zLjInLFxuICAgICdzcGVjX2hyZWYnOiAnaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjMuMidcbiAgfSxcbiAgJzIwMic6IHtcbiAgICAnY29kZSc6IDIwMixcbiAgICAndGV4dCc6ICdBY2NlcHRlZCcsXG4gICAgJ2Rlc2NyaXB0aW9uJzpcbiAgICAgICAgJ1xcXCJUaGUgcmVxdWVzdCBoYXMgYmVlbiBhY2NlcHRlZCBmb3IgcHJvY2Vzc2luZywgYnV0IHRoZSBwcm9jZXNzaW5nIGhhcyBub3QgYmVlbiBjb21wbGV0ZWQuXFxcIicsXG4gICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjMuMycsXG4gICAgJ3NwZWNfaHJlZic6ICdodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMy4zJ1xuICB9LFxuICAnMjAzJzoge1xuICAgICdjb2RlJzogMjAzLFxuICAgICd0ZXh0JzogJ05vbi1BdXRob3JpdGF0aXZlIEluZm9ybWF0aW9uJyxcbiAgICAnZGVzY3JpcHRpb24nOlxuICAgICAgICAnXFxcIlRoZSByZXF1ZXN0IHdhcyBzdWNjZXNzZnVsIGJ1dCB0aGUgZW5jbG9zZWQgcGF5bG9hZCBoYXMgYmVlbiBtb2RpZmllZCBmcm9tIHRoYXQgb2YgdGhlIG9yaWdpbiBzZXJ2ZXJcXCdzIDIwMCAoT0spIHJlc3BvbnNlIGJ5IGEgdHJhbnNmb3JtaW5nIHByb3h5LlxcXCInLFxuICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi4zLjQnLFxuICAgICdzcGVjX2hyZWYnOiAnaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjMuNCdcbiAgfSxcbiAgJzIwNCc6IHtcbiAgICAnY29kZSc6IDIwNCxcbiAgICAndGV4dCc6ICdObyBDb250ZW50JyxcbiAgICAnZGVzY3JpcHRpb24nOlxuICAgICAgICAnXFxcIlRoZSBzZXJ2ZXIgaGFzIHN1Y2Nlc3NmdWxseSBmdWxmaWxsZWQgdGhlIHJlcXVlc3QgYW5kIHRoYXQgdGhlcmUgaXMgbm8gYWRkaXRpb25hbCBjb250ZW50IHRvIHNlbmQgaW4gdGhlIHJlc3BvbnNlIHBheWxvYWQgYm9keS5cXFwiJyxcbiAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuMy41JyxcbiAgICAnc3BlY19ocmVmJzogJ2h0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi4zLjUnXG4gIH0sXG4gICcyMDUnOiB7XG4gICAgJ2NvZGUnOiAyMDUsXG4gICAgJ3RleHQnOiAnUmVzZXQgQ29udGVudCcsXG4gICAgJ2Rlc2NyaXB0aW9uJzpcbiAgICAgICAgJ1xcXCJUaGUgc2VydmVyIGhhcyBmdWxmaWxsZWQgdGhlIHJlcXVlc3QgYW5kIGRlc2lyZXMgdGhhdCB0aGUgdXNlciBhZ2VudCByZXNldCB0aGUgXFxcImRvY3VtZW50IHZpZXdcXFwiLCB3aGljaCBjYXVzZWQgdGhlIHJlcXVlc3QgdG8gYmUgc2VudCwgdG8gaXRzIG9yaWdpbmFsIHN0YXRlIGFzIHJlY2VpdmVkIGZyb20gdGhlIG9yaWdpbiBzZXJ2ZXIuXFxcIicsXG4gICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjMuNicsXG4gICAgJ3NwZWNfaHJlZic6ICdodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMy42J1xuICB9LFxuICAnMjA2Jzoge1xuICAgICdjb2RlJzogMjA2LFxuICAgICd0ZXh0JzogJ1BhcnRpYWwgQ29udGVudCcsXG4gICAgJ2Rlc2NyaXB0aW9uJzpcbiAgICAgICAgJ1xcXCJUaGUgc2VydmVyIGlzIHN1Y2Nlc3NmdWxseSBmdWxmaWxsaW5nIGEgcmFuZ2UgcmVxdWVzdCBmb3IgdGhlIHRhcmdldCByZXNvdXJjZSBieSB0cmFuc2ZlcnJpbmcgb25lIG9yIG1vcmUgcGFydHMgb2YgdGhlIHNlbGVjdGVkIHJlcHJlc2VudGF0aW9uIHRoYXQgY29ycmVzcG9uZCB0byB0aGUgc2F0aXNmaWFibGUgcmFuZ2VzIGZvdW5kIGluIHRoZSByZXF1ZXN0c1xcJ3MgUmFuZ2UgaGVhZGVyIGZpZWxkLlxcXCInLFxuICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzMjNC4xJyxcbiAgICAnc3BlY19ocmVmJzogJ2h0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMzI3NlY3Rpb24tNC4xJ1xuICB9LFxuICAnMzAwJzoge1xuICAgICdjb2RlJzogMzAwLFxuICAgICd0ZXh0JzogJ011bHRpcGxlIENob2ljZXMnLFxuICAgICdkZXNjcmlwdGlvbic6XG4gICAgICAgICdcXFwiVGhlIHRhcmdldCByZXNvdXJjZSBoYXMgbW9yZSB0aGFuIG9uZSByZXByZXNlbnRhdGlvbiwgZWFjaCB3aXRoIGl0cyBvd24gbW9yZSBzcGVjaWZpYyBpZGVudGlmaWVyLCBhbmQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGFsdGVybmF0aXZlcyBpcyBiZWluZyBwcm92aWRlZCBzbyB0aGF0IHRoZSB1c2VyIChvciB1c2VyIGFnZW50KSBjYW4gc2VsZWN0IGEgcHJlZmVycmVkIHJlcHJlc2VudGF0aW9uIGJ5IHJlZGlyZWN0aW5nIGl0cyByZXF1ZXN0IHRvIG9uZSBvciBtb3JlIG9mIHRob3NlIGlkZW50aWZpZXJzLlxcXCInLFxuICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi40LjEnLFxuICAgICdzcGVjX2hyZWYnOiAnaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjQuMSdcbiAgfSxcbiAgJzMwMSc6IHtcbiAgICAnY29kZSc6IDMwMSxcbiAgICAndGV4dCc6ICdNb3ZlZCBQZXJtYW5lbnRseScsXG4gICAgJ2Rlc2NyaXB0aW9uJzpcbiAgICAgICAgJ1xcXCJUaGUgdGFyZ2V0IHJlc291cmNlIGhhcyBiZWVuIGFzc2lnbmVkIGEgbmV3IHBlcm1hbmVudCBVUkkgYW5kIGFueSBmdXR1cmUgcmVmZXJlbmNlcyB0byB0aGlzIHJlc291cmNlIG91Z2h0IHRvIHVzZSBvbmUgb2YgdGhlIGVuY2xvc2VkIFVSSXMuXFxcIicsXG4gICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjQuMicsXG4gICAgJ3NwZWNfaHJlZic6ICdodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNC4yJ1xuICB9LFxuICAnMzAyJzoge1xuICAgICdjb2RlJzogMzAyLFxuICAgICd0ZXh0JzogJ0ZvdW5kJyxcbiAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSB0YXJnZXQgcmVzb3VyY2UgcmVzaWRlcyB0ZW1wb3JhcmlseSB1bmRlciBhIGRpZmZlcmVudCBVUkkuXFxcIicsXG4gICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjQuMycsXG4gICAgJ3NwZWNfaHJlZic6ICdodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNC4zJ1xuICB9LFxuICAnMzAzJzoge1xuICAgICdjb2RlJzogMzAzLFxuICAgICd0ZXh0JzogJ1NlZSBPdGhlcicsXG4gICAgJ2Rlc2NyaXB0aW9uJzpcbiAgICAgICAgJ1xcXCJUaGUgc2VydmVyIGlzIHJlZGlyZWN0aW5nIHRoZSB1c2VyIGFnZW50IHRvIGEgZGlmZmVyZW50IHJlc291cmNlLCBhcyBpbmRpY2F0ZWQgYnkgYSBVUkkgaW4gdGhlIExvY2F0aW9uIGhlYWRlciBmaWVsZCwgdGhhdCBpcyBpbnRlbmRlZCB0byBwcm92aWRlIGFuIGluZGlyZWN0IHJlc3BvbnNlIHRvIHRoZSBvcmlnaW5hbCByZXF1ZXN0LlxcXCInLFxuICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi40LjQnLFxuICAgICdzcGVjX2hyZWYnOiAnaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjQuNCdcbiAgfSxcbiAgJzMwNCc6IHtcbiAgICAnY29kZSc6IDMwNCxcbiAgICAndGV4dCc6ICdOb3QgTW9kaWZpZWQnLFxuICAgICdkZXNjcmlwdGlvbic6XG4gICAgICAgICdcXFwiQSBjb25kaXRpb25hbCBHRVQgcmVxdWVzdCBoYXMgYmVlbiByZWNlaXZlZCBhbmQgd291bGQgaGF2ZSByZXN1bHRlZCBpbiBhIDIwMCAoT0spIHJlc3BvbnNlIGlmIGl0IHdlcmUgbm90IGZvciB0aGUgZmFjdCB0aGF0IHRoZSBjb25kaXRpb24gaGFzIGV2YWx1YXRlZCB0byBmYWxzZS5cXFwiJyxcbiAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMyIzQuMScsXG4gICAgJ3NwZWNfaHJlZic6ICdodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMiNzZWN0aW9uLTQuMSdcbiAgfSxcbiAgJzMwNSc6IHtcbiAgICAnY29kZSc6IDMwNSxcbiAgICAndGV4dCc6ICdVc2UgUHJveHknLFxuICAgICdkZXNjcmlwdGlvbic6ICcqZGVwcmVjYXRlZConLFxuICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi40LjUnLFxuICAgICdzcGVjX2hyZWYnOiAnaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjQuNSdcbiAgfSxcbiAgJzMwNyc6IHtcbiAgICAnY29kZSc6IDMwNyxcbiAgICAndGV4dCc6ICdUZW1wb3JhcnkgUmVkaXJlY3QnLFxuICAgICdkZXNjcmlwdGlvbic6XG4gICAgICAgICdcXFwiVGhlIHRhcmdldCByZXNvdXJjZSByZXNpZGVzIHRlbXBvcmFyaWx5IHVuZGVyIGEgZGlmZmVyZW50IFVSSSBhbmQgdGhlIHVzZXIgYWdlbnQgTVVTVCBOT1QgY2hhbmdlIHRoZSByZXF1ZXN0IG1ldGhvZCBpZiBpdCBwZXJmb3JtcyBhbiBhdXRvbWF0aWMgcmVkaXJlY3Rpb24gdG8gdGhhdCBVUkkuXFxcIicsXG4gICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjQuNycsXG4gICAgJ3NwZWNfaHJlZic6ICdodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNC43J1xuICB9LFxuICAnNDAwJzoge1xuICAgICdjb2RlJzogNDAwLFxuICAgICd0ZXh0JzogJ0JhZCBSZXF1ZXN0JyxcbiAgICAnZGVzY3JpcHRpb24nOlxuICAgICAgICAnXFxcIlRoZSBzZXJ2ZXIgY2Fubm90IG9yIHdpbGwgbm90IHByb2Nlc3MgdGhlIHJlcXVlc3QgYmVjYXVzZSB0aGUgcmVjZWl2ZWQgc3ludGF4IGlzIGludmFsaWQsIG5vbnNlbnNpY2FsLCBvciBleGNlZWRzIHNvbWUgbGltaXRhdGlvbiBvbiB3aGF0IHRoZSBzZXJ2ZXIgaXMgd2lsbGluZyB0byBwcm9jZXNzLlxcXCInLFxuICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjEnLFxuICAgICdzcGVjX2hyZWYnOiAnaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuMSdcbiAgfSxcbiAgJzQwMSc6IHtcbiAgICAnY29kZSc6IDQwMSxcbiAgICAndGV4dCc6ICdVbmF1dGhvcml6ZWQnLFxuICAgICdkZXNjcmlwdGlvbic6XG4gICAgICAgICdcXFwiVGhlIHJlcXVlc3QgaGFzIG5vdCBiZWVuIGFwcGxpZWQgYmVjYXVzZSBpdCBsYWNrcyB2YWxpZCBhdXRoZW50aWNhdGlvbiBjcmVkZW50aWFscyBmb3IgdGhlIHRhcmdldCByZXNvdXJjZS5cXFwiJyxcbiAgICAnc3BlY190aXRsZSc6ICdSRkM3MjM1IzYuMy4xJyxcbiAgICAnc3BlY19ocmVmJzogJ2h0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjM1I3NlY3Rpb24tMy4xJ1xuICB9LFxuICAnNDAyJzoge1xuICAgICdjb2RlJzogNDAyLFxuICAgICd0ZXh0JzogJ1BheW1lbnQgUmVxdWlyZWQnLFxuICAgICdkZXNjcmlwdGlvbic6ICcqcmVzZXJ2ZWQqJyxcbiAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS4yJyxcbiAgICAnc3BlY19ocmVmJzogJ2h0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjInXG4gIH0sXG4gICc0MDMnOiB7XG4gICAgJ2NvZGUnOiA0MDMsXG4gICAgJ3RleHQnOiAnRm9yYmlkZGVuJyxcbiAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgdW5kZXJzdG9vZCB0aGUgcmVxdWVzdCBidXQgcmVmdXNlcyB0byBhdXRob3JpemUgaXQuXFxcIicsXG4gICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuMycsXG4gICAgJ3NwZWNfaHJlZic6ICdodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS4zJ1xuICB9LFxuICAnNDA0Jzoge1xuICAgICdjb2RlJzogNDA0LFxuICAgICd0ZXh0JzogJ05vdCBGb3VuZCcsXG4gICAgJ2Rlc2NyaXB0aW9uJzpcbiAgICAgICAgJ1xcXCJUaGUgb3JpZ2luIHNlcnZlciBkaWQgbm90IGZpbmQgYSBjdXJyZW50IHJlcHJlc2VudGF0aW9uIGZvciB0aGUgdGFyZ2V0IHJlc291cmNlIG9yIGlzIG5vdCB3aWxsaW5nIHRvIGRpc2Nsb3NlIHRoYXQgb25lIGV4aXN0cy5cXFwiJyxcbiAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS40JyxcbiAgICAnc3BlY19ocmVmJzogJ2h0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjQnXG4gIH0sXG4gICc0MDUnOiB7XG4gICAgJ2NvZGUnOiA0MDUsXG4gICAgJ3RleHQnOiAnTWV0aG9kIE5vdCBBbGxvd2VkJyxcbiAgICAnZGVzY3JpcHRpb24nOlxuICAgICAgICAnXFxcIlRoZSBtZXRob2Qgc3BlY2lmaWVkIGluIHRoZSByZXF1ZXN0LWxpbmUgaXMga25vd24gYnkgdGhlIG9yaWdpbiBzZXJ2ZXIgYnV0IG5vdCBzdXBwb3J0ZWQgYnkgdGhlIHRhcmdldCByZXNvdXJjZS5cXFwiJyxcbiAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS41JyxcbiAgICAnc3BlY19ocmVmJzogJ2h0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjUnXG4gIH0sXG4gICc0MDYnOiB7XG4gICAgJ2NvZGUnOiA0MDYsXG4gICAgJ3RleHQnOiAnTm90IEFjY2VwdGFibGUnLFxuICAgICdkZXNjcmlwdGlvbic6XG4gICAgICAgICdcXFwiVGhlIHRhcmdldCByZXNvdXJjZSBkb2VzIG5vdCBoYXZlIGEgY3VycmVudCByZXByZXNlbnRhdGlvbiB0aGF0IHdvdWxkIGJlIGFjY2VwdGFibGUgdG8gdGhlIHVzZXIgYWdlbnQsIGFjY29yZGluZyB0byB0aGUgcHJvYWN0aXZlIG5lZ290aWF0aW9uIGhlYWRlciBmaWVsZHMgcmVjZWl2ZWQgaW4gdGhlIHJlcXVlc3QsIGFuZCB0aGUgc2VydmVyIGlzIHVud2lsbGluZyB0byBzdXBwbHkgYSBkZWZhdWx0IHJlcHJlc2VudGF0aW9uLlxcXCInLFxuICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjYnLFxuICAgICdzcGVjX2hyZWYnOiAnaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuNidcbiAgfSxcbiAgJzQwNyc6IHtcbiAgICAnY29kZSc6IDQwNyxcbiAgICAndGV4dCc6ICdQcm94eSBBdXRoZW50aWNhdGlvbiBSZXF1aXJlZCcsXG4gICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgY2xpZW50IG5lZWRzIHRvIGF1dGhlbnRpY2F0ZSBpdHNlbGYgaW4gb3JkZXIgdG8gdXNlIGEgcHJveHkuXFxcIicsXG4gICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjMuMicsXG4gICAgJ3NwZWNfaHJlZic6ICdodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMy4yJ1xuICB9LFxuICAnNDA4Jzoge1xuICAgICdjb2RlJzogNDA4LFxuICAgICd0ZXh0JzogJ1JlcXVlc3QgVGltZW91dCcsXG4gICAgJ2Rlc2NyaXB0aW9uJzpcbiAgICAgICAgJ1xcXCJUaGUgc2VydmVyIGRpZCBub3QgcmVjZWl2ZSBhIGNvbXBsZXRlIHJlcXVlc3QgbWVzc2FnZSB3aXRoaW4gdGhlIHRpbWUgdGhhdCBpdCB3YXMgcHJlcGFyZWQgdG8gd2FpdC5cXFwiJyxcbiAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS43JyxcbiAgICAnc3BlY19ocmVmJzogJ2h0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjcnXG4gIH0sXG4gICc0MDknOiB7XG4gICAgJ2NvZGUnOiA0MDksXG4gICAgJ3RleHQnOiAnQ29uZmxpY3QnLFxuICAgICdkZXNjcmlwdGlvbic6XG4gICAgICAgICdcXFwiVGhlIHJlcXVlc3QgY291bGQgbm90IGJlIGNvbXBsZXRlZCBkdWUgdG8gYSBjb25mbGljdCB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSByZXNvdXJjZS5cXFwiJyxcbiAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS44JyxcbiAgICAnc3BlY19ocmVmJzogJ2h0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjgnXG4gIH0sXG4gICc0MTAnOiB7XG4gICAgJ2NvZGUnOiA0MTAsXG4gICAgJ3RleHQnOiAnR29uZScsXG4gICAgJ2Rlc2NyaXB0aW9uJzpcbiAgICAgICAgJ1xcXCJBY2Nlc3MgdG8gdGhlIHRhcmdldCByZXNvdXJjZSBpcyBubyBsb25nZXIgYXZhaWxhYmxlIGF0IHRoZSBvcmlnaW4gc2VydmVyIGFuZCB0aGF0IHRoaXMgY29uZGl0aW9uIGlzIGxpa2VseSB0byBiZSBwZXJtYW5lbnQuXFxcIicsXG4gICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuOScsXG4gICAgJ3NwZWNfaHJlZic6ICdodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS45J1xuICB9LFxuICAnNDExJzoge1xuICAgICdjb2RlJzogNDExLFxuICAgICd0ZXh0JzogJ0xlbmd0aCBSZXF1aXJlZCcsXG4gICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIHJlZnVzZXMgdG8gYWNjZXB0IHRoZSByZXF1ZXN0IHdpdGhvdXQgYSBkZWZpbmVkIENvbnRlbnQtTGVuZ3RoLlxcXCInLFxuICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjEwJyxcbiAgICAnc3BlY19ocmVmJzogJ2h0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjEwJ1xuICB9LFxuICAnNDEyJzoge1xuICAgICdjb2RlJzogNDEyLFxuICAgICd0ZXh0JzogJ1ByZWNvbmRpdGlvbiBGYWlsZWQnLFxuICAgICdkZXNjcmlwdGlvbic6XG4gICAgICAgICdcXFwiT25lIG9yIG1vcmUgcHJlY29uZGl0aW9ucyBnaXZlbiBpbiB0aGUgcmVxdWVzdCBoZWFkZXIgZmllbGRzIGV2YWx1YXRlZCB0byBmYWxzZSB3aGVuIHRlc3RlZCBvbiB0aGUgc2VydmVyLlxcXCInLFxuICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzIjNC4yJyxcbiAgICAnc3BlY19ocmVmJzogJ2h0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMyI3NlY3Rpb24tNC4yJ1xuICB9LFxuICAnNDEzJzoge1xuICAgICdjb2RlJzogNDEzLFxuICAgICd0ZXh0JzogJ1BheWxvYWQgVG9vIExhcmdlJyxcbiAgICAnZGVzY3JpcHRpb24nOlxuICAgICAgICAnXFxcIlRoZSBzZXJ2ZXIgaXMgcmVmdXNpbmcgdG8gcHJvY2VzcyBhIHJlcXVlc3QgYmVjYXVzZSB0aGUgcmVxdWVzdCBwYXlsb2FkIGlzIGxhcmdlciB0aGFuIHRoZSBzZXJ2ZXIgaXMgd2lsbGluZyBvciBhYmxlIHRvIHByb2Nlc3MuXFxcIicsXG4gICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuMTEnLFxuICAgICdzcGVjX2hyZWYnOiAnaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuMTEnXG4gIH0sXG4gICc0MTQnOiB7XG4gICAgJ2NvZGUnOiA0MTQsXG4gICAgJ3RleHQnOiAnVVJJIFRvbyBMb25nJyxcbiAgICAnZGVzY3JpcHRpb24nOlxuICAgICAgICAnXFxcIlRoZSBzZXJ2ZXIgaXMgcmVmdXNpbmcgdG8gc2VydmljZSB0aGUgcmVxdWVzdCBiZWNhdXNlIHRoZSByZXF1ZXN0LXRhcmdldCBpcyBsb25nZXIgdGhhbiB0aGUgc2VydmVyIGlzIHdpbGxpbmcgdG8gaW50ZXJwcmV0LlxcXCInLFxuICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjEyJyxcbiAgICAnc3BlY19ocmVmJzogJ2h0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjEyJ1xuICB9LFxuICAnNDE1Jzoge1xuICAgICdjb2RlJzogNDE1LFxuICAgICd0ZXh0JzogJ1Vuc3VwcG9ydGVkIE1lZGlhIFR5cGUnLFxuICAgICdkZXNjcmlwdGlvbic6XG4gICAgICAgICdcXFwiVGhlIG9yaWdpbiBzZXJ2ZXIgaXMgcmVmdXNpbmcgdG8gc2VydmljZSB0aGUgcmVxdWVzdCBiZWNhdXNlIHRoZSBwYXlsb2FkIGlzIGluIGEgZm9ybWF0IG5vdCBzdXBwb3J0ZWQgYnkgdGhlIHRhcmdldCByZXNvdXJjZSBmb3IgdGhpcyBtZXRob2QuXFxcIicsXG4gICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuMTMnLFxuICAgICdzcGVjX2hyZWYnOiAnaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuMTMnXG4gIH0sXG4gICc0MTYnOiB7XG4gICAgJ2NvZGUnOiA0MTYsXG4gICAgJ3RleHQnOiAnUmFuZ2UgTm90IFNhdGlzZmlhYmxlJyxcbiAgICAnZGVzY3JpcHRpb24nOlxuICAgICAgICAnXFxcIk5vbmUgb2YgdGhlIHJhbmdlcyBpbiB0aGUgcmVxdWVzdFxcJ3MgUmFuZ2UgaGVhZGVyIGZpZWxkIG92ZXJsYXAgdGhlIGN1cnJlbnQgZXh0ZW50IG9mIHRoZSBzZWxlY3RlZCByZXNvdXJjZSBvciB0aGF0IHRoZSBzZXQgb2YgcmFuZ2VzIHJlcXVlc3RlZCBoYXMgYmVlbiByZWplY3RlZCBkdWUgdG8gaW52YWxpZCByYW5nZXMgb3IgYW4gZXhjZXNzaXZlIHJlcXVlc3Qgb2Ygc21hbGwgb3Igb3ZlcmxhcHBpbmcgcmFuZ2VzLlxcXCInLFxuICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzMjNC40JyxcbiAgICAnc3BlY19ocmVmJzogJ2h0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMzI3NlY3Rpb24tNC40J1xuICB9LFxuICAnNDE3Jzoge1xuICAgICdjb2RlJzogNDE3LFxuICAgICd0ZXh0JzogJ0V4cGVjdGF0aW9uIEZhaWxlZCcsXG4gICAgJ2Rlc2NyaXB0aW9uJzpcbiAgICAgICAgJ1xcXCJUaGUgZXhwZWN0YXRpb24gZ2l2ZW4gaW4gdGhlIHJlcXVlc3RcXCdzIEV4cGVjdCBoZWFkZXIgZmllbGQgY291bGQgbm90IGJlIG1ldCBieSBhdCBsZWFzdCBvbmUgb2YgdGhlIGluYm91bmQgc2VydmVycy5cXFwiJyxcbiAgICAnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS4xNCcsXG4gICAgJ3NwZWNfaHJlZic6ICdodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS4xNCdcbiAgfSxcbiAgJzQxOCc6IHtcbiAgICAnY29kZSc6IDQxOCxcbiAgICAndGV4dCc6ICdJXFwnbSBhIHRlYXBvdCcsXG4gICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCIxOTg4IEFwcmlsIEZvb2xzIEpva2UuIFJldHVybmVkIGJ5IHRlYSBwb3RzIHJlcXVlc3RlZCB0byBicmV3IGNvZmZlZS5cXFwiJyxcbiAgICAnc3BlY190aXRsZSc6ICdSRkMgMjMyNCcsXG4gICAgJ3NwZWNfaHJlZic6ICdodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMjMyNCdcbiAgfSxcbiAgJzQyNic6IHtcbiAgICAnY29kZSc6IDQyNixcbiAgICAndGV4dCc6ICdVcGdyYWRlIFJlcXVpcmVkJyxcbiAgICAnZGVzY3JpcHRpb24nOlxuICAgICAgICAnXFxcIlRoZSBzZXJ2ZXIgcmVmdXNlcyB0byBwZXJmb3JtIHRoZSByZXF1ZXN0IHVzaW5nIHRoZSBjdXJyZW50IHByb3RvY29sIGJ1dCBtaWdodCBiZSB3aWxsaW5nIHRvIGRvIHNvIGFmdGVyIHRoZSBjbGllbnQgdXBncmFkZXMgdG8gYSBkaWZmZXJlbnQgcHJvdG9jb2wuXFxcIicsXG4gICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuMTUnLFxuICAgICdzcGVjX2hyZWYnOiAnaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuMTUnXG4gIH0sXG4gICc1MDAnOiB7XG4gICAgJ2NvZGUnOiA1MDAsXG4gICAgJ3RleHQnOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJyxcbiAgICAnZGVzY3JpcHRpb24nOlxuICAgICAgICAnXFxcIlRoZSBzZXJ2ZXIgZW5jb3VudGVyZWQgYW4gdW5leHBlY3RlZCBjb25kaXRpb24gdGhhdCBwcmV2ZW50ZWQgaXQgZnJvbSBmdWxmaWxsaW5nIHRoZSByZXF1ZXN0LlxcXCInLFxuICAgICdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi42LjEnLFxuICAgICdzcGVjX2hyZWYnOiAnaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjYuMSdcbiAgfSxcbiAgJzUwMSc6IHtcbiAgICAnY29kZSc6IDUwMSxcbiAgICAndGV4dCc6ICdOb3QgSW1wbGVtZW50ZWQnLFxuICAgICdkZXNjcmlwdGlvbic6XG4gICAgICAgICdcXFwiVGhlIHNlcnZlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSBmdW5jdGlvbmFsaXR5IHJlcXVpcmVkIHRvIGZ1bGZpbGwgdGhlIHJlcXVlc3QuXFxcIicsXG4gICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjYuMicsXG4gICAgJ3NwZWNfaHJlZic6ICdodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNi4yJ1xuICB9LFxuICAnNTAyJzoge1xuICAgICdjb2RlJzogNTAyLFxuICAgICd0ZXh0JzogJ0JhZCBHYXRld2F5JyxcbiAgICAnZGVzY3JpcHRpb24nOlxuICAgICAgICAnXFxcIlRoZSBzZXJ2ZXIsIHdoaWxlIGFjdGluZyBhcyBhIGdhdGV3YXkgb3IgcHJveHksIHJlY2VpdmVkIGFuIGludmFsaWQgcmVzcG9uc2UgZnJvbSBhbiBpbmJvdW5kIHNlcnZlciBpdCBhY2Nlc3NlZCB3aGlsZSBhdHRlbXB0aW5nIHRvIGZ1bGZpbGwgdGhlIHJlcXVlc3QuXFxcIicsXG4gICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjYuMycsXG4gICAgJ3NwZWNfaHJlZic6ICdodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNi4zJ1xuICB9LFxuICAnNTAzJzoge1xuICAgICdjb2RlJzogNTAzLFxuICAgICd0ZXh0JzogJ1NlcnZpY2UgVW5hdmFpbGFibGUnLFxuICAgICdkZXNjcmlwdGlvbic6XG4gICAgICAgICdcXFwiVGhlIHNlcnZlciBpcyBjdXJyZW50bHkgdW5hYmxlIHRvIGhhbmRsZSB0aGUgcmVxdWVzdCBkdWUgdG8gYSB0ZW1wb3Jhcnkgb3ZlcmxvYWQgb3Igc2NoZWR1bGVkIG1haW50ZW5hbmNlLCB3aGljaCB3aWxsIGxpa2VseSBiZSBhbGxldmlhdGVkIGFmdGVyIHNvbWUgZGVsYXkuXFxcIicsXG4gICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjYuNCcsXG4gICAgJ3NwZWNfaHJlZic6ICdodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNi40J1xuICB9LFxuICAnNTA0Jzoge1xuICAgICdjb2RlJzogNTA0LFxuICAgICd0ZXh0JzogJ0dhdGV3YXkgVGltZS1vdXQnLFxuICAgICdkZXNjcmlwdGlvbic6XG4gICAgICAgICdcXFwiVGhlIHNlcnZlciwgd2hpbGUgYWN0aW5nIGFzIGEgZ2F0ZXdheSBvciBwcm94eSwgZGlkIG5vdCByZWNlaXZlIGEgdGltZWx5IHJlc3BvbnNlIGZyb20gYW4gdXBzdHJlYW0gc2VydmVyIGl0IG5lZWRlZCB0byBhY2Nlc3MgaW4gb3JkZXIgdG8gY29tcGxldGUgdGhlIHJlcXVlc3QuXFxcIicsXG4gICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjYuNScsXG4gICAgJ3NwZWNfaHJlZic6ICdodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNi41J1xuICB9LFxuICAnNTA1Jzoge1xuICAgICdjb2RlJzogNTA1LFxuICAgICd0ZXh0JzogJ0hUVFAgVmVyc2lvbiBOb3QgU3VwcG9ydGVkJyxcbiAgICAnZGVzY3JpcHRpb24nOlxuICAgICAgICAnXFxcIlRoZSBzZXJ2ZXIgZG9lcyBub3Qgc3VwcG9ydCwgb3IgcmVmdXNlcyB0byBzdXBwb3J0LCB0aGUgcHJvdG9jb2wgdmVyc2lvbiB0aGF0IHdhcyB1c2VkIGluIHRoZSByZXF1ZXN0IG1lc3NhZ2UuXFxcIicsXG4gICAgJ3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjYuNicsXG4gICAgJ3NwZWNfaHJlZic6ICdodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNi42J1xuICB9LFxuICAnMTAyJzoge1xuICAgICdjb2RlJzogMTAyLFxuICAgICd0ZXh0JzogJ1Byb2Nlc3NpbmcnLFxuICAgICdkZXNjcmlwdGlvbic6XG4gICAgICAgICdcXFwiQW4gaW50ZXJpbSByZXNwb25zZSB0byBpbmZvcm0gdGhlIGNsaWVudCB0aGF0IHRoZSBzZXJ2ZXIgaGFzIGFjY2VwdGVkIHRoZSBjb21wbGV0ZSByZXF1ZXN0LCBidXQgaGFzIG5vdCB5ZXQgY29tcGxldGVkIGl0LlxcXCInLFxuICAgICdzcGVjX3RpdGxlJzogJ1JGQzUyMTgjMTAuMScsXG4gICAgJ3NwZWNfaHJlZic6ICdodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMjUxOCNzZWN0aW9uLTEwLjEnXG4gIH0sXG4gICcyMDcnOiB7XG4gICAgJ2NvZGUnOiAyMDcsXG4gICAgJ3RleHQnOiAnTXVsdGktU3RhdHVzJyxcbiAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlN0YXR1cyBmb3IgbXVsdGlwbGUgaW5kZXBlbmRlbnQgb3BlcmF0aW9ucy5cXFwiJyxcbiAgICAnc3BlY190aXRsZSc6ICdSRkM1MjE4IzEwLjInLFxuICAgICdzcGVjX2hyZWYnOiAnaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzI1MTgjc2VjdGlvbi0xMC4yJ1xuICB9LFxuICAnMjI2JzpcbiAgICAgIHtcbiAgICAgICAgJ2NvZGUnOiAyMjYsXG4gICAgICAgICd0ZXh0JzogJ0lNIFVzZWQnLFxuICAgICAgICAnZGVzY3JpcHRpb24nOlxuICAgICAgICAgICAgJ1xcXCJUaGUgc2VydmVyIGhhcyBmdWxmaWxsZWQgYSBHRVQgcmVxdWVzdCBmb3IgdGhlIHJlc291cmNlLCBhbmQgdGhlIHJlc3BvbnNlIGlzIGEgcmVwcmVzZW50YXRpb24gb2YgdGhlIHJlc3VsdCBvZiBvbmUgb3IgbW9yZSBpbnN0YW5jZS1tYW5pcHVsYXRpb25zIGFwcGxpZWQgdG8gdGhlIGN1cnJlbnQgaW5zdGFuY2UuXFxcIicsXG4gICAgICAgICdzcGVjX3RpdGxlJzogJ1JGQzMyMjkjMTAuNC4xJyxcbiAgICAgICAgJ3NwZWNfaHJlZic6ICdodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzIyOSNzZWN0aW9uLTEwLjQuMSdcbiAgICAgIH0sXG4gICczMDgnOiB7XG4gICAgJ2NvZGUnOiAzMDgsXG4gICAgJ3RleHQnOiAnUGVybWFuZW50IFJlZGlyZWN0JyxcbiAgICAnZGVzY3JpcHRpb24nOlxuICAgICAgICAnXFxcIlRoZSB0YXJnZXQgcmVzb3VyY2UgaGFzIGJlZW4gYXNzaWduZWQgYSBuZXcgcGVybWFuZW50IFVSSSBhbmQgYW55IGZ1dHVyZSByZWZlcmVuY2VzIHRvIHRoaXMgcmVzb3VyY2UgU0hPVUxEIHVzZSBvbmUgb2YgdGhlIHJldHVybmVkIFVSSXMuIFsuLi5dIFRoaXMgc3RhdHVzIGNvZGUgaXMgc2ltaWxhciB0byAzMDEgTW92ZWQgUGVybWFuZW50bHkgKFNlY3Rpb24gNy4zLjIgb2YgcmZjNzIzMSksIGV4Y2VwdCB0aGF0IGl0IGRvZXMgbm90IGFsbG93IHJld3JpdGluZyB0aGUgcmVxdWVzdCBtZXRob2QgZnJvbSBQT1NUIHRvIEdFVC5cXFwiJyxcbiAgICAnc3BlY190aXRsZSc6ICdSRkM3MjM4JyxcbiAgICAnc3BlY19ocmVmJzogJ2h0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjM4J1xuICB9LFxuICAnNDIyJzoge1xuICAgICdjb2RlJzogNDIyLFxuICAgICd0ZXh0JzogJ1VucHJvY2Vzc2FibGUgRW50aXR5JyxcbiAgICAnZGVzY3JpcHRpb24nOlxuICAgICAgICAnXFxcIlRoZSBzZXJ2ZXIgdW5kZXJzdGFuZHMgdGhlIGNvbnRlbnQgdHlwZSBvZiB0aGUgcmVxdWVzdCBlbnRpdHkgKGhlbmNlIGEgNDE1KFVuc3VwcG9ydGVkIE1lZGlhIFR5cGUpIHN0YXR1cyBjb2RlIGlzIGluYXBwcm9wcmlhdGUpLCBhbmQgdGhlIHN5bnRheCBvZiB0aGUgcmVxdWVzdCBlbnRpdHkgaXMgY29ycmVjdCAodGh1cyBhIDQwMCAoQmFkIFJlcXVlc3QpIHN0YXR1cyBjb2RlIGlzIGluYXBwcm9wcmlhdGUpIGJ1dCB3YXMgdW5hYmxlIHRvIHByb2Nlc3MgdGhlIGNvbnRhaW5lZCBpbnN0cnVjdGlvbnMuXFxcIicsXG4gICAgJ3NwZWNfdGl0bGUnOiAnUkZDNTIxOCMxMC4zJyxcbiAgICAnc3BlY19ocmVmJzogJ2h0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyNTE4I3NlY3Rpb24tMTAuMydcbiAgfSxcbiAgJzQyMyc6IHtcbiAgICAnY29kZSc6IDQyMyxcbiAgICAndGV4dCc6ICdMb2NrZWQnLFxuICAgICdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNvdXJjZSBvciBkZXN0aW5hdGlvbiByZXNvdXJjZSBvZiBhIG1ldGhvZCBpcyBsb2NrZWQuXFxcIicsXG4gICAgJ3NwZWNfdGl0bGUnOiAnUkZDNTIxOCMxMC40JyxcbiAgICAnc3BlY19ocmVmJzogJ2h0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyNTE4I3NlY3Rpb24tMTAuNCdcbiAgfSxcbiAgJzQyNCc6IHtcbiAgICAnY29kZSc6IDQyNCxcbiAgICAndGV4dCc6ICdGYWlsZWQgRGVwZW5kZW5jeScsXG4gICAgJ2Rlc2NyaXB0aW9uJzpcbiAgICAgICAgJ1xcXCJUaGUgbWV0aG9kIGNvdWxkIG5vdCBiZSBwZXJmb3JtZWQgb24gdGhlIHJlc291cmNlIGJlY2F1c2UgdGhlIHJlcXVlc3RlZCBhY3Rpb24gZGVwZW5kZWQgb24gYW5vdGhlciBhY3Rpb24gYW5kIHRoYXQgYWN0aW9uIGZhaWxlZC5cXFwiJyxcbiAgICAnc3BlY190aXRsZSc6ICdSRkM1MjE4IzEwLjUnLFxuICAgICdzcGVjX2hyZWYnOiAnaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzI1MTgjc2VjdGlvbi0xMC41J1xuICB9LFxuICAnNDI4Jzoge1xuICAgICdjb2RlJzogNDI4LFxuICAgICd0ZXh0JzogJ1ByZWNvbmRpdGlvbiBSZXF1aXJlZCcsXG4gICAgJ2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgb3JpZ2luIHNlcnZlciByZXF1aXJlcyB0aGUgcmVxdWVzdCB0byBiZSBjb25kaXRpb25hbC5cXFwiJyxcbiAgICAnc3BlY190aXRsZSc6ICdSRkM2NTg1IzMnLFxuICAgICdzcGVjX2hyZWYnOiAnaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzY1ODUjc2VjdGlvbi0zJ1xuICB9LFxuICAnNDI5Jzoge1xuICAgICdjb2RlJzogNDI5LFxuICAgICd0ZXh0JzogJ1RvbyBNYW55IFJlcXVlc3RzJyxcbiAgICAnZGVzY3JpcHRpb24nOlxuICAgICAgICAnXFxcIlRoZSB1c2VyIGhhcyBzZW50IHRvbyBtYW55IHJlcXVlc3RzIGluIGEgZ2l2ZW4gYW1vdW50IG9mIHRpbWUgKFxcXCJyYXRlIGxpbWl0aW5nXFxcIikuXFxcIicsXG4gICAgJ3NwZWNfdGl0bGUnOiAnUkZDNjU4NSM0JyxcbiAgICAnc3BlY19ocmVmJzogJ2h0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2NTg1I3NlY3Rpb24tNCdcbiAgfSxcbiAgJzQzMSc6IHtcbiAgICAnY29kZSc6IDQzMSxcbiAgICAndGV4dCc6ICdSZXF1ZXN0IEhlYWRlciBGaWVsZHMgVG9vIExhcmdlJyxcbiAgICAnZGVzY3JpcHRpb24nOlxuICAgICAgICAnXFxcIlRoZSBzZXJ2ZXIgaXMgdW53aWxsaW5nIHRvIHByb2Nlc3MgdGhlIHJlcXVlc3QgYmVjYXVzZSBpdHMgaGVhZGVyIGZpZWxkcyBhcmUgdG9vIGxhcmdlLlxcXCInLFxuICAgICdzcGVjX3RpdGxlJzogJ1JGQzY1ODUjNScsXG4gICAgJ3NwZWNfaHJlZic6ICdodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNjU4NSNzZWN0aW9uLTUnXG4gIH0sXG4gICc0NTEnOiB7XG4gICAgJ2NvZGUnOiA0NTEsXG4gICAgJ3RleHQnOiAnVW5hdmFpbGFibGUgRm9yIExlZ2FsIFJlYXNvbnMnLFxuICAgICdkZXNjcmlwdGlvbic6XG4gICAgICAgICdcXFwiVGhlIHNlcnZlciBpcyBkZW55aW5nIGFjY2VzcyB0byB0aGUgcmVzb3VyY2UgaW4gcmVzcG9uc2UgdG8gYSBsZWdhbCBkZW1hbmQuXFxcIicsXG4gICAgJ3NwZWNfdGl0bGUnOiAnZHJhZnQtaWV0Zi1odHRwYmlzLWxlZ2FsbHktcmVzdHJpY3RlZC1zdGF0dXMnLFxuICAgICdzcGVjX2hyZWYnOiAnaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL2RyYWZ0LWlldGYtaHR0cGJpcy1sZWdhbGx5LXJlc3RyaWN0ZWQtc3RhdHVzJ1xuICB9LFxuICAnNTA2Jzoge1xuICAgICdjb2RlJzogNTA2LFxuICAgICd0ZXh0JzogJ1ZhcmlhbnQgQWxzbyBOZWdvdGlhdGVzJyxcbiAgICAnZGVzY3JpcHRpb24nOlxuICAgICAgICAnXFxcIlRoZSBzZXJ2ZXIgaGFzIGFuIGludGVybmFsIGNvbmZpZ3VyYXRpb24gZXJyb3I6IHRoZSBjaG9zZW4gdmFyaWFudCByZXNvdXJjZSBpcyBjb25maWd1cmVkIHRvIGVuZ2FnZSBpbiB0cmFuc3BhcmVudCBjb250ZW50IG5lZ290aWF0aW9uIGl0c2VsZiwgYW5kIGlzIHRoZXJlZm9yZSBub3QgYSBwcm9wZXIgZW5kIHBvaW50IGluIHRoZSBuZWdvdGlhdGlvbiBwcm9jZXNzLlxcXCInLFxuICAgICdzcGVjX3RpdGxlJzogJ1JGQzIyOTUjOC4xJyxcbiAgICAnc3BlY19ocmVmJzogJ2h0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyMjk1I3NlY3Rpb24tOC4xJ1xuICB9LFxuICAnNTA3Jzoge1xuICAgICdjb2RlJzogNTA3LFxuICAgICd0ZXh0JzogJ0luc3VmZmljaWVudCBTdG9yYWdlJyxcbiAgICAnZGVzY3JpcHRpb24nOlxuICAgICAgICAnXFxUaGUgbWV0aG9kIGNvdWxkIG5vdCBiZSBwZXJmb3JtZWQgb24gdGhlIHJlc291cmNlIGJlY2F1c2UgdGhlIHNlcnZlciBpcyB1bmFibGUgdG8gc3RvcmUgdGhlIHJlcHJlc2VudGF0aW9uIG5lZWRlZCB0byBzdWNjZXNzZnVsbHkgY29tcGxldGUgdGhlIHJlcXVlc3QuXFxcIicsXG4gICAgJ3NwZWNfdGl0bGUnOiAnUkZDNTIxOCMxMC42JyxcbiAgICAnc3BlY19ocmVmJzogJ2h0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyNTE4I3NlY3Rpb24tMTAuNidcbiAgfSxcbiAgJzUxMSc6IHtcbiAgICAnY29kZSc6IDUxMSxcbiAgICAndGV4dCc6ICdOZXR3b3JrIEF1dGhlbnRpY2F0aW9uIFJlcXVpcmVkJyxcbiAgICAnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBjbGllbnQgbmVlZHMgdG8gYXV0aGVudGljYXRlIHRvIGdhaW4gbmV0d29yayBhY2Nlc3MuXFxcIicsXG4gICAgJ3NwZWNfdGl0bGUnOiAnUkZDNjU4NSM2JyxcbiAgICAnc3BlY19ocmVmJzogJ2h0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2NTg1I3NlY3Rpb24tNidcbiAgfVxufTtcblxuLyoqXG4gKiBnZXQgdGhlIHN0YXR1cyB0ZXh0IGZyb20gU3RhdHVzQ29kZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhdHVzVGV4dChjb2RlOiBudW1iZXIpIHtcbiAgcmV0dXJuIFNUQVRVU19DT0RFX0lORk9bY29kZSArICcnXS50ZXh0IHx8ICdVbmtub3duIFN0YXR1cyc7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBIdHRwIFN0YXR1cyBDb2RlIGlzIDIwMC0yOTkgKHN1Y2Nlc3MpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1N1Y2Nlc3Moc3RhdHVzOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xufVxuIl19